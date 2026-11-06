// Tratamiento de los Cuadros Depresivos y Trastornos del Ánimo en Chile: Enfoque Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function CuadrosDepresivosPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de los Cuadros Depresivos y Trastornos del Ánimo en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'Los cuadros depresivos y las alteraciones del estado de ánimo configuran una compleja red de síntomas somáticos, cognitivos y relacionales que erosionan la vitalidad. Tratamiento psicológico clínico e integrativo en Chile.'
  const seoKeywords =
    'cuadros depresivos Chile, tratamiento depresión Santiago, trastornos del ánimo, anhedonia, activación conductual, psicólogo clínico Santiago, CIE-11 depresión, DSM-5-TR episodio depresivo'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de los Cuadros Depresivos y Trastornos del Ánimo en Chile: Enfoque Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/salud-emocional/cuadros-depresivos-alteraciones-animo`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Cuadros Depresivos y Alteraciones del Ánimo',
        alternateName: 'Trastornos del Estado de Ánimo y Depresión Clínica',
        description:
          'Condición clínica caracterizada por estado de ánimo deprimido persistente, pérdida de interés o placer (anhedonia), agotamiento físico y cognitivo, y alteraciones neurovegetativas.',
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
            name: '¿Es normal sentir que ya nada me importa y que he perdido la ilusión por todo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, es uno de los síntomas cardinales de la anhedonia depresiva. Cuando el sistema emocional se sobrecarga o se deprime, apaga temporalmente la capacidad de sentir entusiasmo como un mecanismo de protección ante el desgaste. No significa que hayas perdido tu esencia para siempre; significa que tu capacidad de disfrute está temporalmente adormecida y requiere un espacio clínico seguro para reactivarse.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo puedo diferenciar un cuadro depresivo de un bajón de ánimo transitorio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Un bajón de ánimo responde a un evento específico del día y suele ceder tras unas horas o días de descanso. Un cuadro depresivo, en cambio, se instala de forma persistente durante semanas o meses, alterando profundamente el sueño, la energía, la concentración y la capacidad de disfrutar de la vida cotidiana, interfiriendo de manera real en tus vínculos y tu bienestar.',
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
            Problemáticas del Ánimo y Ansiedad · Cuadros Depresivos y alteraciones del ánimo
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
          Tratamiento de los Cuadros Depresivos y Trastornos del Ánimo en Chile: Enfoque Clínico e Integrativo
        </h1>
      </header>

      <hr className="theme-divider mx-auto max-w-4xl" />

      {/* Contenido Clínico Estructurado */}
      <article
        className="mx-auto max-w-4xl px-6 py-16 space-y-16 text-lg leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        {/* 1. Definición Clínica y Marco Diagnóstico */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            1. Definición Clínica y Marco Diagnóstico
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.1. Criterios de la CIE-11 (Organización Mundial de la Salud)
            </h3>
            <p>
              Los cuadros depresivos y las alteraciones del estado de ánimo no se reducen al estereotipo simplista del llanto constante o la inmovilidad absoluta. En la práctica clínica contemporánea, observamos que el malestar anímico adopta formas mucho más sutiles y silentes. Como señala la Organización Mundial de la Salud (OMS) (puedes consultar sus directrices en{' '}
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                who.int
              </a>
              ), los trastornos del estado de ánimo se configuran frecuentemente como una compleja red de síntomas somáticos, cognitivos y relacionales que erosionan progresivamente la vitalidad y el funcionamiento psicosocial.
            </p>
            <p>
              Como clínico, siempre explico a mis pacientes que la depresión no es una debilidad moral ni una falta de voluntad, sino un estado de agotamiento profundo donde el organismo y el sistema emocional colapsan tras sostener exigencias excesivas durante demasiado tiempo.
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
              ) en 2022, establece los criterios formales para la evaluación de los episodios depresivos y trastornos relacionados:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterios Sintomáticos Centrales:
                </strong>{' '}
                Presencia de cinco o más síntomas durante un período mínimo de dos semanas, que representen un cambio respecto al funcionamiento previo, debiendo incluir obligatoriamente estado de ánimo deprivado/triste la mayor parte del día o marcada pérdida de interés o placer (anhedonia).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Manifestaciones Neurovegetativas y Cognitivas:
                </strong>{' '}
                Alteraciones significativas del apetito o del peso, insomnio o hipersomnia casi diaria, agitación o retraso psicomotor, fatiga o pérdida de energía persistente, sentimientos de inutilidad o culpa excesiva, dificultad para concentrarse y pensamientos recurrentes de desesperanza.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Impacto Clínico:
                </strong>{' '}
                Los síntomas generan un malestar clínicamente significativo o un deterioro relevante en las esferas social, laboral u otras áreas importantes del funcionamiento vital.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diagnóstico Diferencial y Perspectiva Clínica
            </h3>
            <p>
              En mi experiencia en consulta, un diagnóstico riguroso implica diferenciar los cuadros depresivos primarios de las reacciones de duelo normal, los trastornos adaptativos transitorios o las alteraciones secundarias a condiciones médicas (como hipotiroidismo o déficits vitamínicos). Para ello, trabajamos en coordinación con la medicina general y especialidades médicas, apoyándonos en las orientaciones técnicas del Ministerio de Salud de Chile (puedes visitar{' '}
              <a
                href="https://www.minsal.cl/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                minsal.cl
              </a>
              ) y los estándares de la Superintendencia de Salud (puedes revisar{' '}
              <a
                href="https://www.supersalud.gob.cl/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                supersalud.gob.cl
              </a>
              ), garantizando una evaluación integral y segura.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 2. Mecanismos Psicofisiológicos: La Anhedonia y el Agotamiento Invisible */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos: La Anhedonia y el Agotamiento Invisible
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. El Ciclo de la Anhedonia y la Fatiga Crónica
            </h3>
            <p>
              En el núcleo de los cuadros depresivos se instala la anhedonia: la incapacidad temporal para experimentar disfrute en actividades que antes resultaban gratificantes. A esto se suma una neblina persistente de agotamiento físico y mental, irritabilidad flotante y una autocrítica implacable.
            </p>
            <p>
              Desde los aportes clásicos de Aaron T. Beck y Judith Beck en Terapia Cognitiva, sabemos que los pensamientos automáticos negativos de tinte autocrítico (&quot;no sirvo para nada&quot;, &quot;estoy fallando a todos&quot;) retroalimentan un estado de fatiga crónica. La persona experimenta una autoexigencia feroz por «seguir funcionando», ocultando su malestar durante meses tras una fachada de normalidad hasta que los recursos de afrontamiento se agotan por completo. Como suelo transmitir en terapia: cuando el cuerpo y la mente te fuerzan a parar, no es un capricho, es una señal desesperada de que el sistema ya no puede sostener el peso que le pusiste encima.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología de la Desregulación Anímica y el Estrés Sostenido
            </h3>
            <p>
              Desde una perspectiva neurobiológica, la depresión altera los circuitos de recompensa cerebral (vía dopaminérgica) y la regulación de neurotransmisores como la serotonina y la noradrenalina. El estrés crónico y los niveles elevados de cortisol erosionan la neuroplasticidad en áreas clave como el hipocampo, apagando la motivación y sumiendo al sistema nervioso en un estado de letargo y desconexión afectiva.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 3. Abordaje Terapéutico Psicológico e Integrativo */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            3. Abordaje Terapéutico Psicológico e Integrativo
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.1. Activación Conductual Gradual y Reestructuración Cognitiva
            </h3>
            <p>
              El tratamiento que desarrollo en consulta se fundamenta en marcos con sólido respaldo científico, alineados con las recomendaciones de la World Association for Sexual Health (puedes consultar{' '}
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
                  Activación Conductual (Jacobson &amp; Martell):
                </strong>{' '}
                Dado que la depresión paraliza la iniciativa, no esperamos a &quot;tener ganas&quot; para actuar. Programamos de forma microgradual actividades sencillas que devuelvan un sentido de dominio y pequeño placer, reactivando pacientemente los circuitos de recompensa del cerebro.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Reestructuración Cognitiva (TCC):
                </strong>{' '}
                Identificamos y cuestionamos los sesgos autocríticos y las trampas de la rumiación mental, ayudándote a construir un diálogo interno mucho más compasivo, realista y flexible.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Procesamiento de Duelos, Crisis Vitales y Espacios Sin Juicios
            </h3>
            <p>
              Los estados depresivos suelen ser la manifestación de duelos no elaborados, crisis vitales profundas o acumulaciones de cargas emocionales que no encontraron dónde expresarse. Por ello, creamos un espacio de absoluta seguridad humana, calidez y estructuración donde puedas soltar la máscara de la exigencia y procesar tu historia sin temor a ser juzgado.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 4. Preguntas Frecuentes en la Consulta */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            4. Preguntas Frecuentes en la Consulta
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.1. &quot;¿Es normal sentir que ya nada me importa y que he perdido la ilusión por todo?&quot;
            </h3>
            <p>
              Sí, es uno de los síntomas cardinales de la anhedonia depresiva. Cuando el sistema emocional se sobrecarga o se deprime, apaga temporalmente la capacidad de sentir entusiasmo como un mecanismo de protección ante el desgaste. No significa que hayas perdido tu esencia para siempre; significa que tu capacidad de disfrute está temporalmente adormecida y requiere un espacio clínico seguro para reactivarse.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. &quot;¿Cómo puedo diferenciar un cuadro depresivo de un bajón de ánimo transitorio?&quot;
            </h3>
            <p>
              Un bajón de ánimo responde a un evento específico del día y suele ceder tras unas horas o días de descanso. Un cuadro depresivo, en cambio, se instala de forma persistente durante semanas o meses, alterando profundamente el sueño, la energía, la concentración y la capacidad de disfrutar de la vida cotidiana, interfiriendo de manera real en tus vínculos y tu bienestar.
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
              American Psychological Association. (2022).{' '}
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
              Organización Mundial de la Salud. (2023).{' '}
              <em>Depressive Disorder (Depression) — Clinical Overview and Care Pathways</em>. Sitio web oficial:{' '}
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
              Beck, A. T., Rush, A. J., Shaw, B. F., &amp; Emery, G. (1979).{' '}
              <em>Cognitive Therapy of Depression</em>. Guilford Press.
            </li>
            <li>
              Martell, C. R., Dimidjian, S., &amp; Herman-Dunn, R. (2010).{' '}
              <em>Behavioral Activation for Depression: A Clinician&#39;s Guide</em>. Guilford Press.
            </li>
            <li>
              Ministerio de Salud de Chile. (2013).{' '}
              <em>Guía Clínica GES para el Tratamiento de la Depresión en Personas de 15 años y más</em>. Sitio web oficial:{' '}
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
