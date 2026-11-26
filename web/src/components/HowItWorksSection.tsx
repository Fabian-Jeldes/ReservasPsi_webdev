import type { CSSProperties } from 'react'
import { CalendarCheck2, Clock, FileCheck2, Landmark, Sparkles } from 'lucide-react'
import { HOW_IT_WORKS_DATA } from '../data/site'

const GUARANTEE_ICONS = [FileCheck2, Landmark, Clock] as const

/**
 * Sección visible de transparencia clínica antes del bloque de reserva:
 * paso a paso (3 pasos), aranceles claros en CLP, boleta reembolsable en Isapre,
 * pago por transferencia y política de cancelación con 24 horas de anticipación.
 */
export function HowItWorksSection() {
  const { eyebrow, titlePrefix, titleAccent, subtitle, steps, pricing, guarantees } =
    HOW_IT_WORKS_DATA

  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-heading"
      className="scroll-mt-16 px-4 pt-12 pb-6 sm:px-6 md:scroll-mt-20 md:pt-16 md:pb-8"
      style={{ backgroundColor: 'var(--bg-section-alt)' }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-14">
          <span
            className="mb-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] md:mb-4"
            style={{
              backgroundColor: 'var(--accent-soft)',
              borderColor: 'var(--border-accent)',
              color: 'var(--accent-text)',
            }}
          >
            <CalendarCheck2 size={13} aria-hidden="true" />
            {eyebrow}
          </span>
          <h2
            id="como-funciona-heading"
            className="mb-3 text-3xl leading-tight sm:text-4xl md:mb-4 md:text-5xl"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              textTransform: 'var(--heading-transform)' as CSSProperties['textTransform'],
              letterSpacing: 'var(--heading-spacing)',
            }}
          >
            {titlePrefix}{' '}
            <span
              className="font-editorial-accent"
              style={{ color: 'var(--accent)' }}
            >
              {titleAccent}
            </span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            {subtitle}
          </p>
        </div>

        {/* Paso a paso — Móvil: timeline compacto en 1 sola tarjeta */}
        <ol
          className="mb-5 divide-y rounded-2xl border md:hidden"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-card)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex items-start gap-3.5 px-4 py-3.5"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <span
                className="font-editorial-accent mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  borderColor: 'var(--border-accent)',
                  color: 'var(--accent-text)',
                }}
              >
                {step.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3
                  className="text-sm font-bold leading-snug"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-0.5 text-xs leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Paso a paso — Desktop: 3 tarjetas en columnas */}
        <ol className="mb-14 hidden gap-5 md:grid md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col rounded-2xl border p-7"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-card)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <span
                className="font-editorial-accent mb-3 inline-block text-2xl leading-none"
                style={{ color: 'var(--accent-text)' }}
              >
                {step.number}
              </span>
              <h3
                className="mb-2 text-lg font-bold"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Aranceles — Móvil: lista comparativa unificada en 1 sola tarjeta */}
        <div
          className="mb-5 overflow-hidden rounded-2xl border md:hidden"
          style={{
            backgroundColor: 'var(--bg-card-solid)',
            borderColor: 'var(--border-accent)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {pricing.map((plan, idx) => (
            <div
              key={plan.label}
              className="flex items-center justify-between gap-3 px-4 py-3.5"
              style={{
                borderTop: idx > 0 ? '1px solid var(--border-primary)' : undefined,
                background: plan.featured ? 'var(--faq-featured-bg)' : undefined,
              }}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-xs font-bold leading-snug"
                    style={{
                      color: plan.featured
                        ? 'var(--accent-text)'
                        : 'var(--text-primary)',
                    }}
                  >
                    {plan.label}
                  </span>
                  {plan.featured && (
                    <Sparkles
                      size={13}
                      aria-hidden="true"
                      style={{ color: 'var(--accent)' }}
                    />
                  )}
                </div>
                <p
                  className="mt-0.5 text-[11px] leading-snug"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {plan.detail}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <div
                  className="font-editorial text-xl font-semibold leading-none"
                  style={{
                    color: plan.featured
                      ? 'var(--accent-text)'
                      : 'var(--text-primary)',
                  }}
                >
                  {plan.value}
                </div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--text-muted)' }}
                >
                  CLP
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Aranceles — Desktop: 3 tarjetas */}
        <div className="mb-10 hidden gap-5 md:grid md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.label}
              className="relative flex flex-col justify-between rounded-2xl border p-7"
              style={{
                borderColor: plan.featured
                  ? 'var(--accent)'
                  : 'var(--border-card)',
                borderWidth: plan.featured ? '1.5px' : '1px',
                background: plan.featured
                  ? 'var(--faq-featured-bg)'
                  : 'var(--bg-card-solid)',
                boxShadow: plan.featured
                  ? 'var(--callout-shadow)'
                  : 'var(--shadow-card)',
              }}
            >
              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{
                      color: plan.featured
                        ? 'var(--accent-text)'
                        : 'var(--text-muted)',
                    }}
                  >
                    {plan.label}
                  </span>
                  {plan.featured && (
                    <Sparkles
                      size={16}
                      aria-hidden="true"
                      style={{ color: 'var(--accent)' }}
                    />
                  )}
                </div>
                <div
                  className="font-editorial my-1 text-4xl font-semibold"
                  style={{
                    color: plan.featured
                      ? 'var(--accent-text)'
                      : 'var(--text-primary)',
                  }}
                >
                  {plan.value}
                  <span
                    className="ml-1.5 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    CLP
                  </span>
                </div>
                <p
                  className="mt-1 text-xs font-semibold uppercase tracking-wide"
                  style={{ color: 'var(--accent-text)' }}
                >
                  {plan.detail}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {plan.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Garantías: compacto en móvil, expandido en desktop */}
        <div
          className="grid gap-3 rounded-2xl border p-4 md:grid-cols-3 md:gap-5 md:p-8"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-accent)',
          }}
        >
          {guarantees.map((item, idx) => {
            const Icon = GUARANTEE_ICONS[idx] ?? FileCheck2
            return (
              <div key={item.title} className="flex items-center gap-3 md:items-start md:gap-3.5">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border md:h-10 md:w-10 md:rounded-xl"
                  aria-hidden="true"
                  style={{
                    backgroundColor: 'var(--accent-soft)',
                    borderColor: 'var(--border-accent)',
                    color: 'var(--accent-text)',
                  }}
                >
                  <Icon size={16} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3
                    className="text-xs font-bold leading-snug sm:text-sm md:mb-1 md:text-base"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="hidden text-sm leading-relaxed md:block"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.description}
                  </p>
                  <p
                    className="text-[11px] leading-snug md:hidden"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.shortNote}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
