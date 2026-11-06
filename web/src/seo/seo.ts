import {
  ARTICLE_TITLE_SUFFIX,
  BLOG_POSTS,
  BREADCRUMB_LABELS,
  DEFAULT_OG_IMAGE,
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

const CLINICAL_AREA_SEO: Record<string, { title: string; description: string }> = {
  '/sexualidad-masculina/disfuncion-erectil-psicogena': {
    title: 'Disfunción Eréctil Psicógena: Tratamiento y Causas',
    description:
      'Abordaje psicológico y sexológico para la disfunción eréctil de origen psicógeno, ansiedad anticipatoria y miedo al desempeño.',
  },
  '/sexualidad-masculina/eyaculacion-precoz': {
    title: 'Eyaculación Precoz: Tratamiento Sexológico y Control',
    description:
      'Terapia sexual especializada en eyaculación precoz, regulación de la excitación y manejo de la hipervigilancia en la intimidad.',
  },
  '/sexualidad-masculina/eyaculacion-retardada': {
    title: 'Eyaculación Retardada o Aneyaculación: Terapia Sexual',
    description:
      'Abordaje clínico del hipercontrol, rol de espectador y bloqueo orgásmico masculino desde la sexología clínica basada en evidencia.',
  },
  '/sexualidad-masculina/bajo-deseo-sexual-masculino': {
    title: 'Bajo Deseo Sexual Masculino (Deseo Hipoactivo)',
    description:
      'Comprende las causas psicológicas, relacionales y de estrés crónico detrás de la disminución del deseo sexual en hombres.',
  },
  '/sexualidad-masculina/ansiedad-de-desempeno': {
    title: 'Ansiedad de Desempeño Sexual: Cómo Superar el Bloqueo',
    description:
      'Desarma el ciclo de autoexigencia, hipervigilancia y miedo a fallar en la intimidad mediante psicoterapia y sexología clínica.',
  },
  '/sexualidad-masculina/uso-problematico-de-pornografia': {
    title: 'Uso Problemático de Pornografía y Salud Sexual',
    description:
      'Abordaje terapéutico sin juicios morales para la hiperestimulación digital, desconexión erótica y dificultades sexuales asociadas.',
  },
  '/sexualidad-femenina/vaginismo-dolor-genitopelvico': {
    title: 'Vaginismo y Dolor Genito-Pélvico: Terapia Sexológica',
    description:
      'Acompañamiento clínico gradual y respetuoso para superar el reflejo defensivo, el temor al dolor y recuperar la seguridad corporal.',
  },
  '/sexualidad-femenina/dispareunia-dolor-relaciones': {
    title: 'Dispareunia (Dolor en las Relaciones Sexuales)',
    description:
      'Abordaje psicofisiológico y relacional del dolor coital para restituir la comodidad, la excitación y el placer sin dolor.',
  },
  '/sexualidad-femenina/anorgasmia-dificultad-orgasmo': {
    title: 'Anorgasmia Femenina y Dificultad para el Orgasmo',
    description:
      'Exploración clínica de las barreras cognitivas, emocionales y vinculares que inhiben el orgasmo femenino.',
  },
  '/sexualidad-femenina/deseo-sexual-hipoactivo-femenino': {
    title: 'Bajo Deseo Sexual Femenino y Deseo Responsivo',
    description:
      'Terapia sexológica enfocada en el deseo responsivo, el contexto emocional y la desmitificación de la culpa en la sexualidad femenina.',
  },
  '/sexualidad-femenina/aversion-al-sexo': {
    title: 'Aversión al Sexo y Evitación de la Intimidad',
    description:
      'Espacio psicoterapéutico seguro y compasivo para trabajar el rechazo, la angustia o la evitación frente al contacto sexual.',
  },
  '/salud-emocional/trastornos-ansiedad-panico': {
    title: 'Trastornos de Ansiedad y Crisis de Pánico: Psicoterapia',
    description:
      'Tratamiento psicológico basado en evidencia para ansiedad generalizada, ansiedad social, crisis de pánico y regulación del sistema nervioso.',
  },
  '/salud-emocional/cuadros-depresivos-alteraciones-animo': {
    title: 'Cuadros Depresivos y Alteraciones del Ánimo: Terapia',
    description:
      'Psicoterapia clínica individual cálida y estructurada para abordar la depresión, el agotamiento emocional y recuperar tu vitalidad.',
  },
  '/salud-emocional/estres-cronico-burnout': {
    title: 'Estrés Crónico y Burnout: Psicoterapia para Adultos',
    description:
      'Herramientas clínicas para salir del modo de supervivencia, descomprimir la sobrecarga laboral y restablecer límites saludables.',
  },
  '/salud-emocional/regulacion-emocional-autoestima': {
    title: 'Regulación Emocional y Autoestima en Adultos',
    description:
      'Transforma la autocrítica rígida en seguridad personal, alfabetización emocional y vínculos más auténticos y saludables.',
  },
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

  const clinicalArea = CLINICAL_AREA_SEO[path]
  if (clinicalArea) {
    const url = abs(path)
    return {
      title: `${clinicalArea.title}${SPECIALIZATION_TITLE_SUFFIX}`,
      description: clinicalArea.description,
      canonical: url,
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [
        graph(
          {
            '@type': 'MedicalWebPage',
            url,
            name: clinicalArea.title,
            description: clinicalArea.description,
            inLanguage: 'es-CL',
            about: { '@type': 'MedicalCondition', name: clinicalArea.title },
            author: { '@id': PERSON_ID },
            reviewedBy: { '@id': PERSON_ID },
            publisher: { '@id': BUSINESS_ID },
          },
          person,
          breadcrumbs([
            { name: BREADCRUMB_LABELS.home, path: '/' },
            { name: clinicalArea.title, path },
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
  ...SPECIALIZATIONS.map((s) => `/especialidades/${s.slug}`),
  ...Object.keys(CLINICAL_AREA_SEO),
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
