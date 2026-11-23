import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ComponentType, KeyboardEvent } from 'react'
import type { Specialization } from '../types/site'
import { prefetchRoute } from '../lib/route-loaders'

const masculinoIconModules = import.meta.glob<string>('../assets/*masculin*', {
  eager: true,
  import: 'default',
})
const iconMasculinoUrl =
  Object.values(masculinoIconModules)[0] || '/assets/icon-masculino.png'

const femeninoIconModules = import.meta.glob<string>('../assets/*femenin*', {
  eager: true,
  import: 'default',
})
const iconFemeninoUrl =
  Object.values(femeninoIconModules)[0] || '/assets/icon-femenino.png'

const animoIconModules = import.meta.glob<string>('../assets/*animo*', {
  eager: true,
  import: 'default',
})
const iconAnimoUrl =
  Object.values(animoIconModules)[0] || '/assets/icon-animo.png'

type Props = {
  items?: Specialization[]
}

type SubAreaItem = {
  title: string
  subtitle: string
  description: string
  path: string
}

type CategoryAccordion = {
  id: string
  title: string
  highlightWord: string
  subtitle: string
  icon?: ComponentType<{ size?: number; 'aria-hidden'?: boolean }>
  customIconSrc?: string
  areas: SubAreaItem[]
}

const ACCORDION_CATEGORIES: CategoryAccordion[] = [
  {
    id: 'masculinos',
    title: 'Problemas Sexuales Masculinos',
    highlightWord: 'Masculinos',
    subtitle: 'Abordaje clínico libre de exigencias y mitos de rendimiento',
    customIconSrc: iconMasculinoUrl,
    areas: [
      {
        title: 'Disfunción eréctil (Enfoque psicógeno)',
        subtitle: 'Reconceptualizando la erección',
        description:
          'Desarmamos la presión por rendir y el miedo anticipatorio para que tu respuesta física vuelva a fluir desde la confianza.',
        path: '/sexualidad-masculina/disfuncion-erectil-psicogena',
      },
      {
        title: 'Eyaculación precoz',
        subtitle: 'Calma y reconocimiento corporal',
        description:
          'Herramientas psicofisiológicas y cognitivas para regular la curva de excitación sin tensión ni cronómetros.',
        path: '/sexualidad-masculina/eyaculacion-precoz',
      },
      {
        title: 'Eyaculación retardada o aneyaculación',
        subtitle: 'Desbloqueo y entrega sensorial',
        description:
          'Abordamos el hipercontrol y el rol de espectador que impiden alcanzar el clímax en la intimidad.',
        path: '/sexualidad-masculina/eyaculacion-retardada',
      },
      {
        title: 'Bajo deseo sexual (Deseo sexual hipoactivo masculino)',
        subtitle: 'Normalizando tu experiencia',
        description:
          'Exploramos sin juicios cómo el estrés, el agotamiento y las exigencias apagan el interés erótico.',
        path: '/sexualidad-masculina/bajo-deseo-sexual-masculino',
      },
      {
        title: 'Ansiedad de desempeño sexual',
        subtitle: 'Rompiendo la trampa mental',
        description:
          'Supera la hipervigilancia y el temor a fallar que bloquean el disfrute y la conexión en pareja.',
        path: '/sexualidad-masculina/ansiedad-de-desempeno',
      },
      {
        title: 'Adicción a la pornografía',
        subtitle: 'Reinicio y reconexión real',
        description:
          'Recalibramos el sistema de recompensa frente a la hiperestimulación digital, sin sermones ni juicios morales.',
        path: '/sexualidad-masculina/uso-problematico-de-pornografia',
      },
    ],
  },
  {
    id: 'femeninos',
    title: 'Problemas Sexuales Femeninos',
    highlightWord: 'Femeninos',
    subtitle:
      'Espacio seguro para reconectar con el deseo, la calma y el placer corporal',
    customIconSrc: iconFemeninoUrl,
    areas: [
      {
        title: 'Vaginismo y dolor pélvico',
        subtitle: 'Desactivando el reflejo defensivo',
        description:
          'Acompañamiento gradual y respetuoso para superar la contracción involuntaria y el temor al dolor.',
        path: '/sexualidad-femenina/vaginismo-dolor-genitopelvico',
      },
      {
        title: 'Dispareunia (Dolor durante las relaciones)',
        subtitle: 'El placer nunca debería doler',
        description:
          'Abordaje psicofisiológico y comunicacional para recuperar la comodidad, la excitación y la confianza.',
        path: '/sexualidad-femenina/dispareunia-dolor-relaciones',
      },
      {
        title: 'Anorgasmia',
        subtitle: 'Autoconocimiento y disfrute sin presiones',
        description:
          'Exploramos las barreras cognitivas, emocionales y relacionales que bloquean el acceso al clímax.',
        path: '/sexualidad-femenina/anorgasmia-dificultad-orgasmo',
      },
      {
        title: 'Bajo deseo sexual (Deseo sexual hipoactivo femenino)',
        subtitle: 'Deseo responsivo y bienestar integral',
        description:
          'Comprendemos las condiciones emocionales y relacionales que necesita tu deseo para despertar sin culpa.',
        path: '/sexualidad-femenina/deseo-sexual-hipoactivo-femenino',
      },
      {
        title: 'Aversión al sexo',
        subtitle: 'Restituyendo la seguridad corporal',
        description:
          'Espacio clínico compasivo para abordar el rechazo, la angustia o la evitación frente al contacto íntimo.',
        path: '/sexualidad-femenina/aversion-al-sexo',
      },
    ],
  },
  {
    id: 'animo-ansiedad',
    title: 'Problemáticas del Ánimo y Ansiedad',
    highlightWord: 'Ansiedad',
    subtitle:
      'Psicoterapia clínica enfocada en regulación emocional y bienestar integral',
    customIconSrc: iconAnimoUrl,
    areas: [
      {
        title:
          'Trastornos de Ansiedad (Generalizada, social, crisis de pánico)',
        subtitle: 'Desactivando la alarma permanente',
        description:
          'Estrategias clínicas basadas en evidencia para regular el sistema nervioso y recuperar la calma mental.',
        path: '/salud-emocional/trastornos-ansiedad-panico',
      },
      {
        title: 'Cuadros Depresivos y alteraciones del ánimo',
        subtitle: 'Acompañamiento cálido y estructurado',
        description:
          'Un espacio seguro para procesar la desmotivación, el agotamiento silencioso y reconstruir tu vitalidad.',
        path: '/salud-emocional/cuadros-depresivos-alteraciones-animo',
      },
      {
        title: 'Estrés crónico y Burnout',
        subtitle: 'Salir del modo de supervivencia',
        description:
          'Herramientas para descomprimir la sobrecarga laboral o vital y establecer límites saludables.',
        path: '/salud-emocional/estres-cronico-burnout',
      },
      {
        title: 'Regulación emocional y autoestima',
        subtitle: 'Relación contigo mismo y con los demás',
        description:
          'Transformamos la autocrítica rígida en seguridad personal, alfabetización emocional y vínculos asertivos.',
        path: '/salud-emocional/regulacion-emocional-autoestima',
      },
    ],
  },
]

