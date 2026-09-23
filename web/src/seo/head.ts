import { SITE_NAME } from '../data/site'
import type { SeoData } from './seo'

type HeadTag = {
  tag: 'meta' | 'link' | 'script'
  attrs: Record<string, string>
  content?: string
}

/** Etiquetas del <head> para una ruta (el <title> se maneja aparte) */
export function getHeadTags(seo: SeoData): HeadTag[] {
  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: seo.description } },
    { tag: 'link', attrs: { rel: 'canonical', href: seo.canonical } },
    { tag: 'meta', attrs: { property: 'og:type', content: seo.ogType } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'es_CL' } },
    { tag: 'meta', attrs: { property: 'og:title', content: seo.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: seo.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: seo.canonical } },
    { tag: 'meta', attrs: { property: 'og:image', content: seo.ogImage } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
  ]
  if (seo.publishedTime) {
    tags.push({ tag: 'meta', attrs: { property: 'article:published_time', content: seo.publishedTime } })
  }
  if (seo.modifiedTime) {
    tags.push({ tag: 'meta', attrs: { property: 'article:modified_time', content: seo.modifiedTime } })
  }
  if (seo.noindex) {
    tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex, follow' } })
  }
  for (const data of seo.jsonLd) {
    // "<" escapado para que el JSON no pueda cerrar el <script>
    tags.push({
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      content: JSON.stringify(data).replace(/</g, '\\u003c'),
    })
  }
  return tags
}

const escapeAttr = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** HTML del <head> para el prerender */
export function renderHeadHtml(seo: SeoData): string {
  const title = `<title>${escapeAttr(seo.title)}</title>`
  const tags = getHeadTags(seo).map(({ tag, attrs, content }) => {
    const a = Object.entries({ ...attrs, 'data-seo': '' })
      .map(([k, v]) => (v === '' ? k : `${k}="${escapeAttr(v)}"`))
      .join(' ')
    return tag === 'script' ? `<script ${a}>${content ?? ''}</script>` : `<${tag} ${a} />`
  })
  return [title, ...tags].join('\n    ')
}

/** Reemplaza los metadatos del documento al navegar en el cliente */
export function applySeoToDocument(seo: SeoData) {
  document.title = seo.title
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove())
  for (const { tag, attrs, content } of getHeadTags(seo)) {
    const el = document.createElement(tag)
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
    el.setAttribute('data-seo', '')
    if (content) el.textContent = content
    document.head.appendChild(el)
  }
}
