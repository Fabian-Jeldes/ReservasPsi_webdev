/**
 * Worker del sitio (psandrei.com). Los assets estáticos los sirve Cloudflare directamente;
 * este código solo corre para /ingest/* (ver `run_worker_first` en wrangler.jsonc):
 * reverse proxy de PostHog (región US) en el mismo dominio.
 */
type Env = {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
}

const POSTHOG_API_HOST = 'us.i.posthog.com'
const POSTHOG_ASSETS_HOST = 'us-assets.i.posthog.com'
const PROXY_PREFIX = '/ingest'

async function proxyPosthog(request: Request, url: URL): Promise<Response> {
  const path = url.pathname.slice(PROXY_PREFIX.length) || '/'
  const host = path.startsWith('/static/') ? POSTHOG_ASSETS_HOST : POSTHOG_API_HOST
  const upstream = new URL(`https://${host}${path}${url.search}`)

  const headers = new Headers(request.headers)
  // Las cookies de psandrei.com no tienen por qué salir hacia PostHog
  headers.delete('cookie')
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
