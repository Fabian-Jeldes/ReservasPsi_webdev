// Tratamiento de la Dispareunia y Dolor durante las Relaciones en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function DispareuniaPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de la Dispareunia y Dolor durante las Relaciones en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'La Dispareunia se define como el dolor genital persistente o recurrente que se experimenta antes, durante o después del coito o de la penetración sexual. Tratamiento sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'dispareunia Chile, dolor durante las relaciones sexuales, tratamiento dispareunia, dolor coital, sexólogo clínico Santiago, CIE-11 dispareunia, DSM-5-TR dolor genitopélvico'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de la Dispareunia y Dolor durante las Relaciones en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `${window.location.origin}/sexualidad-femenina/dispareunia-dolor-relaciones`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Dispareunia',
        alternateName: 'Dolor durante las Relaciones Sexuales / Dolor Coital',
        description:
          'Dolor genital persistente o recurrente que se experimenta antes, durante o después del coito o de la penetración sexual.',
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
            name: '¿Es normal sentir leve molestia o dolor durante las relaciones sexuales?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, el placer nunca debería doler. Cualquier dolor persistente durante la penetración es una señal de que el cuerpo y el sistema nervioso están activando un mecanismo de defensa, por lo que requiere una evaluación médica y sexológica integral para identificar su origen físico o funcional.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo puedo hablar con mi pareja sobre el dolor sin generar distancia afectiva?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La clave radica en desvincular el dolor del afecto hacia la pareja, explicando que se trata de una respuesta física involuntaria del cuerpo ante la cual ambos pueden colaborar modificando las prácticas eróticas y eliminando la presión de la penetración temporalmente.',
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
            Problemas Sexuales Femeninos · Dispareunia (Dolor durante las relaciones)
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
          Tratamiento de la Dispareunia y Dolor durante las Relaciones en Chile: Enfoque Sexológico Clínico e Integrativo
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
              La <strong style={{ color: 'var(--text-primary)' }}>Dispareunia</strong> se define como el dolor genital persistente o recurrente que se experimenta antes, durante o después del coito o de la penetración sexual. Esta manifestación clínica altera significativamente la respuesta erótica y la vivencia afectiva del encuentro.
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
              ), estas condiciones de dolor penetrativo se integran en el Capítulo 17: Condiciones relacionadas con la salud sexual, bajo los Trastornos de Dolor por Penetración Sexual. Este enfoque desvincula el síntoma de constructos psicopatológicos tradicionales, reconociéndolo como una respuesta psicofisiológica multidimensional que requiere un abordaje médico y sexológico coordinado.
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
              ) en 2022, engloba la dispareunia dentro del Trastorno de Dolor Genito-Pélvico/Penetración:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterios Sintomáticos Centrales:
                </strong>{' '}
                Dolor genitopélvico persistente o recurrente asociado al coito o a los intentos de penetración, acompañado de marcada tensión muscular o ansiedad anticipatoria.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterio de Temporalidad y Malestar:
                </strong>{' '}
                Los síntomas deben mantenerse durante un período mínimo de 6 meses y provocar un malestar clínicamente significativo, frustración o distanciamiento en la dinámica de pareja.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Especificadores Contextuales:
                </strong>{' '}
                Se clasifica en primaria (presente desde las primeras experiencias eróticas) o adquirida (desarrollada tras un período de relaciones sin dolor), así como generalizada o situacional.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diagnóstico Diferencial entre Causas Orgánicas, Ginecológicas y Psicógenas
            </h3>
            <p>
              Dado que el dolor durante las relaciones es una señal de alerta corporal, el diagnóstico diferencial exige descartar factores médicos y ginecológicos primarios:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Evaluación Ginecológica Integral:
                </strong>{' '}
                Descarte de endometriosis, infecciones vaginales recurrentes (candidiasis, vaginosis), atrofia vulvovaginal por déficit estrogénico (postparto, lactancia o menopausia), vestibulodinia o secuelas de cirugías y episiotomías.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Factores Farmacológicos y Sequedad:
                </strong>{' '}
                Identificación de efectos secundarios derivados del uso de anticonceptivos hormonales o psicofármacos que reducen la lubricación natural.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Interconsulta Interdisciplinaria:
                </strong>{' '}
                Coordinación clínica con ginecología, kinesiología de suelo pélvico y medicina general, en concordancia con las orientaciones del Ministerio de Salud de Chile (puedes visitar{' '}
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

        {/* 2. Mecanismos Psicofisiológicos: De la Anticipación del Dolor a la Evitación */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos: De la Anticipación del Dolor a la Evitación
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. El Bucle de Hipervigilancia y la Reducción de la Excitación
            </h3>
            <p>
              La dispareunia transforma gradualmente la experiencia erótica:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Activación del Sistema Simpático y Falta de Lubricación:
                </strong>{' '}
                Cuando el encuentro sexual se anticipa o experimenta con dolor, el sistema nervioso interpreta el estímulo como una amenaza. Se activa la respuesta de alerta (simpática), lo que inhibe de inmediato la vasodilatación, la congestión eréctil y la lubricación natural necesarias.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Fricción y Acentuación del Malestar:
                </strong>{' '}
                La falta de lubricación incrementa la fricción mecánica durante la penetración, lo que reconfirma la señal física de dolor y consolida un circuito cerrado de retroalimentación negativa entre el miedo y el espasmo defensivo.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. El Rol del Silencio y la Sobrecarga Emocional en la Pareja
            </h3>
            <p>
              Muchas mujeres terminan soportando el dolor en silencio por culpa, vergüenza o temor a afectar la estabilidad de la relación, lo que progresivamente apaga el deseo y lesiona el vínculo afectivo. Superar la alexitimia normativa y abrir un espacio de comunicación asertiva es un pilar terapéutico fundamental.
            </p>
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
              3.1. Reconstrucción del Repertorio Erótico y Regulación de la Ansiedad
            </h3>
            <p>
              El tratamiento sexológico clínico se fundamenta en pautas de desensibilización y respeto absoluto por los ritmos corporales, respaldadas por la Asociación Mundial para la Salud Sexual (puedes consultar{' '}
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
                  Desarticulación del Coitocentrismo:
                </strong>{' '}
                Se elimina temporalmente la obligatoriedad de la penetración en la rutina íntima para erradicar el fantasma del dolor, reorientando el foco hacia el placer clitoridiano, la afectividad y las caricias sin metas fijas.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Establecimiento de Límites de Cuidado:
                </strong>{' '}
                Entrenamiento en comunicación asertiva para que la persona recupere el control absoluto sobre su cuerpo y sus tiempos de respuesta.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Regulación Pélvica y Coordinación Multidisciplinaria
            </h3>
            <p>
              Se trabaja de forma integrada con kinesiología de suelo pélvico para relajar la musculatura hipertónica y devolver la elasticidad a los tejidos, combinando la psicoterapia para disolver el miedo anticipatorio.
            </p>
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
              4.1. &quot;¿Es normal sentir leve molestia o dolor durante las relaciones sexuales?&quot;
            </h3>
            <p>
              <strong style={{ color: 'var(--text-primary)' }}>
                No, el placer nunca debería doler
              </strong>
              . Cualquier dolor persistente durante la penetración es una señal de que el cuerpo y el sistema nervioso están activando un mecanismo de defensa, por lo que requiere una evaluación médica y sexológica integral para identificar su origen físico o funcional.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              4.2. &quot;¿Cómo puedo hablar con mi pareja sobre el dolor sin generar distancia afectiva?&quot;
            </h3>
            <p>
              La clave radica en desvincular el dolor del afecto hacia la pareja, explicando que se trata de una respuesta física involuntaria del cuerpo ante la cual ambos pueden colaborar modificando las prácticas eróticas y eliminando la presión de la penetración temporalmente.
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
              <em>Declaración de Salud Sexual y Estándares de Atención Clínica</em>. Sitio web oficial:{' '}
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
              <em>Clinical Practice Guidelines for Genito-Pelvic Pain and Dyspareunia</em>. Sitio web oficial:{' '}
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
              <em>Guías y Orientaciones Técnicas en Salud Sexual y Reproductiva</em>. Sitio web oficial:{' '}
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
              <em>Registro Nacional de Prestadores Individuales de Salud</em>. Sitio web oficial:{' '}
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