function SubAreaCard({ area }: { area: SubAreaItem }) {
  return (
    <Link
      to={area.path}
      onMouseEnter={() => prefetchRoute(area.path)}
      onFocus={() => prefetchRoute(area.path)}
      className="bullet-reveal-card area-subcard group flex flex-col justify-between rounded-xl p-5 text-left"
    >
      <div>
        <h4
          className="bullet-reveal-title mb-1.5 text-base font-bold leading-snug sm:text-[1.05rem]"
          style={{
            color: 'var(--editorial-ivory)',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <span className="bullet-reveal-dot" aria-hidden />
          <span className="bullet-reveal-text">{area.title}</span>
        </h4>
        <p
          className="mb-2.5 text-xs font-medium uppercase tracking-wider"
          style={{ color: 'var(--area-subcard-subtitle)' }}
        >
          {area.subtitle}
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--editorial-ivory-muted)' }}
        >
          {area.description}
        </p>
      </div>

      <div className="mt-4 flex justify-end">
        <span className="area-subcard-cta inline-flex items-center gap-1 text-xs font-medium">
          <span>Ver más</span>
          <span aria-hidden="true" className="area-subcard-cta-arrow">
            →
          </span>
        </span>
      </div>
    </Link>
  )
}

export function SpecializationsSection({ items: _items }: Props) {
  void _items
  const [activeTab, setActiveTab] = useState<string>(ACCORDION_CATEGORIES[0].id)
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(
    null,
  )
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const activeCategory =
    ACCORDION_CATEGORIES.find((cat) => cat.id === activeTab) ??
    ACCORDION_CATEGORIES[0]

  const ActiveIconComponent = activeCategory.icon
  const activeTitleParts = activeCategory.title.split(
    activeCategory.highlightWord,
  )

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const total = ACCORDION_CATEGORIES.length
    let nextIndex: number | null = null

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (index + 1) % total
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + total) % total
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = total - 1
    }

    if (nextIndex !== null) {
      event.preventDefault()
      const nextCategory = ACCORDION_CATEGORIES[nextIndex]
      setActiveTab(nextCategory.id)
      tabRefs.current[nextIndex]?.focus()
    }
  }

  const toggleMobileCategory = (categoryId: string) => {
    setOpenMobileCategory((prev) => (prev === categoryId ? null : categoryId))
  }

  return (
    <section
      id="especialidades"
      aria-labelledby="areas-atencion-heading"
      className="scroll-mt-16 py-24 md:scroll-mt-20 lg:py-32"
      style={{ backgroundColor: 'var(--bg-section-alt)' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-start lg:gap-12">
          {/* Columna Izquierda — Encabezado + Tabs (Desktop) / Acordeón (Mobile) */}
          <div className="text-left lg:sticky lg:top-32 lg:self-start">
            <h2
              id="areas-atencion-heading"
              className="mb-4 text-4xl leading-tight sm:text-5xl"
              style={{
                color: 'var(--editorial-ivory)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as
                  | 'none'
                  | 'uppercase',
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              <span className="andi-hero-accent">
                Áreas de{' '}
                <span className="font-editorial-accent">atención:</span>
              </span>
            </h2>

            <p
              className="max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--editorial-ivory-muted)' }}
            >
              Un enfoque{' '}
              <span
                className="font-editorial-accent"
                style={{ color: 'var(--editorial-coral)' }}
              >
                humano
              </span>{' '}
              <strong>y especializado</strong> para que vuelvas a{' '}
              <span
                className="font-editorial-accent"
                style={{ color: 'var(--editorial-coral)' }}
              >
                conectar contigo mismo
              </span>{' '}
              de una forma auténtica y libre de juicios.
            </p>

            {/* Vista Desktop (lg >= 1024px): Selector Vertical de 3 Pestañas */}
            <div
              role="tablist"
              aria-label="Categorías de áreas de atención"
              className="mt-8 hidden flex-col gap-3 lg:flex"
            >
              {ACCORDION_CATEGORIES.map((category, index) => {
                const isActive = category.id === activeCategory.id
                const TabIconComponent = category.icon

                return (
                  <button
                    key={category.id}
                    ref={(el) => {
                      tabRefs.current[index] = el
                    }}
                    id={`tab-${category.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tabpanel-${category.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTab(category.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                    className={`area-tab-btn flex w-full cursor-pointer items-center gap-4 rounded-xl px-5 py-4 text-left ${
                      isActive ? 'is-active' : ''
                    }`}
                  >
                    {category.customIconSrc ? (
                      <img
                        src={category.customIconSrc}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="h-11 w-11 shrink-0 rounded-lg object-contain transition-opacity duration-200"
                        style={{ opacity: isActive ? 1 : 0.78 }}
                      />
                    ) : (
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--editorial-coral)',
                        }}
                      >
                        {TabIconComponent && (
                          <TabIconComponent size={20} aria-hidden />
                        )}
                      </span>
                    )}

                    <span
                      className="min-w-0 flex-1 text-base font-semibold leading-snug"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {category.title}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Vista Mobile (< 1024px): Acordeón limpio sin duplicación de encabezados */}
            <div className="mt-8 flex flex-col gap-4 lg:hidden">
              {ACCORDION_CATEGORIES.map((category) => {
                const isOpen = openMobileCategory === category.id
                const MobileIconComponent = category.icon
                const titleParts = category.title.split(category.highlightWord)

                return (
                  <div
                    key={category.id}
                    className={`area-card area-card-mobile-frame overflow-hidden rounded-[1.35rem] transition-all duration-300 ${
                      isOpen ? 'is-open' : ''
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileCategory(category.id)}
                      aria-expanded={isOpen}
                      aria-controls={`mobile-panel-${category.id}`}
                      className="flex w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent p-4 text-left sm:p-5"
                    >
                      <div className="flex min-w-0 items-center gap-3.5">
                        {category.customIconSrc ? (
                          <img
                            src={category.customIconSrc}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                            className="h-11 w-11 shrink-0 rounded-xl object-contain"
                          />
                        ) : (
                          <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                            style={{
                              backgroundColor: 'var(--accent-soft)',
                              color: 'var(--editorial-coral)',
                            }}
                          >
                            {MobileIconComponent && (
                              <MobileIconComponent size={22} aria-hidden />
                            )}
                          </span>
                        )}

                        <h3
                          className="font-editorial text-lg leading-snug sm:text-xl"
                          style={{ color: 'var(--editorial-ivory)' }}
                        >
                          {titleParts.length > 1 ? (
                            <>
                              {titleParts[0]}
                              <span
                                className="font-editorial-accent"
                                style={{ color: 'var(--editorial-coral)' }}
                              >
                                {category.highlightWord}
                              </span>
                              {titleParts[1]}
                            </>
                          ) : (
                            category.title
                          )}
                        </h3>
                      </div>

                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300"
                        style={{
                          borderColor: isOpen
                            ? 'var(--area-subcard-border-hover)'
                            : 'var(--area-card-border)',
                          backgroundColor: isOpen
                            ? 'var(--area-tab-active-bg)'
                            : 'transparent',
                          color: isOpen
                            ? 'var(--editorial-coral)'
                            : 'var(--editorial-ivory-muted)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                        aria-hidden="true"
                      >
                        <ChevronDown size={18} />
                      </span>
                    </button>

                    {/* Contenido desplegable inmediato debajo del botón */}
                    <div
                      id={`mobile-panel-${category.id}`}
                      className="grid"
                      style={{
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        opacity: isOpen ? 1 : 0,
                        transition:
                          'grid-template-rows 340ms cubic-bezier(0.22, 1, 0.36, 1), opacity 260ms ease',
                      }}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="border-t px-4 pb-5 pt-4 sm:px-5 sm:pb-6"
                          style={{ borderColor: 'var(--area-card-divider)' }}
                        >
                          <p
                            className="text-sm leading-relaxed sm:text-base"
                            style={{ color: 'var(--editorial-ivory-muted)' }}
                          >
                            {category.subtitle}
                          </p>

                          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                            {category.areas.map((area) => (
                              <SubAreaCard key={area.path} area={area} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Columna Derecha — Vista Desktop (lg >= 1024px): Panel de Contenido Activo */}
          <div className="hidden min-w-0 lg:block lg:min-h-[680px]">
            <article
              key={activeCategory.id}
              id={`tabpanel-${activeCategory.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory.id}`}
              className="area-card area-card-hero-frame area-tabpanel-enter rounded-[1.75rem] p-6 sm:p-8"
            >
              {/* Cabecera de la categoría activa (ícono + título + subtítulo originales) */}
              <div className="flex items-start gap-4 sm:items-center sm:gap-5">
                {activeCategory.customIconSrc ? (
                  <img
                    src={activeCategory.customIconSrc}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-14 shrink-0 rounded-xl object-contain"
                  />
                ) : (
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner"
                    style={{
                      backgroundColor: 'var(--accent-soft)',
                      color: 'var(--editorial-coral)',
                    }}
                  >
                    {ActiveIconComponent && (
                      <ActiveIconComponent size={26} aria-hidden />
                    )}
                  </div>
                )}

                <div className="min-w-0">
                  <h3
                    className="font-editorial text-xl leading-snug sm:text-2xl"
                    style={{ color: 'var(--editorial-ivory)' }}
                  >
                    {activeTitleParts.length > 1 ? (
                      <>
                        {activeTitleParts[0]}
                        <span
                          className="font-editorial-accent"
                          style={{ color: 'var(--editorial-coral)' }}
                        >
                          {activeCategory.highlightWord}
                        </span>
                        {activeTitleParts[1]}
                      </>
                    ) : (
                      activeCategory.title
                    )}
                  </h3>
                  <p
                    className="mt-1.5 text-sm sm:text-base"
                    style={{ color: 'var(--editorial-ivory-muted)' }}
                  >
                    {activeCategory.subtitle}
                  </p>
                </div>
              </div>

              {/* Grilla de tarjetas de problemáticas (2 columnas en desktop) */}
              <div
                className="mt-6 grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-2"
                style={{ borderColor: 'var(--area-card-divider)' }}
              >
                {activeCategory.areas.map((area) => (
                  <SubAreaCard key={area.path} area={area} />
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
