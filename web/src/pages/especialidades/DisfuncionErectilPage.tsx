// Tratamiento de la Disfunción Eréctil Psicógena en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function DisfuncionErectilPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de la Disfunción Eréctil Psicógena en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'La disfunción eréctil psicógena no es un fracaso, sino una respuesta neurobiológica frente a la ansiedad de desempeño. Tratamiento sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'disfunción eréctil psicógena Chile, tratamiento psicológico disfunción eréctil, sexólogo clínico Santiago, ansiedad de desempeño erección, CIE-11 DSM-5-TR disfunción eréctil'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de la Disfunción Eréctil Psicógena en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/sexualidad-masculina/disfuncion-erectil-psicogena`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Disfunción Eréctil Psicógena',
        alternateName: 'Trastorno de la Erección de Origen Psicógeno',
        description:
          'Dificultad persistente o recurrente para obtener o mantener una erección suficiente que permita un desempeño sexual satisfactorio, cuyo origen obedece a factores psicofisiológicos, emocionales y de ansiedad de evaluación.',
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
            name: '¿Por qué mantengo la erección al masturbarme, pero la pierdo con mi pareja?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cuando estás a solas, estás en un entorno cien por ciento seguro donde tu cerebro no se siente evaluado; solo hay conexión con tus sensaciones. Al estar con tu pareja, entra a jugar el miedo a "no dar la talla" o a decepcionarla, y esa autoexigencia dispara una alerta de estrés en tu cuerpo que corta la respuesta eréctil. Esto es la prueba física irrefutable de que tu cuerpo está sano y tu capacidad vascular está intacta.',
            },
          },
          {
            '@type': 'Question',
            name: 'Siento mucha vergüenza y siento que estoy decepcionando a mi pareja, ¿cómo le hablo de esto?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En nuestro espacio te damos herramientas para abrir esa conversación desde tu vulnerabilidad, no desde el defecto, pudiendo expresar: "Quiero estar contigo, pero estoy sintiendo mucha presión y ansiedad, y mi cuerpo se está bloqueando". Compartir esta carga trae un alivio inmenso para ambos y transforma la intimidad en un refugio de apoyo mutuo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Soy demasiado joven (o demasiado mayor) para que me pase esto?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El estrés, la ansiedad, la autoexigencia y el miedo a fallar no discriminan por fecha de nacimiento. Tu valor personal no se mide por una respuesta física puntual; tu cuerpo simplemente está reaccionando de manera natural a tus emociones, tengas la edad que tengas.',
            },
          },
          {
            '@type': 'Question',
            name: '¿En qué momento debo considerar ir al urólogo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Si tienes antecedentes familiares o personales de hipertensión, diabetes, colesterol alto, o si notas un cambio físico generalizado, siempre es recomendable realizar un chequeo médico. Si durante nuestra evaluación sentimos que tu cuerpo necesita apoyo médico para descartar cualquier factor metabólico u orgánico, te acompañaré y orientaré para realizar esa derivación.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuánto tiempo toma la terapia para que todo vuelva a la normalidad?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cada persona, cada cuerpo y cada historia tiene su propio ritmo. Desde las primeras sesiones empezarás a sentir cómo disminuye la presión asfixiante; al quitar el peso del éxito obligatorio y aprender a reconectar con el placer sin juzgarte, los cambios físicos comienzan a darse por sí solos.',
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
            Problemas Sexuales Masculinos · Disfunción Eréctil Psicógena
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
          Tratamiento de la Disfunción Eréctil Psicógena en Chile: Enfoque Sexológico Clínico e Integrativo
        </h1>

        <div
          className="space-y-4 text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          <p>
            No estás enfermo ni tu cuerpo está &quot;roto&quot;. En la consulta sexológica, es sumamente común escuchar a hombres que, al perder la erección de forma recurrente, sienten que algo se ha quebrado irreparablemente dentro de ellos. Culturalmente, se ha instalado el mito de que la respuesta sexual masculina debe ser como un interruptor: siempre disponible, siempre al máximo, independientemente del cansancio, el estrés o las emociones. Pero la realidad fisiológica y humana es mucho más compleja, profunda y, afortunadamente, lógica.
          </p>
          <p>
            Como psicólogo y sexólogo clínico, el primer paso en la terapia es desmontar la culpa. La disfunción eréctil psicógena no es un &quot;fracaso&quot; de tu masculinidad, sino una respuesta neurobiológica de protección de tu propio sistema nervioso frente a lo que interpreta como una amenaza: la presión por rendir.
          </p>
          <p>
            A continuación, desglosamos desde la ciencia, la sexología y la empatía clínica cómo entender y superar este bloqueo.
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
              Para trazar una ruta de recuperación efectiva, es fundamental basarnos en los más altos estándares diagnósticos internacionales, los cuales nos permiten entender qué ocurre exactamente en el cuerpo y en la mente.
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
              La Disfunción Eréctil Psicógena representa una dificultad persistente o recurrente para obtener o mantener una erección suficiente que permita un desempeño sexual satisfactorio, cuyo origen no obedece a una alteración estructural o vascular orgánica.
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
              ) ha dado un paso histórico al reubicar las disfunciones sexuales en el <em>Capítulo 17: Condiciones relacionadas con la salud sexual</em>. Esta actualización desvincula estas problemáticas de la categoría de trastornos mentales, reduciendo el estigma social y reconociéndolas como lo que realmente son: condiciones multidimensionales donde interactúan factores afectivos, relacionales y psicofisiológicos.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.2. Marco Diagnóstico según el DSM-5-TR (APA)
            </h3>
            <p>
              El <strong style={{ color: 'var(--text-primary)' }}>Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM-5-TR)</strong>, publicado por la <em>American Psychiatric Association</em> en 2022 (
              <a
                href="https://www.apa.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                apa.org
              </a>
              ), establece parámetros rigurosos para diferenciar una fluctuación normal de una disfunción clínica:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Temporalidad e Intensidad:
                </strong>{' '}
                Los síntomas deben manifestarse durante un período mínimo de 6 meses y estar presentes en aproximadamente el 75% al 100% de las ocasiones de actividad erótica.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Malestar Clínicamente Significativo:
                </strong>{' '}
                La condición genera angustia personal, frustración o dificultades en la dinámica de pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Especificadores Contextuales:
                </strong>{' '}
                Se evalúa si es de inicio primario (de toda la vida) o secundario (adquirido tras una etapa de funcionamiento sin dificultades), y si es generalizado o situacional.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diferenciación: ¿Es orgánico o psicológico?
            </h3>
            <p>
              Uno de los hitos de la evaluación sexológica es el diagnóstico diferencial. Saber que la &quot;maquinaria&quot; vascular funciona correctamente trae un alivio inmediato. Nos damos cuenta de que el origen es psicógeno y no orgánico a través de marcadores clínicos claros:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Preservación de Erecciones Espontáneas:
                </strong>{' '}
                La presencia de erecciones matutinas o durante la masturbación solitaria confirma la integridad neurológica y vascular del pene.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Aparición Abrupta y Situacional:
                </strong>{' '}
                A diferencia del deterioro orgánico (que es lento y progresivo), la disfunción psicógena suele instalarse de golpe, a menudo tras un episodio de alto estrés o una experiencia puntual percibida como un &quot;fallo&quot;.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación Interdisciplinaria:
                </strong>{' '}
                Si existen dudas sobre comorbilidades metabólicas o cardiovasculares, se aplica el protocolo de derivación médica en concordancia con las directrices nacionales (
                <a
                  href="https://www.minsal.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  minsal.cl
                </a>
                ,{' '}
                <a
                  href="https://www.supersalud.gob.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  supersalud.gob.cl
                </a>
                ) e internacionales (
                <a
                  href="https://www.issm.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  issm.info
                </a>
                ).
              </li>
            </ol>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 2. Mecanismos Psicofisiológicos: La Trampa de la Ansiedad */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos: La Trampa de la Ansiedad
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. El &quot;Espectadorismo&quot; y la Alarma del Cerebro
            </h3>
            <p>
              Para que una erección fluya, el cuerpo necesita habitar un espacio de seguridad y disfrute. Pero, ¿qué ocurre cuando entras a la intimidad pensando <em>&quot;ojalá no me falle hoy&quot;</em>, <em>&quot;tengo que cumplir&quot;</em> o <em>&quot;¿y si me vuelve a pasar?&quot;</em>?
            </p>
            <p>
              En ese microsegundo, tu cerebro detecta una amenaza. El sexólogo <em>William Masters</em> y la investigadora <em>Virginia Johnson</em>, pioneros de la terapia sexual, acuñaron el término <strong style={{ color: 'var(--text-primary)' }}>&quot;espectadorismo&quot;</strong> (<em>spectatoring</em>). Esto ocurre cuando abandonas el rol de participante en el placer para convertirte en un juez implacable que audita su propia erección desde afuera. Este juicio enciende el miedo al fracaso, preparando a tu cuerpo para &quot;huir o pelear&quot;. En estado de alerta máxima, la excitación es biológicamente incompatible.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología de la Erección: El Modelo de Control Dual
            </h3>
            <p>
              Los investigadores <em>John Bancroft</em> y <em>Erick Janssen</em> desarrollaron el <strong style={{ color: 'var(--text-primary)' }}>Modelo de Control Dual de la Respuesta Sexual</strong>. Según este modelo, la respuesta sexual depende del equilibrio entre dos sistemas neurológicos:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Acelerador (Predominio Parasimpático):
                </strong>{' '}
                El estado de relajación y seguridad activa este sistema, promoviendo la vasodilatación de los cuerpos cavernosos (erección).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Freno (Activación Simpática):
                </strong>{' '}
                Frente a la ansiedad de evaluación, se dispara la respuesta simpática. El cerebro libera adrenalina y cortisol, induciendo una vasoconstricción periférica (la sangre se retira del pene para ir a los músculos mayores y poder &quot;huir&quot;). Literalmente, el estrés cierra las válvulas del placer.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.3. Moduladores Modernos: Pornografía y Sistema de Recompensa
            </h3>
            <p>
              En el contexto actual, la exposición prolongada a estímulos eróticos digitales hiperintensos actúa como un modulador relevante. Esta exposición puede generar habituación en el sistema dopaminérgico de recompensa cerebral. En la terapia clínica, abordamos la pautación de estos estímulos para recuperar la sensibilidad y reentrenar la conexión con la intimidad real, que tiene ritmos y pausas diferentes a los de la pantalla.
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
              En terapia no buscamos &quot;soluciones mágicas&quot; ni trucos para obligar a tu cuerpo a rendir. Intentar forzar una erección es, paradójicamente, lo que más la aleja. Nuestro objetivo es desarmar la presión asfixiante del rendimiento para que puedas volver a disfrutar sin miedo.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.1. Desactivación Coitocéntrica y Focalización Sensual
            </h3>
            <p>
              Alineados con los estándares internacionales en salud sexual (
              <a
                href="https://www.worldsexualhealth.net/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                worldsexualhealth.net
              </a>
              ), el tratamiento implica:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Frenar el Coitocentrismo:
                </strong>{' '}
                Se elimina temporalmente la penetración como meta. Quitar el &quot;examen final&quot; disminuye drásticamente la ansiedad de desempeño.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Focalización Sensual:
                </strong>{' '}
                A través de pautas graduales, la persona o la pareja vuelve a explorar el mapa erótico corporal. El objetivo es registrar el placer táctil sin la obligación de lograr una erección rígida ni de llegar al orgasmo.
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
              &ldquo;La erección no es un interruptor que se enciende a voluntad, sino una respuesta natural que florece espontáneamente cuando apagamos el miedo a fallar.&rdquo;
            </blockquote>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Dinámica Vincular y Asertividad Emocional
            </h3>
            <p>
              El tratamiento aborda el &quot;peso del silencio&quot;. Ayudamos a los pacientes a verbalizar el temor al fallo, transformando la vulnerabilidad en una herramienta de conexión íntima. Cuando la intimidad deja de ser una evaluación de rendimiento, el cuerpo se relaja y la respuesta vascular se restablece.
            </p>
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
              1. ¿Por qué mantengo la erección al masturbarme, pero la pierdo con mi pareja?
            </h3>
            <p>
              Es completamente comprensible que esto te genere confusión y mucha angustia, pero tiene una explicación clara. Cuando estás a solas, estás en un entorno cien por ciento seguro donde tu cerebro no se siente evaluado; solo hay conexión con tus sensaciones. Al estar con tu pareja, entra a jugar el miedo a &quot;no dar la talla&quot; o a decepcionarla, y esa autoexigencia dispara una alerta de estrés en tu cuerpo que corta la respuesta eréctil. Míralo desde esta perspectiva esperanzadora: esto es la prueba física irrefutable de que tu cuerpo está sano y tu capacidad vascular está intacta. La &quot;maquinaria&quot; funciona perfectamente; en terapia solo necesitamos ayudar a tu mente a volver a sentirse a salvo.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2. Siento mucha vergüenza y siento que estoy decepcionando a mi pareja, ¿cómo le hablo de esto?
            </h3>
            <p>
              La culpa y la vergüenza son mochilas demasiado pesadas para cargar a solas, y es profundamente humano que temas ser juzgado o incomprendido. Sin embargo, el silencio duele más y suele generar malos entendidos (tu pareja podría llegar a pensar, erróneamente, que es su culpa o que ya no te atrae). En nuestro espacio, uno de mis principales objetivos es darte herramientas para abrir esa conversación desde tu vulnerabilidad, no desde el defecto. Te ayudaré a encontrar las palabras para poder decirle:{' '}
              <em>
                &quot;Quiero estar contigo, pero estoy sintiendo mucha presión y ansiedad, y mi cuerpo se está bloqueando&quot;
              </em>
              . Compartir esta carga trae un alivio inmenso para ambos y transforma la intimidad en un refugio de apoyo mutuo.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3. ¿Soy demasiado joven (o demasiado mayor) para que me pase esto?
            </h3>
            <p>
              Es un mito muy extendido y doloroso creer que por ser joven deberías funcionar como una máquina inagotable, o que por tener más edad la sexualidad deba inevitablemente apagarse. La realidad es que el estrés, la ansiedad, la autoexigencia y el miedo a fallar no discriminan por fecha de nacimiento. En la consulta recibo constantemente a hombres en sus veintes que sufren por la presión abrumadora del rendimiento, y a hombres mayores que están redescubriendo y resignificando su intimidad. Tu valor personal no se mide por una respuesta física puntual. Tu cuerpo simplemente está reaccionando de manera natural a tus emociones, tengas la edad que tengas.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4. ¿En qué momento debo considerar ir al urólogo?
            </h3>
            <p>
              Cuidar tu salud de manera integral es siempre nuestra prioridad. Aunque lo que estás viviendo tenga un origen psicológico y ansioso muy claro, el cuerpo es un sistema conectado y a veces nos avisa de otras cosas. Si tienes antecedentes familiares o personales de hipertensión, diabetes, colesterol alto, o si notas un cambio físico generalizado, siempre es un acto de amor propio hacer un chequeo. En la consulta trabajamos en equipo; si durante nuestra evaluación sentimos que tu cuerpo necesita apoyo médico para descartar cualquier factor metabólico u orgánico, te acompañaré y orientaré para realizar esa derivación. No estás solo en ningún paso de este proceso.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              5. ¿Cuánto tiempo toma la terapia para que todo vuelva a la normalidad?
            </h3>
            <p>
              Sé muy bien que cuando hay sufrimiento, uno quisiera una solución para ayer. Es muy natural querer salir rápido del malestar y volver a ser &quot;el de antes&quot;. Sin embargo, cada persona, cada cuerpo y cada historia tiene su propio ritmo, y en la consulta respetamos profundamente tus tiempos. La sanación no es una línea recta, pero te aseguro que desde las primeras sesiones empezarás a sentir cómo disminuye esa presión asfixiante que llevas en el pecho. Al quitar el peso del éxito obligatorio y aprender a reconectar con el placer sin juzgarte, los cambios físicos comienzan a darse por sí solos. Mi compromiso es acompañarte con paciencia, calidez y sin presiones, hasta que vuelvas a sentirte pleno y seguro en tu propia piel.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 5. Referencias Clínicas y Científicas */}
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
              5. Referencias Clínicas y Científicas
            </h2>
          </div>

          <ul className="list-disc pl-6 space-y-3 text-base">
            <li>
              American Psychiatric Association. (2022).{' '}
              <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.; DSM-5-TR). Disponible en:{' '}
              <a
                href="https://www.apa.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                apa.org
              </a>
            </li>
            <li>
              Bancroft, J., &amp; Janssen, E. (2000). The dual control model of male sexual response: A theoretical approach to centrally mediated erectile dysfunction.{' '}
              <em>Neuroscience &amp; Biobehavioral Reviews</em>, 24(5), 571-579.
            </li>
            <li>
              International Society for Sexual Medicine (ISSM). (2023).{' '}
              <em>Clinical Practice Guidelines for the Assessment and Management of Male Sexual Dysfunctions</em>. Disponible en:{' '}
              <a
                href="https://www.issm.info/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                issm.info
              </a>
            </li>
            <li>
              Masters, W. H., &amp; Johnson, V. E. (1970).{' '}
              <em>Human Sexual Inadequacy</em>. Boston: Little, Brown and Company.
            </li>
            <li>
              McCarthy, B. W., &amp; McCarthy, E. (2014).{' '}
              <em>Coping with Erectile Dysfunction: How to Regain Confidence and Enjoy Great Sex</em>. Oakland, CA: New Harbinger Publications.
            </li>
            <li>
              Ministerio de Salud de Chile (MINSAL). (2020).{' '}
              <em>Guías y Orientaciones Técnicas para la Atención en Salud Mental y Salud Sexual</em>. Disponible en:{' '}
              <a
                href="https://www.minsal.cl/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                minsal.cl
              </a>
            </li>
            <li>
              Organización Mundial de la Salud (OMS). (2022).{' '}
              <em>Clasificación Internacional de Enfermedades</em> (CIE-11, Capítulo 17: Condiciones relacionadas con la salud sexual). Disponible en:{' '}
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                who.int
              </a>
            </li>
            <li>
              Perelman, M. A. (2009). The Sexual Tipping Point: A mind/body model for sexual medicine.{' '}
              <em>The Journal of Sexual Medicine</em>, 6(3), 629-632.
            </li>
            <li>
              Superintendencia de Salud de Chile.{' '}
              <em>Registro Nacional de Prestadores Individuales de Salud</em>. Disponible en:{' '}
              <a
                href="https://www.supersalud.gob.cl/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                supersalud.gob.cl
              </a>
            </li>
            <li>
              World Association for Sexual Health (WAS). (2021).{' '}
              <em>Declaración de Salud Sexual para el Milenio y Estándares</em>. Disponible en:{' '}
              <a
                href="https://www.worldsexualhealth.net/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                worldsexualhealth.net
              </a>
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
