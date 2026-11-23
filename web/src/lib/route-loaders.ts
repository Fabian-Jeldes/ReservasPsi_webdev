// Cargadores dinámicos compartidos entre App.tsx (React.lazy) y prefetch al hover/focus.

export const routeLoaders = {
  about: () => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })),
  articles: () => import('../pages/ArticlesPage').then((m) => ({ default: m.ArticlesPage })),
  article: () => import('../pages/ArticlePage').then((m) => ({ default: m.ArticlePage })),
  specialization: () =>
    import('../pages/SpecializationPage').then((m) => ({ default: m.SpecializationPage })),
  legal: () => import('../pages/LegalPage').then((m) => ({ default: m.LegalPage })),
  notFound: () => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),

  // Problemas Sexuales Masculinos
  disfuncionErectil: () =>
    import('../pages/especialidades/DisfuncionErectilPage').then((m) => ({
      default: m.DisfuncionErectilPage,
    })),
  eyaculacionPrecoz: () =>
    import('../pages/especialidades/EyaculacionPrecozPage').then((m) => ({
      default: m.EyaculacionPrecozPage,
    })),
  eyaculacionRetardada: () =>
    import('../pages/especialidades/EyaculacionRetardadaPage').then((m) => ({
      default: m.EyaculacionRetardadaPage,
    })),
  bajoDeseoMasculino: () =>
    import('../pages/especialidades/BajoDeseoMasculinoPage').then((m) => ({
      default: m.BajoDeseoMasculinoPage,
    })),
  ansiedadDesempeno: () =>
    import('../pages/especialidades/AnsiedadDesempenoPage').then((m) => ({
      default: m.AnsiedadDesempenoPage,
    })),
  adiccionPornografia: () =>
    import('../pages/especialidades/AdiccionPornografiaPage').then((m) => ({
      default: m.AdiccionPornografiaPage,
    })),

  // Problemas Sexuales Femeninos
  vaginismoDolorPelvico: () =>
    import('../pages/especialidades/VaginismoDolorPelvicoPage').then((m) => ({
      default: m.VaginismoDolorPelvicoPage,
    })),
  dispareunia: () =>
    import('../pages/especialidades/DispareuniaPage').then((m) => ({
      default: m.DispareuniaPage,
    })),
  anorgasmia: () =>
    import('../pages/especialidades/AnorgasmiaPage').then((m) => ({
      default: m.AnorgasmiaPage,
    })),
  bajoDeseoFemenino: () =>
    import('../pages/especialidades/BajoDeseoFemeninoPage').then((m) => ({
      default: m.BajoDeseoFemeninoPage,
    })),
  aversionSexo: () =>
    import('../pages/especialidades/AversionSexoPage').then((m) => ({
      default: m.AversionSexoPage,
    })),

  // Problemáticas del Ánimo y Ansiedad
  trastornosAnsiedad: () =>
    import('../pages/especialidades/TrastornosAnsiedadPage').then((m) => ({
      default: m.TrastornosAnsiedadPage,
    })),
  cuadrosDepresivos: () =>
    import('../pages/especialidades/CuadrosDepresivosPage').then((m) => ({
      default: m.CuadrosDepresivosPage,
    })),
  estresCronicoBurnout: () =>
    import('../pages/especialidades/EstresCronicoBurnoutPage').then((m) => ({
      default: m.EstresCronicoBurnoutPage,
    })),
  regulacionEmocionalAutoestima: () =>
    import('../pages/especialidades/RegulacionEmocionalAutoestimaPage').then((m) => ({
      default: m.RegulacionEmocionalAutoestimaPage,
    })),
} as const

type LoaderKey = keyof typeof routeLoaders

const EXACT_PATH_LOADERS: Record<string, LoaderKey> = {
  '/sobre-mi': 'about',
  '/articulos': 'articles',
  '/privacidad': 'legal',
  '/practica-digital': 'legal',
  '/terminos': 'legal',
  '/sexualidad-masculina/disfuncion-erectil-psicogena': 'disfuncionErectil',
  '/sexualidad-masculina/eyaculacion-precoz': 'eyaculacionPrecoz',
  '/sexualidad-masculina/eyaculacion-retardada': 'eyaculacionRetardada',
  '/sexualidad-masculina/bajo-deseo-sexual-masculino': 'bajoDeseoMasculino',
  '/sexualidad-masculina/ansiedad-de-desempeno': 'ansiedadDesempeno',
  '/sexualidad-masculina/uso-problematico-de-pornografia': 'adiccionPornografia',
  '/sexualidad-femenina/vaginismo-dolor-genitopelvico': 'vaginismoDolorPelvico',
  '/sexualidad-femenina/dispareunia-dolor-relaciones': 'dispareunia',
  '/sexualidad-femenina/anorgasmia-dificultad-orgasmo': 'anorgasmia',
  '/sexualidad-femenina/deseo-sexual-hipoactivo-femenino': 'bajoDeseoFemenino',
  '/sexualidad-femenina/aversion-al-sexo': 'aversionSexo',
  '/salud-emocional/trastornos-ansiedad-panico': 'trastornosAnsiedad',
  '/salud-emocional/cuadros-depresivos-alteraciones-animo': 'cuadrosDepresivos',
  '/salud-emocional/estres-cronico-burnout': 'estresCronicoBurnout',
  '/salud-emocional/regulacion-emocional-autoestima': 'regulacionEmocionalAutoestima',
}

const prefetchedKeys = new Set<LoaderKey>()

function resolveLoaderKey(path: string): LoaderKey | null {
  const clean = path.split(/[?#]/)[0]
  if (clean in EXACT_PATH_LOADERS) return EXACT_PATH_LOADERS[clean]
  if (clean.startsWith('/articulos/')) return 'article'
  if (clean.startsWith('/especialidades/')) return 'specialization'
  return null
}

/** Precarga el chunk JS de una ruta al hacer hover o focus (una sola vez; respeta Save-Data) */
export function prefetchRoute(path: string) {
  if (typeof window === 'undefined') return
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } }
  if (nav.connection?.saveData) return

  const key = resolveLoaderKey(path)
  if (!key || prefetchedKeys.has(key)) return

  prefetchedKeys.add(key)
  void routeLoaders[key]().catch(() => {
    prefetchedKeys.delete(key)
  })
}
