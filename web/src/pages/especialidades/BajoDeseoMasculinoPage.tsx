// Tratamiento del Deseo Sexual Hipoactivo en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function BajoDeseoMasculinoPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento del Deseo Sexual Hipoactivo Masculino en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'El Deseo Sexual Hipoactivo Masculino se define como una disminución o ausencia persistente o recurrente de pensamientos, fantasías eróticas y motivación para iniciar o responder a la actividad íntima. Enfoque sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'deseo sexual hipoactivo masculino Chile, bajo deseo sexual masculino, tratamiento baja libido hombre, sexólogo clínico Santiago, CIE-11 deseo sexual hipoactivo, DSM-5-TR deseo hipoactivo, deseo reactivo'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento del Deseo Sexual Hipoactivo Masculino en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/sexualidad-masculina/bajo-deseo-sexual-masculino`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Deseo Sexual Hipoactivo Masculino',
        alternateName: 'Bajo Deseo Sexual Masculino',
        description:
          'Disminución o ausencia persistente o recurrente de pensamientos, fantasías eróticas y motivación para iniciar o responder a la actividad íntima, generando un malestar personal significativo o dificultades en la dinámica de pareja.',
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
            name: '¿Es normal que el deseo sexual disminuya tras varios años de relación?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Es un proceso natural en el que el deseo espontáneo inicial transiciona hacia el deseo reactivo. La habituación requiere cultivar deliberadamente la complicidad y el juego erótico.',
            },
          },
          {
            '@type': 'Question',
            name: '¿El bajo deseo sexual significa que mi relación de pareja está rota?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No necesariamente. En la gran mayoría de los casos, la disminución de la libido responde a agotamiento físico, estrés crónico, sobrecarga mental o dinámicas de comunicación no resueltas, las cuales pueden abordarse eficazmente en psicoterapia sexológica.',
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
            Problemas Sexuales Masculinos · Bajo deseo sexual (Deseo sexual hipoactivo masculino)
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
          Tratamiento del Deseo Sexual Hipoactivo Masculino en Chile: Enfoque Sexológico Clínico e Integrativo
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
              El Deseo Sexual Hipoactivo Masculino se define como una disminución o ausencia persistente o recurrente de pensamientos, fantasías eróticas y motivación para iniciar o responder a la actividad íntima, generando un malestar personal significativo o dificultades en la dinámica de pareja.
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
              ), esta condición se sitúa en el Capítulo 17: Condiciones relacionadas con la salud sexual. Esta reubicación conceptual desvincula las alteraciones del deseo de los trastornos mentales tradicionales, abordándolas como aspectos del bienestar integral y reduciendo el estigma social.
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
              ) en 2022, establece criterios rigurosos para la evaluación clínica del deseo hipoactivo:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterio de Deficiencia y Persistencia:
                </strong>{' '}
                Ausencia o reducción marcada de pensamientos, fantasías o deseo de actividad sexual, evaluada según el contexto de la edad y la situación de vida del individuo, con una duración mínima de 6 meses.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Malestar Clínicamente Significativo:
                </strong>{' '}
                La condición genera una angustia personal relevante, frustración o alteración en la relación de pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Especificadores Clínicos:
                </strong>{' '}
                Se clasifica en primaria o adquirida, así como generalizada o situacional.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diferenciación entre Etiología Orgánica, Endocrina y Psicógena
            </h3>
            <p>
              En la evaluación sexológica es indispensable realizar un diagnóstico diferencial exhaustivo para descartar alteraciones biológicas primarias:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación Endocrina y Metabólica:
                </strong>{' '}
                Valoración de los niveles de testosterona total y libre, prolactina, función tiroidea (TSH) y perfil metabólico.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Factores Farmacológicos y Sustancias:
                </strong>{' '}
                Identificación de efectos secundarios derivados del uso de fármacos (como antidepresivos ISRS, antihipertensivos o antiandrógenos) o consumo crónico de alcohol.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Diferenciación con la Discrepancia de Pareja:
                </strong>{' '}
                Es vital distinguir entre una baja del deseo de origen individual y una discrepancia en los niveles de motivación entre los integrantes de la pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Interconsulta Médica:
                </strong>{' '}
                Trabajamos bajo protocolos de derivación interdisciplinaria, en concordancia con los marcos institucionales del Ministerio de Salud de Chile (puedes visitar{' '}
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

        {/* 2. Mecanismos Psicofisiológicos de los Cambios en el Deseo Sexual */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos de los Cambios en el Deseo Sexual
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. Deseo Espontáneo vs. Deseo Reactivo: El Modelo Circular y Motivacional
            </h3>
            <p>
              Desmitificamos la idea tóxica de que el hombre debe &quot;estar siempre listo&quot; o &quot;siempre con ganas&quot;. Existe un mito cultural muy pesado: la creencia de que el deseo masculino es un motor inagotable que no se apaga jamás. Cuando el interés disminuye, es fácil caer en la culpa o sentir que se pierde la masculinidad.
            </p>
            <p>
              Sin embargo, la sexología clínica moderna (integrando el modelo circular y los aportes de Rosemary Basson y L. Brotto) demuestra que el deseo no siempre es espontáneo. Muchas veces opera como un{' '}
              <strong style={{ color: 'var(--text-primary)' }}>
                deseo reactivo o responsivo
              </strong>
              : la motivación surge de manera natural tras exponerse a estímulos eróticos adecuados, afecto y espacios de relajación, y no como una chispa que aparece de la nada.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología del Deseo: Balance Dopaminérgico y Estrés Crónico
            </h3>
            <p>
              Fisiológicamente, cuando estás sobrecargado por la rutina o las preocupaciones, tu cerebro interpreta que estás en modo de &quot;supervivencia&quot;. El estrés crónico eleva los niveles de cortisol y noradrenalina, activando el sistema nervioso simpático:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Inhibición de Circuitos Excitatorios:
                </strong>{' '}
                La sobrecarga de estrés amortigua la actividad de la dopamina en el sistema de recompensa central, apagando la motivación erótica para conservar energía vital.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  El Freno de Mano Vital:
                </strong>{' '}
                Las presiones laborales, el cansancio y las tensiones no resueltas actúan como un freno de mano puesto a fondo, haciendo que la respuesta sexual pase a ser una prioridad secundaria para el organismo.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.3. Carga Mental, Mandatos de Género y Dinámica de Pareja
            </h3>
            <p>
              El deseo no se despliega en el vacío. Los mandatos de rol que exigen una disponibilidad ininterrumpida generan un peso asfixiante. En la terapia no juzgamos ni forzamos a &quot;tener ganas&quot;, ya que obligarse a desear solo incrementa la frustración. El objetivo es quitarle a la intimidad el peso de ser una obligación más.
            </p>

            <blockquote
              className="my-6 border-l-4 pl-6 py-2 italic text-xl font-semibold"
              style={{
                borderColor: 'var(--accent)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--accent-soft)',
                borderRadius: '0 var(--radius-card) var(--radius-card) 0',
              }}
            >
              &quot;No existe el deber de &#39;estar siempre listo&#39;; tu deseo no se apagó, solo está reaccionando al peso y al estrés de tu rutina.&quot;
            </blockquote>
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
              3.1. Reestructuración Cognitiva y Protocolos de Incentivo Erótico
            </h3>
            <p>
              El abordaje terapéutico se alinea con los estándares de la World Association for Sexual Health (puedes consultar{' '}
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
                  Ampliación del Mapa Erótico:
                </strong>{' '}
                Desarticulación del coitocentrismo y exploración de incentivos eróticos y sensoriales variados que faciliten la emergencia del deseo reactivo.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Mindfulness y Regulación Emocional:
                </strong>{' '}
                Técnicas orientadas a disminuir la rumiación mental y conectar con las sensaciones corporales presentes.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Abordaje de la Dinámica Vincular y Negociación del Encuentro
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Superación del &quot;Peso del Silencio&quot;:
                </strong>{' '}
                Creación de un espacio seguro para expresar agotamiento, expectativas y necesidades afectivas sin culpa.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Gestión de la Discrepancia:
                </strong>{' '}
                Acuerdos en pareja para negociar los tiempos de intimidad y propiciar &quot;citas eróticas&quot; libres de exigencias de rendimiento.
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
              4.1. ¿Es normal que el deseo sexual disminuya tras varios años de relación?
            </h3>
            <p>
              Sí. Es un proceso natural en el que el deseo espontáneo inicial transiciona hacia el deseo reactivo. La habituación requiere cultivar deliberadamente la complicidad y el juego erótico.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. ¿El bajo deseo sexual significa que mi relación de pareja está rota?
            </h3>
            <p>
              No necesariamente. En la gran mayoría de los casos, la disminución de la libido responde a agotamiento físico, estrés crónico, sobrecarga mental o dinámicas de comunicación no resueltas, las cuales pueden abordarse eficazmente en psicoterapia sexológica.
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
              International Society for Sexual Medicine. (2023).{' '}
              <em>Clinical Practice Guidelines for Sexual Desire Disorders</em>. Sitio web oficial:{' '}
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
