// Tratamiento de la Regulación Emocional y Autoestima en Chile: Enfoque Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function RegulacionEmocionalAutoestimaPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de la Regulación Emocional y Autoestima en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'Abordaje psicoterapéutico clínico e integrativo para la regulación emocional, superación de la autocrítica severa, autocompasión y fortalecimiento de la autoestima en Chile.'
  const seoKeywords =
    'regulación emocional Chile, fortalecer autoestima psicólogo, autocompasión psicoterapia, desregulación emocional tratamiento, límites y asertividad, psicólogo clínico Santiago'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de la Regulación Emocional y Autoestima en Chile: Enfoque Clínico e Integrativo',
      description: seoDescription,
      url: `${window.location.origin}/salud-emocional/regulacion-emocional-autoestima`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Dificultades de Regulación Emocional y Autoestima',
        alternateName: 'Desregulación Afectiva, Alexitimia y Autoestima Contingente',
        description:
          'Dificultades en la identificación, procesamiento y modulación adaptativa del mundo afectivo, asociadas a esquemas de autocrítica severa, perfeccionismo y fragilidad en la autoimagen.',
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
            name: '¿Es posible dejar de ser tan duro conmigo mismo cuando cometo un error?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, absolutamente. La autocrítica severa suele ser un mecanismo de defensa antiguo que aprendimos en la infancia o adolescencia para intentar encajar o protegernos de la desaprobación. En psicoterapia trabajamos para desmontar ese juez interno punitivo y transformarlo en una voz aliada y compasiva. No se trata de "ser alcahuete" con uno mismo, sino de aprender a tratarse con la misma decencia y firmeza amorosa con la que tratarías a alguien a quien de verdad quieres.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Por qué me cuesta tanto poner límites sin sentir culpa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La dificultad para poner límites suele estar arraigada en el miedo al rechazo y en la creencia inconsciente de que nuestras necesidades importan menos que las de los demás. A través del trabajo en autoestima y asertividad, aprendemos a soltar la culpa neurótica y a comprender que decir "no" a los demás es, en realidad, decir "sí" a tu propia salud mental y a tu dignidad personal.',
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
            Problemáticas del Ánimo y Ansiedad · Regulación Emocional y Autoestima
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
          Tratamiento de la Regulación Emocional y Autoestima en Chile: Enfoque Clínico e Integrativo
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
              En el camino del desarrollo personal y la salud mental, uno de los desafíos más profundos y transformadores radica en la manera en que nos relacionamos con nuestro propio mundo afectivo. A muchas personas nunca se les enseñó a identificar ni a gestionar lo que sienten de manera adaptativa. Como resultado, frente a las tensiones de la vida cotidiana, suelen configurarse dos polos disfuncionales: por un lado, patrones de alexitimia y sobrecontrol, donde aprendemos a silenciar, intelectualizar o reprimir nuestras emociones hasta somatizarlas; por el otro, vivencias de desborde emocional donde la rabia, la frustración, la culpa o la inseguridad nos inundan en los momentos más inoportunos.
            </p>
            <p>
              Como señala la Organización Mundial de la Salud (OMS) (puedes consultar sus informes oficiales en{' '}
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                who.int
              </a>
              ), la desregulación afectiva y la inestabilidad en la autoimagen no solo erosionan el bienestar subjetivo, sino que incrementan de forma directa la vulnerabilidad frente a trastornos ansiosos y depresivos. Como clínico, siempre explico a mis pacientes que las emociones no son enemigas que debamos controlar o destruir a la fuerza, sino señales valiosas que necesitan un espacio seguro para ser escuchadas y comprendidas.
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
              ) en 2022, evalúa cómo los problemas en la regulación emocional y los esquemas de autoimagen disfuncionales inciden de manera transversal en la salud mental:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Impacto Transversal de la Desregulación:
                </strong>{' '}
                El déficit en el procesamiento emocional opera como un factor mantenedor clave en trastornos del ánimo, ansiedad generalizada, conductas compulsivas y enormes dificultades interpersonales.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Autoestima Contingente y Fragilidad Psicosocial:
                </strong>{' '}
                El DSM-5-TR y la literatura clínica asocian la autocrítica severa y la dependencia obsesiva de la validación externa a estados prolongados de malestar subjetivo, aislamiento y disfunción relacional.
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
              En mi experiencia en consulta, un proceso terapéutico riguroso implica distinguir si la dificultad en la regulación emocional responde a un estilo de afrontamiento aprendido, a secuelas de experiencias traumáticas tempranas o a un trastorno del ánimo secundario. Para ello, trabajamos apoyándonos en las orientaciones técnicas del Ministerio de Salud de Chile (puedes visitar{' '}
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
              ). Además, cuando esta desregulación impacta la intimidad y la respuesta sexual, integramos los lineamientos de la International Society for the Study of Women&apos;s Sexual Health (ISSWSH) y la International Society for Sexual Medicine (puedes revisar{' '}
              <a
                href="https://www.issm.info/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                issm.info
              </a>
              ), garantizando un abordaje clínico seguro, ético y profundamente respetuoso de tu historia.
            </p>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 2. Mecanismos Psicofisiológicos: La Arquitectura del Afecto y el Costo de la Represión */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos: La Arquitectura del Afecto y el Costo de la Represión
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. El Modelo Procesual de Gross y la Autocompasión de Neff
            </h3>
            <p>
              Para comprender cómo las emociones impactan nuestro cuerpo, el trabajo pionero del investigador James J. Gross ha establecido el modelo procesual de la regulación emocional. Gross nos explica que cuando nuestros mecanismos de regulación fallan o se basan en la supresión crónica (tragarnos lo que sentimos), el organismo experimenta un desgaste cognitivo y fisiológico tremendo.
            </p>
            <p>
              En la práctica clínica, entrelazo esto con el hermoso y validado concepto de <em>autocompasión</em> desarrollado por la investigadora Kristin D. Neff. Sus estudios demuestran cómo la amabilidad hacia uno mismo reemplaza eficazmente a la autocrítica destructiva. Neff postula que la autoestima basada en contingencias —aquella que depende de «ser siempre exitoso» o «agradar a todos»— es sumamente frágil. Como suelo transmitir en consulta:{' '}
              <em>
                mientras tu valor personal dependa exclusivamente de rendir a la perfección y de lo que opinen los demás, vivirás aterrado de fallar; sanar implica construir una seguridad interna compasiva que no se desmorone frente al error humano
              </em>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología Interpersonal y la Trampa de la Autocrítica
            </h3>
            <p>
              Desde los marcos de la neurobiología interpersonal (como plantean los psiquiatras Daniel J. Siegel y Allan N. Schore), la incapacidad para modular el afecto está estrechamente ligada a una autoestima condicionada al rendimiento implacable. Este funcionamiento genera un diálogo interno hipercrítico y punitivo que, de manera silenciosa, sabotea tus proyectos vitales, tu capacidad de disfrutar el presente y la seguridad en tus vínculos de pareja.
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
              3.1. Alfabetización Emocional, Regulación y Compasión
            </h3>
            <p>
              El tratamiento que desarrollo en mi espacio terapéutico se fundamenta en marcos con sólido respaldo científico, alineados con una visión de bienestar integral de la World Association for Sexual Health (puedes consultar{' '}
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
                  Alfabetización y Regulación Emocional:
                </strong>{' '}
                Te acompaño a reconocer las señales corporales de tus emociones, dotándote de herramientas de autorregulación (como la pausa consciente y la flexibilidad psicológica promovida por la ACT) para transitar de la evitación experiencial a la aceptación.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Deconstrucción de Creencias Nucleares de Insuficiencia:
                </strong>{' '}
                Juntos examinamos esos mandatos tempranos y sociales que sostienen tu perfeccionismo, reemplazándolos por narrativas internas compasivas y sólidas.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Asertividad, Límites y Espacios de Seguridad Humana
            </h3>
            <p>
              Mi objetivo terapéutico no es que alcances una fachada de invulnerabilidad robótica, sino que recuperes la soberanía sobre tu mundo interno. Trabajamos fuertemente en el entrenamiento en asertividad y límites relacionales, enseñándote a expresar tus necesidades claras sin culpa, para favorecer vínculos interpersonales más horizontales, seguros y nutritivos, todo esto en un entorno de absoluta calidez humana y libre de juicios.
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
              4.1. &quot;¿Es posible dejar de ser tan duro conmigo mismo cuando cometo un error?&quot;
            </h3>
            <p>
              Sí, absolutamente. La autocrítica severa suele ser un mecanismo de defensa antiguo que aprendimos en la infancia o adolescencia para intentar encajar o protegernos de la desaprobación. En psicoterapia trabajamos para desmontar ese juez interno punitivo y transformarlo en una voz aliada y compasiva. No se trata de &quot;ser alcahuete&quot; con uno mismo, sino de aprender a tratarse con la misma decencia y firmeza amorosa con la que tratarías a alguien a quien de verdad quieres.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. &quot;¿Por qué me cuesta tanto poner límites sin sentir culpa?&quot;
            </h3>
            <p>
              La dificultad para poner límites suele estar arraigada en el miedo al rechazo y en la creencia inconsciente de que nuestras necesidades importan menos que las de los demás. A través del trabajo en autoestima y asertividad, aprendemos a soltar la culpa neurótica y a comprender que decir &quot;no&quot; a los demás es, en realidad, decir &quot;sí&quot; a tu propia salud mental y a tu dignidad personal.
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
              American Psychological Association. (2021).{' '}
              <em>Emotional Regulation, Self-Esteem, and Psychological Well-Being: Research and Clinical Applications</em>. Sitio web oficial:{' '}
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
              American Psychological Association. (2023).{' '}
              <em>Building Resilience: Managing Stress and Fostering Emotional Intelligence</em>. Sitio web oficial:{' '}
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
              Gross, J. J. (2015). The Emerging Field of Emotion Regulation: An Integrative Review.{' '}
              <em>Review of General Psychology</em>, 19(3), 271–299.
            </li>
            <li>
              Hayes, S. C., Strosahl, K. D., &amp; Wilson, K. G. (2012).{' '}
              <em>Acceptance and Commitment Therapy: The Process and Practice of Mindful Change</em> (2nd ed.). Guilford Press.
            </li>
            <li>
              Ministerio de Salud de Chile. (2018).{' '}
              <em>Orientaciones Técnicas para la Promoción del Bienestar Psicológico y Salud Mental en la Red de Atención</em>. Sitio web oficial:{' '}
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
              Neff, K. D. (2023). Self-Compassion: Theory, Method, Research, and Intervention.{' '}
              <em>Annual Review of Psychology</em>, 74, 193–218.
            </li>
            <li>
              Schore, A. N. (2012).{' '}
              <em>The Science of the Art of Psychotherapy</em>. W. W. Norton &amp; Company.
            </li>
            <li>
              Siegel, D. J. (2020).{' '}
              <em>The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are</em> (3rd ed.). The Guilford Press.
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
              World Health Organization. (2022).{' '}
              <em>World Mental Health Report: Transforming Mental Health for All</em>. Sitio web oficial:{' '}
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
