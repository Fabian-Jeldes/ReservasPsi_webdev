// Tratamiento del Vaginismo y Dolor Genitopélvico en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function VaginismoDolorPelvicoPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento del Vaginismo y Dolor Genitopélvico en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'El Vaginismo y las condiciones de Dolor Genitopélvico comprenden dificultades caracterizadas por la imposibilidad o dificultad recurrente para permitir la penetración vaginal, acompañada de espasmos musculares involuntarios del suelo pélvico. Tratamiento sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'vaginismo Chile, tratamiento vaginismo, dolor genitopélvico, dispareunia, hipertonía suelo pélvico, sexólogo clínico Santiago, CIE-11 vaginismo, DSM-5-TR dolor genitopélvico'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento del Vaginismo y Dolor Genitopélvico en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `${window.location.origin}/sexualidad-femenina/vaginismo-dolor-genitopelvico`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Vaginismo y Dolor Genitopélvico',
        alternateName: 'Trastorno de Dolor Genito-Pélvico/Penetración',
        description:
          'Dificultad o imposibilidad recurrente para permitir la penetración vaginal, acompañada de espasmos musculares involuntarios del suelo pélvico, hipertonía y/o dolor penetrativo.',
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
            name: '¿El vaginismo tiene cura o tendré que vivir con dolor para siempre?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El vaginismo sí tiene solución definitiva. No es una malformación anatómica ni una condición irreversible. Al tratarse de una respuesta muscular involuntaria y una memoria defensiva del dolor, el tratamiento combinado de psicoterapia sexológica y kinesiología pélvico permite descondicionar el reflejo de cierre, logrando una penetración completamente placentera y libre de dolor.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Es necesario usar dilatadores y cómo se complementa la kinesiología pélvica con la terapia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El uso de dilatadores vaginales no es una "fuerza bruta", sino una herramienta de desensibilización sistemática que la paciente maneja a su propio ritmo para que el cerebro y los músculos comprueben que la zona es elástica y segura. La kinesiología pélvica flexibiliza el músculo hipertónico, mientras que la psicoterapia sexológica desarticula la ansiedad, el miedo al dolor y las dinámicas de evitación en la pareja.',
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
            Problemas Sexuales Femeninos · Vaginismo y dolor pélvico
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
          Tratamiento del Vaginismo y Dolor Genitopélvico en Chile: Enfoque Sexológico Clínico e Integrativo
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
              El Vaginismo y las condiciones de Dolor Genitopélvico comprenden dificultades caracterizadas por la imposibilidad o dificultad recurrente para permitir la penetración vaginal (tampones, exámenes ginecológicos o contacto coital), acompañada de espasmos musculares involuntarios del suelo pélvico, hipertonía y/o una sensación persistente de ardor, quemazón o dolor penetrativo.
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
              ), estas manifestaciones se encuentran enmarcadas en el Capítulo 17: Condiciones relacionadas con la salud sexual, bajo la categoría de Trastornos de Dolor por Penetración Sexual. La CIE-11 desvincula estas condiciones de los trastornos mentales o de la falsa creencia de &quot;rechazo a la feminidad&quot;, reconociéndolas como respuestas psicofisiológicas complejas donde convergen aspectos neurobiológicos, musculares, cognitivos y relacionales.
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
              ) en 2022, unificó las antiguas categorías independientes de vaginismo y dispareunia en una sola entidad clínica: el Trastorno de Dolor Genito-Pélvico/Penetración:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterios Sintomáticos Integrados:
                </strong>{' '}
                Presencia persistente de al menos una de las siguientes manifestaciones: dolor genitopélvico durante la penetración o intentos de penetración; temor o ansiedad marcada ante la anticipación del dolor; o acusada tensión/hipertonía de los músculos del suelo pélvico.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterio de Temporalidad e Intensidad:
                </strong>{' '}
                Los síntomas deben mantenerse durante un período mínimo de 6 meses y provocar un malestar personal significativo, angustia o frustración en la esfera íntima.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Especificadores Clínicos:
                </strong>{' '}
                Se clasifica en primaria (imposibilidad de penetración desde las primeras experiencias) o adquirida (desarrollada tras un período de penetración sin dolor), así como generalizada o situacional.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diferenciación entre Etiología Ginecológica, Vulvodinia e Hipertonía Pélvica
            </h3>
            <p>
              El abordaje clínico exige un riguroso diagnóstico diferencial interdisciplinario para descartar u homologar causas orgánicas concurrentes:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Descarte de Condiciones Ginecológicas Estructurales u Infecciosas:
                </strong>{' '}
                Evaluación de infecciones vaginales recurrentes (candidiasis, vaginosis), endometriosis, liquen escleroso, atrofia vulvovaginal por déficit estrogénico (menopausia o lactancia) o cicatrices de episiotomía.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Vulvodinia y Vestibulodinia Provocada:
                </strong>{' '}
                Identificación de cuadros de dolor neuropático o inflamatorio localizado en el vestíbulo vulvar ante la presión táctil.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Hipertonía del Suelo Pélvico y Vaginismo:
                </strong>{' '}
                Verificación de la contracción involuntaria de la musculatura elevadora del ano (<em>musculus levator ani</em>), la cual responde a un arco reflejo defensivo.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Protocolo Interdisciplinario:
                </strong>{' '}
                Trabajo coordinado con ginecología y kinesiología pélvica en concordancia con los marcos institucionales del Ministerio de Salud de Chile (puedes visitar{' '}
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

        {/* 2. Mecanismos Psicofisiológicos del Dolor y la Hipertonía Pélvica */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos del Dolor y la Hipertonía Pélvica
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. El Bucle Dolor-Anticipación-Espasmo y la Hipertonía del Suelo Pélvico
            </h3>
            <p>
              El principal factor mantenedor del vaginismo es el establecimiento de un circuito cerrado de anticipación defensiva:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Memoria Corporal del Dolor:
                </strong>{' '}
                Cuando una persona experimenta dolor en un intento de penetración previa (por falta de lubricación, infección o prisa), el cerebro registra la zona genital como una fuente potencial de daño.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  El Reflejo de Cierre Involuntario:
                </strong>{' '}
                Ante la sola inminencia de un intento de penetración, el sistema nervioso gatilla la contracción automática de los músculos del suelo pélvico. Intentar penetrar un canal contracturado incrementa el roce y la fricción, reconfirmando la señal de dolor y cerrando el bucle de retroalimentación negativa.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología de la Sensibilización Central y Respuesta Defensiva
            </h3>
            <p>
              Desde la neurobiología del dolor, el vaginismo y la dispareunia involucran un estado de hiperalgesia y sensibilización central:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Activación de la Amígdala y el Sistema Simpático:
                </strong>{' '}
                La amenaza percibida ante el coito activa el eje del estrés, liberando adrenalina y aumentando la tensión muscular global.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Interferencia Cognitiva y &quot;Espectadorismo&quot;:
                </strong>{' '}
                Durante el contacto erótico, la atención se desplaza hacia la anticipación del pinchazo o ardor. La hipervigilancia inhibe la respuesta parasimpática de excitación y lubricación natural, agravando la tensión física.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.3. Mitos, Educación Coitocéntrica, Trauma y Factores Afectivos
            </h3>
            <p>
              Las variables psicosociales y afectivas moldean la vivencia del cuerpo femenino:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Educación Sexual Rígida y Mitos sobre la Virginidad:
                </strong>{' '}
                La asimilación de mensajes morales negativos sobre el sexo, el temor al sangrado o la creencia de que &quot;la primera vez debe doler&quot; condicionan la respuesta pélvica de protección.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Impacto del Trauma o Experiencias Médicas Invasivas:
                </strong>{' '}
                Antecedentes de exámenes ginecológicos traumáticos, abuso o violencia sexual previa requieren una intervención con enfoque de trauma informado.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Dificultades en la Pareja y &quot;Peso del Silencio&quot;:
                </strong>{' '}
                La culpa, el temor a defraudar a la pareja o la imposibilidad de expresar límites consolidan la evitación del contacto íntimo.
              </li>
            </ul>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 3. Abordaje Terapéutico Sexológico e Interdisciplinario */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            3. Abordaje Terapéutico Sexológico e Interdisciplinario
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.1. Reeducación Sensorial, Desensibilización Graduada y Kinesiología Pélvica
            </h3>
            <p>
              El tratamiento del vaginismo cuenta con una de las tasas de éxito clínico más altas en sexología cuando se aplica un protocolo combinado, siguiendo las directrices de la World Association for Sexual Health (puedes consultar{' '}
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
                  Psicoterapia Sexológica y Desensibilización Graduada:
                </strong>{' '}
                Acompañamiento terapéutico para desactivar el condicionamiento del miedo, integrando el uso guiado de entrenadores o dilatadores vaginales de silicona de tamaño progresivo. La persona recupera el control voluntario sobre su propio ritmo.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Kinesiología del Suelo Pélvico (<em>Pelvic Floor Physiotherapy</em>):
                </strong>{' '}
                Trabajo especializado de biorretroalimentación (<em>biofeedback</em>), terapia manual y relajación miofascial para reentrenar la musculatura elevadora del ano y normalizar el tono muscular.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Abordaje de la Dinámica Vincular, Pareja y Desarticulación del Coitocentrismo
            </h3>
            <p>
              La intervención involucra de forma activa a la pareja (cuando está presente) como un agente de contención y no de exigencia:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Prohibición Temporal de la Penetración (Pauta de Protección):
                </strong>{' '}
                Se elimina explícitamente la penetración de la rutina íntima para liberar al encuentro del fantasma del dolor, permitiendo explorar la caricia, el placer clitoridiano y la afectividad sin presión.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Comunicación Abierta y Acompañamiento Empático:
                </strong>{' '}
                Se abren canales para conversar sobre el dolor sin vergüenza, resignificando la intimidad como un espacio seguro.
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
              4.1. ¿El vaginismo tiene cura o tendré que vivir con dolor para siempre?
            </h3>
            <p>
              El vaginismo{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                sí tiene solución definitiva
              </strong>
              . No es una malformación anatómica ni una condición irreversible. Al tratarse de una respuesta muscular involuntaria y una memoria defensiva del dolor, el tratamiento combinado de psicoterapia sexológica y kinesiología pélvico permite descondicionar el reflejo de cierre, logrando una penetración completamente placentera y libre de dolor.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. ¿Es necesario usar dilatadores y cómo se complementa la kinesiología pélvica con la terapia?
            </h3>
            <p>
              El uso de dilatadores vaginales no es una &quot;fuerza bruta&quot;, sino una herramienta de desensibilización sistemática que la paciente maneja a su propio ritmo para que el cerebro y los músculos comprueben que la zona es elástica y segura. La kinesiología pélvica flexibiliza el músculo hipertónico, mientras que la psicoterapia sexológica desarticula la ansiedad, el miedo al dolor y las dinámicas de evitación en la pareja.
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
              <em>Declaración sobre Salud Sexual y Estándares de Atención</em>. Sitio web oficial:{' '}
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
              <em>Clinical Consensus Guidelines for Genito-Pelvic Pain</em>. Sitio web oficial:{' '}
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
