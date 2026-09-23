import {
  ARTICLE_TITLE_SUFFIX,
  BLOG_POSTS,
  BREADCRUMB_LABELS,
  DEFAULT_OG_IMAGE,
  PROFESSIONAL,
  PROFILE_IMAGE_URL,
  SEO_PAGES,
  SITE_NAME,
  SITE_URL,
  getBlogPostBySlug,
} from '../data/site'

/**
 * Fuente única de metadatos por ruta: la usan el prerender (scripts/prerender.mjs)
 * y el cliente (useSeo) al navegar.
 */
export type SeoData = {
  title: string
  description: string
  /** URL canónica absoluta */
  canonical: string
  /** URL absoluta de la imagen Open Graph */
  ogImage: string
  ogType: 'website' | 'article'
  jsonLd: Record<string, unknown>[]
  noindex?: boolean
  /** Para <meta property="article:*"> */
  publishedTime?: string
  modifiedTime?: string
}

const abs = (path: string) => `${SITE_URL}${path}`

const PERSON_ID = abs('/#persona')
const BUSINESS_ID = abs('/#consulta')
const WEBSITE_ID = abs('/#sitio')

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: PROFESSIONAL.name,
  jobTitle: PROFESSIONAL.jobTitle,
  description: PROFESSIONAL.description,
  image: abs(PROFILE_IMAGE_URL),
  url: abs('/sobre-mi'),
  alumniOf: PROFESSIONAL.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
  knowsAbout: PROFESSIONAL.knowsAbout,
  ...(PROFESSIONAL.sameAs.length ? { sameAs: PROFESSIONAL.sameAs } : {}),
}

const business = {
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: SITE_NAME,
  description: SEO_PAGES.home.description,
  url: abs('/'),
  image: abs(DEFAULT_OG_IMAGE),
  areaServed: { '@type': 'Country', name: 'Chile' },
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
}

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: abs('/'),
  name: SITE_NAME,
  inLanguage: 'es-CL',
  publisher: { '@id': BUSINESS_ID },
}

function graph(...nodes: Record<string, unknown>[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}

function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  }
}

/** Normaliza el pathname (sin barra final, salvo la raíz) */
export function normalizePath(pathname: string) {
  const p = pathname.replace(/\/+$/, '')
  return p === '' ? '/' : p
}

export function getSeo(pathname: string): SeoData {
  const path = normalizePath(pathname)

  if (path === '/') {
    return {
      ...SEO_PAGES.home,
      canonical: abs('/'),
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [graph(website, business, person)],
    }
  }

  if (path === '/sobre-mi') {
    return {
      ...SEO_PAGES.about,
      canonical: abs('/sobre-mi'),
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [
        graph(
          { '@type': 'ProfilePage', url: abs('/sobre-mi'), name: SEO_PAGES.about.title, mainEntity: { '@id': PERSON_ID } },
          person,
        ),
      ],
    }
  }

  if (path === '/articulos') {
    return {
      ...SEO_PAGES.articles,
      canonical: abs('/articulos'),
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [
        graph(
          {
            '@type': 'Blog',
            url: abs('/articulos'),
            name: SEO_PAGES.articles.title,
            description: SEO_PAGES.articles.description,
            inLanguage: 'es-CL',
            author: { '@id': PERSON_ID },
            blogPost: BLOG_POSTS.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.seoTitle,
              url: abs(`/articulos/${p.slug}`),
              datePublished: p.datePublished,
            })),
          },
          breadcrumbs([
            { name: BREADCRUMB_LABELS.home, path: '/' },
            { name: BREADCRUMB_LABELS.articles, path: '/articulos' },
          ]),
        ),
      ],
    }
  }

  const articleMatch = path.match(/^\/articulos\/([^/]+)$/)
  const post = articleMatch ? getBlogPostBySlug(articleMatch[1]) : undefined
  if (post) {
    const url = abs(`/articulos/${post.slug}`)
    const modified = post.dateModified ?? post.datePublished
    return {
      title: `${post.seoTitle}${ARTICLE_TITLE_SUFFIX}`,
      description: post.seoDescription,
      canonical: url,
      ogImage: abs(post.ogImage),
      ogType: 'article',
      publishedTime: post.datePublished,
      modifiedTime: modified,
      jsonLd: [
        graph(
          {
            '@type': 'BlogPosting',
            '@id': `${url}#articulo`,
            mainEntityOfPage: url,
            headline: post.seoTitle,
            description: post.seoDescription,
            image: [abs(post.ogImage), ...(post.imageUrl ? [abs(post.imageUrl)] : [])],
            datePublished: post.datePublished,
            dateModified: modified,
            articleSection: post.category,
            inLanguage: 'es-CL',
            author: person,
            publisher: { '@id': BUSINESS_ID },
          },
          { ...business },
          breadcrumbs([
            { name: BREADCRUMB_LABELS.home, path: '/' },
            { name: BREADCRUMB_LABELS.articles, path: '/articulos' },
            { name: post.title, path: `/articulos/${post.slug}` },
          ]),
        ),
      ],
    }
  }

  return {
    ...SEO_PAGES.notFound,
    canonical: abs(path),
    ogImage: abs(DEFAULT_OG_IMAGE),
    ogType: 'website',
    jsonLd: [],
    noindex: true,
  }
}

/** Rutas que se generan como HTML estático en build (además de 404.html) */
export const PRERENDER_ROUTES = [
  '/',
  '/sobre-mi',
  '/articulos',
  ...BLOG_POSTS.map((p) => `/articulos/${p.slug}`),
]

/** lastmod por ruta para sitemap.xml */
export function getLastModified(path: string): string | undefined {
  const m = path.match(/^\/articulos\/([^/]+)$/)
  if (m) {
    const post = getBlogPostBySlug(m[1])
    return post ? (post.dateModified ?? post.datePublished) : undefined
  }
  const dates = BLOG_POSTS.map((p) => p.dateModified ?? p.datePublished).sort()
  return path === '/articulos' ? dates[dates.length - 1] : undefined
}
