// Tratamiento de la Eyaculación Precoz en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function EyaculacionPrecozPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de la Eyaculación Precoz en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'Abordaje sexológico clínico e integrativo para la eyaculación precoz o prematura en Chile. Reentrenamiento del reflejo eyaculatorio, manejo de la ansiedad de desempeño y técnicas conductuales.'
  const seoKeywords =
    'eyaculación precoz Chile, tratamiento eyaculación prematura, sexólogo clínico Santiago, parada-arranque compresión, control eyaculatorio CIE-11 DSM-5-TR'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de la Eyaculación Precoz en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/sexualidad-masculina/eyaculacion-precoz`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Eyaculación Precoz',
        alternateName: 'Eyaculación Prematura',
        description:
          'Dificultad persistente o recurrente para ejercer un control voluntario sobre el reflejo eyaculatorio, donde la eyaculación se produce antes, durante o inmediatamente después de la penetración con estimulación mínima y antes de que la persona lo desee.',
      },
      author: {
        '@type': 'Person',
        name: 'Ps. Andrei Andrusco Fidalgo',
        jobTitle: 'Psicólogo Clínico y Sexólogo',
        url: `https://psandrei.com/sobre-mi`,
      },
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Por qué eyaculo tan rápido incluso cuando intento pensar en otra cosa o distraerme?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Intentar distraer la mente suele tener el efecto contrario. Al desconectarte de tu cuerpo, pierdes la capacidad de registrar las sensaciones físicas que te avisan que te estás acercando al clímax (el punto de no retorno). Además, el enorme esfuerzo mental que haces para no sentir placer genera estrés y tensión muscular en tu zona pélvica, lo cual acelera biológicamente el reflejo eyaculatorio. En terapia aprendes a conectar con tu cuerpo desde la calma para poder regularlo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Sirven las cremas retardantes, los preservativos especiales o las pastillas si no hago terapia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Las cremas anestésicas o preservativos especiales solo adormecen la piel, quitándote el disfrute sin enseñarte el control voluntario. Los fármacos recetados pueden ser un apoyo temporal, pero no resuelven la ansiedad de desempeño ni la falta de registro corporal. La terapia sexológica entrega el control definitivo, devolviéndole a tu sistema nervioso su capacidad de autorregulación.',
            },
          },
          {
            '@type': 'Question',
            name: 'Siento mucha vergüenza con mi pareja y prefiero evitar tener intimidad. ¿Cómo le explico lo que me pasa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En nuestro espacio terapéutico te ayudamos a encontrar una forma cálida y asertiva de expresarlo, por ejemplo: "Te deseo mucho, pero estoy sintiendo una presión enorme que hace que mi cuerpo se acelere, y me angustia no poder disfrutar juntos como me gustaría". Ponerlo en palabras suele ser el primer gran alivio para tu sistema nervioso.',
            },
          },
          {
            '@type': 'Question',
            name: 'Si me masturbaba muy rápido cuando era joven por falta de privacidad, ¿arruiné mi cuerpo para siempre?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En absoluto. No hay un daño permanente en ti; tu cuerpo está perfectamente sano y solo tiene un hábito muy arraigado. Gracias a la neuroplasticidad, podemos reentrenar ese arco reflejo mediante ejercicios sexológicos específicos para que aprendas a pausar y extender el disfrute.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Es posible curarse realmente o tendré que vivir cuidándome de esto toda la vida?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El pronóstico terapéutico para la eyaculación precoz es sumamente favorable. Con compromiso en los ejercicios de focalización y el abordaje de la ansiedad, llega un punto donde el control se vuelve intuitivo y natural, permitiéndote vivir tu sexualidad de forma espontánea.',
            },
          },
        ],
      },
    }),
    [seoDescription]
  )

  const linkStyle = {
    color: 'var(--accent-text)',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  }

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

      {/* Encabezado Principal (H1) */}
      <header className="mx-auto max-w-4xl px-6 pt-32 pb-14">
        <button
          type="button"
          onClick={() => navigate('/#especialidades')}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold transition-transform hover:-translate-x-1"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} style={{ color: 'var(--accent)' }} />
          Volver a Áreas de Atención
        </button>

        <div className="mb-4">
          <span
            className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
            style={{
              backgroundColor: 'var(--accent-soft)',
              color: 'var(--accent-text)',
              border: '1px solid var(--border-accent)',
            }}
          >
            Problemas Sexuales Masculinos · Eyaculación Precoz
          </span>
        </div>

        <h1
          className="text-3xl md:text-5xl leading-tight font-bold mb-8"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            letterSpacing: 'var(--heading-spacing)',
          }}
        >
          Tratamiento de la Eyaculación Precoz en Chile: Enfoque Sexológico Clínico e Integrativo
        </h1>

        <div
          className="space-y-4 text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          <p>
            Vivir con la sensación constante de que el tiempo se escapa de tus manos durante la intimidad puede ser profundamente agotador. Para muchos hombres, la sexualidad deja de ser un espacio de conexión y disfrute para convertirse en una carrera contra el reloj, cargada de ansiedad, frustración y, a menudo, de un silencio muy doloroso. Si sientes que tu cuerpo se acelera sin que puedas controlarlo, quiero decirte algo fundamental: no estás &quot;roto&quot; ni hay algo dañado en tu masculinidad.
          </p>
          <p>
            Tu sistema nervioso simplemente ha aprendido a responder de una forma acelerada. Y la buena noticia es que, desde la sexología clínica, existe una ruta clara, compasiva y científicamente respaldada para que puedas reaprender a habitar tu cuerpo, recuperar el control y volver a disfrutar de tu sexualidad sin prisa.
          </p>
          <p>
            A continuación, desglosamos desde la ciencia, la empatía y la práctica clínica cómo entender y superar la eyaculación prematura.
          </p>
        </div>
      </header>

      <hr className="theme-divider mx-auto max-w-4xl" />

      {/* Contenido Clínico Estructurado */}
      <article
        className="mx-auto max-w-4xl px-6 py-16 space-y-16 text-lg leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        {/* 1. Definición Clínica y Diagnóstico Diferencial */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1. Definición Clínica y Diagnóstico Diferencial
            </h2>
            <p>
              Para trazar un camino de recuperación efectivo, es esencial salir de las etiquetas populares y basarnos en los estándares diagnósticos internacionales. Esto nos permite entender tu situación no como un &quot;defecto&quot;, sino como una condición fisiológica y emocional tratable.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.1. Criterios de la CIE-11 (Organización Mundial de la Salud)
            </h3>
            <p>
              La Eyaculación Precoz (o prematura) se define como una dificultad persistente o recurrente para ejercer un control voluntario sobre el reflejo eyaculatorio, donde la eyaculación se produce antes, durante o inmediatamente después de la penetración (o estimulación), con una estimulación mínima y antes de que la persona lo desee.
            </p>
            <p>
              En la <strong style={{ color: 'var(--text-primary)' }}>Clasificación Internacional de Enfermedades (CIE-11)</strong>, la OMS (
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                who.int
              </a>
              ) ha situado esta condición en el <em>Capítulo 17: Condiciones relacionadas con la salud sexual</em>. Este cambio es un paso histórico: desvincula estas problemáticas de los trastornos mentales, reduciendo el estigma y abordándolas como lo que son, un aspecto integral del bienestar humano que merece atención sin vergüenza.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.2. Marco Diagnóstico según el DSM-5-TR (APA, 2022)
            </h3>
            <p>
              El <strong style={{ color: 'var(--text-primary)' }}>Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM-5-TR)</strong> de la <em>American Psychiatric Association</em> (
              <a
                href="https://www.apa.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                apa.org
              </a>
              ) delimita esta condición a través de parámetros objetivos y subjetivos:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Tiempo de Latencia Eyaculatoria Introvaginal (IELT):
                </strong>{' '}
                Presencia recurrente de eyaculación dentro del primer minuto posterior a la penetración (en su forma primaria) o en menos de 3 minutos (forma adquirida).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Temporalidad y Malestar:
                </strong>{' '}
                La sintomatología debe mantenerse durante al menos 6 meses y estar presente en la gran mayoría de las interacciones sexuales, generando una angustia personal significativa o la evasión de la intimidad.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Especificadores Clínicos:
                </strong>{' '}
                Evaluamos si es una condición <em>primaria</em> (te ha acompañado desde el inicio de tu vida sexual) o <em>adquirida</em> (apareció tras un período de funcionamiento distinto), y si ocurre siempre o solo en situaciones/parejas específicas.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Clasificación e Indicadores Fisiológicos
            </h3>
            <p>
              En la evaluación sexológica, es vital diferenciar la eyaculación precoz verdadera de la <em>eyaculación precoz subjetiva</em>, donde el tiempo físico es estadísticamente normativo, pero existe una dolorosa percepción de falta de control:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación de la Percepción de Control:
                </strong>{' '}
                Más allá del reloj, el núcleo de la dificultad reside en la incapacidad para identificar la &quot;fase premonitoria&quot; (ese aviso que da el cuerpo antes de llegar al punto de no retorno eyaculatorio).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Neurobiología de las Vías Serotoninérgicas:
                </strong>{' '}
                La ciencia reconoce la implicación de la modulación neuroquímica en el sistema nervioso central, particularmente cómo la sensibilidad de los receptores de serotonina regula el umbral eyaculatorio.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Descarte Orgánico:
                </strong>{' '}
                Siguiendo los protocolos de la <strong style={{ color: 'var(--text-primary)' }}>International Society for Sexual Medicine (ISSM)</strong> (
                <a
                  href="https://www.issm.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  issm.info
                </a>
                ) y el <strong style={{ color: 'var(--text-primary)' }}>Ministerio de Salud de Chile (MINSAL)</strong> (
                <a
                  href="https://www.minsal.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  minsal.cl
                </a>
                ), siempre descartamos factores urológicos subyacentes (como una prostatitis o alteraciones metabólicas) mediante derivación interdisciplinaria cuando es necesario.
              </li>
            </ol>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 2. Mecanismos Psicofisiológicos: Por qué se acelera el cuerpo */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos: Por qué se acelera el cuerpo
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. Ansiedad de Desempeño y la Trampa de la Hipervigilancia
            </h3>
            <p>
              La ansiedad es el mayor acelerador del reflejo eyaculatorio. La preocupación anticipatoria por &quot;cuánto iré a durar hoy&quot; o el temor a decepcionar a tu pareja inunda tu cuerpo de adrenalina, activando el sistema nervioso simpático.
            </p>
            <p>
              Aquí surge el fenómeno del <strong style={{ color: 'var(--text-primary)' }}>&quot;espectadorismo&quot;</strong> (<em>spectatoring</em>): asumes un rol de autoobservador crítico, vigilando cada sensación de tu cuerpo con miedo. Esta hipervigilancia corta el procesamiento del placer, tensa tu musculatura pélvica y, paradójicamente, apresura la descarga que tanto intentas evitar.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología y Aprendizaje Temprano
            </h3>
            <p>
              La eyaculación es un arco reflejo espinal profundamente sensible al aprendizaje.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Condicionamiento Masturbatorio Apresurado:
                </strong>{' '}
                Si durante tu adolescencia o primeros años de vida sexual te masturbabas con prisa (por miedo a ser descubierto, por falta de privacidad), condicionaste a tu sistema nervioso a saltarse la fase de &quot;meseta&quot; de excitación y llegar directamente a la expulsión. Tu cuerpo aprendió un patrón de urgencia.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  El Modelo de Control Dual:
                </strong>{' '}
                El estrés situacional sobrepasa tus mecanismos inhibitorios cerebrales. Literalmente, el &quot;freno&quot; de tu excitación no logra contener el impulso antes de cruzar el umbral del reflejo.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.3. Sensibilidad Genital y Moduladores Digitales
            </h3>
            <p>
              El consumo continuado de pornografía con ritmos acelerados, estímulos supranormales y alta novedad acostumbra a tu cerebro a descargas dopaminérgicas intensas y breves. Al centrar toda tu atención en la pantalla, se genera una <strong style={{ color: 'var(--text-primary)' }}>desconexión propioceptiva</strong>: dejas de escuchar y sentir las sutiles señales corporales de tu propia excitación, perdiendo la oportunidad de regularlas en un encuentro real.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 3. Abordaje Terapéutico Sexológico */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3. Abordaje Terapéutico Sexológico
            </h2>
            <p>
              En terapia, mi objetivo no es convertirte en una máquina de resistencia, sino ayudarte a recuperar la soberanía sobre tu placer. Siguiendo los estándares de la <strong style={{ color: 'var(--text-primary)' }}>World Association for Sexual Health (WAS)</strong> (
              <a
                href="https://www.worldsexualhealth.net/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                worldsexualhealth.net
              </a>
              ), trabajamos desde un enfoque compasivo y práctico.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.1. Reentrenamiento del Reflejo y Técnicas Conductuales
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Técnicas de Parada-Arranque (Stop-Start) y Compresión (Squeeze):
                </strong>{' '}
                Implementamos protocolos psicoeducativos y ejercicios pautados (primero a solas, luego en pareja) que reentrenan a tu cerebro para reconocer la meseta de excitación. Aprendes a surfear la ola del placer sin dejar que te revuelque, identificando el punto de inevitabilidad antes de cruzarlo.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Desarticulación del Coitocentrismo:
                </strong>{' '}
                Disminuimos la presión por la penetración. A través de ejercicios de propiocepción, modulación respiratoria y relajación del suelo pélvico, tu cuerpo aprende a estar presente en el encuentro sin el cronómetro encendido.
              </li>
            </ul>

            <blockquote
              className="my-6 border-l-4 pl-6 py-3 italic text-xl"
              style={{
                borderColor: 'var(--accent)',
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--text-primary)',
                borderRadius: '0 1rem 1rem 0',
              }}
            >
              &ldquo;Tu cuerpo no es un cronómetro; el placer solo encuentra su verdadero ritmo cuando dejas de evaluar tu rendimiento.&rdquo;
            </blockquote>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Dinámica Vincular y el Peso del Silencio
            </h3>
            <p>
              La eyaculación precoz duele profundamente porque suele instaurar dinámicas de culpa, evitación y silencio en la pareja.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Superación de la Alexitimia Normativa:
                </strong>{' '}
                Facilitamos un espacio seguro para que puedas verbalizar la vergüenza y la exigencia que sientes. Hablarlo desactiva gran parte de la ansiedad.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Colectivización del Tratamiento:
                </strong>{' '}
                Si tienes pareja, redistribuimos el peso de la intimidad. El sexo deja de ser un &quot;examen&quot; que el hombre debe aprobar, transformándose en un espacio de juego, pausas y exploración mutua, libre de metas cronometradas.
              </li>
            </ul>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 4. Preguntas Frecuentes */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            4. Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1. ¿Por qué eyaculo tan rápido incluso cuando intento pensar en otra cosa o distraerme?
            </h3>
            <p>
              Es muy lógico que intentes pensar en matemáticas, en el trabajo o mirar hacia la pared para &quot;bajar&quot; la excitación. Sin embargo, intentar distraer la mente suele tener el efecto contrario. Al desconectarte de tu cuerpo, pierdes la capacidad de registrar las sensaciones físicas que te avisan que te estás acercando al clímax (el punto de no retorno). Además, el enorme esfuerzo mental que haces para no sentir placer genera estrés y tensión muscular en tu zona pélvica, lo cual acelera biológicamente el reflejo eyaculatorio. En terapia, te enseñaré a hacer exactamente lo opuesto: conectar con tu cuerpo desde la calma para poder regularlo, no para huir de él.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2. ¿Sirven las cremas retardantes, los preservativos especiales o las pastillas si no hago terapia?
            </h3>
            <p>
              Es completamente natural buscar una solución rápida cuando sentimos tanta frustración. Sin embargo, las cremas anestésicas o los preservativos especiales solo adormecen la piel; pueden darte unos minutos más, pero no te enseñan a tener el control voluntario, además de quitarte el disfrute. Los fármacos, cuando son recetados por un médico, pueden ser un buen &quot;apoyo temporal&quot;, pero no resuelven la ansiedad de desempeño ni la falta de registro corporal. Si usas estas herramientas sin un proceso de terapia sexológica, volverás al mismo punto cuando dejes de usarlas. La terapia te entrega el control definitivo, devolviéndole a tu sistema nervioso su capacidad de autorregulación.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3. Siento mucha vergüenza con mi pareja y prefiero evitar tener intimidad. ¿Cómo le explico lo que me pasa?
            </h3>
            <p>
              Te entiendo profundamente; esa vergüenza es una mochila sumamente pesada que la mayoría de los hombres carga en silencio. La evitación es el mecanismo de defensa más humano cuando sentimos que vamos a fallar. Sin embargo, el silencio puede hacer que tu pareja interprete erróneamente que ya no te atrae, generando distancia. No tienes que tener las palabras perfectas. En nuestro espacio terapéutico, uno de los pasos más liberadores es ayudarte a encontrar una forma cálida y asertiva de decirle:{' '}
              <em>
                &quot;Te deseo mucho, pero estoy sintiendo una presión enorme que hace que mi cuerpo se acelere, y me angustia no poder disfrutar juntos como me gustaría&quot;
              </em>
              . Ponerlo en palabras suele ser el primer gran alivio para tu sistema nervioso.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4. Si me masturbaba muy rápido cuando era joven por falta de privacidad, ¿arruiné mi cuerpo para siempre?
            </h3>
            <p>
              Quiero ser muy enfático en esto: en absoluto. No arruinaste nada, ni hay un daño permanente en ti. Simplemente, cuando eras más joven, tu sistema nervioso hizo lo que mejor sabe hacer: adaptarse a su entorno. Si el entorno requería rapidez para no ser descubierto, tu cerebro creó una &quot;autopista&quot; directa hacia la eyaculación. Tu cuerpo está perfectamente sano; solo tiene un hábito muy arraigado. Así como tu cerebro aprendió ese ritmo acelerado a través de la repetición, tiene una cualidad maravillosa llamada <em>neuroplasticidad</em>, que nos permite reentrenar ese arco reflejo mediante ejercicios sexológicos específicos para que aprendas a pausar y extender el disfrute.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              5. ¿Es posible curarse realmente o tendré que vivir cuidándome de esto toda la vida?
            </h3>
            <p>
              Quiero darte mucha esperanza: el pronóstico terapéutico para la eyaculación precoz es sumamente favorable. No es una condena de por vida. El tratamiento no consiste en &quot;aprender un truco&quot; que tendrás que hacer mecánicamente para siempre, sino en reestructurar tu forma de percibir, sentir y habitar tu respuesta sexual. Con compromiso en los ejercicios de focalización y el abordaje de la ansiedad, llega un punto donde el control se vuelve intuitivo y natural, tal como andar en bicicleta. Podrás volver a vivir tu sexualidad de forma espontánea, conectado con tu propio cuerpo y el de tu pareja.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 5. Referencias Clínicas y Científicas Integradas */}
        <section
          aria-labelledby="referencias-bibliograficas"
          className="border rounded-2xl p-6 md:p-8 space-y-4"
          style={{
            borderColor: 'var(--border-card)',
            backgroundColor: 'var(--bg-card)',
          }}
        >
          <div className="flex items-center gap-3">
            <BookOpen size={22} style={{ color: 'var(--accent)' }} />
            <h2
              id="referencias-bibliograficas"
              className="text-2xl md:text-3xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              5. Referencias Clínicas y Científicas Integradas
            </h2>
          </div>

          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Para garantizar un abordaje ético, actualizado y riguroso, nuestra práctica clínica y el contenido de este artículo se fundamentan en las siguientes guías internacionales, estudios neurobiológicos y marcos regulatorios nacionales:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-base">
            <li>
              American Psychiatric Association (APA). (2022).{' '}
              <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.; DSM-5-TR). Washington, DC: APA. (Sitio oficial:{' '}
              <a
                href="https://www.apa.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                apa.org
              </a>
              )
            </li>
            <li>
              Bancroft, J., &amp; Janssen, E. (2000). The dual control model of male sexual response: A theoretical approach to centrally mediated sexual dysfunction.{' '}
              <em>Neuroscience &amp; Biobehavioral Reviews</em>, 24(5), 571-579.
            </li>
            <li>
              International Society for Sexual Medicine (ISSM). (2023).{' '}
              <em>Guidelines for the Diagnosis and Treatment of Premature Ejaculation</em>. (Sitio oficial:{' '}
              <a
                href="https://www.issm.info/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                issm.info
              </a>
              )
            </li>
            <li>
              Kaplan, H. S. (1989).{' '}
              <em>Pequeña central de la eyaculación precoz: Cómo superarla</em>. Buenos Aires: Paidós. (Referencia clásica en la técnica de parada-arranque y abordaje cognitivo).
            </li>
            <li>
              Ministerio de Salud de Chile (MINSAL). (2020).{' '}
              <em>Guías y Orientaciones Técnicas para la Atención en Salud Sexual</em>. (Sitio oficial:{' '}
              <a
                href="https://www.minsal.cl/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                minsal.cl
              </a>
              )
            </li>
            <li>
              Organización Mundial de la Salud (OMS). (2022).{' '}
              <em>Clasificación Internacional de Enfermedades</em> (CIE-11, Capítulo 17: Condiciones relacionadas con la salud sexual). (Sitio oficial:{' '}
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                who.int
              </a>
              )
            </li>
            <li>
              Superintendencia de Salud de Chile.{' '}
              <em>Registro Nacional de Prestadores Individuales de Salud</em>. (Sitio oficial:{' '}
              <a
                href="https://www.supersalud.gob.cl/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                supersalud.gob.cl
              </a>
              )
            </li>
            <li>
              Waldinger, M. D. (2015). The neurobiological approach to premature ejaculation.{' '}
              <em>The Journal of Urology</em>, 168(6), 2359-2367.
            </li>
            <li>
              World Association for Sexual Health (WAS). (2021).{' '}
              <em>Declaración de Salud Sexual para el Milenio y Estándares</em>. (Sitio oficial:{' '}
              <a
                href="https://www.worldsexualhealth.net/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                worldsexualhealth.net
              </a>
              )
            </li>
          </ul>
        </section>
      </article>

      <SiteFooter />

      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}
