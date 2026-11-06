import { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, GraduationCap, Heart, Briefcase, ArrowRight, ArrowUpRight } from 'lucide-react'
import { ABOUT_PAGE_DATA } from '../data/site'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { AppointmentModal } from '../components/AppointmentModal'
import { ElasticBorderCard } from '../components/ElasticBorderCard'
import { SEO } from '../components/SEO'

export function AboutPage() {
  const data = ABOUT_PAGE_DATA
  const navigate = useNavigate()
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const openBooking = useCallback(() => {
    setIsAppointmentModalOpen(true)
  }, [])

  const aboutSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      mainEntity: {
        '@type': 'Person',
        name: 'Andrei Andrusco Fidalgo',
        jobTitle: 'Psicólogo Clínico y Sexólogo',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Universidad Adolfo Ibáñez',
        },
        description:
          'Psicólogo Clínico y Sexólogo con Magíster en Psicología Clínica y diplomados en Sexología Clínica, especializado en disfunciones sexuales psicógenas.',
        image: `${window.location.origin}/sobre-mi-andi.jpg`,
      },
    }),
    []
  )

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <SEO
        title="Sobre mí | Ps. Andrei Andrusco - Formación y Enfoque Clínico"
        description="Conoce la trayectoria y formación del Ps. Andrei Andrusco, Psicólogo Clínico y Sexólogo. Especialista con Magíster en Psicología y diplomados en Sexología Clínica."
        keywords="Andrei Andrusco Fidalgo, sexólogo clínico Chile, psicólogo online Chile, terapia sexología clínica, formación UAI"
        jsonLd={aboutSchema}
      />
      <Navbar
        onLogoClick={() => navigate('/')}
        onAgendarClick={openBooking}
      />

      {/* ── Hero Section ── */}
      <header className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, var(--accent-glow) 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          {/* Title */}
          <div className="mb-4">
            <span
              className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent-text)',
                border: '1px solid var(--border-accent)',
              }}
            >
              Conóceme
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl mb-8"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              textTransform: 'var(--heading-transform)' as any,
              letterSpacing: 'var(--heading-spacing)',
            }}
          >
            Sobre{' '}
            <span
              className="font-editorial-accent"
              style={{ color: 'var(--accent)' }}
            >
              mí
            </span>
          </h1>

          {/* Intro + Image */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex-1 order-2 lg:order-1 max-w-prose">
              <p
                className="text-lg md:text-xl leading-[1.82]"
                style={{
                  color: 'var(--text-primary)',
                }}
                dangerouslySetInnerHTML={{ __html: data.intro }}
              />
            </div>
            <div className="group relative flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0">
              <div
                className="pointer-events-none absolute inset-0 blur-[45px] transition-all duration-700 group-hover:blur-[65px]"
                style={{
                  backgroundColor: 'var(--accent-glow)',
                  borderRadius: '50%',
                }}
              />
              <ElasticBorderCard
                className="w-full max-w-md lg:w-[380px]"
                style={{ aspectRatio: '16 / 10' }}
                cornerRadius={24}
                maxPull={20}
                borderWidth={2}
                restingStrokeOpacity={0.9}
                innerPadding={8}
                backgroundColor="var(--bg-card)"
                boxShadow="var(--shadow-photo-frame, 0 24px 60px -12px rgba(255, 77, 77, 0.38))"
              >
                <img
                  src={data.imageUrl}
                  alt="Andrei Andrusco Fidalgo, psicólogo clínico y sexólogo"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </ElasticBorderCard>
            </div>
          </div>
        </div>
      </header>

      {/* ── Divider ── */}
      <hr className="theme-divider mx-auto max-w-5xl" />

      {/* ── Content Sections ── */}
      <main className="editorial-prose mx-auto max-w-3xl px-6 py-16 md:py-24 space-y-16 md:space-y-24">
        {/* Mi enfoque */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
                borderColor: 'var(--border-accent)',
              }}
            >
              <Heart size={20} />
            </div>
            <h2
              className="text-2xl md:text-3xl"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as any,
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              Mi enfoque:{' '}
              <span
                className="font-editorial-accent"
                style={{ color: 'var(--accent)' }}
              >
                {data.enfoque.title}
              </span>
            </h2>
          </div>

          <div className="space-y-6 max-w-prose">
            {data.enfoque.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-[1.82]"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--article-body-size)',
                }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>

          <blockquote className="editorial-blockquote">
            &ldquo;Un espacio seguro, horizontal y libre de juicios donde tu historia, tus emociones y tu sexualidad se abordan con rigor científico y profunda calidez humana.&rdquo;
          </blockquote>
        </section>

        <hr className="theme-divider" />

        {/* Formación (Callout Clínico / Académico) */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
                borderColor: 'var(--border-accent)',
              }}
            >
              <GraduationCap size={20} />
            </div>
            <h2
              className="text-2xl md:text-3xl"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as any,
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              La ciencia detrás de la{' '}
              <span
                className="font-editorial-accent"
                style={{ color: 'var(--accent)' }}
              >
                sesión sexológica
              </span>
            </h2>
          </div>

          <div className="clinical-callout space-y-5 max-w-prose">
            {data.formacion.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-[1.82]"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--article-body-size)',
                }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </section>

        <hr className="theme-divider" />

        {/* Dónde me encuentras */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
                borderColor: 'var(--border-accent)',
              }}
            >
              <MapPin size={20} />
            </div>
            <h2
              className="text-2xl md:text-3xl"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as any,
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              ¿
              <span
                className="font-editorial-accent"
                style={{ color: 'var(--accent)' }}
              >
                Dónde
              </span>{' '}
              me encuentras?
            </h2>
          </div>
          <p
            className="mb-8 max-w-prose text-base md:text-lg leading-[1.82]"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--article-body-size)',
            }}
          >
            {data.donde.intro}
          </p>

          <div className="space-y-5 max-w-prose">
            {data.donde.workplaces.map((wp, i) => {
              const cardContent = (
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex flex-wrap items-baseline gap-2.5">
                      <h3
                        className="bullet-reveal-title text-lg font-bold leading-snug"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <span className="bullet-reveal-dot" aria-hidden />
                        <span className="bullet-reveal-text">{wp.name}</span>
                      </h3>
                      <span
                        className="rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--accent-text)',
                          border: '1px solid var(--border-accent)',
                        }}
                      >
                        {wp.modality}
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        [{wp.since}]
                      </span>
                    </div>

                    {wp.url && (
                      <span
                        className="bullet-reveal-arrow-btn mt-0.5"
                        aria-hidden
                      >
                        <ArrowUpRight
                          size={15}
                          className="bullet-reveal-arrow-icon"
                        />
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm md:text-base leading-[1.78]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {wp.description}
                  </p>
                </div>
              )

              return wp.url ? (
                <a
                  key={i}
                  href={wp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar sitio web oficial de ${wp.name} (se abre en una pestaña nueva)`}
                  className="bullet-reveal-card clinical-callout clinical-callout-link group relative"
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={i}
                  className="bullet-reveal-card clinical-callout group relative transition-all duration-300 hover:-translate-y-0.5"
                >
                  {cardContent}
                </div>
              )
            })}
          </div>
        </section>

        <hr className="theme-divider" />

        {/* Qué te ofrezco */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
                borderColor: 'var(--border-accent)',
              }}
            >
              <Briefcase size={20} />
            </div>
            <h2
              className="text-2xl md:text-3xl"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as any,
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              ¿Qué te{' '}
              <span
                className="font-editorial-accent"
                style={{ color: 'var(--accent)' }}
              >
                ofrezco
              </span>
              ?
            </h2>
          </div>
          <div className="space-y-6 max-w-prose">
            {data.ofrezco.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-[1.82]"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--article-body-size)',
                }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </section>

        <hr className="theme-divider" />

        {/* Cierre motivacional */}
        <section
          className="relative border p-8 md:p-12 text-center overflow-hidden group"
          style={{
            borderRadius: 'var(--radius-card-lg)',
            borderColor: 'var(--accent)',
            borderWidth: '1.5px',
            backgroundColor: 'var(--bg-card)',
            boxShadow:
              '0 20px 55px -12px rgba(255, 77, 77, 0.28), 0 8px 30px -6px rgba(0, 0, 0, 0.45)',
          }}
        >
          <div
            className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"
            style={{
              background:
                'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            {data.cierre.map((p, i) => (
              <p
                key={i}
                className="text-lg md:text-xl leading-relaxed mb-8 max-w-prose mx-auto"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            <button
              type="button"
              onClick={openBooking}
              className="group/btn inline-flex items-center gap-2 px-10 py-5 font-bold text-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                borderRadius: 'var(--radius-btn)',
                boxShadow: 'var(--shadow-accent)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = 'var(--shadow-accent-lg)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = 'var(--shadow-accent)')
              }
            >
              Agendar una sesión
              <ArrowRight
                size={18}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  )
}
