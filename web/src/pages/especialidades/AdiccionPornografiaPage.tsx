// Tratamiento del Uso Problemático de Pornografía en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function AdiccionPornografiaPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento del Uso Problemático de Pornografía en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'El uso problemático o compulsivo de pornografía se caracteriza por un patrón persistente de incapacidad para controlar los impulsos o conductas de consumo de material erótico explícito. Tratamiento sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'uso problemático de pornografía Chile, adicción a la pornografía tratamiento, disfunción eréctil por pornografía EDID PIED, sexólogo clínico Santiago, CIE-11 6C72 CSBD, comportamiento sexual compulsivo'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento del Uso Problemático de Pornografía en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/sexualidad-masculina/uso-problematico-de-pornografia`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Uso Problemático de Pornografía',
        alternateName: 'Trastorno por Comportamiento Sexual Compulsivo (CSBD / CIE-11 6C72)',
        description:
          'Patrón persistente de incapacidad para controlar los impulsos o conductas de consumo de material erótico explícito, manteniéndose a pesar de generar consecuencias negativas relevantes en la vida personal, laboral, afectiva o sexual.',
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
            name: '¿El consumo de pornografía destruye permanentemente la capacidad eréctil o el deseo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. La neuroplasticidad del cerebro permite revertir los efectos de la desensibilización dopaminérgica y el condicionamiento visual. A través de la pautación del consumo, la reestructuración cognitiva y el reentrenamiento de la atención erótica, el sistema de recompensa recupera su sensibilidad natural hacia la estimulación interpersonal y los ritmos orgánicos reales.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Es necesario el ayuno dopaminérgico o la abstinencia total para recuperarse?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Los enfoques extremistas que exigen un "ayuno absoluto" o cero contacto con la sexualidad suelen incrementar la ansiedad, la rumiación obsesiva y el ciclo de recaída por culpa. En la consulta clínica se prioriza un modelo de autorregulación progresiva, donde el objetivo es desarticular el uso compulsivo como mecanismo de fuga emocional y restaurar una sexualidad saludable, consciente y gratificante.',
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
            Problemas Sexuales Masculinos · Uso problemático de pornografía
          </span>
        </div>

        <h1
          className="text-3xl md:text-5xl leading-tight font-bold"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            letterSpacing: 'var(--heading-spacing)',
          }}
        >
          Tratamiento del Uso Problemático de Pornografía en Chile: Enfoque Sexológico Clínico e Integrativo
        </h1>
      </header>

      <hr className="theme-divider mx-auto max-w-4xl" />

      {/* Contenido Clínico Estructurado */}
      <article
        className="mx-auto max-w-4xl px-6 py-16 space-y-16 text-lg leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        {/* 1. Definición Clínica y Diagnóstico Diferencial */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            1. Definición Clínica y Diagnóstico Diferencial
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.1. Criterios de la CIE-11 (Organización Mundial de la Salud)
            </h3>
            <p>
              El uso problemático o compulsivo de pornografía se caracteriza por un patrón persistente de incapacidad para controlar los impulsos o conductas de consumo de material erótico explícito, el cual se mantiene a lo largo del tiempo a pesar de generar consecuencias negativas relevantes en la vida personal, laboral, afectiva o sexual del individuo.
            </p>
            <p>
              En la Clasificación Internacional de Enfermedades (CIE-11) de la Organización Mundial de la Salud (OMS) (puedes consultar más detalles en{' '}
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                who.int
              </a>
              ), esta conducta se conceptualiza dentro del marco del Trastorno por Comportamiento Sexual Compulsivo (CSBD / Código 6C72), ubicado en el Capítulo 17: Condiciones relacionadas con la salud sexual. La CIE-11 enfatiza que el núcleo clínico no radica en la frecuencia bruta del consumo, sino en la pérdida de control, la postergación recurrente de responsabilidades vitales y la persistencia del hábito a pesar del malestar o el deterioro funcional.
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
              El Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM-5-TR), publicado por la American Psychological Association (APA) (puedes revisar sus parámetros en{' '}
              <a
                href="https://www.apa.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                apa.org
              </a>
              ) en 2022, no clasifica formalmente la &quot;adicción a la pornografía&quot; como un trastorno adictivo independiente por falta de consenso neurobiológico exclusivo. Sin embargo, establece criterios rigurosos para la evaluación clínica diferencial:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación de la Compulsividad y Malestar:
                </strong>{' '}
                Se requiere verificar que la conducta genere angustia clínicamente significativa o un impacto nocivo real en la esfera psicosocial durante al menos 6 meses.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Diferenciación de la Incongruencia Moral o Religiosa:
                </strong>{' '}
                El DSM-5-TR precisa que el malestar atribuible únicamente a sentimientos de culpa moral, religiosa o dilemas éticos personales respecto a la pornografía no constituye por sí solo un trastorno clínico.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación de Comorbilidades:
                </strong>{' '}
                Es fundamental descartar si la conducta es manifestación secundaria de episodios depresivos mayores, trastornos de ansiedad generalizada, TDAH o estados maniacos/hipomaniacos.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diferenciación entre Uso Recreativo, Uso Problemático y Compulsividad
            </h3>
            <p>
              Para evitar la patologización innecesaria del comportamiento sexual, la evaluación sexológica distingue tres niveles de interacción con el contenido explícito:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Consumo Recreativo o Exploratorio:
                </strong>{' '}
                Actividad acotada, egosintónica y voluntaria que no interfiere con el funcionamiento cotidiano ni reemplaza los vínculos afectivos reales.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Consumo Problemático o Evitativo:
                </strong>{' '}
                Uso utilizado de forma recurrente como mecanismo de afrontamiento primario (<em>coping</em>) ante emociones disfóricas como el estrés, la soledad, el aburrimiento o la ansiedad.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Compulsividad Sexual (CSBD):
                </strong>{' '}
                Presencia de un ciclo automatizado con alta tolerancia, escalada en la búsqueda de novedad de contenidos y fallos repetidos en los intentos voluntarios por reducir o pautar el consumo.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterios de Salud Integral:
                </strong>{' '}
                Evaluación acorde a los protocolos del Ministerio de Salud de Chile (puedes visitar{' '}
                <a
                  href="https://www.minsal.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  minsal.cl
                </a>
                ) y la International Society for Sexual Medicine (puedes revisar{' '}
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

        {/* 2. Mecanismos Psicofisiológicos del Consumo Problemático */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos del Consumo Problemático
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. Desensibilización Dopaminérgica y Sistema de Recompensa
            </h3>
            <p>
              El cerebro humano no está evolutivamente adaptado para procesar el volumen, velocidad y accesibilidad ilimitada de la pornografía digital moderna. Este fenómeno se explica a través de la neurobiología de las adicciones conductuales:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Estímulos Supranormales y Picos Dopaminérgicos:
                </strong>{' '}
                La novedad constante en pantalla actúa como un estímulo supranormal que genera descargas masivas de dopamina en el núcleo accumbens y la vía mesolímbica de recompensa.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Habituación y Desensibilización Receptorial:
                </strong>{' '}
                La exposición continuada a niveles artificialmente elevados de dopamina induce un fenómeno de regulación a la baja (<em>downregulation</em>) de receptores D2, lo que exige estímulos cada vez más intensos, específicos o extremos para obtener el mismo nivel de excitación.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Condicionamiento, Tolerancia y Búsqueda de Novedad
            </h3>
            <p>
              El consumo repetido establece circuitos neuronales automatizados que asocian el malestar emocional con la búsqueda inmediata de gratificación digital:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Escalada de Contenidos:
                </strong>{' '}
                La tolerancia fisiológica suele llevar al individuo a buscar categorías eróticas crecientemente novedosas o atípicas que no reflejan necesariamente sus preferencias o valores en la vida real.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Fuga Afectiva y Anestesia Emocional:
                </strong>{' '}
                La pornografía se transforma en un &quot;ansiolítico digital&quot; que mitiga temporalmente el malestar emocional, creando un ciclo donde la culpa posterior re-activa la necesidad de evadir mediante una nueva sesión de consumo.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.3. Impacto en la Respuesta Sexual Interpersonal (EDID - Disfunción Eréctil por Pornografía)
            </h3>
            <p>
              Uno de los principales motivos de consulta en la población joven es el desarrollo de la Disfunción Eréctil Inducida por Pornografía (EDID):
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Desconexión con la Realidad Corporal:
                </strong>{' '}
                El cerebro se habitúa a un patrón de sobreestimulación visual, pasividad física y ritmo veloz. Al enfrentarse a un encuentro íntimo real (que involucra reciprocidad, ritmo orgánico e imperfección táctil), el nivel de estimulación resulta insuficiente para desencadenar o sostener la respuesta vascular eréctil.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Ansiedad de Rendimiento Secundaria:
                </strong>{' '}
                La frustración por la falta de respuesta eréctil con la pareja desencadena el rol de &quot;espectador&quot;, bloqueando de forma secundaria la respuesta parasimpática necesaria para la erección.
              </li>
            </ul>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 3. Abordaje Terapéutico Sexológico e Integrativo */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            3. Abordaje Terapéutico Sexológico e Integrativo
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.1. Reestructuración Cognitiva y Protocolos de Pautación del Consumo
            </h3>
            <p>
              El tratamiento sexológico clínico no promueve enfoques culpabilizadores ni basados en la vergüenza, sino en la recuperación del autocontrol y el bienestar sexual, en sintonía con los estándares de la World Association for Sexual Health (puedes consultar{' '}
              <a
                href="https://www.worldsexualhealth.net/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                worldsexualhealth.net
              </a>
              ):
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Pautación y Reducción Gradual vs. Abstinencia Rígida:
                </strong>{' '}
                Se identifican los detonantes ambientales, emocionales y cognitivos (<em>triggers</em>) para implementar barreras de protección y pautas sostenibles de regulación.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Reentrenamiento de la Sensibilidad Corporal:
                </strong>{' '}
                Se realizan ejercicios de focalización en sensaciones físicas reales, promoviendo la transición desde el hábito visual pasivo hacia la vivencia erótica integrativa.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Abordaje de la Dinámica Vincular, Vergüenza y Culpa
            </h3>
            <p>
              El consumo problemático genera con frecuencia ocultamiento, pérdida de confianza y quiebres en la intimidad de la pareja.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Superación del &quot;Peso del Silencio&quot;:
                </strong>{' '}
                Se facilita un espacio de psicoterapia para desarmar la vergüenza, la alexitimia normativa y la narrativa de &quot;adicto defectuoso&quot;, resituando la problemática en la gestión del estrés y las necesidades emocionales.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Reconstrucción de la Intimidad Compartida:
                </strong>{' '}
                Se trabaja con la pareja (si la hay) para reconstruir la comunicación erótica, la confianza y el espacio de complicidad sin fiscalizaciones nocivas.
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
              4.1. ¿El consumo de pornografía destruye permanentemente la capacidad eréctil o el deseo?
            </h3>
            <p>
              No. La neuroplasticidad del cerebro permite revertir los efectos de la desensibilización dopaminérgica y el condicionamiento visual. A través de la pautación del consumo, la reestructuración cognitiva y el reentrenamiento de la atención erótica, el sistema de recompensa recupera su sensibilidad natural hacia la estimulación interpersonal y los ritmos orgánicos reales.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. ¿Es necesario el ayuno dopaminérgico o la abstinencia total para recuperarse?
            </h3>
            <p>
              Los enfoques extremistas que exigen un &quot;ayuno absoluto&quot; o cero contacto con la sexualidad suelen incrementar la ansiedad, la rumiación obsesiva y el ciclo de recaída por culpa. En la consulta clínica se prioriza un modelo de autorregulación progresiva, donde el objetivo es desarticular el uso compulsivo como mecanismo de fuga emocional y restaurar una sexualidad saludable, consciente y gratificante.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* Referencias Bibliográficas */}
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
              Referencias Bibliográficas
            </h2>
          </div>

          <ol className="list-decimal pl-6 space-y-3 text-base">
            <li>
              Organización Mundial de la Salud. (2022).{' '}
              <em>Clasificación Internacional de Enfermedades</em> (CIE-11, Capítulo 17: Condición 6C72 - Trastorno por Comportamiento Sexual Compulsivo). Sitio web oficial:{' '}
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                who.int
              </a>
              .
            </li>
            <li>
              American Psychiatric Association. (2022).{' '}
              <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.; DSM-5-TR). Sitio web oficial:{' '}
              <a
                href="https://www.apa.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                apa.org
              </a>
              .
            </li>
            <li>
              World Association for Sexual Health. (2021).{' '}
              <em>Declaración de Salud Sexual y Estándares de Atención</em>. Sitio web oficial:{' '}
              <a
                href="https://www.worldsexualhealth.net/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                worldsexualhealth.net
              </a>
              .
            </li>
            <li>
              International Society for Sexual Medicine. (2023).{' '}
              <em>Position Statement on Compulsive Sexual Behavior Disorder and Digital Sexual Health</em>. Sitio web oficial:{' '}
              <a
                href="https://www.issm.info/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                issm.info
              </a>
              .
            </li>
            <li>
              Ministerio de Salud de Chile. (2020).{' '}
              <em>Orientaciones Técnicas en Salud Mental y Salud Sexual</em>. Sitio web oficial:{' '}
              <a
                href="https://www.minsal.cl/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                minsal.cl
              </a>
              .
            </li>
            <li>
              Superintendencia de Salud de Chile.{' '}
              <em>Registro Nacional de Prestadores Individuales</em>. Sitio web oficial:{' '}
              <a
                href="https://www.supersalud.gob.cl/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                supersalud.gob.cl
              </a>
              .
            </li>
          </ol>
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
