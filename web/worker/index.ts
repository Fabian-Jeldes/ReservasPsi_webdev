/**
 * Worker del sitio (psandrei.com). Los assets estáticos los sirve Cloudflare directamente;
 * este código solo corre para /ingest/* (ver `run_worker_first` en wrangler.jsonc):
 * reverse proxy de PostHog (región US) en el mismo dominio, endurecido contra abuso.
 */
type Env = {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
}

const POSTHOG_API_HOST = 'us.i.posthog.com'
const POSTHOG_ASSETS_HOST = 'us-assets.i.posthog.com'
const PROXY_PREFIX = '/ingest'
const ALLOWED_METHODS = new Set(['GET', 'HEAD', 'POST', 'OPTIONS'])
const MAX_POST_BYTES = 2 * 1024 * 1024 // 2 MB: holgado para eventos y replay de PostHog

function isSameOriginHeader(value: string | null, expectedOrigin: string): boolean {
  if (!value) return false
  try {
    return new URL(value).origin === expectedOrigin
  } catch {
    return false
  }
}

function isAllowedProxyPath(path: string): boolean {
  if (!path.startsWith('/') || path.startsWith('//')) return false
  if (path.includes('..') || path.includes('\\') || path.includes('@')) return false
  return true
}

async function proxyPosthog(request: Request, url: URL): Promise<Response> {
  if (!ALLOWED_METHODS.has(request.method)) {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: {
        Allow: 'GET, HEAD, POST, OPTIONS',
        'X-Content-Type-Options': 'nosniff',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    })
  }

  const secFetchSite = request.headers.get('sec-fetch-site')
  if (secFetchSite === 'cross-site') {
    return new Response('Forbidden', {
      status: 403,
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    })
  }

  if (request.method === 'POST') {
    const origin = request.headers.get('origin')
    const referer = request.headers.get('referer')
    const validOrigin = origin
      ? isSameOriginHeader(origin, url.origin)
      : isSameOriginHeader(referer, url.origin)

    if (!validOrigin) {
      return new Response('Forbidden', {
        status: 403,
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      })
    }

    const contentLength = Number(request.headers.get('content-length') ?? '0')
    if (Number.isFinite(contentLength) && contentLength > MAX_POST_BYTES) {
      return new Response('Payload Too Large', {
        status: 413,
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      })
    }
  }

  const path = url.pathname.slice(PROXY_PREFIX.length) || '/'
  if (!isAllowedProxyPath(path)) {
    return new Response('Bad Request', {
      status: 400,
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    })
  }

  const host = path.startsWith('/static/') ? POSTHOG_ASSETS_HOST : POSTHOG_API_HOST
  const upstream = new URL(`https://${host}${path}${url.search}`)
  if (upstream.hostname !== host) {
    return new Response('Bad Request', {
      status: 400,
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    })
  }

  const headers = new Headers(request.headers)
  // No reenviar cookies ni credenciales del sitio hacia PostHog
  headers.delete('cookie')
  headers.delete('authorization')
  headers.delete('proxy-authorization')
  headers.set('host', host)
  // IP real del visitante para la geolocalización de PostHog
  const ip = request.headers.get('cf-connecting-ip')
  if (ip) headers.set('x-forwarded-for', ip)

  const hasBody = request.method !== 'GET' && request.method !== 'HEAD'
  const response = await fetch(upstream, {
    method: request.method,
    headers,
    body: hasBody ? request.body : undefined,
    redirect: 'manual',
  })

  const out = new Response(response.body, response)
  out.headers.delete('set-cookie')
  out.headers.set('X-Content-Type-Options', 'nosniff')
  out.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return out
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    if (url.pathname === PROXY_PREFIX || url.pathname.startsWith(`${PROXY_PREFIX}/`)) {
      return proxyPosthog(request, url)
    }
    return env.ASSETS.fetch(request)
  },
}
