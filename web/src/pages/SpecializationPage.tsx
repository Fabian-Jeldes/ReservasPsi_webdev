import { useParams, useNavigate } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { getSpecializationBySlug } from '../data/site'
import { NotFoundPage } from './NotFoundPage'

export function SpecializationPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const data = slug ? getSpecializationBySlug(slug) : undefined

  if (!data) return <NotFoundPage />

  const goHome = () => navigate('/')
  const goKyc = () => navigate('/#reserva')

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />

      {/* Hero Section */}
      <header className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div
            className="mb-4 inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
            style={{
              backgroundColor: 'var(--accent-soft)',
              color: 'var(--accent-text)',
              border: '1px solid var(--border-accent)',
            }}
          >
            Área de Especialización
          </div>
          <h1
            className="text-4xl md:text-6xl mb-6 leading-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              textTransform: 'var(--heading-transform)' as any,
              letterSpacing: 'var(--heading-spacing)',
            }}
          >
            {data.title}
          </h1>

          <p
            className="text-xl md:text-2xl leading-relaxed font-semibold mb-6 max-w-prose"
            style={{ color: 'var(--accent-text)' }}
          >
            {data.subtitle}
          </p>

          <p
            className="text-lg md:text-xl leading-[1.82] max-w-prose"
            style={{ color: 'var(--text-secondary)' }}
          >
            {data.description}
          </p>
        </div>
      </header>

      {/* Divider */}
      <hr className="theme-divider mx-auto max-w-6xl" />

      {/* Specialty Content */}
      <main className="editorial-prose mx-auto max-w-3xl px-6 py-16">
        <div
          className="space-y-8 max-w-prose text-lg leading-[1.82]"
          style={{ color: 'var(--text-secondary)' }}
        >
          {data.detailedContent && data.detailedContent.length > 0 ? (
            data.detailedContent.map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
            ))
          ) : (
            <p dangerouslySetInnerHTML={{ __html: data.moreContent }} />
          )}
        </div>

        {/* Clinical Note / Focus */}
        <aside
          className="clinical-callout mt-16 max-w-prose"
          style={{
            borderLeft: '5px solid var(--accent)',
          }}
        >
          <h4
            className="font-black uppercase tracking-widest mb-3 text-sm"
            style={{ color: 'var(--accent-text)' }}
          >
            Nuestro Abordaje en Consulta
          </h4>
          <p
            className="leading-[1.8] text-lg"
            style={{ color: 'var(--text-primary)' }}
          >
            A través de sesiones confidenciales, desarmamos las presiones y miedos que bloquean tu cuerpo. Te entrego herramientas cognitivas y ejercicios prácticos de reconexión corporal para recuperar tu bienestar sexual desde la seguridad y la comprensión, sin juicios.
          </p>
        </aside>

        {/* References */}
        {data.references && data.references.length > 0 && (
          <div className="mt-16 mb-12 max-w-prose">
            <details className="group clinical-callout p-0 overflow-hidden animate-fade-in">
              <summary
                className="flex items-center justify-between p-6 cursor-pointer list-none font-bold uppercase tracking-widest text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                <span>Evidencia Científica y Referencias</span>
                <ChevronRight
                  size={20}
                  className="transition-transform group-open:rotate-90"
                  style={{ color: 'var(--accent)' }}
                />
              </summary>
              <div
                className="p-6 pt-4 border-t"
                style={{ borderColor: 'var(--border-primary)' }}
              >
                <ul
                  className="space-y-4 text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {data.references.map((ref, rIdx) => (
                    <li
                      key={rIdx}
                      dangerouslySetInnerHTML={{ __html: ref }}
                      className="hover:text-[var(--accent-text)] transition-colors"
                    />
                  ))}
                </ul>
              </div>
            </details>
          </div>
        )}

        {/* CTA */}
        <section
          className="mt-20 text-center p-10 md:p-12 border relative overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-card-solid)',
            borderColor: 'var(--accent)',
            borderWidth: '1.5px',
            borderRadius: 'var(--radius-card-lg)',
            boxShadow:
              '0 20px 55px -12px rgba(255, 77, 77, 0.28), 0 8px 30px -6px rgba(0, 0, 0, 0.45)',
          }}
        >
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-accent to-transparent pointer-events-none" />
          <div className="relative z-10 animate-fade-in">
            <h3
              className="text-3xl md:text-4xl mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
              }}
            >
              ¿Comenzamos a trabajar en esto?
            </h3>
            <p
              className="text-lg mb-10 max-w-xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Reserva una hora para conversar tranquilos y evaluar tu caso en un espacio seguro, humano y profesional.
            </p>
            <button
              onClick={goKyc}
              className="px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 flex items-center gap-3 mx-auto shadow-lg cursor-pointer"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                borderRadius: 'var(--radius-btn)',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              Ver disponibilidad directa <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
