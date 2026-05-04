import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Review } from '../types/site'

type Props = {
  reviews: Review[]
  currentIndex: number
  fade: boolean
}

export function ReviewsSection({ reviews, currentIndex, fade }: Props) {
  const [manualIndex, setManualIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isAnimating, setIsAnimating] = useState(false)

  // If user has manually navigated, use that; otherwise use auto-rotation
  const activeIndex = manualIndex ?? currentIndex
  const current = reviews[activeIndex]
  if (!current) return null

  const goTo = (idx: number, dir: 'left' | 'right') => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)

    // Brief fade-out, switch, fade-in
    setTimeout(() => {
      setManualIndex(idx)
      setIsAnimating(false)
    }, 350)
  }

  const goPrev = () => {
    const prev = activeIndex === 0 ? reviews.length - 1 : activeIndex - 1
    goTo(prev, 'left')
  }

  const goNext = () => {
    const next = (activeIndex + 1) % reviews.length
    goTo(next, 'right')
  }

  // Auto-rotation: sync manual back to auto when it changes
  const displayIndex = manualIndex ?? currentIndex

  return (
    <section id="reviews" className="overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div
          className="relative border p-12 shadow-2xl"
          style={{
            borderRadius: 'var(--radius-card-lg)',
            borderColor: 'var(--border-card)',
            borderWidth: 'var(--card-border-width)',
            backgroundColor: 'var(--bg-card-solid)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div
            className="absolute right-12 top-0 translate-y-[-50%] rounded-full px-6 py-2 text-sm font-bold shadow-xl"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--text-inverse)',
            }}
          >
            Doctoralia Verified
          </div>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="shrink-0 text-center md:text-left">
              <div className="mb-4 flex justify-center gap-1 md:justify-start">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-1.5 animate-pulse rounded-full"
                    style={{
                      backgroundColor: 'var(--accent)',
                      animationDelay: `${i * 150}ms`,
                    }}
                  />
                ))}
              </div>
              <h2
                className="text-3xl leading-tight"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--heading-weight)',
                  textTransform: 'var(--heading-transform)' as any,
                  letterSpacing: 'var(--heading-spacing)',
                }}
              >
                Lo que dicen <br />
                mis pacientes
              </h2>
            </div>

            {/* Carousel content area */}
            <div className="relative flex-1">
              <div
                className="flex min-h-[160px] items-center"
                style={{
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  opacity: isAnimating ? 0 : (fade ? 1 : 0),
                  transform: isAnimating
                    ? `translateX(${direction === 'right' ? '30px' : '-30px'})`
                    : (fade ? 'translateX(0)' : `translateX(${direction === 'right' ? '30px' : '-30px'})`),
                }}
              >
                <div className="relative">
                  <div
                    className="absolute -left-6 -top-6 scale-[4]"
                    style={{ color: 'var(--accent-soft)' }}
                  >
                    &quot;
                  </div>
                  <p
                    className="relative z-10 text-xl italic leading-relaxed line-clamp-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {current.content}
                  </p>
                  <p
                    className="mt-6 font-bold tracking-wide"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    — {current.author}
                  </p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                  style={{
                    borderColor: 'var(--border-card)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-card)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                  aria-label="Reseña anterior"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Dot indicators */}
                <div className="flex gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i, i > activeIndex ? 'right' : 'left')}
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: i === displayIndex ? '1.5rem' : '0.5rem',
                        backgroundColor:
                          i === displayIndex ? 'var(--accent)' : 'var(--border-card)',
                      }}
                      aria-label={`Ir a reseña ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                  style={{
                    borderColor: 'var(--border-card)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-card)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                  aria-label="Siguiente reseña"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
