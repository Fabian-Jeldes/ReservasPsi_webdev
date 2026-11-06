// Tratamiento del Deseo Sexual Hipoactivo Femenino en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function BajoDeseoFemeninoPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento del Deseo Sexual Hipoactivo Femenino en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'El Deseo Sexual Hipoactivo Femenino se define como una disminución o ausencia persistente o recurrente del interés erótico, pensamientos, fantasías sexuales y motivación para iniciar o responder a la actividad íntima. Tratamiento sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'deseo sexual hipoactivo femenino Chile, bajo deseo sexual femenino, falta de deseo mujer, modelo circular Basson, deseo responsivo, sexólogo clínico Santiago, CIE-11 deseo hipoactivo, DSM-5-TR interés excitación sexual femenino'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento del Deseo Sexual Hipoactivo Femenino en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/sexualidad-femenina/deseo-sexual-hipoactivo-femenino`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Deseo Sexual Hipoactivo Femenino',
        alternateName: 'Trastorno del Interés/Excitación Sexual Femenino',
        description:
          'Disminución o ausencia persistente o recurrente del interés erótico, pensamientos, fantasías sexuales y motivación para iniciar o responder a la actividad íntima.',
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
            name: '¿Es normal que no sienta ganas espontáneas de tener sexo aunque ame a mi pareja?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, es absolutamente normal. En relaciones estables de mediana o larga duración, el deseo espontáneo suele disminuir de forma natural. Las mujeres experimentan frecuentemente deseo reactivo, lo que significa que las "ganas" no aparecen solas de la nada, sino como respuesta a la estimulación, el afecto, la relajación y el juego erótico adecuado. Sentir bajo deseo espontáneo no significa que hayas dejado de querer a tu pareja.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Los anticonceptivos hormonales, la lactancia o la menopausia pueden apagar el deseo sexual?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Tanto la píldora anticonceptiva (que puede reducir la testosterona libre) como la prolactina elevada durante la lactancia y la disminución de estrógenos en la menopausia alteran directamente la lubricación y la receptividad neuroquímica del deseo. En la consulta realizamos un trabajo interdisciplinario con ginecología para evaluar alternativas hormonales o complementos locales sin descuidar el abordaje sexológico.',
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
            Problemas Sexuales Femeninos · Bajo deseo sexual (Deseo sexual hipoactivo femenino)
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
          Tratamiento del Deseo Sexual Hipoactivo Femenino en Chile: Enfoque Sexológico Clínico e Integrativo
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
              El Deseo Sexual Hipoactivo Femenino se define como una disminución o ausencia persistente o recurrente del interés erótico, pensamientos, fantasías sexuales y motivación para iniciar o responder a la actividad íntima, la cual genera una sensación de malestar personal, frustración o distanciamiento relacional.
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
              ), esta condición se conceptualiza en el Capítulo 17: Condiciones relacionadas con la salud sexual. Esta categorización desvincula la baja del deseo de los trastornos mentales tradicionales, reconociendo que la motivación erótica femenina es una respuesta dinámica regulada por factores biológicos, psíquicos, relacionales y socioculturales.
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
              ) en 2022, unificó las antiguas categorías de deseo e interacción física en el Trastorno del Interés/Excitación Sexual Femenino:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterios de Reducción o Ausencia:
                </strong>{' '}
                Se requiere constatar al menos tres de las manifestaciones clínicas asociadas a la reducción del interés, pensamientos, iniciativa, excitación o respuesta física en el 75%-100% de los encuentros.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterio de Temporalidad y Malestar:
                </strong>{' '}
                La sintomatología debe mantenerse durante un período mínimo de 6 meses y provocar una angustia o frustración clínicamente significativa en la paciente.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Especificadores Clínicos:
                </strong>{' '}
                Se clasifica en primaria (de toda la vida) o adquirida (desarrollada tras una etapa de motivación preservada), así como generalizada o situacional.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diferenciación entre Etiología Orgánica, Endocrina, Ciclo Vital y Psicógena
            </h3>
            <p>
              Dada la sensibilidad de la neurobiología femenina a los cambios hormonales y metabólicos, el diagnóstico diferencial es un paso indispensable:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación Endocrina y Farmacológica:
                </strong>{' '}
                Valoración de niveles de testosterona libre, estradiol, prolactina, TSH (función tiroidea) y descarte del impacto secundario de anticonceptivos hormonales de alta dosis, antidepresivos (ISRS) o antihipertensivos.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Etapas del Ciclo Vital:
                </strong>{' '}
                Identificación del impacto de la fluctuación hormonal en fases como el posparto, la lactancia, la perimenopausia y la menopausia (atrofia vulvovaginal por déficit estrogénico).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Descarte de Dolor Sexual Secundario:
                </strong>{' '}
                Verificación de que la baja del deseo no obedezca a una respuesta defensiva frente al dolor penetrativo (vaginismo o dispareunia no tratada).
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Protocolo Interdisciplinario:
                </strong>{' '}
                Trabajo de interconsulta con ginecología, endocrinología y matronería según los marcos del Ministerio de Salud de Chile (puedes visitar{' '}
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

        {/* 2. Mecanismos Psicofisiológicos del Deseo Sexual Femenino */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos del Deseo Sexual Femenino
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. Deseo Espontáneo vs. Deseo Reactivo/Responsivo: El Modelo Circular de Basson
            </h3>
            <p>
              Muchas mujeres llegan a consulta sintiendo que algo anda mal en ellas porque no sienten ganas &quot;de la nada&quot;. La investigación clínica y el Modelo de Respuesta Sexual Circular de Rosemary Basson ha demostrado que en gran parte de las mujeres —especialmente en relaciones de largo plazo— el deseo es predominantemente responsivo: no aparece antes del estímulo, sino que despierta una vez que existe intimidad emocional, calma y contacto físico libre de presiones. Comprender que el deseo reactivo es fisiológicamente normal libera a las mujeres de la culpa por no sentir &quot;ganas espontáneas&quot;.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología del Deseo: Balance Dopaminérgico, Oxitocinérgico y Estrés Crónico
            </h3>
            <p>
              El deseo sexual femenino depende del equilibrio en el sistema nervioso central entre los mecanismos de excitación e inhibición (Modelo de Control Dual):
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Sistemas de Motivación y Recompensa:
                </strong>{' '}
                La dopamina, la oxitocina y los estrógenos potencian la búsqueda de placer, la vinculación afectiva y la receptividad física.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Inhibición Central por Cortisol:
                </strong>{' '}
                El estrés crónico, el cansancio acumulado y la elevación de prolactina o cortisol activan la respuesta de inhibición, amortiguando la sensibilidad de los circuitos dopaminérgicos y apagando la motivación sexual.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.3. Carga Mental, Maternidad, Roles de Género y Dinámica de Pareja
            </h3>
            <p>
              La sexualidad femenina se encuentra profundamente atravesada por la realidad cotidiana y vincular:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  El Impacto de la Carga Mental Doméstica:
                </strong>{' '}
                El agotamiento derivado de la gestión invisible del hogar, la crianza o las exigencias laborales deja al cerebro femenino sin el espacio mental para la transición hacia el erotismo.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Pérdida de la Identidad Erotizada:
                </strong>{' '}
                La absorción exclusiva por el rol de madre o cuidadora desplaza la vivencia del propio cuerpo como fuente de placer.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  El &quot;Peso del Silencio&quot; y el Resentimiento:
                </strong>{' '}
                Conflictos no resueltos en la pareja, falta de equidad o incomunicación emocional inhiben la vulnerabilidad necesaria para el deseo.
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
              3.1. Reestructuración Cognitiva, Incentivo Erótico y Mapa del Placer
            </h3>
            <p>
              El tratamiento sexológico clínico se aleja de la exigencia de rendimiento y se enfoca en la reconexión erótica consciente, siguiendo las orientaciones de la Asociación Mundial para la Salud Sexual (puedes consultar{' '}
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
                  Ampliación del Mapa de Placer Individual:
                </strong>{' '}
                Reeducación sensorial para identificar incentivos eróticos efectivos (fantasías, literatura erótica, estímulos táctiles no coitocéntricos) y eliminar el deber ser.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Mindfulness Sexual y Desconexión de la Rumiación:
                </strong>{' '}
                Técnicas de atención plena para neutralizar la lista de pendientes mentales durante el encuentro erótico, favoreciendo la entrada en el estado de excitación reactiva.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Abordaje de la Dinámica Vincular, Corresponsabilidad y Citas Eróticas
            </h3>
            <p>
              La terapia aborda a la pareja como un sistema de colaboración mutua:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Colectivización del Deseo:
                </strong>{' '}
                Redefinición del encuentro íntimo para negociar ritmos, caricias y espacios libres de la obligación de la penetración.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Distribución de la Carga y Planificación Consciente:
                </strong>{' '}
                Reorganización de los tiempos de pareja para cultivar &quot;citas eróticas&quot; donde se propicie el espacio libre de estrés necesario para que emerja el deseo reactivo.
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
              4.1. ¿Es normal que no sienta ganas espontáneas de tener sexo aunque ame a mi pareja?
            </h3>
            <p>
              Sí, es absolutamente normal. En relaciones estables de mediana o larga duración, el deseo espontáneo suele disminuir de forma natural. Las mujeres experimentan frecuentemente deseo reactivo, lo que significa que las &quot;ganas&quot; no aparecen solas de la nada, sino como respuesta a la estimulación, el afecto, la relajación y el juego erótico adecuado. Sentir bajo deseo espontáneo no significa que hayas dejado de querer a tu pareja.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. ¿Los anticonceptivos hormonales, la lactancia o la menopausia pueden apagar el deseo sexual?
            </h3>
            <p>
              Sí. Tanto la píldora anticonceptiva (que puede reducir la testosterona libre) como la prolactina elevada durante la lactancia y la disminución de estrógenos en la menopausia alteran directamente la lubricación y la receptividad neuroquímica del deseo. En la consulta realizamos un trabajo interdisciplinario con ginecología para evaluar alternativas hormonales o complementos locales sin descuidar el abordaje sexológico.
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
              <em>Clinical Practice Guidelines for the Management of Hypoactive Sexual Desire Disorder in Women</em>. Sitio web oficial:{' '}
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
