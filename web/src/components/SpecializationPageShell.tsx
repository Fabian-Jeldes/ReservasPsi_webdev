import { useState, useMemo, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { Navbar } from './Navbar'
import { SiteFooter } from './SiteFooter'
import { AppointmentModal } from './AppointmentModal'
import { SEO } from './SEO'

export type InstitutionalReference = {
  organization: string
  title: string
  url: string
}

type SpecializationPageShellProps = {
  category: string
  title: string
  subtitle: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string
  children: ReactNode
  references: InstitutionalReference[]
  ctaTitle?: string
  ctaDescription?: string
}

export function SpecializationPageShell({
  category,
  title,
  subtitle,
  seoTitle,
  seoDescription,
  seoKeywords,
  children,
  references,
  ctaTitle = '¿Comenzamos a trabajar en esto?',
  ctaDescription = 'Agenda una sesión confidencial para evaluar tu situación con calma, sin juicios y con herramientas clínicas basadas en evidencia.',
}: SpecializationPageShellProps) {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: seoTitle,
      description: seoDescription,
      aspect: ['treatment', 'overview'],
      about: {
        '@type': 'MedicalCondition',
        name: title,
        description: seoDescription,
      },
      author: {
        '@type': 'Person',
        name: 'Ps. Andrei Andrusco Fidalgo',
        url: `${window.location.origin}/sobre-mi`,
      },
    }),
    [seoTitle, seoDescription, title]
  )

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        jsonLd={jsonLd}
      />
      <Navbar
        onLogoClick={() => navigate('/')}
        onAgendarClick={() => setIsBookingOpen(true)}
      />

      {/* Encabezado Principal con H1 */}
      <header className="mx-auto max-w-5xl px-6 pt-32 pb-16">
        <button
          type="button"
          onClick={() => navigate('/#especialidades')}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold transition-transform hover:-translate-x-1"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} style={{ color: 'var(--accent)' }} />
          Volver a Áreas de Atención
        </button>

        <div className="max-w-3xl">
          <div
            className="mb-4 inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
            style={{
              backgroundColor: 'var(--accent-soft)',
              color: 'var(--accent-text)',
              border: '1px solid var(--border-accent)',
            }}
          >
            {category}
          </div>

          <h1
            className="text-4xl md:text-6xl mb-5 leading-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              textTransform: 'var(--heading-transform)' as any,
              letterSpacing: 'var(--heading-spacing)',
            }}
          >
            {title}
          </h1>

          <p
            className="text-xl md:text-2xl leading-relaxed font-semibold"
            style={{ color: 'var(--accent-text)' }}
          >
            {subtitle}
          </p>
        </div>
      </header>

      <hr className="theme-divider mx-auto max-w-5xl" />

      {/* Cuerpo del Anexo SEO (Secciones H2 inyectadas desde cada página) */}
      <main className="mx-auto max-w-3xl px-6 py-16 space-y-14">
        {children}

        {/* Apartado de Referencias Institucionales y Científicas (H2) */}
        <section
          aria-labelledby="referencias-heading"
          className="border rounded-2xl p-6 md:p-8"
          style={{
            borderColor: 'var(--border-card)',
            backgroundColor: 'var(--bg-card)',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={20} style={{ color: 'var(--accent)' }} />
            <h2
              id="referencias-heading"
              className="text-xl md:text-2xl font-bold"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Referencias Institucionales y Evidencia Clínica
            </h2>
          </div>
          <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
            Información respaldada por guías clínicas y organismos internacionales de salud sexual y salud mental:
          </p>
          <ul className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {references.map((ref, idx) => (
              <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <strong style={{ color: 'var(--text-primary)' }}>{ref.organization}:</strong>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-opacity hover:opacity-80"
                  style={{ color: 'var(--accent-text)' }}
                >
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Llamada a la Acción (CTA con H2) */}
        <section
          aria-labelledby="cta-heading"
          className="mt-16 text-center p-10 md:p-12 border shadow-2xl relative overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-card-solid)',
            borderColor: 'var(--border-card)',
            borderRadius: 'var(--radius-card-lg)',
          }}
        >
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-accent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
              }}
            >
              {ctaTitle}
            </h2>
            <p
              className="text-lg mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {ctaDescription}
            </p>
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 inline-flex items-center gap-3 shadow-lg"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--text-inverse)',
                borderRadius: 'var(--radius-btn)',
              }}
            >
              Agendar consulta <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />

      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}

