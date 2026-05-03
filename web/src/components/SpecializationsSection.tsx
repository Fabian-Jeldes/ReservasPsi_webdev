import { ArrowRight, Heart } from 'lucide-react'
import type { Specialization } from '../types/site'

type Props = {
  items: Specialization[]
  onSelectSpec: (spec: Specialization) => void
}

export function SpecializationsSection({ items, onSelectSpec }: Props) {
  return (
    <section
      id="especialidades"
      className="py-32"
      style={{ backgroundColor: 'var(--bg-section-alt)' }}
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2
          className="mb-4 text-4xl"
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            textTransform: 'var(--heading-transform)' as any,
            letterSpacing: 'var(--heading-spacing)',
          }}
        >
          Áreas de Especialización
        </h2>
        <p className="mx-auto mb-16 max-w-xl" style={{ color: 'var(--text-muted)' }}>
          Un enfoque humano para desarmar la ansiedad y reconectar con el placer genuino.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((spec) => (
            <div
              key={spec.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectSpec(spec)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelectSpec(spec)
                }
              }}
              className="group relative cursor-pointer border p-8 text-left transition-all duration-500 hover:-translate-y-2"
              style={{
                borderRadius: 'var(--radius-card)',
                borderColor: 'var(--border-card)',
                borderWidth: 'var(--card-border-width)',
                backgroundColor: 'var(--bg-card)',
                boxShadow: 'var(--shadow-card)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-accent)'
                e.currentTarget.style.boxShadow = 'var(--shadow-accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-card)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-all duration-500 group-hover:scale-110"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  color: 'var(--accent)',
                }}
              >
                <Heart size={28} aria-hidden />
              </div>
              <h3
                className="mb-3 text-xl"
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: 'var(--heading-weight)',
                  textTransform: 'var(--heading-transform)' as any,
                }}
              >
                {spec.title}
              </h3>
              <p
                className="mb-5 text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--accent-text)' }}
              >
                {spec.subtitle}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {spec.description}
              </p>
              <div
                className="mt-8 flex items-center justify-between border-t pt-6"
                style={{ borderColor: 'var(--border-primary)' }}
              >
                <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }} />
                <span
                  className="transition-transform group-hover:translate-x-2"
                  style={{ color: 'var(--accent)' }}
                  aria-hidden
                >
                  <ArrowRight size={20} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
