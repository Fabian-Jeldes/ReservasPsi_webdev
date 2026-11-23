import { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, FileText, Lock, ShieldCheck } from 'lucide-react'
import { LEGAL_NAV_LINKS } from '../data/site'
import { LEGAL_PAGES_DATA } from '../data/legal'
import type { LegalPageId } from '../types/site'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { AppointmentModal } from '../components/AppointmentModal'
import { Breadcrumbs } from '../components/Breadcrumbs'

type Props = {
  pageId: LegalPageId
}

const PAGE_ICONS: Record<LegalPageId, typeof ShieldCheck> = {
  privacidad: ShieldCheck,
  'practica-digital': Lock,
  terminos: FileText,
}

export function LegalPage({ pageId }: Props) {
  const data = LEGAL_PAGES_DATA[pageId]
  const navigate = useNavigate()
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const openBooking = useCallback(() => {
    setIsAppointmentModalOpen(true)
  }, [])

  const HeaderIcon = PAGE_ICONS[pageId]

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar
        onLogoClick={() => navigate('/')}
        onAgendarClick={openBooking}
      />

      {/* Encabezado */}
      <header className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 25%, var(--accent-glow) 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6">
          <Breadcrumbs className="mb-5" />
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-transform hover:-translate-x-1"
              style={{ color: 'var(--text-muted)' }}
            >
              <ArrowLeft size={16} style={{ color: 'var(--accent)' }} aria-hidden />
              Volver al inicio
            </Link>

            {/* Navegación rápida entre Términos, Privacidad y Práctica Digital */}
            <nav
              aria-label="Secciones legales y de seguridad"
              className="flex flex-wrap items-center gap-2"
            >
              {LEGAL_NAV_LINKS.map((item) => {
                const isCurrent = item.id === pageId
                const TabIcon = PAGE_ICONS[item.id]
                return (
                  <Link
                    key={item.id}
                    to={item.to}
                    aria-current={isCurrent ? 'page' : undefined}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold tracking-wide transition-all"
                    style={{
                      backgroundColor: isCurrent
                        ? 'var(--accent-soft)'
                        : 'var(--bg-card)',
                      borderColor: isCurrent
                        ? 'var(--accent)'
                        : 'var(--border-card)',
                      color: isCurrent
                        ? 'var(--accent-text)'
                        : 'var(--text-secondary)',
                    }}
                  >
                    <TabIcon
                      size={13}
                      style={{ color: isCurrent ? 'var(--accent)' : 'var(--text-muted)' }}
                      aria-hidden
                    />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="mb-5 flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
                borderColor: 'var(--border-accent)',
              }}
            >
              <HeaderIcon size={21} aria-hidden />
            </div>
            <span
              className="inline-block rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent-text)',
                border: '1px solid var(--border-accent)',
              }}
            >
              {data.eyebrow}
            </span>
          </div>

          <h1
            className="mb-6 text-4xl leading-tight md:text-6xl"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              letterSpacing: 'var(--heading-spacing)',
            }}
          >
            {data.titlePrefix}{' '}
            <span
              className="font-editorial-accent"
              style={{ color: 'var(--accent)' }}
            >
              {data.titleAccent}
            </span>
          </h1>

          <p
            className="max-w-2xl text-lg leading-[1.82] md:text-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {data.summary}
          </p>

          <p
            className="mt-5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            {data.updatedLabel}
          </p>
        </div>
      </header>

      <hr className="theme-divider mx-auto max-w-4xl" />

      {/* Cuerpo principal */}
      <main id="contenido-principal" className="editorial-prose mx-auto max-w-3xl space-y-8 px-6 py-14 md:py-20">
        {data.sections.map((section) => (
          <section key={section.title} className="clinical-callout space-y-4">
            <h2
              className="text-xl leading-snug font-bold md:text-2xl"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {section.title}
            </h2>

            <div className="space-y-4">
              {section.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="max-w-none text-base leading-[1.82] md:text-lg"
                  style={{ color: 'var(--text-secondary)' }}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2.5 pt-2">
                {section.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-base leading-[1.78]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: 'var(--accent)' }}
                      aria-hidden
                    />
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Reflexión de cierre */}
        <blockquote className="editorial-blockquote">
          &ldquo;{data.closingQuote}&rdquo;
        </blockquote>

        {/* Enlaces a los otros documentos de Seguridad */}
        <section
          aria-label="Otros documentos de seguridad y marco clínico"
          className="pt-4"
        >
          <p
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            También puedes revisar
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {LEGAL_NAV_LINKS.filter((item) => item.id !== pageId).map((item) => {
              const CardIcon = PAGE_ICONS[item.id]
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className="clinical-callout clinical-callout-link group flex items-start gap-4 p-5"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      backgroundColor: 'var(--accent-soft)',
                      borderColor: 'var(--border-accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    <CardIcon size={18} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      className="text-base font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.label}
                    </h3>
                    <p
                      className="mt-1 text-sm leading-snug"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* CTA final */}
        <section
          className="relative mt-10 overflow-hidden border p-8 text-center md:p-12"
          style={{
            borderRadius: 'var(--radius-card-lg)',
            borderColor: 'var(--accent)',
            borderWidth: '1.5px',
            backgroundColor: 'var(--bg-card-solid)',
            boxShadow: 'var(--cta-card-shadow)',
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background:
                'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h2
              className="mb-4 text-2xl md:text-3xl"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
              }}
            >
              {data.ctaTitle}
            </h2>
            <p
              className="mx-auto mb-8 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              {data.ctaDescription}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={openBooking}
                className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-btn)',
                  boxShadow: 'var(--shadow-accent)',
                }}
              >
                Agendar una sesión
                <ArrowRight size={17} aria-hidden />
              </button>
              <Link
                to="/articulos"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-4 text-sm font-bold transition-all hover:scale-105"
                style={{
                  borderColor: 'var(--border-accent)',
                  backgroundColor: 'var(--accent-soft)',
                  color: 'var(--accent-text)',
                }}
              >
                Ir a Psicoeducación
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  )
}
