import { X } from 'lucide-react'
import type { Specialization } from '../types/site'

type Props = {
  spec: Specialization
  onClose: () => void
}

/** Misma estructura visual que el antiguo modal de blog: overlay, panel, cierre, tipografía. */
export function SpecializationModal({ spec, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="spec-modal-title"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border shadow-2xl"
        style={{
          borderRadius: 'var(--radius-card-lg)',
          borderColor: 'var(--border-card)',
          backgroundColor: 'var(--bg-card-solid)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="sticky top-6 float-right mr-6 rounded-full p-2 transition-colors"
          aria-label="Cerrar"
          style={{
            backgroundColor: 'var(--bg-section-alt)',
            color: 'var(--text-primary)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-section-alt)')}
        >
          <X size={20} aria-hidden />
        </button>
        <div className="p-10 md:p-16">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--accent)' }}
          >
            Área clínica
          </span>
          <p
            className="mt-2 text-sm font-bold uppercase tracking-widest"
            style={{ color: 'var(--accent-text)' }}
          >
            {spec.subtitle}
          </p>
          <h2
            id="spec-modal-title"
            className="mb-8 mt-4 text-3xl font-black leading-tight md:text-4xl"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            {spec.title}
          </h2>
          <div className="max-w-none">
            <p
              className="mb-6 text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {spec.description}
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {spec.moreContent}
            </p>
          </div>
          <div
            className="mt-12 flex justify-end border-t pt-8"
            style={{ borderColor: 'var(--border-card)' }}
          >
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-6 py-2 text-sm font-bold transition-all"
              style={{
                backgroundColor: 'var(--bg-section-alt)',
                color: 'var(--text-primary)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-soft)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-section-alt)')}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
