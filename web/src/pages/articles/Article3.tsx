import { useNavigate } from 'react-router-dom'
import { Brain, Activity, ArrowRight } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'

export function Article3() {
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
            <h1 className="text-5xl md:text-6xl leading-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>
              La Pornografía y tu<br />
              Salud Sexual:
            </h1>
            <p className="mt-2 text-4xl md:text-5xl italic" style={{ color: 'var(--accent-text)' }}>
              ¡Lo que la consulta y<br />
              la neurociencia nos<br />
              están diciendo!
            </p>
            
            <div className="mt-12 space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                En el día a día de la consulta clínica, me toca ver cada vez más cómo tener internet 24/7 en el celular nos ha cambiado por completo la forma de vivir nuestra sexualidad. Pucha, muchos pacientes se van de espaldas cuando descubren que ver pornografía —algo tan normalizado hoy en día— puede estar directamente ligado a disfunciones sexuales, a que se apague el deseo y a tener problemas súper importantes con sus parejas.
              </p>
              <p>
                La idea de este artículo es explicarte en simple, pero con evidencia científica en mano, cómo este hábito impacta nuestro cerebro y, de paso, nuestra vida íntima.
              </p>
            </div>

            <button
              onClick={() => document.getElementById('contenido')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-8 py-4 font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-btn)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            >
              Leer el artículo <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Big pink box */}
            <div 
              className="w-72 h-96 flex items-center justify-center relative"
              style={{ backgroundColor: 'var(--accent-soft)', borderRadius: 'var(--radius-card-lg)', boxShadow: 'inset 0 0 0 4px var(--border-primary)' }}
            >
              <Brain size={120} style={{ color: 'var(--text-primary)' }} strokeWidth={1} />
            </div>
            {/* Small peach box overlapping */}
            <div 
              className="absolute -bottom-8 -left-8 lg:left-12 w-32 h-32 flex items-center justify-center shadow-xl"
              style={{ backgroundColor: 'var(--accent-text)', borderRadius: 'var(--radius-card)' }}
            >
              <Activity size={48} style={{ color: 'var(--bg-primary)' }} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article id="contenido" className="mx-auto max-w-3xl px-6 py-20 space-y-16">
        <section>
          <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>Por qué cuesta tanto decir lo que siento</h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            <p>
              A muchos hombres nos educaron para resolver, no para expresar. Cuando algo duele en la sexualidad, reaccionamos con silencio, ironía o retirada. El problema no desaparece: se cronifica y se vuelve tema tabú.
            </p>
            <p>
              Hablar de sexo no debería empezar en la cama ni en medio de un conflicto. Conviene elegir momentos neutros, usar frases en primera persona y explicar necesidades concretas en vez de acusaciones globales.
            </p>
          </div>
          <aside className="mt-8 p-6 border-l-4" style={{ backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent)', borderRadius: 'var(--radius-card)' }}>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: 'var(--accent-text)' }}>Herramienta breve</h4>
            <p style={{ color: 'var(--text-primary)' }}>
              Prueba esta estructura: “Me está pasando..., me gustaría..., ¿podemos intentar...?”. Es simple, pero reduce culpa y abre cooperación.
            </p>
          </aside>
        </section>

        <section>
          <h2 className="text-3xl mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>Conversar para reconectar, no para rendir cuentas</h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            <p>
              Cuando una conversación íntima se vuelve tribunal, ambos se cierran. En cambio, cuando se valida la experiencia emocional del otro, baja la defensividad y aumenta la posibilidad de acuerdos.
            </p>
            <p>
              La meta no es que dos personas sientan exactamente lo mismo, sino que puedan construir un lenguaje común para cuidarse. Ese lenguaje también es erotismo: pertenencia, respeto y presencia.
            </p>
          </div>
        </section>

        <div className="my-16 text-center">
          <h3 className="text-2xl italic mb-4" style={{ color: 'var(--accent-text)', fontFamily: 'var(--font-heading)' }}>Señal de avance</h3>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Si después de conversar no se resuelve todo, pero ambos se sienten más comprendidos, ya avanzaron. La intimidad se construye por continuidad, no por perfección.
          </p>
        </div>

        <section className="text-center p-12 shadow-xl" style={{ backgroundColor: 'var(--bg-card-solid)', borderColor: 'var(--border-card)', borderWidth: 'var(--card-border-width)', borderRadius: 'var(--radius-card-lg)' }}>
          <h3 className="text-3xl mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>¿Les cuesta hablar de esto?</h3>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            En terapia puedes aprender una forma de conversar que disminuya la culpa y aumente la conexión real.
          </p>
          <button
            onClick={goKyc}
            className="px-8 py-4 font-bold uppercase tracking-widest transition-transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-btn)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          >
            Quiero orientación
          </button>
        </section>
      </article>

      <SiteFooter />
    </div>
  )
}
