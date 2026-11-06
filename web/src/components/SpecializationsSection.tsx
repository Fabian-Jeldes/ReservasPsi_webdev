import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Specialization } from '../types/site'

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
  icon?: any
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
    subtitle: 'Espacio seguro para reconectar con el deseo, la calma y el placer corporal',
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
    subtitle: 'Psicoterapia clínica enfocada en regulación emocional y bienestar integral',
    customIconSrc: iconAnimoUrl,
    areas: [
      {
        title: 'Trastornos de Ansiedad (Generalizada, social, crisis de pánico)',
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

export function SpecializationsSection({ items: _items }: Props) {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null)

  const toggleCategory = (id: string) => {
    setOpenCategoryId((prev) => (prev === id ? null : id))
  }
  return (
    <section
      id="especialidades"
      className="py-32"
      style={{ backgroundColor: 'var(--bg-section-alt)' }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2
            className="mb-4 text-4xl"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              textTransform: 'var(--heading-transform)' as any,
              letterSpacing: 'var(--heading-spacing)',
            }}
          >
            <span className="andi-hero-accent">
              Áreas de{' '}
              <span className="font-editorial-accent">atención:</span>
            </span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Un enfoque{' '}
            <span
              className="font-editorial-accent"
              style={{ color: 'var(--accent)' }}
            >
              humano
            </span>{' '}
            <strong>y especializado</strong> para que vuelvas a{' '}
            <span
              className="font-editorial-accent"
              style={{ color: 'var(--accent)' }}
            >
              conectar contigo mismo
            </span>{' '}
            de una forma auténtica y libre de juicios.
          </p>
        </div>

        {/* Menú Acordeón de 3 grandes categorías */}
        <div className="space-y-5">
          {ACCORDION_CATEGORIES.map((category) => {
            const isOpen = openCategoryId === category.id
            const IconComponent = category.icon
            const titleParts = category.title.split(category.highlightWord)

            return (
              <div
                key={category.id}
                className="border transition-all duration-300 overflow-hidden"
                style={{
                  borderRadius: 'var(--radius-card)',
                  borderColor: isOpen
                    ? 'var(--accent)'
                    : 'color-mix(in srgb, var(--accent) 70%, transparent)',
                  borderWidth: '1px',
                  backgroundColor: 'var(--bg-card)',
                  boxShadow: isOpen
                    ? 'var(--shadow-accent)'
                    : '0 12px 35px -12px rgba(255, 77, 77, 0.18), var(--shadow-card)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.boxShadow =
                    '0 16px 45px -10px rgba(255, 77, 77, 0.32), 0 0 20px rgba(255, 77, 77, 0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isOpen
                    ? 'var(--accent)'
                    : 'color-mix(in srgb, var(--accent) 70%, transparent)'
                  e.currentTarget.style.boxShadow = isOpen
                    ? 'var(--shadow-accent)'
                    : '0 12px 35px -12px rgba(255, 77, 77, 0.18), var(--shadow-card)'
                }}
              >
                {/* Botón Cabecera del Acordeón */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors gap-4"
                >
                  <div className="flex items-center gap-5">
                    {category.customIconSrc ? (
                      <img
                        src={category.customIconSrc}
                        alt={`Icono ${category.title}`}
                        className="h-14 w-14 shrink-0 object-contain transition-transform duration-300"
                        style={{
                          transform: isOpen ? 'scale(1.05)' : 'scale(1)',
                        }}
                      />
                    ) : (
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner transition-transform duration-300"
                        style={{
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--accent)',
                          transform: isOpen ? 'scale(1.05)' : 'scale(1)',
                        }}
                      >
                        {IconComponent && <IconComponent size={26} aria-hidden />}
                      </div>
                    )}
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold"
                        style={{
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {titleParts.length > 1 ? (
                          <>
                            {titleParts[0]}
                            <span
                              className="font-editorial-accent"
                              style={{ color: 'var(--accent)' }}
                            >
                              {category.highlightWord}
                            </span>
                            {titleParts[1]}
                          </>
                        ) : (
                          category.title
                        )}
                      </h3>
                      <p
                        className="mt-1 text-sm md:text-base"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300"
                    style={{
                      backgroundColor: isOpen ? 'var(--accent-soft)' : 'transparent',
                      color: isOpen ? 'var(--accent)' : 'var(--text-muted)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={22} />
                  </span>
                </button>

                {/* Contenido Desplegable */}
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div
                      className="stagger-grid-areas border-t p-6 md:px-8 md:pt-6 md:pb-10 grid gap-4 md:grid-cols-2"
                      style={{ borderColor: 'var(--border-primary)' }}
                    >
                      {category.areas.map((area) => (
                        <Link
                          key={area.path}
                          to={area.path}
                          className="bullet-reveal-card group rounded-xl border p-5 text-left transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                          style={{
                            borderColor: 'color-mix(in srgb, var(--accent) 45%, transparent)',
                            backgroundColor: 'var(--bg-primary)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent)'
                            e.currentTarget.style.boxShadow = 'var(--shadow-accent)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor =
                              'color-mix(in srgb, var(--accent) 45%, transparent)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        >
                          <div>
                            <div className="flex items-start justify-between gap-3">
                              <h4
                                className="bullet-reveal-title text-base md:text-lg font-bold mb-1 leading-snug"
                                style={{
                                  color: 'var(--text-primary)',
                                  fontFamily: 'var(--font-heading)',
                                }}
                              >
                                <span className="bullet-reveal-dot" aria-hidden />
                                <span className="bullet-reveal-text">
                                  {area.title}
                                </span>
                              </h4>
                              <span
                                className="bullet-reveal-arrow-btn mt-0.5"
                                aria-hidden
                              >
                                <ArrowUpRight
                                  size={15}
                                  className="bullet-reveal-arrow-icon"
                                />
                              </span>
                            </div>
                            <p
                              className="mb-2 text-xs font-bold uppercase tracking-wider"
                              style={{ color: 'var(--accent-text)' }}
                            >
                              {area.subtitle}
                            </p>
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              {area.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
