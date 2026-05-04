import { useNavigate } from 'react-router-dom'
import { Infinity, ArrowDown } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'

export function Article2() {
  const navigate = useNavigate()
  const goHome = () => navigate('/')
  const goKyc = () => navigate('/#consentimiento')

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
      <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />
      
      {/* Hero Section */}
      <header className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: 'var(--accent)' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                Regulación Emocional
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl leading-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>
              Ansiedad y <span className="italic" style={{ color: 'var(--accent-text)' }}>Deseo</span>
            </h1>
            
            <div className="mt-8 space-y-6 text-xl leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Cuando la mente entra en modo alerta, el placer se apaga. Entiende qué pasa en tu sistema nervioso y cómo recuperar seguridad corporal.
              </p>
            </div>

            <button
              onClick={() => document.getElementById('contenido')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-8 py-4 font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-btn)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            >
              Comenzar la lectura <ArrowDown size={20} />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div 
              className="w-full max-w-sm aspect-square rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl"
              style={{ backgroundColor: 'var(--bg-card-solid)', borderColor: 'var(--border-accent)', borderWidth: 'var(--card-border-width)' }}
            >
              {/* Diffused glow behind */}
              <div className="absolute inset-0 opacity-50 blur-[80px]" style={{ backgroundColor: 'var(--accent)' }} />
              <Infinity size={80} style={{ color: 'var(--accent)', position: 'relative', zIndex: 10 }} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article id="contenido" className="mx-auto max-w-3xl px-6 py-20 space-y-16">
        <section>
          <h2 className="text-4xl mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>Ansiedad y deseo: cuando sobrevivir compite con disfrutar</h2>
          <blockquote className="text-2xl italic border-l-4 pl-6 mb-8" style={{ borderColor: 'var(--accent)', color: 'var(--text-secondary)' }}>
            "Si tu cabeza está en la amenaza, tu cuerpo no puede entregarse al placer. No es falla tuya: es neurobiología."
          </blockquote>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            <p>
              La ansiedad no es solo un estado mental. Es una señal corporal de peligro. Cuando aparece, el organismo prioriza defenderse y no vincularse. Por eso muchas personas notan que su deseo baja justo en etapas de estrés intenso, presión laboral o conflictos de pareja.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-3xl mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>El cuerpo no distingue entre examen y encuentro íntimo</h3>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            <p>
              El sistema nervioso simpático se activa frente a amenazas reales o percibidas: acelera el corazón, sube la tensión muscular y mantiene tu atención en el control. Ese estado es incompatible con la respuesta erótica, que necesita seguridad, presencia y disponibilidad emocional.
            </p>
            <p>
              Dicho simple: no puedes estar al mismo tiempo en modo alerta y modo conexión profunda. Cuando te exiges rendir, tu cuerpo interpreta evaluación, no intimidad.
            </p>
          </div>
          
          <aside className="mt-8 p-6 border-l-4" style={{ backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent)', borderRadius: 'var(--radius-card)' }}>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--accent-text)' }}>Dato clínico</h4>
            <p style={{ color: 'var(--text-primary)' }}>
              La respiración superficial y el automonitoreo constante aumentan el círculo ansiedad-rendimiento-frustración. Interrumpir ese ciclo es parte central del tratamiento.
            </p>
          </aside>
        </section>

        <section>
          <h3 className="text-3xl mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>Cómo vuelve el deseo</h3>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            <p>
              El deseo no siempre aparece antes del contacto. Muchas veces emerge durante la cercanía, la confianza y la reducción de presión. A esto se le llama deseo responsivo: primero hay condiciones de seguridad, luego llega la motivación erótica.
            </p>
            <p>
              Por eso trabajamos en terapia con regulación fisiológica, lenguaje interno menos castigador y acuerdos concretos con la pareja para sacar el foco del rendimiento y devolverlo a la experiencia compartida.
            </p>
          </div>
        </section>

        <div className="my-16 text-center py-12 border-y border-dashed" style={{ borderColor: 'var(--accent)' }}>
          <h3 className="text-2xl italic mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>Una clave práctica</h3>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            No pelees contra la ansiedad como si fuera enemiga: léela como una señal. Cuando aprendes a regularla, dejas de sentirte roto y vuelves a habitar tu cuerpo con menos miedo.
          </p>
        </div>

        <section className="text-center p-12 shadow-xl" style={{ backgroundColor: 'var(--bg-card-solid)', borderRadius: 'var(--radius-card-lg)' }}>
          <h3 className="text-3xl mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>¿Te pasa seguido?</h3>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Podemos trabajar estrategias claras para salir del modo alerta y recuperar conexión contigo y con tu pareja.
          </p>
          <button
            onClick={goKyc}
            className="px-8 py-4 font-bold transition-transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-btn)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          >
            Agendar acompañamiento
          </button>
        </section>
      </article>

      <SiteFooter />
    </div>
  )
}
