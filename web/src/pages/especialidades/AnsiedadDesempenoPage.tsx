// Tratamiento de la Ansiedad de Desempeño Sexual en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function AnsiedadDesempenoPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de la Ansiedad de Desempeño Sexual en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'La Ansiedad de Desempeño Sexual se define como un estado de aprensión, tensión psicofisiológica y miedo anticipatorio focalizado en la capacidad de obtener, mantener o regular la respuesta sexual. Tratamiento sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'ansiedad de desempeño sexual Chile, tratamiento ansiedad de desempeño, espectadorismo sexual, sexólogo clínico Santiago, CIE-11 ansiedad sexual, DSM-5-TR ansiedad desempeño, miedo a fallar en la cama'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de la Ansiedad de Desempeño Sexual en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/sexualidad-masculina/ansiedad-de-desempeno`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Ansiedad de Desempeño Sexual',
        alternateName: 'Espectadorismo Sexual y Ansiedad de Evaluación Erótica',
        description:
          'Estado de aprensión, tensión psicofisiológica y miedo anticipatorio focalizado en la capacidad de obtener, mantener o regular la respuesta sexual durante la interacción íntima.',
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
            name: '¿Cómo saber si mi dificultad de erección o control es causada por ansiedad de desempeño o por un problema orgánico?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El indicador más claro es la presencia de erecciones espontáneas e involuntarias al despertar o durante la masturbación solitaria. Si la erección o el control eyaculatorio funcionan adecuadamente en privado pero se dificultan al estar con una pareja, el origen es predominantemente psicógeno y situacional, causado por la activación del sistema nervioso simpático ante la ansiedad de evaluación.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Tomar fármacos o tranquilizantes ayuda a superar la ansiedad de desempeño sexual?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Los ansiolíticos tradicionales (como las benzodiacepinas) o el alcohol suelen empeorar la respuesta sexual, ya que deprimen el sistema nervioso central e inhiben los reflejos vasculares. Por su parte, los fármacos inductores de la erección (como el sildenafil) pueden actuar como una "muleta" temporal, pero no resuelven la causa cognitiva de fondo. La solución definitiva radica en la psicoterapia sexológica para desactivar el espectadorismo y restaurar la autorregulación emocional.',
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
            Problemas Sexuales Masculinos · Ansiedad de desempeño sexual
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
          Tratamiento de la Ansiedad de Desempeño Sexual en Chile: Enfoque Sexológico Clínico e Integrativo
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
              La Ansiedad de Desempeño Sexual se define como un estado de aprensión, tensión psicofisiológica y miedo anticipatorio focalizado en la capacidad de obtener, mantener o regular la respuesta sexual durante la interacción íntima. Aunque puede manifestarse como un fenómeno aislado, opera habitualmente como el catalizador y mantenedor primario de diversas disfunciones sexuales masculinas.
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
              ), los factores psicológicos y emocionales asociados a la respuesta sexual se integran en el Capítulo 17: Condiciones relacionadas con la salud sexual. Esta categorización aborda la ansiedad de evaluación desde una perspectiva multidimensional de salud integral, reduciendo el estigma y reconociendo que la presión cognitiva altera directamente los circuitos fisiológicos de la excitación.
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
              ) en 2022, evalúa la ansiedad de desempeño como un factor psicológico y contextual determinante en la presentación de los trastornos sexuales:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación del Impacto Sintomático:
                </strong>{' '}
                La ansiedad genera una respuesta de evitación o angustia clínicamente significativa que se mantiene durante al menos 6 meses, interfiriendo en el bienestar personal o en la estabilidad relacional.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Identificación de Creencias Disfuncionales:
                </strong>{' '}
                Presencia de expectativas irrealistas sobre el rendimiento corporal, hipervigilancia de la respuesta física y temor marcatorio a la evaluación negativa por parte de la pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterios de Exclusión:
                </strong>{' '}
                Verificación de que la sintomatología no obedezca exclusivamente a la acción fisiológica directa de sustancias, medicamentos o condiciones médicas no diagnosticadas.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Manifestaciones Psicofisiológicas y Diagnóstico Diferencial
            </h3>
            <p>
              La evaluación clínica especializada permite distinguir entre la ansiedad de desempeño sexual primaria y otros cuadros psicopatológicos o de origen orgánico:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Diferenciación con el Trastorno de Ansiedad Generalizada (TAG):
                </strong>{' '}
                Mientras el TAG abarca preocupaciones flotantes e inespecíficas en múltiples áreas de la vida, la ansiedad de desempeño sexual es situacional y se desencadena de forma específica ante la inminencia o posibilidad de un encuentro erótico.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Interacción con Disfunciones Secundarias:
                </strong>{' '}
                Se evalúa si la ansiedad es la causa desencadenante del fallo eréctil o eyaculador o si surgió como consecuencia de un episodio orgánico aislado previo.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Protocolo Interdisciplinario:
                </strong>{' '}
                Trabajo coordinado con urología y medicina general según las orientaciones del Ministerio de Salud de Chile (puedes visitar{' '}
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

        {/* 2. Mecanismos Psicofisiológicos de la Ansiedad de Desempeño */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos de la Ansiedad de Desempeño
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. El Bucle de Autoobservación y el Fenómeno del &quot;Espectadorismo&quot;
            </h3>
            <p>
              El núcleo cognitivo de la ansiedad de desempeño sexual es el fenómeno sexológico conocido como &quot;espectadorismo&quot; (<em>spectatoring</em>). Ante la duda sobre el rendimiento físico, la persona divide su atención durante el acto erótico:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  División de la Atención y Rol de Observador:
                </strong>{' '}
                En lugar de sumergirse en la vivencia sensorial y táctil, el individuo adopta una postura de &quot;espectador crítico&quot; que juzga la firmeza de la erección, la duración o las reacciones de la pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Bucle de Retroalimentación Negativa:
                </strong>{' '}
                La autoobservación obsesiva actúa como una interferencia cognitiva que bloquea el procesamiento de estímulos eróticos. A mayor monitoreo, mayor ansiedad, lo que confirma los temores iniciales y cronifica el bloqueo.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología de la Respuesta de Estrés: Activación Simpática e Inhibición
            </h3>
            <p>
              La ansiedad de desempeño desencadena una respuesta fisiológica incompatible con la respuesta sexual satisfactoria a través del Modelo de Control Dual:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Activación del Sistema Nervioso Simpático:
                </strong>{' '}
                El temor al fracaso es procesado por la amígdala cerebral como una amenaza inminente, activando el eje hipotálamo-hipófisis-adrenal y liberando catecolaminas (adrenalina y noradrenalina).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Vasoconstricción y Bloqueo Parasimpático:
                </strong>{' '}
                La adrenalina induce vasoconstricción en los vasos sanguíneos periféricos y en los cuerpos cavernosos del pene, anulando el predominio parasimpático requerido para la vasodilatación y provocando la pérdida inmediata de la erección o el acortamiento del control eyaculatorio.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.3. Exigencia Coitocéntrica, Mitos de la Masculinidad y Sobrecarga Cognitiva
            </h3>
            <p>
              Las variables socioculturales juegan un rol determinante en la génesis de la ansiedad masculina:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  El Mandato de Eficiencia y Coitocentrismo:
                </strong>{' '}
                La creencia errónea de que la sexualidad masculina debe ser instintiva, automática y orientada exclusivamente a la penetración rápida y rígida genera una presión de rendimiento insostenible.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Mitos sobre la Fisiología Masculina:
                </strong>{' '}
                Asumir que &quot;un hombre siempre debe estar dispuesto&quot; o que &quot;la erección mide la hombría&quot; transforma el encuentro placentero en un examen de validación personal.
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
              3.1. Terapia Cognitivo-Conductual Sexual, Desensibilización y Reestructuración
            </h3>
            <p>
              El tratamiento especializado aborda los componentes cognitivos y fisiológicos de la ansiedad, en sintonía con las recomendaciones de la World Association for Sexual Health (puedes consultar{' '}
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
                  Reestructuración Cognitiva:
                </strong>{' '}
                Identificación y modificación de distorsiones cognitivas (pensamiento catastrófico, lectura de mente, exigencias absolutistas) relacionadas con la respuesta sexual.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Técnicas de Desensibilización Sistemática y Mindfulness Sexual:
                </strong>{' '}
                Reentrenamiento de la atención para focalizar la mente en las anclas sensoriales del presente (respiración, temperatura, tacto), desactivando el bucle del espectadorismo.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Focalización Sensual y Abordaje de la Dinámica Vincular
            </h3>
            <p>
              La terapia sexológica integra pautas conductuales diseñadas para eliminar la presión de evaluación en el contexto compartido:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Protocolos de Focalización Sensual (Masters &amp; Johnson):
                </strong>{' '}
                Progresión graduada de caricias no genitales donde se prohíbe explícitamente la penetración o la búsqueda del orgasmo, permitiendo al sistema nervioso experimentar seguridad y relajación.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Superación del &quot;Peso del Silencio&quot;:
                </strong>{' '}
                Trabajo con la pareja para flexibilizar el repertorio erótico, mejorar la comunicación afectiva y desarticular la exigencia de rendimiento.
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
              4.1. ¿Cómo saber si mi dificultad de erección o control es causada por ansiedad de desempeño o por un problema orgánico?
            </h3>
            <p>
              El indicador más claro es la presencia de erecciones espontáneas e involuntarias al despertar o durante la masturbación solitaria. Si la erección o el control eyaculatorio funcionan adecuadamente en privado pero se dificultan al estar con una pareja, el origen es predominantemente psicógeno y situacional, causado por la activación del sistema nervioso simpático ante la ansiedad de evaluación.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. ¿Tomar fármacos o tranquilizantes ayuda a superar la ansiedad de desempeño sexual?
            </h3>
            <p>
              Los ansiolíticos tradicionales (como las benzodiacepinas) o el alcohol suelen empeorar la respuesta sexual, ya que deprimen el sistema nervioso central e inhiben los reflejos vasculares. Por su parte, los fármacos inductores de la erección (como el sildenafil) pueden actuar como una &quot;muleta&quot; temporal, pero no resuelven la causa cognitiva de fondo. La solución definitiva radica en la psicoterapia sexológica para desactivar el espectadorismo y restaurar la autorregulación emocional.
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
              International Society for Sexual Medicine. (2023).{' '}
              <em>Clinical Practice Guidelines for Psychological and Performance Anxiety in Sexual Medicine</em>. Sitio web oficial:{' '}
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
