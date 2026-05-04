import { useNavigate } from 'react-router-dom'
import { Globe2, ArrowRight } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'

export function Article1() {
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
            <h1 className="text-6xl md:text-7xl leading-[1.1]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>
              Más allá<br />
              del<br />
              <span style={{ color: 'var(--accent)', textShadow: 'var(--shadow-accent-lg)' }}>
                Rendimiento
              </span>
            </h1>
            
            <div className="mt-8 space-y-6 text-lg leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
              <p>
                ¿Por qué la exigencia de estar siempre listo te está apagando? Un espacio para hombres que buscan entender su sexualidad desde la humanidad, no desde la máquina.
              </p>
            </div>

            <button
              onClick={() => document.getElementById('contenido')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-xl"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-btn)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            >
              Explorar el artículo
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div 
              className="w-full max-w-md aspect-square flex items-center justify-center border"
              style={{ backgroundColor: 'var(--bg-card-solid)', borderColor: 'var(--border-accent)', borderRadius: 'var(--radius-card-lg)' }}
            >
              <Globe2 size={180} strokeWidth={1} style={{ color: 'var(--accent)' }} />
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article id="contenido" className="mx-auto max-w-3xl px-6 py-20 space-y-20">
        <section>
          <p className="font-bold uppercase tracking-widest text-sm mb-4" style={{ color: 'var(--accent-text)' }}>Consulta especializada</p>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>
            Por qué no eres una máquina (y por qué entenderlo cambiará tu vida sexual)
          </h2>
          
          <blockquote className="text-2xl font-bold italic border-l-4 pl-6 mb-12" style={{ color: 'var(--text-muted)', borderColor: 'var(--accent)' }}>
            "Como psicólogo y sexólogo clínico, paso gran parte de mi día escuchando a hombres que, quizás como tú, sienten que cargan con un peso invisible..."
          </blockquote>

          <div className="space-y-6 text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              Hoy quiero que hablemos de esto con calma, de corazón a corazón. Quiero contarte por qué esa idea de ser un hombre máquina no solo es un mito, sino que es la trampa que muchas veces nos apaga y nos aleja de lo que realmente somos: seres humanos con derecho a fallar, a sentir y a conectar de verdad.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        <section>
          <h3 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>El peso invisible de la caja y el mito de la máquina</h3>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              A menudo, en la consulta, veo que los problemas de erección o de deseo no empiezan en el cuerpo, sino en una educación que nos encierra en lo que los investigadores llaman la caja de la masculinidad. Esta especie de jaula invisible nos impone reglas rígidas desde niños: no llores, no pidas ayuda, sé autosuficiente y, sobre todo, ten siempre el control.
            </p>
            <p>
              Uno de los pilares más pesados de esta trampa es el mito del hombre máquina. Se nos ha enseñado que nuestro deseo es como un botón de encendido automático: siempre listo, siempre reactivo.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>El modo evaluación</h3>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              Esta exigencia es peligrosa porque nos convierte en jueces de nuestro propio cuerpo. En psicología llamamos a esto espectadorismo: en lugar de estar presente y disfrutando del momento, estás fuera de ti mismo, evaluando si tu erección es lo suficientemente firme o preocupado por cuánto vas a durar.
            </p>
            <p>
              Quiero que te quedes con algo importante: el deseo no siempre es espontáneo, y eso es completamente normal. La sexología ha demostrado que muchos hombres experimentamos lo que se conoce como deseo responsivo. Esto significa que las ganas de intimidad pueden surgir después de empezar a conectar, del contacto físico o de sentirnos emocionalmente seguros.
            </p>
          </div>
          
          <aside className="mt-12 p-8 border-l-4" style={{ backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent)', borderTopRightRadius: 'var(--radius-card)', borderBottomRightRadius: 'var(--radius-card)' }}>
            <h4 className="font-black uppercase tracking-widest mb-3" style={{ color: 'var(--accent-text)' }}>Dato clínico</h4>
            <p className="leading-relaxed text-lg" style={{ color: 'var(--text-primary)' }}>
              La ansiedad por rendir activa el sistema nervioso simpático, el cual, irónicamente, bloquea la respuesta sexual física como mecanismo de defensa ante el estrés.
            </p>
          </aside>
        </section>

        <div className="py-12 text-center border-y" style={{ borderColor: 'var(--border-primary)' }}>
          <h3 className="text-2xl font-black italic mb-6" style={{ color: 'var(--accent-text)' }}>El silencio que nos aísla</h3>
          <p className="text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Muchos hombres sufren lo que clínicamente llamamos alexitimia masculina normativa. Como nos prohibieron expresar vulnerabilidad, nos cuesta ponerle palabras a lo que sentimos. El cuerpo termina hablando a través del síntoma sexual.
          </p>
        </div>

        <section className="text-center p-12 border shadow-xl" style={{ backgroundColor: 'var(--bg-card-solid)', borderColor: 'var(--border-card)', borderRadius: 'var(--radius-card-lg)' }}>
          <h3 className="text-4xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>¿Damos el primer paso?</h3>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Recuerda: la verdadera fortaleza no está en no tener problemas, sino en tener el coraje de dejar de cargarlos a solas. Abrirse no es una señal de derrota, es un acto de profunda valentía.
          </p>
          <button
            onClick={goKyc}
            className="px-8 py-4 font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-btn)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          >
            Contactar para consulta <ArrowRight size={18} />
          </button>
        </section>
      </article>

      <SiteFooter />
    </div>
  )
}

