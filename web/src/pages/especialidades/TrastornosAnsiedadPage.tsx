// Tratamiento de los Trastornos de Ansiedad y Pánico en Chile: Enfoque Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function TrastornosAnsiedadPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de los Trastornos de Ansiedad y Pánico en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'Los Trastornos de Ansiedad y Pánico comprenden un conjunto de condiciones caracterizadas por una activación neurofisiológica desproporcionada, miedo intenso o aprensión anticipatoria. Tratamiento psicológico clínico e integrativo en Chile.'
  const seoKeywords =
    'trastornos de ansiedad Chile, tratamiento crisis de pánico, trastorno de ansiedad generalizada TAG, ansiedad social, psicólogo clínico Santiago, CIE-11 ansiedad, DSM-5-TR trastorno de pánico'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de los Trastornos de Ansiedad y Pánico en Chile: Enfoque Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/salud-emocional/trastornos-ansiedad-panico`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Trastornos de Ansiedad y Pánico',
        alternateName: 'Trastorno de Ansiedad Generalizada (TAG) y Trastorno de Pánico',
        description:
          'Conjunto de condiciones caracterizadas por una activación neurofisiológica desproporcionada, miedo intenso o aprensión anticipatoria ante estímulos internos o externos, manifestándose mediante crisis repentinas de angustia o un estado sostenido de preocupación incontrolable.',
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
            name: '¿Un ataque de pánico me puede causar un infarto, la muerte o hacerme enloquecer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Es la pregunta más frecuente en mi consulta, y la respuesta clínica es categórica: no, de ninguna manera. Aunque las sensaciones físicas son aterradoras, una crisis de pánico es una descarga temporal y completamente inofensiva del sistema de supervivencia. El cuerpo está diseñado para soportar esa activación; siempre alcanza un pico y desciende de forma natural por sí sola. Nadie ha muerto ni ha enloquecido por un ataque de pánico.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Es posible superar los trastornos de ansiedad sin depender de medicamentos de por vida?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, absolutamente. Si bien los fármacos pueden ser un apoyo médico válido en momentos de crisis muy severas, la psicoterapia basada en evidencia te otorga herramientas autónomas y definitivas para desactivar el miedo al miedo, modificar los sesgos cognitivos y recuperar la libertad de acción a largo plazo.',
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
            Problemáticas del Ánimo y Ansiedad · Trastornos de Ansiedad y Pánico
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
          Tratamiento de los Trastornos de Ansiedad y Pánico en Chile: Enfoque Clínico e Integrativo
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
              Los Trastornos de Ansiedad y Pánico comprenden un conjunto de condiciones caracterizadas por una activación neurofisiológica desproporcionada, miedo intenso o aprensión anticipatoria ante estímulos internos (sensaciones corporales) o externos, manifestándose mediante crisis repentinas de angustia (ataques de pánico) o un estado sostenido de preocupación incontrolable.
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
              ), estas manifestaciones se encuentran categorizadas en el Capítulo 06: Trastornos mentales, del comportamiento o del neurodesarrollo, bajo el bloque de Trastornos de ansiedad o relacionados con el miedo. Como clínico, siempre destaco a mis pacientes que la ansiedad no es un defecto de carácter, sino el sistema de alarma evolutivo de nuestro cuerpo intentando protegernos de un peligro que percibe como real e inminente. La CIE-11 nos ayuda a entender que cuando esta alarma se queda encendida de forma permanente, el organismo entra en un desgaste profundo que compromete el sueño, la energía vital y el bienestar integral.
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
              ) en 2022, delimita clínicamente el Trastorno de Pánico y el Trastorno de Ansiedad Generalizada (TAG):
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterios del Trastorno de Pánico:
                </strong>{' '}
                Aparición recurrente e imprevista de ataques de pánico (oleadas repentinas de miedo o malestar intenso que alcanzan su máxima expresión en minutos), acompañados por al menos 1 mes de preocupación persistente por la reaparición de nuevas crisis (ansiedad anticipatoria) o cambios desadaptativos en la conducta (evitación agorafóbica).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterio Sintomático de la Crisis:
                </strong>{' '}
                Presencia de al menos 4 manifestaciones neurovegetativas simultáneas: palpitaciones, taquicardia, sudoración, temblores, sensación de ahogo, opresión torácica, mareo y el temido pensamiento de &quot;estar perdiendo el control&quot; o &quot;morir&quot;.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Trastorno de Ansiedad Generalizada (TAG):
                </strong>{' '}
                Preocupación excesiva e incontrolable presente la mayor parte de los días durante al menos 6 meses, asociada a fatiga, tensión muscular, irritabilidad y alteraciones del descanso.
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
              En mi experiencia en consulta, uno de los pasos más liberadores para el paciente es el diagnóstico diferencial riguroso. Muchas personas llegan convencidas de que padecen una enfermedad cardíaca o neurológica grave cuando experimentan una crisis. Es fundamental descartar condiciones médicas primarias (como hipertiroidismo o arritmias) en coordinación con la medicina general, siguiendo los lineamientos del Ministerio de Salud de Chile (puedes visitar{' '}
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
              ), para que la persona pueda comprender, desde la seguridad médica, que sus síntomas responden a una desregulación del sistema nervioso autónomo.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 2. Mecanismos Psicofisiológicos: El Ciclo de la Alarma y la Trampa Interoceptiva */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos: El Ciclo de la Alarma y la Trampa Interoceptiva
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. El Bucle Miedo-Hipervigilancia-Catástrofe
            </h3>
            <p>
              El mecanismo que transforma una crisis de pánico aislada en un trastorno incapacitante es lo que en psicoterapia denominamos la trampa interoceptiva. Ante una variación fisiológica completamente normal (como acelerarse al subir una escalera o tras una taza de café), la mente hipervigilante interpreta esa señal como una catástrofe inminente (<em>&quot;me va a dar un infarto&quot;</em>).
            </p>
            <p>
              Esta interpretación activa de inmediato la amígdala cerebral y descarga una dosis masiva de adrenalina, lo que acelera aún más el corazón y valida falsamente el miedo inicial, cerrando un círculo vicioso de terror. Como suelo explicar en sesión:{' '}
              <em>el problema no es lo que siente tu cuerpo, sino el miedo aterrador que le tenemos a nuestras propias sensaciones</em>.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología de la Respuesta de Supervivencia: Simpático vs. Parasimpático
            </h3>
            <p>
              Desde la perspectiva neurobiológica, la ansiedad sostenida mantiene al organismo atrapado en la respuesta de &quot;lucha o huida&quot; (sistema nervioso simpático). Las catecolaminas generan vasoconstricción, hiperventilación —que altera los niveles de dióxido de carbono provocando mareos y hormigueo— y una tensión muscular defensiva crónica.
            </p>
            <p>
              En mi enfoque terapéutico, no buscamos &quot;apagar&quot; mágicamente el cuerpo con un juicio moral, sino entrenarlo pacientemente para recuperar el tono parasimpático, enseñándole al sistema nervioso que ya no está en peligro de extinción.
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
              3.1. Terapia Cognitivo-Conductual, Exposición Interoceptiva y Aceptación
            </h3>
            <p>
              El tratamiento que ofrezco se basa en protocolos científicamente respaldados por la World Health Organization (puedes consultar{' '}
              <a
                href="https://www.worldsexualhealth.net/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                worldsexualhealth.net
              </a>{' '}
              y los lineamientos de la OMS en{' '}
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                who.int
              </a>
              ):
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Reestructuración Cognitiva Profunda:
                </strong>{' '}
                Aprender a identificar los pensamientos automáticos catastróficos y cuestionar su validez real sin invalidar el sufrimiento emocional que generan.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Exposición Interoceptiva Gradual:
                </strong>{' '}
                Un espacio seguro y respetuoso donde, a través de ejercicios guiados en sesión (como inducir de forma controlada una leve hiperventilación o aceleración del pulso), el paciente comprueba por sí mismo que las sensaciones físicas son molestas, pero absolutamente inofensivas.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Acompañamiento Humano, Red de Apoyo y Superación del Silencio
            </h3>
            <p>
              Vivir con ansiedad genera un enorme desgaste y, con frecuencia, una profunda sensación de incomprensión por parte del entorno. Por ello, trabajamos en:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Superar el &quot;Peso del Silencio&quot;:
                </strong>{' '}
                Romper la vergüenza de mostrarse vulnerable y abrir un espacio donde tu malestar sea escuchado con absoluta empatía y sin juicios.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Involucramiento del Vínculo:
                </strong>{' '}
                Orientar a la red de apoyo (pareja o familia) para evitar tanto la sobreprotección como la invalidación, construyendo un entorno relacional que promueva la calma.
              </li>
            </ul>
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
              4.1. &quot;¿Un ataque de pánico me puede causar un infarto, la muerte o hacerme enloquecer?&quot;
            </h3>
            <p>
              Es la pregunta más frecuente en mi consulta, y la respuesta clínica es categórica:{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                no, de ninguna manera
              </strong>
              . Aunque las sensaciones físicas son aterradoras, una crisis de pánico es una descarga temporal y completamente inofensiva del sistema de supervivencia. El cuerpo está diseñado para soportar esa activación; siempre alcanza un pico y desciende de forma natural por sí sola. Nadie ha muera ni ha enloquecido por un ataque de pánico.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. &quot;¿Es posible superar los trastornos de ansiedad sin depender de medicamentos de por vida?&quot;
            </h3>
            <p>
              Sí, absolutamente. Si bien los fármacos pueden ser un apoyo médico válido en momentos de crisis muy severas, la psicoterapia basada en evidencia te otorga herramientas autónomas y definitivas para desactivar el miedo al miedo, modificar los sesgos cognitivos y recuperar la libertad de acción a largo plazo.
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
              Organización Mundial de la Salud. (2022).{' '}
              <em>Clasificación Internacional de Enfermedades</em> (CIE-11, Capítulo 06: Trastornos de ansiedad o relacionados con el miedo). Sitio web oficial:{' '}
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
              National Institute of Mental Health (NIMH). (2023).{' '}
              <em>Generalized Anxiety Disorder and Panic Disorder: Clinical Guidance</em>. U.S. Department of Health and Human Services. Sitio web oficial:{' '}
              <a
                href="https://www.nimh.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                nimh.nih.gov
              </a>
              .
            </li>
            <li>
              World Association for Sexual Health. (2021).{' '}
              <em>Declaración sobre Salud Integral y Bienestar</em>. Sitio web oficial:{' '}
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
              Ministerio de Salud de Chile. (2020).{' '}
              <em>Guías Clínicas para el Tratamiento de los Trastornos de Ansiedad</em>. Sitio web oficial:{' '}
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
