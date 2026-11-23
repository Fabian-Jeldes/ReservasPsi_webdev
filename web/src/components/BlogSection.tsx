import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight, Pin, Play } from 'lucide-react'
import type { MouseEvent } from 'react'
import type { BlogPost } from '../types/site'
import { ElasticBorderCard } from './ElasticBorderCard'
import { prefetchRoute } from '../lib/route-loaders'

const psicoeducacionIconModules = import.meta.glob<string>(
  '../assets/*psicoeducacion*',
  {
    eager: true,
    import: 'default',
  },
)
const iconPsicoeducacionUrl =
  Object.values(psicoeducacionIconModules)[0] || '/assets/icon-psicoeducacion.png'

const HIGHLIGHT_MAP: Record<number, string> = {
  1: 'rendimiento',
  2: 'ansiedad',
  3: 'Pornografía',
  4: 'Silencio',
}

type Props = {
  posts: BlogPost[]
}

export function BlogSection({ posts }: Props) {
  const [pinnedCardKey, setPinnedCardKey] = useState<string | null>(null)
  const isPaused = pinnedCardKey !== null

  useEffect(() => {
    if (!pinnedCardKey) return

    const handleDocumentClick = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target?.closest('[data-blog-card="true"]')) {
        setPinnedCardKey(null)
      }
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPinnedCardKey(null)
      }
    }

    document.addEventListener('click', handleDocumentClick)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [pinnedCardKey])

  const handleCardClick = (
    event: MouseEvent<HTMLAnchorElement>,
    cardKey: string,
  ) => {
    // Paso 1: Si no está fijada (o hay otra fijada), pausar carrusel y fijar esta tarjeta
    if (pinnedCardKey !== cardKey) {
      event.preventDefault()
      event.stopPropagation()
      setPinnedCardKey(cardKey)
      return
    }
    // Paso 2: Si ya estaba fijada, permitir la navegación normal de React Router hacia el artículo
    setPinnedCardKey(null)
  }

  return (
    <section id="blog" className="mx-auto max-w-6xl scroll-mt-16 px-6 pt-32 pb-32 md:scroll-mt-20 lg:pb-44">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <img
              src={iconPsicoeducacionUrl}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-14 w-14 shrink-0 object-contain transition-transform duration-300 hover:scale-105"
            />
            <h2
              className="text-3xl md:text-4xl"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as
                  | 'none'
                  | 'uppercase',
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              <span
                className="font-editorial-accent"
                style={{ color: 'var(--accent)' }}
              >
                Psicoeducación
              </span>{' '}
              y{' '}
              <span
                className="font-editorial-accent"
                style={{ color: 'var(--accent)' }}
              >
                Bienestar
              </span>
              :
            </h2>
          </div>
          <p
            className="max-w-2xl text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Entender cómo funcionamos es el primer paso para disfrutar
            plenamente. Aquí encontrarás recursos clave para resolver dudas,
            derribar mitos y fortalecer tu salud sexual desde una mirada
            profesional.
          </p>
        </div>
        <Link
          to="/articulos"
          onMouseEnter={() => prefetchRoute('/articulos')}
          onFocus={() => prefetchRoute('/articulos')}
          className="hidden items-center gap-2 rounded-full px-6 py-3 font-bold transition-all hover:scale-105 active:scale-95 md:flex"
          style={{
            backgroundColor: 'var(--accent)',
            color: '#ffffff',
            boxShadow: 'var(--shadow-accent)',
            borderRadius: 'var(--radius-btn)',
          }}
        >
          Explorar Biblioteca <ChevronRight size={18} aria-hidden />
        </Link>
      </div>

      {/* Carrusel continuo infinito hacia la izquierda con pausa y fijación al primer clic */}
      <div className="blog-marquee-viewport">
        <div className={`blog-marquee-track ${isPaused ? 'is-paused' : ''}`}>
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              aria-hidden={copyIndex === 1}
              className={`flex shrink-0 items-stretch gap-6 pr-6 lg:gap-8 lg:pr-8 ${
                copyIndex === 0
                  ? 'blog-marquee-group-primary'
                  : 'blog-marquee-group-duplicate'
              }`}
            >
              {posts.map((post) => {
                const cardKey = `${copyIndex}-${post.id}`
                const isPinned = pinnedCardKey === cardKey
                const keyword = HIGHLIGHT_MAP[post.id]
                const titleParts = keyword
                  ? post.title.split(new RegExp(`(${keyword})`, 'i'))
                  : [post.title]

                return (
                  <Link
                    key={cardKey}
                    to={`/articulos/${post.slug}`}
                    data-blog-card="true"
                    tabIndex={copyIndex === 1 ? -1 : undefined}
                    aria-pressed={isPinned}
                    onClick={(e) => handleCardClick(e, cardKey)}
                    className={`bullet-reveal-card group flex w-[272px] shrink-0 cursor-pointer flex-col border p-4 transition-all duration-500 hover:-translate-y-1.5 sm:w-[296px] lg:w-[288px] xl:w-[300px] ${
                      isPinned ? 'blog-card-pinned' : ''
                    }`}
                    style={{
                      borderRadius: 'var(--radius-card)',
                      borderColor: isPinned
                        ? '#FF6B5B'
                        : 'color-mix(in srgb, var(--accent) 55%, transparent)',
                      borderWidth: isPinned ? '1.5px' : '1px',
                      backgroundColor: 'var(--bg-card)',
                      boxShadow: isPinned
                        ? '0 20px 48px -10px rgba(255, 107, 91, 0.36), 0 0 22px rgba(255, 107, 91, 0.24)'
                        : '0 12px 35px -12px rgba(255, 77, 77, 0.16), var(--shadow-card)',
                    }}
                    onFocus={() => prefetchRoute(`/articulos/${post.slug}`)}
                    onMouseEnter={(e) => {
                      prefetchRoute(`/articulos/${post.slug}`)
                      if (isPinned) return
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.boxShadow =
                        '0 18px 45px -10px rgba(255, 77, 77, 0.32), 0 0 20px rgba(255, 77, 77, 0.18)'
                    }}
                    onMouseLeave={(e) => {
                      if (isPinned) return
                      e.currentTarget.style.borderColor =
                        'color-mix(in srgb, var(--accent) 55%, transparent)'
                      e.currentTarget.style.boxShadow =
                        '0 12px 35px -12px rgba(255, 77, 77, 0.16), var(--shadow-card)'
                    }}
                  >
                    <ElasticBorderCard
                      className="mb-5 aspect-[4/5] w-full"
                      cornerRadius={22}
                      maxPull={20}
                      borderWidth={1.5}
                      restingStrokeOpacity={isPinned ? 0.95 : 0.6}
                      backgroundColor="var(--bg-section-alt)"
                    >
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        {post.imageUrl ? (
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            width={1280}
                            height={768}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-90"
                          />
                        ) : (
                          <BookOpen
                            size={48}
                            className="transition-all duration-500 group-hover:scale-110"
                            style={{ color: 'var(--accent-soft)' }}
                            aria-hidden
                          />
                        )}
                      </div>
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(to top, rgba(10, 15, 29, 0.94) 10%, rgba(10, 15, 29, 0.45) 55%, transparent 100%)',
                        }}
                      />

                      {/* Indicador visual discreto cuando la tarjeta está fijada */}
                      {isPinned && (
                        <div
                          className="absolute top-3.5 right-3.5 z-20 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md"
                          style={{
                            backgroundColor: 'rgba(10, 15, 29, 0.82)',
                            borderColor: '#FF6B5B',
                            color: '#F7F3EB',
                          }}
                        >
                          <Pin
                            size={11}
                            style={{ color: '#FF6B5B' }}
                            aria-hidden
                          />
                          <span>Fijado · Abrir</span>
                        </div>
                      )}

                      <div className="absolute right-5 bottom-6 left-5 z-10">
                        <div
                          className="mb-2.5 inline-block rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-lg"
                          style={{
                            backgroundColor: 'var(--accent)',
                            color: '#ffffff',
                          }}
                        >
                          {post.category}
                        </div>
                        <h3
                          className="bullet-reveal-title text-lg font-bold leading-snug transition-colors md:text-xl"
                          style={{ color: '#F8FAFC' }}
                        >
                          <span className="bullet-reveal-dot" aria-hidden />
                          <span className="bullet-reveal-text">
                            {keyword && titleParts.length > 1 ? (
                              <>
                                {titleParts.map((part, i) =>
                                  part.toLowerCase() ===
                                  keyword.toLowerCase() ? (
                                    <span
                                      key={i}
                                      style={{ color: '#FF6B5B' }}
                                    >
                                      {part}
                                    </span>
                                  ) : (
                                    part
                                  ),
                                )}
                              </>
                            ) : (
                              post.title
                            )}
                          </span>
                        </h3>
                      </div>
                    </ElasticBorderCard>

                    {/* Resumen descriptivo con alto contraste */}
                    <p
                      className="mb-4 flex-1 line-clamp-2 px-2 text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {post.content}
                    </p>

                    <div
                      className="flex items-center justify-between border-t px-2 pt-3 text-xs font-semibold"
                      style={{
                        color: 'var(--text-secondary)',
                        borderColor: 'var(--border-primary)',
                      }}
                    >
                      <span>{post.date}</span>
                      <span
                        className="flex items-center gap-1 font-bold transition-transform group-hover:translate-x-1"
                        style={{
                          color: isPinned ? '#FF6B5B' : 'var(--accent-text)',
                        }}
                      >
                        {isPinned ? 'Ir al artículo' : 'Lectura 5 min'}{' '}
                        <ChevronRight size={13} aria-hidden />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Control discreto para reanudar cuando el usuario fijó una tarjeta */}
      <div className="mt-4 flex min-h-8 items-center justify-center">
        {isPaused && (
          <button
            type="button"
            onClick={() => setPinnedCardKey(null)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-200"
            style={{
              borderColor: 'var(--border-accent)',
              backgroundColor: 'var(--accent-soft)',
              color: 'var(--text-primary)',
            }}
          >
            <Play size={12} style={{ color: '#FF6B5B' }} aria-hidden />
            <span>Reanudar desplazamiento</span>
          </button>
        )}
      </div>
    </section>
  )
}
