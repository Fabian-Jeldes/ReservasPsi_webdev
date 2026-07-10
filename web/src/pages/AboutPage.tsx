import { useState, useCallback, useMemo } from 'react'
import { MapPin, GraduationCap, Heart, Briefcase, ArrowRight } from 'lucide-react'
import { ABOUT_PAGE_DATA } from '../data/site'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { AppointmentModal } from '../components/AppointmentModal'
import { SEO } from '../components/SEO'

export function AboutPage() {
  const data = ABOUT_PAGE_DATA
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const openBooking = useCallback(() => {
    setIsAppointmentModalOpen(true)
  }, [])

  const aboutSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'Person',
      'name': 'Andrei Andrusco Fidalgo',
      'jobTitle': 'Psicólogo Clínico y Sexólogo',
      'alumniOf': {
        '@type': 'EducationalOrganization',
        'name': 'Universidad Adolfo Ibáñez'
      },
      'description': 'Psicólogo Clínico y Sexólogo con Magíster en Psicología Clínica y diplomados en Sexología Clínica, especializado en disfunciones sexuales psicógenas.',
      'image': `${window.location.origin}/sobre-mi-andi.jpg`
    }
  }), [])

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
      <Navbar onLogoClick={() => window.location.href = '/'} onAgendarClick={openBooking} />

      {/* ── Hero Section ── */}
      <header className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, var(--accent-glow) 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          {/* Title */}
          <div className="mb-4">
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: 'var(--accent-text)' }}
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
            <div className="flex-1 order-2 lg:order-1">
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--text-primary)', lineHeight: 'var(--body-line-height)' }}
                dangerouslySetInnerHTML={{ __html: data.intro }}
              />
            </div>
            <div className="relative flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0">
              <div
                className="absolute inset-0 blur-[40px] transition-all duration-700"
                style={{ backgroundColor: 'var(--accent-soft)', borderRadius: '50%' }}
              />
              <div
                className="relative overflow-hidden border w-full max-w-md lg:w-[360px]"
                style={{
                  borderRadius: 'var(--radius-card-lg)',
                  borderColor: 'var(--border-card)',
                  borderWidth: 'var(--card-border-width)',
                  boxShadow: 'var(--shadow-card)',
                  aspectRatio: '16 / 10',
                }}
              >
                <img
                  src={data.imageUrl}
                  alt="Andrei Andrusco Fidalgo, psicólogo clínico y sexólogo"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Divider ── */}
      <hr className="theme-divider mx-auto max-w-5xl" />

      {/* ── Content Sections ── */}
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24 space-y-16 md:space-y-24">

        {/* Mi enfoque */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
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
          <div className="space-y-5">
            {data.enfoque.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--body-line-height)',
                  fontSize: 'var(--article-body-size)',
                }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </section>

        <hr className="theme-divider" />

        {/* Formación */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
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
              <span style={{ color: 'var(--accent)' }}>sesión sexología</span>
            </h2>
          </div>
          <div className="space-y-5">
            {data.formacion.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--body-line-height)',
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
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
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
            className="mb-8 text-base md:text-lg leading-relaxed"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 'var(--body-line-height)',
              fontSize: 'var(--article-body-size)',
            }}
          >
            {data.donde.intro}
          </p>

          <div className="space-y-5">
            {data.donde.workplaces.map((wp, i) => (
              <div
                key={i}
                className="group relative border p-6 transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  borderRadius: 'var(--radius-card)',
                  borderColor: 'var(--border-card)',
                  borderWidth: 'var(--card-border-width)',
                  backgroundColor: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    borderRadius: 'var(--radius-card)',
                    background: 'radial-gradient(circle at center, var(--accent-soft) 0%, transparent 70%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
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
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: 'var(--text-secondary)', lineHeight: 'var(--body-line-height)' }}
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
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
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
              <span style={{ color: 'var(--accent)' }}>ofrezco</span>?
            </h2>
          </div>
          <div className="space-y-5">
            {data.ofrezco.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--body-line-height)',
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
            borderColor: 'var(--border-card)',
            borderWidth: 'var(--card-border-width)',
            backgroundColor: 'var(--bg-card)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div
            className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"
            style={{
              background: 'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            {data.cierre.map((p, i) => (
              <p
                key={i}
                className="text-lg md:text-xl leading-relaxed mb-8"
                style={{
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--body-line-height)',
                  fontFamily: 'var(--font-heading)',
                }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            <button
              type="button"
              onClick={openBooking}
              className="group/btn inline-flex items-center gap-2 px-10 py-5 font-bold text-lg transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--text-inverse)',
                borderRadius: 'var(--radius-btn)',
                boxShadow: 'var(--shadow-accent)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-accent-lg)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-accent)')}
            >
              Agendar una sesión
              <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
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
