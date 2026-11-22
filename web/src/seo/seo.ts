import {
  ARTICLE_TITLE_SUFFIX,
  BLOG_POSTS,
  BREADCRUMB_LABELS,
  DEFAULT_OG_IMAGE,
  FAQ_DATA,
  PRACTICE_LOCATION,
  PROFESSIONAL,
  PROFILE_IMAGE_URL,
  SEO_PAGES,
  SITE_NAME,
  SITE_URL,
  SPECIALIZATIONS,
  SPECIALIZATION_TITLE_SUFFIX,
  getBlogPostBySlug,
  getSpecializationBySlug,
} from '../data/site'
import { CLINICAL_SPECIALTY_SEO } from './clinical-specialties-seo'

/**
 * Fuente única de metadatos por ruta: la usan el prerender (scripts/prerender.mjs)
 * y el cliente (useSeo) al navegar.
 */
export type SeoData = {
  title: string
  description: string
  keywords?: string
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
const plainText = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

const PERSON_ID = abs('/#persona')
const BUSINESS_ID = abs('/#consulta')
const WEBSITE_ID = abs('/#sitio')

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: PROFESSIONAL.name,
  jobTitle: PROFESSIONAL.jobTitle,
  description: PROFESSIONAL.description,
  email: `mailto:${PROFESSIONAL.email}`,
  image: abs(PROFILE_IMAGE_URL),
  url: abs('/sobre-mi'),
  alumniOf: PROFESSIONAL.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
  hasCredential: PROFESSIONAL.credentials.map((cred) => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    name: cred.name,
    recognizedBy: { '@type': 'Organization', name: cred.recognizedBy },
  })),
  worksFor: PROFESSIONAL.affiliations.map((org) => ({
    '@type': 'MedicalClinic',
    name: org.name,
    url: org.url,
  })),
  knowsAbout: PROFESSIONAL.knowsAbout,
  ...(PROFESSIONAL.sameAs.length ? { sameAs: PROFESSIONAL.sameAs } : {}),
}

const business = {
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: SITE_NAME,
  description: SEO_PAGES.home.description,
  url: abs('/'),
  email: `mailto:${PROFESSIONAL.email}`,
  image: abs(DEFAULT_OG_IMAGE),
  areaServed: { '@type': 'Country', name: 'Chile' },
  availableLanguage: 'es',
  address: {
    '@type': 'PostalAddress',
    addressLocality: PRACTICE_LOCATION.addressLocality,
    addressRegion: PRACTICE_LOCATION.addressRegion,
    addressCountry: PRACTICE_LOCATION.addressCountry,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: PRACTICE_LOCATION.openingDays,
    opens: PRACTICE_LOCATION.opens,
    closes: PRACTICE_LOCATION.closes,
  },
  ...(PROFESSIONAL.sameAs.length ? { sameAs: PROFESSIONAL.sameAs } : {}),
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
}

