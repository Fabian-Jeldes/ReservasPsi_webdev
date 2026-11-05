// Tratamiento del Estrés Crónico y Burnout en Chile: Enfoque Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function EstresCronicoBurnoutPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento del Estrés Crónico y Burnout en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'El estrés crónico y el síndrome de burnout (desgaste profesional) se caracterizan por agotamiento extremo, distanciamiento mental y sobrecarga alostática. Tratamiento psicológico clínico e integrativo en Chile.'
  const seoKeywords =
    'estrés crónico Chile, tratamiento síndrome de burnout, estrés laboral psicólogo Santiago, desgaste profesional CIE-11, sobrecarga alostática, psicólogo clínico Santiago'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento del Estrés Crónico y Burnout en Chile: Enfoque Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/salud-emocional/estres-cronico-burnout`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Estrés Crónico y Síndrome de Burnout',
        alternateName: 'Síndrome de Desgaste Profesional y Sobrecarga Alostática Crónica',
        description:
          'Estado de agotamiento físico, mental y emocional derivado de demandas laborales o vitales sostenidas que superan los recursos de afrontamiento y recuperación del organismo.',
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
            name: '¿Es normal que el cansancio del burnout no se pase ni durmiendo todo el fin de semana?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, es completamente característico del estrés crónico severo. Cuando el organismo lleva meses o años operando en modo de supervivencia, las reservas neurobiológicas se agotan a un nivel profundo. El descanso físico convencional (como dormir el fin de semana) es insuficiente porque el sistema nervioso sigue atrapado en la hipervigilancia y no logra activar el descanso reparador. Se requiere un proceso de desaceleración clínica y reestructuración de estilo de vida.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo puedo saber si lo que tengo es estrés laboral o un cuadro depresivo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Aunque comparten síntomas como la fatiga y la pérdida de interés, el estrés crónico y el burnout suelen estar estrechamente vinculados a contextos de alta demanda y sobrecarga donde la persona experimenta un desgaste por "exceso de esfuerzo". La depresión, en cambio, suele manifestarse con un sentido de desesperanza generalizado y una pérdida de placer que trasciende el ámbito laboral. No obstante, el burnout no tratado puede derivar en un cuadro depresivo secundario, por lo que una evaluación clínica oportuna es clave.',
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
            Problemáticas del Ánimo y Ansiedad · Estrés crónico y Burnout
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
          Tratamiento del Estrés Crónico y Burnout en Chile: Enfoque Clínico e Integrativo
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
              En las sociedades contemporáneas, el ritmo acelerado y las altas exigencias del entorno laboral, académico y familiar han transformado el estrés en una experiencia cotidiana. Sin embargo, cuando las demandas superan de manera sostenida los recursos de afrontamiento y los espacios de recuperación durante meses, el organismo deja atrás el estrés adaptativo para quedar atrapado en un estado de sobrecarga alostática crónica.
            </p>
            <p>
              Como señala la Organización Mundial de la Salud (OMS) (puedes consultar sus directrices en{' '}
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                who.int
              </a>
              ), el <em>burnout</em> (síndrome de desgaste profesional o quemarse por el trabajo) no es simplemente un cansancio pasajero ni una debilidad personal, sino un fenómeno ocupacional y clínico formalmente caracterizado por tres dimensiones nucleares: un sentimiento de agotamiento o fatiga extrema, un aumento del distanciamiento mental respecto a las labores o sentimientos de negativismo y cinismo, y una reducida eficacia profesional. Como clínico, suelo explicar a mis pacientes que el <em>burnout</em> es la respuesta lógica de un cuerpo y una mente que han sido forzados a sostener una carga insostenible durante demasiado tiempo sin el descanso adecuado.
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
              ) en 2022, evalúa los trastornos relacionados con el estrés y los factores contextuales que influyen en la salud:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Trastornos de Adaptación y Respuesta al Estrés:
                </strong>{' '}
                El marco diagnóstico permite identificar cómo la exposición prolongada a estresores psicosociales genera desregulaciones anímicas significativas, ansiedad persistente y alteraciones conductuales.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Impacto Funcional y Somático:
                </strong>{' '}
                Se evalúa la alteración profunda en el funcionamiento global de la persona, abarcando el desgaste en la esfera laboral, el aislamiento relacional y la somatización crónica.
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
              En mi experiencia en consulta, un paso fundamental es diferenciar el estrés crónico de los cuadros depresivos primarios o los trastornos de ansiedad generalizada. Muchas personas llegan creyendo que &quot;solo están cansadas&quot;, cuando en realidad su sistema nervioso está atrapado en un estado crónico de alerta. Para un abordaje riguroso, colaboramos cuando es necesario con la medicina general y especialidades médicas, apoyándonos en las orientaciones técnicas del Ministerio de Salud de Chile (puedes visitar{' '}
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
              ), garantizando un diagnóstico seguro y un cuidado integral.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 2. Mecanismos Psicofisiológicos: Del Modo Supervivencia al Colapso */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos: Del Modo Supervivencia al Colapso
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. El Eje HPA y el Costo Biológico de la Sobrecarga
            </h3>
            <p>
              Cuando el sistema nervioso autónomo permanece bajo una activación simpática constante, el eje hipotalámico-pituitario-adrenal (HPA) inunda el torrente sanguíneo de hormonas de estrés como el cortisol y la adrenalina. Este desgaste biológico acumulado genera un profundo costo fisiológico y emocional:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Fatiga Crónica Resistente al Descanso:
                </strong>{' '}
                Un agotamiento físico y mental profundo que no cede tras las horas de sueño habituales porque el organismo ha perdido la capacidad de regular el descanso parasimpático.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Desapego Emocional e Irritabilidad:
                </strong>{' '}
                Dificultad para conectar afectivamente con el entorno, baja tolerancia a la frustración y reacciones de irritabilidad desproporcionadas con seres queridos o compañeros de trabajo.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Alteraciones del Sueño y Somatizaciones:
                </strong>{' '}
                Insomnio de conciliación o mantenimiento, dolores tensionales crónicos, problemas gastrointestinales y alteraciones en la respuesta o el deseo sexual debido a la inhibición del sistema parasimpático.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. La Trampa del Hiperperfeccionismo y los Límites Invadidos
            </h3>
            <p>
              En la práctica clínica es frecuente observar cómo perfiles marcados por la autoexigencia implacable, la necesidad de control y la extrema dificultad para poner límites o decir «no» alimentan este ciclo de desgaste. Como suelo transmitir a quienes confían en mi espacio terapéutico:{' '}
              <em>
                sostener el rendimiento a costa de la propia salud funciona como un préstamo a tasa de interés abusiva; tarde o temprano el cuerpo colapsa y cobra la deuda obligándote a detener la marcha
              </em>
              .
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
              3.1. Regulación del Sistema Nervioso y Deconstrucción de Patrones
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
                  Regulación del Sistema Nervioso y Alivio Sintomático Inmediato:
                </strong>{' '}
                Herramientas de biorregulación, técnicas de respiración diafragmática y pautas estrictas de higiene del descanso para desactivar la respuesta de lucha o huida.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Deconstrucción de Patrones de Autoexigencia:
                </strong>{' '}
                Mediante enfoques cognitivo-conductuales, examinamos las creencias disfuncionales en torno al valor personal asociado exclusivamente al rendimiento y la productividad.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Establecimiento de Límites, Autoeficacia y Espacios Seguros
            </h3>
            <p>
              El proceso terapéutico no busca simplemente que &quot;rindas mejor en tu trabajo&quot;, sino rediseñar tu relación con las responsabilidades y contigo mismo. Trabajamos en el entrenamiento asertivo para aprender a decir «no», renegociar expectativas laborales y restaurar un estilo de vida equilibrado, en un entorno de absoluta seguridad humana, calidez y sin juicios.
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
              4.1. &quot;¿Es normal que el cansancio del burnout no se pase ni durmiendo todo el fin de semana?&quot;
            </h3>
            <p>
              Sí, es completamente característico del estrés crónico severo. Cuando el organismo lleva meses o años operando en modo de supervivencia, las reservas neurobiológicas se agotan a un nivel profundo. El descanso físico convencional (como dormir el fin de semana) es insuficiente porque el sistema nervioso sigue atrapado en la hipervigilancia y no logra activar el descanso reparador. Se requiere un proceso de desaceleración clínica y reestructuración de estilo de vida.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. &quot;¿Cómo puedo saber si lo que tengo es estrés laboral o un cuadro depresivo?&quot;
            </h3>
            <p>
              Aunque comparten síntomas como la fatiga y la pérdida de interés, el estrés crónico y el <em>burnout</em> suelen estar estrechamente vinculados a contextos de alta demanda y sobrecarga donde la persona experimenta un desgaste por &quot;exceso de esfuerzo&quot;. La depresión, en cambio, suele manifestarse con un sentido de desesperanza generalizado y una pérdida de placer que trasciende el ámbito laboral. No obstante, el <em>burnout</em> no tratado puede derivar en un cuadro depresivo secundario, por lo que una evaluación clínica oportuna es clave.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* Referencias Institucionales, Guías Clínicas y Literatura Científica */}
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
              Referencias Institucionales, Guías Clínicas y Literatura Científica
            </h2>
          </div>

          <ol className="list-decimal pl-6 space-y-3 text-base">
            <li>
              American Psychological Association. (2020).{' '}
              <em>Stress Effects on the Body and Burnout Recovery Guidelines</em>. Sitio web oficial:{' '}
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
              American Psychological Association. (2021).{' '}
              <em>Work and Well-being Survey: The Impact of Chronic Workplace Stress</em>. Sitio web oficial:{' '}
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
              Maslach, C., &amp; Leiter, M. P. (2016). Understanding the Burnout Experience: Recent Research and its Implications for Psychiatry.{' '}
              <em>World Psychiatry</em>, 15(2), 103–111.
            </li>
            <li>
              Maslach, C., Schaufeli, W. B., &amp; Leiter, M. P. (2001). Job Burnout.{' '}
              <em>Annual Review of Psychology</em>, 52, 397–422.
            </li>
            <li>
              McEwen, B. S. (2002).{' '}
              <em>The End of Stress as We Know It</em>. Joseph Henry Press.
            </li>
            <li>
              Ministerio de Salud de Chile. (2020).{' '}
              <em>Plan Nacional de Salud Mental y Psiquiatría</em>. Sitio web oficial:{' '}
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
              Porges, S. W. (2011).{' '}
              <em>The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-regulation</em>. W. W. Norton &amp; Company.
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
            <li>
              World Health Organization. (2019/2022).{' '}
              <em>Burn-out an &quot;Occupational Phenomenon&quot;: International Classification of Diseases (11th Revision - CIE-11)</em>. Sitio web oficial:{' '}
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
              World Health Organization. (2021).{' '}
              <em>Mental Health at Work: Policy Brief</em>. Sitio web oficial:{' '}
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
