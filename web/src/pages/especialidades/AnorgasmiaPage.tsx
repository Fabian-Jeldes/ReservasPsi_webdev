// Tratamiento de la Anorgasmia y Dificultad del Orgasmo en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function AnorgasmiaPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de la Anorgasmia y Dificultad del Orgasmo en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'La Anorgasmia y las dificultades en el alcance del clímax comprenden la ausencia o el retraso significativo del orgasmo, así como una reducción marcada en la intensidad de las sensaciones orgásmicas. Tratamiento sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'anorgasmia Chile, tratamiento anorgasmia femenina, dificultad del orgasmo, trastorno orgásmico femenino, sexólogo clínico Santiago, CIE-11 anorgasmia, DSM-5-TR trastorno orgásmico'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de la Anorgasmia y Dificultad del Orgasmo en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `${window.location.origin}/sexualidad-femenina/anorgasmia-dificultad-orgasmo`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Anorgasmia y Dificultad del Orgasmo',
        alternateName: 'Trastorno Orgásmico Femenino',
        description:
          'Ausencia o retraso significativo del orgasmo, así como una reducción marcada en la intensidad de las sensaciones orgásmicas, tras una fase de excitación e intensidad erótica adecuada.',
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
            name: '¿Es normal no alcanzar el orgasmo solo con la penetración sin estimular el clítoris?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, es absolutamente normal. Anatómica e histológicamente, el clítoris es el único órgano del cuerpo humano destinado exclusivamente al placer y cuenta con más de 8.000 terminaciones nerviosas. Solo una minoría de mujeres alcanza el clímax mediante la penetración vaginal aislada (generalmente por la tracción indirecta que el coito ejerce sobre los pilares del clítoris). Requerir estimulación clitoridiana directa es la norma fisiológica y no constituye ningún tipo de disfunción.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Pueden los antidepresivos o anticonceptivos bloquear la capacidad de tener orgasmos?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Los antidepresivos de la familia ISRS (como la fluoxetina, sertralina o escitalopram) incrementan los niveles de serotonina central, lo que eleva el umbral necesario para desencadenar el clímax. Asimismo, ciertos anticonceptivos hormonales pueden disminuir la testosterona libre y la lubricación. En la consulta trabajamos en coordinación interdisciplinaria con la médica o médico tratante para evaluar ajustes de dosis o alternativas sin comprometer el tratamiento de base.',
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
            Problemas Sexuales Femeninos · Anorgasmia
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
          Tratamiento de la Anorgasmia y Dificultad del Orgasmo en Chile: Enfoque Sexológico Clínico e Integrativo
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
              La Anorgasmia y las dificultades en el alcance del clímax comprenden la ausencia o el retraso significativo del orgasmo, así como una reducción marcada en la intensidad de las sensaciones orgásmicas, tras una fase de excitación e intensidad erótica adecuada.
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
              ), esta condición se sitúa en el Capítulo 17: Condiciones relacionadas con la salud sexual. Esta actualización desvincula las disfunciones sexuales de los trastornos mentales tradicionales, abordándolas desde una perspectiva no estigmatizante que prioriza el bienestar erótico y relacional integral.
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
              ) en 2022, clasifica esta dificultad bajo el concepto de Trastorno Orgásmico Femenino:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterios Sintomáticos:
                </strong>{' '}
                Presencia de retraso marcado, infrecuencia o ausencia total del orgasmo, o una intensidad notablemente reducida en aproximadamente el 75% al 100% de los encuentros sexuales.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterio de Temporalidad y Malestar:
                </strong>{' '}
                Los síntomas deben mantenerse durante un período mínimo de 6 meses y provocar un malestar personal clínicamente significativo, insatisfacción o frustración.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Especificadores Clínicos:
                </strong>{' '}
                Se clasifica en primaria (nunca se ha experimentado un orgasmo por ninguna vía) o adquirida (desarrollada tras un período de respuesta orgásmica fluida), así como generalizada o situacional (presente solo ante ciertas estimulaciones o con parejas específicas).
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diferenciación entre Etiología Orgánica, Farmacológica y Psicógena
            </h3>
            <p>
              Un aspecto crucial del diagnóstico sexológico es verificar que la dificultad no obedezca a una estimulación clitoridiana inadecuada o a factores biológicos subyacentes:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Factores Farmacológicos:
                </strong>{' '}
                Medicamentos como los antidepresivos inhibidores selectivos de la recaptación de serotonina (ISRS), anticonceptivos hormonales de alta dosis o antihipertensivos pueden elevar sensiblemente el umbral orgásmico.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación Orgánica y Neurológica:
                </strong>{' '}
                Se deben evaluar antecedentes de cirugía pélvica, neuropatías, daño vascular o alteraciones endocrinas (como el hipotiroidismo o estados de déficit estrogénico).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Reconocimiento del Rol del Clítoris:
                </strong>{' '}
                La inmensa mayoría de las mujeres requiere estimulación clitoridiana directa o indirecta para alcanzar el orgasmo; la incapacidad de alcanzar el clímax exclusivamente mediante la penetración vaginal no se considera una patología médica.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Protocolo Interdisciplinario:
                </strong>{' '}
                Trabajo de interconsulta con ginecología, medicina general y psiquiatría en concordancia con los marcos del Ministerio de Salud de Chile (puedes visitar{' '}
                <a
                  href="https://www.minsal.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  minsal.cl
                </a>
                ), la International Society for the Study of Women&#39;s Sexual Health (puedes revisar{' '}
                <a
                  href="https://www.isswsh.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  isswsh.org
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

        {/* 2. Mecanismos Psicofisiológicos de la Inhibición Orgásmica */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos de la Inhibición Orgásmica
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. Ansiedad de Desempeño, Hipercontrol y &quot;Espectadorismo&quot;
            </h3>
            <p>
              El principal mecanismo psicológico que bloquea la respuesta orgásmica es la interferencia cognitiva provocada por la ansiedad de desempeño.
            </p>
            <p>
              Bajo el fenómeno sexológico del &quot;espectadorismo&quot; (<em>spectatoring</em>), la persona adopta un rol de observadora crítica de su propia respuesta física durante el encuentro erótico. La vigilancia constante por &quot;lograr el orgasmo&quot;, el temor a demorar demasiado o la preocupación por la mirada de la pareja dividen la atención, interrumpiendo el flujo de sensaciones táctiles y la entrega al placer.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología del Arco Reflejo Orgásmico: Modelo de Control Dual
            </h3>
            <p>
              El orgasmo es una respuesta autonómica compleja regulada por el Modelo de Control Dual entre la excitación y la inhibición central:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Sobreactivación Cortical Inhibitoria:
                </strong>{' '}
                El exceso de rumiación mental, la culpa o la presión de rendimiento activan áreas de la corteza prefrontal asociadas al juicio y al monitoreo consciente.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Bloqueo del Arco Reflejo:
                </strong>{' '}
                La tensión emocional desencadena la activación del sistema nervioso simpático (adrenalina), lo que contrae los vasos sanguíneos genitales y bloquea el predominio parasimpático necesario para la congestión vascular del clítoris y el desencadenamiento del reflejo orgásmico.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.3. Mitos Eróticos, Coitocentrismo y Condicionamiento Sexual
            </h3>
            <p>
              Las construcciones culturales y la falta de educación sexual anatomofisiológica perpetúan la inhibición:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  El Mito del Orgasmo Vaginal Exclusivo:
                </strong>{' '}
                La falsa creencia histórica de que el orgasmo &quot;maduro&quot; debe alcanzarse solo mediante la penetración vaginal genera una carga injustificada de frustración e inferioridad en mujeres que no lo experimentan sin estímulo clitoridiano.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Apuro y Presión por la Simultaneidad:
                </strong>{' '}
                La exigencia de &quot;llegar juntos&quot; o la prisa en el encuentro íntimo impiden construir la meseta de excitación y el tiempo de estimulación necesario para el clímax.
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
              3.1. Reeducación Sensorial, Autoexploración Guiada y Focalización Sensual
            </h3>
            <p>
              El tratamiento sexológico de la anorgasmia cuenta con una altísima tasa de eficacia clínica a través de programas estructurados respaldados por la Asociación Mundial para la Salud Sexual (puedes consultar{' '}
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
                  Programa de Autoexploración Dirigida (Masturbación Guiada):
                </strong>{' '}
                Pautas de reaprendizaje sensorial en solitario (desarrolladas originalmente por LoPiccolo y Lobitz) que permiten a la paciente explorar su anatomía clitoridiana, mapa de placer y ritmo corporal sin la presión del entorno.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Uso de Herramientas Facilitadoras y Focalización Sensual:
                </strong>{' '}
                Integración progresiva de variadores de ritmo, respiración consciente, uso de lubricantes y juguetes de estimulación clitoridiana/vibratoria para elevar la carga de excitación.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Abordaje de la Dinámica Vincular, Pareja y Comunicación Afectiva
            </h3>
            <p>
              Cuando la persona se encuentra en relación de pareja, la terapia facilita la transferencia de los aprendizajes individuales al espacio compartido:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Desarticulación del Coitocentrismo:
                </strong>{' '}
                Redefinición del juego erótico donde la estimulación clitoridiana directa se integra como un elemento natural y principal del encuentro.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Superación del &quot;Peso del Silencio&quot;:
                </strong>{' '}
                Eliminación del orgasmo simulado (<em>faking</em>) y apertura de una comunicación asertiva para guiarse mutuamente en los ritmos y preferencias eróticas sin culpa ni vergüenza.
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
              4.1. ¿Es normal no alcanzar el orgasmo solo con la penetración sin estimular el clítoris?
            </h3>
            <p>
              Sí, es absolutamente normal. Anatómica e histológicamente, el clítoris es el único órgano del cuerpo humano destinado exclusivamente al placer y cuenta con más de 8.000 terminaciones nerviosas. Solo una minoría de mujeres alcanza el clímax mediante la penetración vaginal aislada (generalmente por la tracción indirecta que el coito ejerce sobre los pilares del clítoris). Requerir estimulación clitoridiana directa es la norma fisiológica y no constituye ningún tipo de disfunción.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. ¿Pueden los antidepresivos o anticonceptivos bloquear la capacidad de tener orgasmos?
            </h3>
            <p>
              Sí. Los antidepresivos de la familia ISRS (como la fluoxetina, sertralina o escitalopram) incrementan los niveles de serotonina central, lo que eleva el umbral necesario para desencadenar el clímax. Asimismo, ciertos anticonceptivos hormonales pueden disminuir la testosterona libre y la lubricación. En la consulta trabajamos en coordinación interdisciplinaria con la médica o médico tratante para evaluar ajustes de dosis o alternativas sin comprometer el tratamiento de base.
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
              International Society for the Study of Women&#39;s Sexual Health. (2023).{' '}
              <em>Clinical Practice Guidelines for Female Orgasmic Disorder and Sexual Response</em>. Sitio web oficial:{' '}
              <a
                href="https://www.isswsh.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                isswsh.org
              </a>
              .
            </li>
            <li>
              Ministerio de Salud de Chile. (2020).{' '}
              <em>Guías y Orientaciones Técnicas</em>. Sitio web oficial:{' '}
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