const homeFaqPage = {
  '@type': 'FAQPage',
  '@id': abs('/#preguntas'),
  url: abs('/#preguntas'),
  inLanguage: 'es-CL',
  mainEntity: FAQ_DATA.flatMap((category) =>
    category.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainText(item.answer),
      },
    })),
  ),
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
      jsonLd: [graph(website, business, person, homeFaqPage)],
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

  if (path === '/privacidad') {
    return {
      ...SEO_PAGES.privacy,
      canonical: abs('/privacidad'),
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [
        graph(
          {
            '@type': 'WebPage',
            url: abs('/privacidad'),
            name: SEO_PAGES.privacy.title,
            description: SEO_PAGES.privacy.description,
            inLanguage: 'es-CL',
            isPartOf: { '@id': WEBSITE_ID },
          },
          breadcrumbs([
            { name: BREADCRUMB_LABELS.home, path: '/' },
            { name: 'Privacidad', path: '/privacidad' },
          ]),
        ),
      ],
    }
  }

  if (path === '/practica-digital') {
    return {
      ...SEO_PAGES.digitalPractice,
      canonical: abs('/practica-digital'),
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [
        graph(
          {
            '@type': 'WebPage',
            url: abs('/practica-digital'),
            name: SEO_PAGES.digitalPractice.title,
            description: SEO_PAGES.digitalPractice.description,
            inLanguage: 'es-CL',
            isPartOf: { '@id': WEBSITE_ID },
          },
          breadcrumbs([
            { name: BREADCRUMB_LABELS.home, path: '/' },
            { name: 'Práctica Digital', path: '/practica-digital' },
          ]),
        ),
      ],
    }
  }

  if (path === '/terminos') {
    return {
      ...SEO_PAGES.terms,
      canonical: abs('/terminos'),
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [
        graph(
          {
            '@type': 'WebPage',
            url: abs('/terminos'),
            name: SEO_PAGES.terms.title,
            description: SEO_PAGES.terms.description,
            inLanguage: 'es-CL',
            isPartOf: { '@id': WEBSITE_ID },
          },
          breadcrumbs([
            { name: BREADCRUMB_LABELS.home, path: '/' },
            { name: 'Términos', path: '/terminos' },
          ]),
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
            keywords: post.category,
            url,
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

  const specMatch = path.match(/^\/especialidades\/([^/]+)$/)
  const spec = specMatch ? getSpecializationBySlug(specMatch[1]) : undefined
  if (spec) {
    const url = abs(`/especialidades/${spec.slug}`)
    const description = plainText(spec.description)
    return {
      title: `${spec.title}${SPECIALIZATION_TITLE_SUFFIX}`,
      description,
      canonical: url,
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [
        graph(
          {
            '@type': 'MedicalWebPage',
            url,
            name: spec.title,
            description,
            inLanguage: 'es-CL',
            about: { '@type': 'MedicalCondition', name: spec.title },
            author: { '@id': PERSON_ID },
            reviewedBy: { '@id': PERSON_ID },
            publisher: { '@id': BUSINESS_ID },
          },
          person,
          breadcrumbs([
            { name: BREADCRUMB_LABELS.home, path: '/' },
            { name: spec.title, path: `/especialidades/${spec.slug}` },
          ]),
        ),
      ],
    }
  }

  const clinicalSeo = CLINICAL_SPECIALTY_SEO[path]
  if (clinicalSeo) {
    const url = abs(path)
    const nodes: Record<string, unknown>[] = [
      {
        '@type': 'MedicalWebPage',
        '@id': `${url}#pagina`,
        url,
        name: clinicalSeo.conditionName,
        description: clinicalSeo.description,
        inLanguage: 'es-CL',
        aspect: ['diagnosis', 'treatment', 'psychophysiology'],
        about: {
          '@type': 'MedicalCondition',
          name: clinicalSeo.conditionName,
          alternateName: clinicalSeo.alternateName,
          description: clinicalSeo.description,
        },
        author: { '@id': PERSON_ID },
        reviewedBy: { '@id': PERSON_ID },
        publisher: { '@id': BUSINESS_ID },
      },
      person,
      breadcrumbs([
        { name: BREADCRUMB_LABELS.home, path: '/' },
        { name: clinicalSeo.conditionName, path },
      ]),
    ]

    if (clinicalSeo.faqs.length > 0) {
      nodes.push({
        '@type': 'FAQPage',
        '@id': `${url}#preguntas`,
        url,
        inLanguage: 'es-CL',
        mainEntity: clinicalSeo.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      })
    }

    return {
      title: clinicalSeo.title,
      description: clinicalSeo.description,
      keywords: clinicalSeo.keywords,
      canonical: url,
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [graph(...nodes)],
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

/** Rutas /especialidades/:slug que redirigen a su anexo canónico (no duplicar en sitemap ni prerender) */
const REDIRECTED_SPECIALIZATION_SLUGS = new Set(['disfuncion-erectil-psicogena'])

/** Rutas que se generan como HTML estático en build (además de 404.html) */
export const PRERENDER_ROUTES = [
  '/',
  '/sobre-mi',
  '/articulos',
  '/privacidad',
  '/practica-digital',
  '/terminos',
  ...BLOG_POSTS.map((p) => `/articulos/${p.slug}`),
  ...SPECIALIZATIONS.filter((s) => !REDIRECTED_SPECIALIZATION_SLUGS.has(s.slug)).map(
    (s) => `/especialidades/${s.slug}`,
  ),
  ...Object.keys(CLINICAL_SPECIALTY_SEO),
]

/** lastmod por ruta para sitemap.xml */
export function getLastModified(path: string): string | undefined {
  const m = path.match(/^\/articulos\/([^/]+)$/)
  if (m) {
    const post = getBlogPostBySlug(m[1])
    return post ? (post.dateModified ?? post.datePublished) : undefined
  }
  const dates = BLOG_POSTS.map((p) => p.dateModified ?? p.datePublished).sort()
  return path === '/' || path === '/articulos' ? dates[dates.length - 1] : undefined
}
