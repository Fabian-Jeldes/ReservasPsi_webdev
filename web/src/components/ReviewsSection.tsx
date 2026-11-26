import { useState, useEffect, useMemo, useRef } from 'react'
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
  const [manualSelection, setManualSelection] = useState<{
    parentIndex: number
    index: number
  } | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== undefined) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const activeIndex =
    manualSelection && manualSelection.parentIndex === currentIndex
      ? manualSelection.index
      : currentIndex

  const totalReviews = reviews.length

  // Windowed dots: show at most MAX_VISIBLE_DOTS centered on activeIndex
  const visibleDots = useMemo(() => {
    if (totalReviews <= MAX_VISIBLE_DOTS) {
      const all: number[] = []
      for (let i = 0; i < totalReviews; i++) all.push(i)
      return all
    }
    const half = Math.floor(MAX_VISIBLE_DOTS / 2)
    let start = activeIndex - half
    let end = activeIndex + half

    if (start < 0) {
      start = 0
      end = MAX_VISIBLE_DOTS - 1
    } else if (end >= totalReviews) {
      end = totalReviews - 1
      start = totalReviews - MAX_VISIBLE_DOTS
    }

    const indices: number[] = []
    for (let i = start; i <= end; i++) indices.push(i)
    return indices
  }, [activeIndex, totalReviews])

  const current = reviews[activeIndex]
  if (!current) return null

  const goTo = (idx: number, dir: 'left' | 'right') => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)

    if (timeoutRef.current !== undefined) {
      window.clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(() => {
      setManualSelection({ parentIndex: currentIndex, index: idx })
      setIsAnimating(false)
      timeoutRef.current = undefined
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

  return (
    <section
      id="reviews"
      className="relative z-10 w-full scroll-mt-16 overflow-x-clip py-12 md:scroll-mt-20 md:py-16"
      style={{
        background: 'var(--reviews-band-bg)',
        color: 'var(--reviews-ink)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reviews-editorial-card relative overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem]">
          {/* Inner content — padded so nothing overflows */}
          <div className="p-8 md:p-12 lg:p-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16">
              {/* Left column: title */}
              <div className="shrink-0 text-center md:text-left">
                <div
                  className="mb-4 flex justify-center gap-1.5 md:justify-start"
                  aria-hidden="true"
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-6 w-1.5 animate-pulse rounded-full"
                      style={{
                        backgroundColor: 'var(--reviews-accent)',
                        animationDelay: `${i * 150}ms`,
                      }}
                    />
                  ))}
                </div>
                <h2
                  className="font-editorial text-3xl leading-tight sm:text-4xl"
                  style={{
                    color: 'var(--reviews-ink)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Lo que dicen <br />
                  mis{' '}
                  <span
                    className="font-editorial-accent"
                    style={{ color: 'var(--reviews-accent)' }}
                  >
                    pacientes
                  </span>
                </h2>
              </div>

              {/* Right column: review text */}
              <div className="relative min-w-0 flex-1" aria-live="polite">
                <div
                  className="min-h-[140px]"
                  style={{
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    opacity: isAnimating ? 0 : fade ? 1 : 0,
                    transform: isAnimating
                      ? `translateX(${direction === 'right' ? '20px' : '-20px'})`
                      : fade
                        ? 'translateX(0)'
                        : `translateX(${direction === 'right' ? '20px' : '-20px'})`,
                  }}
                >
                  <div className="relative">
                    <p
                      className="font-editorial relative z-10 text-lg leading-relaxed md:text-xl"
                      style={{
                        color: 'var(--reviews-ink-body)',
                        fontWeight: 500,
                      }}
                    >
                      <span
                        className="mr-1 inline-block align-top text-3xl font-bold not-italic leading-none"
                        style={{ color: 'var(--reviews-accent)' }}
                      >
                        &ldquo;
                      </span>
                      {current.content}
                      <span
                        className="ml-1 inline-block align-bottom text-3xl font-bold not-italic leading-none"
                        style={{ color: 'var(--reviews-accent)' }}
                      >
                        &rdquo;
                      </span>
                    </p>
                    <p
                      className="mt-5 text-sm font-semibold tracking-wide sm:text-base"
                      style={{ color: 'var(--reviews-ink-muted)' }}
                    >
                      — {current.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation: arrows + windowed dots — all inside the card */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                className="reviews-nav-btn flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full"
                aria-label="Reseña anterior"
              >
                <ChevronLeft size={16} aria-hidden="true" />
              </button>

              {/* Windowed dot indicators */}
              <div className="flex items-center gap-2">
                {/* Leading ellipsis if there are hidden dots before */}
                {visibleDots[0] > 0 && (
                  <span
                    className="mx-1 text-xs tracking-widest"
                    style={{ color: 'var(--reviews-ink-muted)' }}
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
                      type="button"
                      onClick={() =>
                        goTo(i, i > activeIndex ? 'right' : 'left')
                      }
                      className={`${dotSize} cursor-pointer rounded-full border-0 p-0 transition-all duration-300`}
                      style={{
                        backgroundColor: isActive
                          ? 'var(--reviews-accent)'
                          : 'var(--reviews-dot-inactive)',
                        boxShadow: isActive
                          ? '0 0 8px rgba(238, 75, 53, 0.45)'
                          : 'none',
                        opacity: isActive ? 1 : distFromActive <= 1 ? 0.85 : 0.55,
                      }}
                      aria-label={`Ir a reseña ${i + 1}`}
                    />
                  )
                })}

                {/* Trailing ellipsis if there are hidden dots after */}
                {visibleDots[visibleDots.length - 1] < reviews.length - 1 && (
                  <span
                    className="mx-1 text-xs tracking-widest"
                    style={{ color: 'var(--reviews-ink-muted)' }}
                  >
                    ···
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="reviews-nav-btn flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full"
                aria-label="Siguiente reseña"
              >
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
