import { useState, useCallback } from 'react'
import { MapPin, GraduationCap, Heart, Briefcase, ArrowRight } from 'lucide-react'
import { ABOUT_PAGE_DATA } from '../data/site'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { AppointmentModal } from '../components/AppointmentModal'

export function AboutPage() {
  const data = ABOUT_PAGE_DATA
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const openBooking = useCallback(() => {
    setIsAppointmentModalOpen(true)
  }, [])

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar
        onLogoClick={() => (window.location.href = '/')}
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
            Sobre <span style={{ color: 'var(--accent)' }}>mí</span>
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
            <div className="relative flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0">
              <div
                className="absolute inset-0 blur-[45px] transition-all duration-700"
                style={{
                  backgroundColor: 'var(--accent-glow)',
                  borderRadius: '50%',
                }}
              />
              <div
                className="relative overflow-hidden border-2 p-2 w-full max-w-md lg:w-[380px]"
                style={{
                  borderRadius: 'var(--radius-card-lg)',
                  borderColor: 'var(--accent)',
                  backgroundColor: 'var(--bg-card)',
                  boxShadow:
                    'var(--shadow-photo-frame, 0 24px 60px -12px rgba(255, 77, 77, 0.38))',
                  aspectRatio: '16 / 10',
                }}
              >
                <img
                  src={data.imageUrl}
                  alt="Andrei Andrusco Fidalgo, psicólogo clínico y sexólogo"
                  width={1200}
                  height={675}
                  fetchPriority="high"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  style={{ borderRadius: 'var(--radius-card)' }}
                />
              </div>
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
              <span style={{ color: 'var(--accent)' }}>{data.enfoque.title}</span>
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
              <span style={{ color: 'var(--accent)' }}>sesión sexológica</span>
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
              ¿<span style={{ color: 'var(--accent)' }}>Dónde</span> me encuentras?
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
            {data.donde.workplaces.map((wp, i) => (
              <div
                key={i}
                className="clinical-callout group relative transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative z-10">
                  <div className="flex flex-wrap items-baseline gap-2.5 mb-2.5">
                    <h3
                      className="text-lg font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {wp.name}
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
                  <p
                    className="text-sm md:text-base leading-[1.78]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {wp.description}
                  </p>
                </div>
              </div>
            ))}
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
              ¿Qué te <span style={{ color: 'var(--accent)' }}>ofrezco</span>?
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
