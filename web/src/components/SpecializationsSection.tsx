import { ArrowRight, Heart, Brain, Timer, Infinity, Flame, BrainCircuit, HeartHandshake } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { Specialization } from '../types/site'

type Props = {
  items: Specialization[]
}

const iconMap: Record<number, any> = {
  1: Brain,
  2: Timer,
  3: Infinity,
  4: Flame,
  5: BrainCircuit,
  6: HeartHandshake,
}

export function SpecializationsSection({ items }: Props) {
  const navigate = useNavigate()

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
          <p className='andi-hero-accent'>Áreas de atención:</p>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Un enfoque <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>humano</span> <strong>y especializado</strong> para que vuelvas a <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>conectar contigo mismo</span> de una forma auténtica desde el placer
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((spec) => {
            // Logic to highlight one keyword per title
            const highlightMap: Record<number, string> = {
              1: 'Eréctil',
              2: 'Eyaculatorio',
              3: 'Deseo',
              4: 'Ansiedad',
              5: 'Comunicación',
              6: 'Pornografía',
            }
            const keyword = highlightMap[spec.id]
            const titleParts = keyword ? spec.title.split(keyword) : [spec.title]

            const handleCardClick = () => {
              navigate(`/especialidades/${spec.slug}`)
            }

            return (
              <div
                key={spec.id}
                role="button"
                tabIndex={0}
                onClick={handleCardClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCardClick()
                  }
                }}
                className="group relative cursor-pointer border p-8 text-left transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
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
                <div>
                  <div
                    className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: 'var(--accent-soft)',
                      color: 'var(--accent)',
                    }}
                  >
                    {(() => {
                      const IconComponent = iconMap[spec.id] || Heart
                      return <IconComponent size={28} aria-hidden />
                    })()}
                  </div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {keyword && titleParts.length > 1 ? (
                      <>
                        {titleParts[0]}
                        <span style={{ color: 'var(--accent)' }}>{keyword}</span>
                        {titleParts[1]}
                      </>
                    ) : (
                      spec.title
                    )}
                  </h3>
                  <p
                    className="mb-5 text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    {spec.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed line-clamp-1 md:line-clamp-none"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {spec.description}
                  </p>
                </div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
