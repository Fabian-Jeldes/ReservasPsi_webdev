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

  const clinicalSeo = CLINICAL_SPECIALTY_SEO[path]
  if (clinicalSeo) {
    const url = abs(path)
    return {
      title: clinicalSeo.title,
      description: clinicalSeo.description,
      canonical: url,
      ogImage: abs(DEFAULT_OG_IMAGE),
      ogType: 'website',
      jsonLd: [
        graph(
          {
            '@type': 'MedicalWebPage',
            url,
            name: clinicalSeo.conditionName,
            description: clinicalSeo.description,
            inLanguage: 'es-CL',
            about: { '@type': 'MedicalCondition', name: clinicalSeo.conditionName },
            author: { '@id': PERSON_ID },
            reviewedBy: { '@id': PERSON_ID },
            publisher: { '@id': BUSINESS_ID },
          },
          person,
          breadcrumbs([
            { name: BREADCRUMB_LABELS.home, path: '/' },
            { name: clinicalSeo.conditionName, path },
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

const CLINICAL_SPECIALTY_SEO: Record<
  string,
  { conditionName: string; title: string; description: string }
> = {
  '/sexualidad-masculina/disfuncion-erectil-psicogena': {
    conditionName: 'Disfunción Eréctil Psicógena',
    title:
      'Tratamiento de la Disfunción Eréctil Psicógena en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La disfunción eréctil psicógena no es un fracaso, sino una respuesta neurobiológica frente a la ansiedad de desempeño. Tratamiento sexológico clínico e integrativo en Chile.',
  },
  '/sexualidad-masculina/eyaculacion-precoz': {
    conditionName: 'Eyaculación Precoz',
    title:
      'Tratamiento de la Eyaculación Precoz en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'Abordaje sexológico clínico e integrativo para la eyaculación precoz o prematura en Chile. Reentrenamiento del reflejo eyaculatorio, manejo de la ansiedad de desempeño y técnicas conductuales.',
  },
  '/sexualidad-masculina/eyaculacion-retardada': {
    conditionName: 'Eyaculación Retardada',
    title:
      'Tratamiento de la Eyaculación Retardada en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Eyaculación Retardada se caracteriza por un retraso significativo o una ausencia recurrente del reflejo eyaculatorio a pesar de la presencia de una estimulación sexual adecuada. Tratamiento sexológico clínico e integrativo en Chile.',
  },
  '/sexualidad-masculina/bajo-deseo-sexual-masculino': {
    conditionName: 'Deseo Sexual Hipoactivo Masculino',
    title:
      'Tratamiento del Deseo Sexual Hipoactivo Masculino en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El Deseo Sexual Hipoactivo Masculino se define como una disminución o ausencia persistente o recurrente de pensamientos, fantasías eróticas y motivación para iniciar o responder a la actividad íntima.',
  },
  '/sexualidad-masculina/ansiedad-de-desempeno': {
    conditionName: 'Ansiedad de Desempeño Sexual',
    title:
      'Tratamiento de la Ansiedad de Desempeño Sexual en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Ansiedad de Desempeño Sexual se define como un estado de aprensión, tensión psicofisiológica y miedo anticipatorio focalizado en la capacidad de obtener, mantener o regular la respuesta sexual.',
  },
  '/sexualidad-masculina/uso-problematico-de-pornografia': {
    conditionName: 'Uso Problemático de Pornografía',
    title:
      'Tratamiento del Uso Problemático de Pornografía en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El uso problemático o compulsivo de pornografía se caracteriza por un patrón persistente de incapacidad para controlar los impulsos o conductas de consumo de material erótico explícito.',
  },
  '/sexualidad-femenina/vaginismo-dolor-genitopelvico': {
    conditionName: 'Vaginismo y Dolor Genitopélvico',
    title:
      'Tratamiento del Vaginismo y Dolor Genitopélvico en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El Vaginismo y las condiciones de Dolor Genitopélvico comprenden dificultades caracterizadas por la imposibilidad o dificultad recurrente para permitir la penetración vaginal.',
  },
  '/sexualidad-femenina/dispareunia-dolor-relaciones': {
    conditionName: 'Dispareunia y Dolor durante las Relaciones',
    title:
      'Tratamiento de la Dispareunia y Dolor durante las Relaciones en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Dispareunia se define como el dolor genital persistente o recurrente que se experimenta antes, durante o después del coito o de la penetración sexual.',
  },
  '/sexualidad-femenina/anorgasmia-dificultad-orgasmo': {
    conditionName: 'Anorgasmia y Dificultad del Orgasmo',
    title:
      'Tratamiento de la Anorgasmia y Dificultad del Orgasmo en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Anorgasmia y las dificultades en el alcance del clímax comprenden la ausencia o el retraso significativo del orgasmo, así como una reducción marcada en la intensidad de las sensaciones orgásmicas.',
  },
  '/sexualidad-femenina/deseo-sexual-hipoactivo-femenino': {
    conditionName: 'Deseo Sexual Hipoactivo Femenino',
    title:
      'Tratamiento del Deseo Sexual Hipoactivo Femenino en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El Deseo Sexual Hipoactivo Femenino se define como una disminución o ausencia persistente o recurrente del interés erótico, pensamientos, fantasías sexuales y motivación íntima.',
  },
  '/sexualidad-femenina/aversion-al-sexo': {
    conditionName: 'Aversión al Sexo',
    title:
      'Tratamiento de la Aversión al Sexo y Evidencia Fóbica en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Aversión al Sexo se caracteriza por una respuesta fóbica, de rechazo persistente o evitación extrema y activa de cualquier tipo de contacto íntimo o cercanía erótica compartida.',
  },
  '/salud-emocional/trastornos-ansiedad-panico': {
    conditionName: 'Trastornos de Ansiedad y Pánico',
    title:
      'Tratamiento de los Trastornos de Ansiedad y Pánico en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'Los Trastornos de Ansiedad y Pánico comprenden un conjunto de condiciones caracterizadas por una activación neurofisiológica desproporcionada, miedo intenso o aprensión anticipatoria.',
  },
  '/salud-emocional/cuadros-depresivos-alteraciones-animo': {
    conditionName: 'Cuadros Depresivos y Alteraciones del Ánimo',
    title:
      'Tratamiento de los Cuadros Depresivos y Trastornos del Ánimo en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'Los cuadros depresivos y las alteraciones del estado de ánimo configuran una compleja red de síntomas somáticos, cognitivos y relacionales que erosionan la vitalidad.',
  },
  '/salud-emocional/estres-cronico-burnout': {
    conditionName: 'Estrés Crónico y Síndrome de Burnout',
    title:
      'Tratamiento del Estrés Crónico y Burnout en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El estrés crónico y el síndrome de burnout se caracterizan por agotamiento extremo, distanciamiento mental y sobrecarga alostática.',
  },
  '/salud-emocional/regulacion-emocional-autoestima': {
    conditionName: 'Regulación Emocional y Autoestima',
    title:
      'Tratamiento de la Regulación Emocional y Autoestima en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'Abordaje psicoterapéutico clínico e integrativo para la regulación emocional, superación de la autocrítica severa, autocompasión y fortalecimiento de la autoestima en Chile.',
  },
}

/** Rutas que se generan como HTML estático en build (además de 404.html) */
export const PRERENDER_ROUTES = [
  '/',
  '/sobre-mi',
  '/articulos',
  ...BLOG_POSTS.map((p) => `/articulos/${p.slug}`),
  ...SPECIALIZATIONS.map((s) => `/especialidades/${s.slug}`),
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
  return path === '/articulos' ? dates[dates.length - 1] : undefined
}
