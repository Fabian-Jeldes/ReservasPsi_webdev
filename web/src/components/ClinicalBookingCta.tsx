import type { CSSProperties } from 'react'
import { ArrowRight, Calendar, Clock, FileCheck2, ShieldCheck } from 'lucide-react'
import { CLINICAL_BOOKING_CTA } from '../data/site'

type Props = {
  /** Nombre clínico o motivo de consulta para contextualizar el llamado a la acción */
  topicLabel?: string
  onBookClick: () => void
}

/**
 * Bloque de conversión clínica reutilizable para las 15 páginas de especialidades.
 * Mantiene el lenguaje visual y las CSS custom properties del sistema de temas.
 */
export function ClinicalBookingCta({ topicLabel, onBookClick }: Props) {
  return (
    <section
      aria-labelledby="clinical-booking-cta-heading"
      className="relative overflow-hidden border p-8 text-center md:p-12"
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
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <span
          className="mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-widest"
          style={{
            backgroundColor: 'var(--accent-soft)',
            borderColor: 'var(--border-accent)',
            color: 'var(--accent-text)',
          }}
        >
          <Calendar size={13} aria-hidden="true" />
          {CLINICAL_BOOKING_CTA.eyebrow}
        </span>

        <h2
          id="clinical-booking-cta-heading"
          className="mb-4 text-2xl leading-tight md:text-4xl"
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            textTransform: 'var(--heading-transform)' as CSSProperties['textTransform'],
            letterSpacing: 'var(--heading-spacing)',
          }}
        >
          {CLINICAL_BOOKING_CTA.titlePrefix}{' '}
          <span
            className="font-editorial-accent"
            style={{ color: 'var(--accent)' }}
          >
            {CLINICAL_BOOKING_CTA.titleAccent}
          </span>
        </h2>

        <p
          className="mx-auto mb-6 max-w-xl text-base leading-relaxed md:text-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          {topicLabel
            ? `Si estás atravesando ${topicLabel}, podemos evaluarlo en una sesión confidencial, sin juicios y con herramientas basadas en evidencia.`
            : CLINICAL_BOOKING_CTA.defaultDescription}
        </p>

        {/* Píldoras de transparencia rápida para reducir incertidumbre */}
        <ul
          className="mb-8 flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold sm:text-sm"
          style={{ color: 'var(--text-primary)' }}
        >
          <li
            className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)',
            }}
          >
            <Clock size={14} style={{ color: 'var(--accent)' }} aria-hidden="true" />
            <span>{CLINICAL_BOOKING_CTA.sessionInfo}</span>
          </li>
          <li
            className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)',
            }}
          >
            <FileCheck2 size={14} style={{ color: 'var(--accent)' }} aria-hidden="true" />
            <span>{CLINICAL_BOOKING_CTA.isapreInfo}</span>
          </li>
          <li
            className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-card)',
            }}
          >
            <ShieldCheck size={14} style={{ color: 'var(--accent)' }} aria-hidden="true" />
            <span>{CLINICAL_BOOKING_CTA.policyInfo}</span>
          </li>
        </ul>

        <button
          type="button"
          onClick={onBookClick}
          className="group inline-flex cursor-pointer items-center gap-3 px-9 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] sm:text-base"
          style={{
            backgroundColor: 'var(--btn-accent-bg)',
            color: 'var(--btn-accent-text)',
            borderRadius: 'var(--radius-btn)',
            boxShadow: 'var(--shadow-accent)',
          }}
        >
          <span>{CLINICAL_BOOKING_CTA.buttonLabel}</span>
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        <p
          className="mt-4 text-xs leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {CLINICAL_BOOKING_CTA.footnote}
        </p>
      </div>
    </section>
  )
}
