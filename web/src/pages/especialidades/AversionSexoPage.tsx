// Tratamiento de la Aversión al Sexo y Evidencia Fóbica en Chile: Enfoque Sexológico Clínico e Integrativo

import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Navbar } from '../../components/Navbar'
import { SiteFooter } from '../../components/SiteFooter'
import { AppointmentModal } from '../../components/AppointmentModal'
import { SEO } from '../../components/SEO'

export function AversionSexoPage() {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const seoTitle =
    'Tratamiento de la Aversión al Sexo y Evidencia Fóbica en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco'
  const seoDescription =
    'La Aversión al Sexo se caracteriza por una respuesta fóbica, de rechazo persistente o evitación extrema y activa de cualquier tipo de contacto íntimo o cercanía erótica compartida. Tratamiento sexológico clínico e integrativo en Chile.'
  const seoKeywords =
    'aversión al sexo Chile, tratamiento aversión sexual, rechazo al contacto íntimo, fobia sexual, evitación fóbica intimidad, sexólogo clínico Santiago, CIE-11 aversión sexual, DSM-5-TR evitación sexual'

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Tratamiento de la Aversión al Sexo y Evidencia Fóbica en Chile: Enfoque Sexológico Clínico e Integrativo',
      description: seoDescription,
      url: `https://psandrei.com/sexualidad-femenina/aversion-al-sexo`,
      inLanguage: 'es-CL',
      aspect: ['diagnosis', 'treatment', 'psychophysiology'],
      about: {
        '@type': 'MedicalCondition',
        name: 'Aversión al Sexo',
        alternateName: 'Evitación Fóbica del Contacto Sexual',
        description:
          'Respuesta fóbica, de rechazo persistente o evitación extrema y activa de cualquier tipo de contacto íntimo o cercanía erótica compartida.',
      },
      author: {
        '@type': 'Person',
        name: 'Ps. Andrei Andrusco Fidalgo',
        jobTitle: 'Psicólogo Clínico y Sexólogo',
        url: `https://psandrei.com/sobre-mi`,
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
            Problemas Sexuales Femeninos · Aversión al sexo
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
          Tratamiento de la Aversión al Sexo y Evidencia Fóbica en Chile: Enfoque Sexológico Clínico e Integrativo
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
              La Aversión al Sexo se caracteriza por una respuesta fóbica, de rechazo persistente o evitación extrema y activa de cualquier tipo de contacto íntimo o cercanía erótica compartida.
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
              ), esta manifestación se sitúa en el Capítulo 17: Condiciones relacionadas con la salud sexual, abordando la ansiedad vinculada a la intimidad desde una perspectiva de salud integral y no estigmatizante.
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
              ) en 2022, evalúa los componentes de evitación fóbica y malestar subjetivo intenso asociados a los trastornos de la respuesta sexual:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterios de Evitación Activa:
                </strong>{' '}
                Aparición de respuestas intensas de malestar, ansiedad o angustia ante la sola anticipación o presencia de contacto íntimo.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Criterio de Temporalidad y Malestar:
                </strong>{' '}
                La persistencia del cuadro durante al menos 6 meses generando un impacto negativo directo en el bienestar personal o el vínculo relacional.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Especificadores Contextuales:
                </strong>{' '}
                Evaluación de factores traumáticos previos, antecedentes de coerción o dinámicas de coacción en la historia vincular.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              1.3. Diagnóstico Diferencial con el Deseo Hipoactivo y el Trastorno de Ansiedad
            </h3>
            <p>
              Es fundamental distinguir la aversión de otras problemáticas clínicas:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Diferenciación con el Deseo Hipoactivo:
                </strong>{' '}
                Mientras que en el bajo deseo predomina la indiferencia o la ausencia de motivación, en la aversión existe una respuesta activa de rechazo, miedo o aversión visceral ante el acercamiento erótico.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Descarte de Trastornos de Ansiedad Generalizada o Fobia Específica:
                </strong>{' '}
                Evaluación de si la respuesta fóbica está estrictamente anclada al ámbito de la intimidad corporal.
              </li>
              <li>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Protocolo Interdisciplinario:
                </strong>{' '}
                Trabajo de coordinación en conformidad con las orientaciones del Ministerio de Salud de Chile (puedes visitar{' '}
                <a
                  href="https://www.minsal.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  minsal.cl
                </a>
                ) y organismos internacionales de sexología clínica.
              </li>
            </ol>
          </div>
        </section>

        <hr className="theme-divider" />

        {/* 2. Mecanismos Psicofisiológicos de la Respuesta Fóbica y el Bloqueo Íntimo */}
        <section className="space-y-8">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            2. Mecanismos Psicofisiológicos de la Respuesta Fóbica y el Bloqueo Íntimo
          </h2>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.1. El Reflejo de Defensa, Alerta Simpática y Coacción Previa
            </h3>
            <p>
              A diferencia del bajo deseo —donde existe indiferencia—, en la aversión sexual la cercanía erótica o la sola anticipación del encuentro despierta emociones intensas de ansiedad, incomodidad profunda, bloqueo o necesidad de evitar cualquier contacto físico (como besos o abrazos prolongados) por temor a que deriven en una demanda sexual. Esta respuesta suele desarrollarse tras experiencias previas dolorosas o incómodas, haberse forzado repetidamente a tener relaciones por &quot;cumplir&quot;, dinámicas relacionales deterioradas o vivencias pasadas no procesadas.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              2.2. Neurobiología de la Amenaza: Activación de la Amígdala
            </h3>
            <p>
              Desde la neurobiología, el sistema nervioso procesa el estímulo de la intimidad como una amenaza de daño inminente, activando de forma abrupta la respuesta de huida o congelamiento a través de la amígdala cerebral y bloqueando cualquier posibilidad de respuesta parasimpática o de disfrute.
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
              3.1. Restitución de la Seguridad, Soberanía Corporal y Regulación Emocional
            </h3>
            <p>
              El primer paso en terapia es detener cualquier práctica que se viva desde la obligación. Trabajamos en procesar las emociones asociadas, restablecer límites seguros de afecto no demandante y recuperar gradualmente la sensación de control, calma y seguridad corporal, bajo los lineamientos de la World Association for Sexual Health (puedes consultar{' '}
              <a
                href="https://www.worldsexualhealth.net/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                worldsexualhealth.net
              </a>
              ).
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              3.2. Desensibilización Graduada y Espacios Libres de Demanda
            </h3>
            <p>
              La intervención clínica avanza de manera muy respetuosa, eliminando toda exigencia de contacto sexual y devolviendo a la persona el dominio absoluto sobre sus límites y su espacio personal.
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
