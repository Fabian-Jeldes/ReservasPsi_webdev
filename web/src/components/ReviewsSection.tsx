import { useState, useEffect, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Review } from '../types/site'

type Props = {
  reviews: Review[]
  currentIndex: number
  fade: boolean
}

/** Maximum number of visible dot indicators */
const MAX_VISIBLE_DOTS = 7

export function ReviewsSection({ reviews, currentIndex, fade }: Props) {
  const [activeIndex, setActiveIndex] = useState(currentIndex)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isAnimating, setIsAnimating] = useState(false)

  // Sync with auto-rotation whenever the parent advances the index
  useEffect(() => {
    if (!isAnimating) {
      setActiveIndex(currentIndex)
    }
  }, [currentIndex])

  const current = reviews[activeIndex]
  if (!current) return null

  const goTo = (idx: number, dir: 'left' | 'right') => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)

    setTimeout(() => {
      setActiveIndex(idx)
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

  // Windowed dots: show at most MAX_VISIBLE_DOTS centered on activeIndex
  const visibleDots = useMemo(() => {
    const total = reviews.length
    if (total <= MAX_VISIBLE_DOTS) {
      return reviews.map((_, i) => i)
    }
    const half = Math.floor(MAX_VISIBLE_DOTS / 2)
    let start = activeIndex - half
    let end = activeIndex + half

    if (start < 0) {
      start = 0
      end = MAX_VISIBLE_DOTS - 1
    } else if (end >= total) {
      end = total - 1
      start = total - MAX_VISIBLE_DOTS
    }

    const indices: number[] = []
    for (let i = start; i <= end; i++) indices.push(i)
    return indices
  }, [activeIndex, reviews.length])

  return (
    <section id="reviews" className="overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div
          className="relative overflow-hidden border shadow-2xl"
          style={{
            borderRadius: 'var(--radius-card-lg)',
            borderColor: 'var(--border-card)',
            borderWidth: 'var(--card-border-width)',
            backgroundColor: 'var(--bg-card-solid)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Badge */}
          <div
            className="absolute right-8 top-0 z-10 translate-y-[-50%] rounded-full px-6 py-2 text-sm font-bold shadow-xl"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--text-inverse)',
            }}
          >
            Doctoralia Verified
          </div>

          {/* Inner content — padded so nothing overflows */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
              {/* Left column: title */}
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
                  mis <span style={{ color: 'var(--accent)' }}>pacientes</span>
                </h2>
              </div>

              {/* Right column: review text */}
              <div className="relative min-w-0 flex-1">
                <div
                  className="min-h-[140px]"
                  style={{
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    opacity: isAnimating ? 0 : (fade ? 1 : 0),
                    transform: isAnimating
                      ? `translateX(${direction === 'right' ? '20px' : '-20px'})`
                      : (fade ? 'translateX(0)' : `translateX(${direction === 'right' ? '20px' : '-20px'})`),
                  }}
                >
                  <div className="relative">
                    <p
                      className="relative z-10 text-lg italic leading-relaxed md:text-xl"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span
                        className="mr-1 inline-block text-3xl font-bold not-italic leading-none align-top"
                        style={{ color: 'var(--accent)' }}
                      >
                        &ldquo;
                      </span>
                      {current.content}
                      <span
                        className="ml-1 inline-block text-3xl font-bold not-italic leading-none align-bottom"
                        style={{ color: 'var(--accent)' }}
                      >
                        &rdquo;
                      </span>
                    </p>
                    <p
                      className="mt-4 font-bold tracking-wide"
                      style={{ color: 'var(--accent-text)' }}
                    >
                      — {current.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation: arrows + windowed dots — all inside the card */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all hover:scale-110"
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
                <ChevronLeft size={16} />
              </button>

              {/* Windowed dot indicators */}
              <div className="flex items-center gap-1.5">
                {/* Leading ellipsis if there are hidden dots before */}
                {visibleDots[0] > 0 && (
                  <span
                    className="mx-1 text-xs tracking-widest"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    ···
                  </span>
                )}

                {visibleDots.map((i) => {
                  const isActive = i === activeIndex
                  // Scale dots near the edges of the window smaller
                  const distFromActive = Math.abs(i - activeIndex)
                  const dotSize = isActive
                    ? 'h-2.5 w-2.5'
                    : distFromActive <= 1
                      ? 'h-2 w-2'
                      : 'h-1.5 w-1.5'

                  return (
                    <button
                      key={i}
                      onClick={() => goTo(i, i > activeIndex ? 'right' : 'left')}
                      className={`${dotSize} rounded-full transition-all duration-300`}
                      style={{
                        backgroundColor: isActive ? 'var(--accent)' : 'var(--border-card)',
                        boxShadow: isActive ? '0 0 8px var(--accent)' : 'none',
                        opacity: isActive ? 1 : distFromActive <= 1 ? 0.7 : 0.4,
                      }}
                      aria-label={`Ir a reseña ${i + 1}`}
                    />
                  )
                })}

                {/* Trailing ellipsis if there are hidden dots after */}
                {visibleDots[visibleDots.length - 1] < reviews.length - 1 && (
                  <span
                    className="mx-1 text-xs tracking-widest"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    ···
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all hover:scale-110"
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
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
