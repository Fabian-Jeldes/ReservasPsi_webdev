// Tratamiento de la Eyaculación Retardada en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function EyaculacionRetardadaPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de la Eyaculación Retardada en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'La Eyaculación Retardada se caracteriza por un retraso significativo o una ausencia recurrente del reflejo eyaculatorio a pesar de la presencia de una estimulación sexual adecuada. Tratamiento sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'eyaculación retardada Chile, tratamiento eyaculación retardada, aneyaculación psicógena, sexólogo clínico Santiago, CIE-11 eyaculación retardada, DSM-5-TR eyaculación retardada, anorgasmia masculina'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de la Eyaculación Retardada en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `${window.location.origin}/sexualidad-masculina/eyaculacion-retardada`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Eyaculación Retardada',
        alternateName: 'Aneyaculación o Inhibición Eyaculatoria',
        description:
          'Retraso significativo o ausencia recurrente del reflejo eyaculatorio a pesar de la presencia de una estimulación sexual adecuada, deseo erótico y una fase de excitación o erección conservada.',
      },
      author: {
        '@type': 'Person',
        name: 'Ps. Andrei Andrusco Fidalgo',
        jobTitle: 'Psicólogo Clínico y Sexólogo',
        url: `${window.location.origin}/sobre-mi`,
      },
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Por qué puedo eyacular solo al masturbarme y no durante la penetración con mi pareja?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Esto sucede habitualmente debido a la combinación de dos factores: por un lado, el cerebro se ha habituado a la estimulación táctil e intensidad específica de la propia mano (estilo masturbatorio idiosincrásico); por otro lado, el encuentro en pareja suele activar la ansiedad de desempeño, la necesidad de control y el temor a defraudar, factores que bloquean la respuesta reflexógena que sí fluye en privado.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Los antidepresivos o tratamientos farmacológicos pueden provocar eyaculación retardada?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Medicamentos como los antidepresivos (especialmente los ISRS como la sertralina, paroxetina o escitalopram) elevan los niveles de serotonina central, lo que eleva significativamente el umbral necesario para desencadenar el orgasmo y la eyaculación. Si este es el caso, en la consulta trabajamos en coordinación interdisciplinaria con el médico tratante o psiquiatra para evaluar opciones sin suspender abruptamente el tratamiento farmacológico.',
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
            Problemas Sexuales Masculinos · Eyaculación retardada o aneyaculación
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
          Tratamiento de la Eyaculación Retardada en Chile: Enfoque Sexológico Clínico e Integrativo
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
              La Eyaculación Retardada se caracteriza por un retraso significativo o una ausencia recurrente del reflejo eyaculatorio a pesar de la presencia de una estimulación sexual adecuada, deseo erótico y una fase de excitación o erección conservada.
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
              ), esta condición se categoriza dentro del Capítulo 17: Condiciones relacionadas con la salud sexual. Al remover las disfunciones sexuales de los trastornos mentales tradicionales, la CIE-11 promueve un abordaje no estigmatizante enfocado en el bienestar físico, relacional y emocional del individuo.
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
              El Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM-5-TR) de la American Psychological Association (APA) (puedes revisar sus parámetros en{' '}
              <a
                href="https://www.apa.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                apa.org
              </a>
              ) establece criterios diagnósticos precisos para la evaluación de la eyaculación retardada:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Marcado Retraso o Infrecuencia:
                </strong>{' '}
                Se observa una demora excesiva o la incapacidad total para alcanzar la eyaculación en el 75% al 100% de los encuentros sexuales en pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterio de Temporalidad y Malestar:
                </strong>{' '}
                La condición debe persistir por un mínimo de 6 meses y generar un malestar personal clínicamente significativo, frustración, agotamiento físico o distanciamiento afectivo en la relación.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Especificadores Contextuales:
                </strong>{' '}
                Permite clasificar la dificultad como primaria (presente desde las primeras experiencias eróticas) o adquirida (de aparición posterior), así como generalizada o situacional (manifestándose únicamente en la penetración o con parejas específicas).
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diferenciación entre Etiología Orgánica y Psicógena
            </h3>
            <p>
              Dado que el reflejo eyaculatorio puede verse afectado por variables farmacológicas o neurofisiológicas, el diagnóstico diferencial es un paso indispensable:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Factores Farmacológicos:
                </strong>{' '}
                La ingesta de inhibidores selectivos de la recaptación de serotonina (ISRS / antidepresivos), neurolépticos, antihipertensivos o el consumo crónico de alcohol pueden alterar severamente el umbral eyaculatorio.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación Orgánica y Neurológica:
                </strong>{' '}
                Se deben evaluar antecedentes de cirugía prostática, neuropatía diabética, daño en las vías simpáticas lumbares o alteraciones endocrinas (como el hipotiroidismo o la hiperprolactinemia).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Preservación de la Eyaculación en Masturbación Solitaria:
                </strong>{' '}
                La capacidad de eyacular mediante la automasturbación o el uso de estimulación táctil específica confirma la integridad del arco reflejo y orienta la etiología hacia factores de hipercontrol, estilo masturbatorio o dinámica de pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Interconsulta Médica:
                </strong>{' '}
                Trabajamos bajo protocolos de derivación interdisciplinaria con urología y psiquiatría, en concordancia con los marcos institucionales del Ministerio de Salud de Chile (puedes visitar{' '}
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

        {/* 2. Mecanismos Psicofisiológicos de la Inhibición Eyaculatoria */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos de la Inhibición Eyaculatoria
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. Ansiedad de Desempeño, Hipercontrol y &quot;Espectadorismo&quot;
            </h3>
            <p>
              A diferencia de la eyaculación precoz, la eyaculación retardada suele estar vinculada a un exceso de control consciente y a la dificultad para dejarse llevar por el flujo de sensaciones orgánicas.
            </p>
            <p>
              Bajo el fenómeno del &quot;espectadorismo&quot; (<em>spectatoring</em>), el individuo monitorea de forma obsesiva su nivel de excitación y el tiempo transcurrido. La preocupación constante por &quot;cumplir&quot; o alcanzar el orgasmo introduce un estado de tensión racional que bloquea la activación refleja del sistema nervioso central.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología de la Inhibición Central: Modelo de Control Dual
            </h3>
            <p>
              El Modelo de Control Dual explica cómo los mecanismos cerebrales de inhibición pueden sobrepasar el umbral de excitación necesario para desencadenar el reflejo eyaculatorio:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Tono Simpático Pro-eyaculatorio vs. Inhibición Cortical:
                </strong>{' '}
                Aunque el reflejo eyaculatorio requiere la activación simpática final, el exceso de adrenalina derivado de la ansiedad situacional y la sobreactivación de la corteza prefrontal (asociada al juicio y al pensamiento analítico) inhibe el centro eyaculatorio espinal.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Procesamiento de la Estimulación:
                </strong>{' '}
                La rumiación mental interrumpe la suma temporal y espacial de estímulos aferentes requerida para alcanzar el clímax.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.3. Estilo Masturbatorio Idiosincrásico y Moduladores Digitales
            </h3>
            <p>
              Un factor psicofisiológico crucial en la eyaculación retardada situacional es la presencia de un estilo masturbatorio idiosincrásico:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Ajuste Táctil y Presión Específica:
                </strong>{' '}
                La costumbre de masturbarse ejerciendo una presión, velocidad, postura o fricción muy superior o distinta a la que puede proporcionar el canal vaginal, anal o la cavidad oral de una pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Habituación a Estímulos Supranormales:
                </strong>{' '}
                El uso prolongado de pornografía de alta intensidad genera una condicionante cognitiva donde el cerebro requiere estímulos visuales específicos e hiperintensos para desencadenar el orgasmo, dificultando la respuesta en el encuentro interpersonal.
              </li>
            </ul>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 3. Abordaje Terapéutico Sexológico */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            3. Abordaje Terapéutico Sexológico
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.1. Reeducación Sensorial y Modificación del Patrón Masturbatorio
            </h3>
            <p>
              El tratamiento sexológico se estructura en protocolos graduales de reacondicionamiento y focalización sensorial respaldados por la World Association for Sexual Health (puedes consultar{' '}
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
                  Reentrenamiento del Estilo Masturbatorio:
                </strong>{' '}
                Modificación paulatina de la presión, velocidad y postura durante la práctica en solitario para aproximarla a la biomecánica del contacto con la pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Técnicas de Transferencia Gradual:
                </strong>{' '}
                Pautas de aproximación sucesiva donde la estimulación manual o el uso de fantasías se integran de forma progresiva en el contexto compartido, eliminando la exigencia por la penetración en las primeras fases.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Abordaje de la Dinámica Vincular, Gestión de la Culpa y Comunicación
            </h3>
            <p>
              La eyaculación retardada genera con frecuencia un fuerte impacto en la pareja, la cual puede interpretar la falta de eyaculación como una señal de rechazo o falta de atracción.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Superación del &quot;Peso del Silencio&quot; y la Alexitimia:
                </strong>{' '}
                Se promueve la expresión abierta del cansancio, la culpa y la frustración que acumulan ambos integrantes.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Redefinición del Éxito Erótico:
                </strong>{' '}
                Se desvincula la vivencia del placer y la intimidad de la obligación de culminar en eyaculación coital, reduciendo la presión sobre ambos cuerpos y facilitando el desbloqueo del reflejo.
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
              4.1. ¿Por qué puedo eyacular solo al masturbarme y no durante la penetración con mi pareja?
            </h3>
            <p>
              Esto sucede habitualmente debido a la combinación de dos factores: por un lado, el cerebro se ha habituado a la estimulación táctil e intensidad específica de la propia mano (estilo masturbatorio idiosincrásico); por otro lado, el encuentro en pareja suele activar la ansiedad de desempeño, la necesidad de control y el temor a defraudar, factores que bloquean la respuesta reflexógena que sí fluye en privado.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. ¿Los antidepresivos o tratamientos farmacológicos pueden provocar eyaculación retardada?
            </h3>
            <p>
              Sí. Medicamentos como los antidepresivos (especialmente los ISRS como la sertralina, paroxetina o escitalopram) elevan los niveles de serotonina central, lo que eleva significativamente el umbral necesario para desencadenar el orgasmo y la eyaculación. Si este es el caso, en la consulta trabajamos en coordinación interdisciplinaria con el médico tratante o psiquiatra para evaluar opciones sin suspender abruptamente el tratamiento farmacológico.
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
              Organización Mundial de la Salud. (2022).{' '}
              <em>Clasificación Internacional de Enfermedades</em> (CIE-11, Capítulo 17). Sitio web oficial:{' '}
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
              World Association for Sexual Health. (2021).{' '}
              <em>Declaración de Salud Sexual para el Milenio y Estándares</em>. Sitio web oficial:{' '}
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
              <em>Clinical Guidelines for Diagnosis and Management of Delayed Ejaculation and Anorgasmia</em>. Sitio web oficial:{' '}
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
              <em>Guías Técnicas para la Salud Sexual y Salud Mental</em>. Sitio web oficial:{' '}
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
