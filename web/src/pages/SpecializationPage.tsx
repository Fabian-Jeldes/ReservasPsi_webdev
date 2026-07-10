import { useParams, useNavigate } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { getSpecializationBySlug } from '../data/site'
import { useEffect, useMemo } from 'react'
import { SEO } from '../components/SEO'

export function SpecializationPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const data = slug ? getSpecializationBySlug(slug) : undefined

  useEffect(() => {
    if (slug && !data) {
      navigate('/', { replace: true })
    }
  }, [slug, data, navigate])

  const specSchema = useMemo(() => {
    if (!data) return undefined
    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      'name': `${data.title} | Ps. Andrei Andrusco`,
      'description': data.description,
      'aspect': ['treatment', 'overview'],
      'about': {
        '@type': 'MedicalCondition',
        'name': data.title,
        'description': data.description
      },
      'author': {
        '@type': 'Person',
        'name': 'Ps. Andrei Andrusco Fidalgo',
        'url': `${window.location.origin}/sobre-mi`
      }
    }
  }, [data])

  const specKeywords = useMemo(() => {
    const keywordMap: Record<string, string> = {
      'disfuncion-erectil-psicogena': 'disfuncion erectil psicogena santiago, impotencia psicologica, ansiedad sexual masculina, sexologo santiago',
      'control-eyaculatorio': 'eyaculacion precoz santiago, eyaculacion retardada chile, control eyaculatorio, tratamiento sexual precoz',
      'cambios-deseo-sexual': 'bajo deseo sexual masculino, perdida de libido hombre, estres y deseo sexual, sexologia chile',
      'ansiedad-desempeno': 'ansiedad de desempeño sexual, miedo a fallar en la cama, bloqueo de ereccion por nervios, sexologo online',
      'comunicacion-sexual': 'terapia de pareja santiago, comunicacion sexual en la pareja, timidez en el sexo, resolver problemas de pareja',
      'impacto-pornografia': 'adiccion al porno chile, disfuncion erectil por pornografia, desintoxicacion dopamina porno, reiniciar deseo sexual'
    }
    return keywordMap[slug || ''] || 'sexologia clinica santiago, psicologo clinico online, terapia sexual chile'
  }, [slug])

  if (!data) return null

  const goHome = () => navigate('/')
  const goKyc = () => navigate('/#reserva')

  return (
    <div 
      className="min-h-screen" 
      style={{ 
        backgroundColor: 'var(--bg-primary)', 
        color: 'var(--text-primary)', 
        fontFamily: 'var(--font-body)' 
      }}
    >
      <SEO
        title={`${data.title} | Ps. Andrei Andrusco - Sexología en Santiago`}
        description={data.description}
        keywords={specKeywords}
        jsonLd={specSchema}
      />
      <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />

      {/* Hero Section */}
      <header className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div 
            className="mb-4 inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full" 
            style={{ 
              backgroundColor: 'var(--accent-soft)', 
              color: 'var(--accent-text)', 
              border: '1px solid var(--border-accent)' 
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
              letterSpacing: 'var(--heading-spacing)' 
            }}
          >
            {data.title}
          </h1>

          <p 
            className="text-xl md:text-2xl leading-relaxed font-semibold mb-6" 
            style={{ color: 'var(--accent-text)' }}
          >
            {data.subtitle}
          </p>

          <p 
            className="text-lg md:text-xl leading-relaxed" 
            style={{ color: 'var(--text-secondary)' }}
          >
            {data.description}
          </p>
        </div>
      </header>

      {/* Divider */}
      <hr className="theme-divider mx-auto max-w-6xl" />

      {/* Specialty Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-8 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
          className="mt-16 p-8 border-l-4" 
          style={{ 
            backgroundColor: 'var(--accent-soft)', 
            borderColor: 'var(--accent)', 
            borderRadius: '0 var(--radius-card) var(--radius-card) 0' 
          }}
        >
          <h4 className="font-black uppercase tracking-widest mb-3 text-sm" style={{ color: 'var(--accent-text)' }}>
            Nuestro Abordaje en Consulta
          </h4>
          <p className="leading-relaxed text-lg" style={{ color: 'var(--text-primary)' }}>
            A través de sesiones confidenciales, desarmamos las presiones y miedos que bloquean tu cuerpo. Te entrego herramientas cognitivas y ejercicios prácticos de reconexión corporal para recuperar tu bienestar sexual desde la seguridad y la comprensión, sin juicios.
          </p>
        </aside>

        {/* References */}
        {data.references && data.references.length > 0 && (
          <div className="mt-16 mb-12">
            <details className="group border rounded-2xl animate-fade-in" style={{ borderColor: 'var(--border-card)', backgroundColor: 'var(--bg-card-solid)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold uppercase tracking-widest text-sm" style={{ color: 'var(--text-primary)' }}>
                <span>Evidencia Científica y Referencias</span>
                <ChevronRight size={20} className="transition-transform group-open:rotate-90" style={{ color: 'var(--accent)' }} />
              </summary>
              <div className="p-6 pt-0 border-t" style={{ borderColor: 'var(--border-card)' }}>
                <ul className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {data.references.map((ref, rIdx) => (
                    <li key={rIdx} dangerouslySetInnerHTML={{ __html: ref }} className="hover:text-[var(--accent-text)] transition-colors" />
                  ))}
                </ul>
              </div>
            </details>
          </div>
        )}

        {/* CTA */}
        <section 
          className="mt-20 text-center p-12 border shadow-2xl relative overflow-hidden" 
          style={{ 
            backgroundColor: 'var(--bg-card-solid)', 
            borderColor: 'var(--border-card)', 
            borderRadius: 'var(--radius-card-lg)' 
          }}
        >
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-accent to-transparent pointer-events-none" />
          <div className="relative z-10 animate-fade-in">
            <h3 
              className="text-3xl md:text-4xl mb-6" 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 'var(--heading-weight)' 
              }}
            >
              ¿Comenzamos a trabajar en esto?
            </h3>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Reserva una hora para conversar tranquilos y evaluar tu caso en un espacio seguro, humano y profesional.
            </p>
            <button
              onClick={goKyc}
              className="px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 flex items-center gap-3 mx-auto shadow-lg"
              style={{ 
                backgroundColor: 'var(--accent)', 
                color: 'var(--text-inverse)', 
                borderRadius: 'var(--radius-btn)' 
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
