import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight } from 'lucide-react'
import type { BlogPost } from '../types/site'
import { ElasticBorderCard } from './ElasticBorderCard'

const psicoeducacionIconModules = import.meta.glob<string>(
  '../assets/*psicoeducacion*',
  {
    eager: true,
    import: 'default',
  }
)
const iconPsicoeducacionUrl =
  Object.values(psicoeducacionIconModules)[0] || '/assets/icon-psicoeducacion.png'

type Props = {
  posts: BlogPost[]
}

export function BlogSection({ posts }: Props) {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 pt-32 pb-32 lg:pb-44">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <img
              src={iconPsicoeducacionUrl}
              alt="Icono Psicoeducación y Bienestar"
              className="h-14 w-14 shrink-0 object-contain transition-transform duration-300 hover:scale-105"
            />
            <h2
              className="text-3xl md:text-4xl"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as any,
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
            Entender cómo funcionamos es el primer paso para disfrutar plenamente. Aquí encontrarás recursos clave para resolver dudas, derribar mitos y fortalecer tu salud sexual desde una mirada profesional.
          </p>
        </div>
        <Link
          to="/articulos"
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

      <div className="stagger-grid-blog grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => {
          // Logic to highlight one keyword per blog card
          const highlightMap: Record<number, string> = {
            1: 'rendimiento',
            2: 'ansiedad',
            3: 'Pornografía',
            4: 'Silencio',
          }
          const keyword = highlightMap[post.id]
          const titleParts = keyword
            ? post.title.split(new RegExp(`(${keyword})`, 'i'))
            : [post.title]

          return (
            <Link
              key={post.id}
              to={`/articulos/${post.slug}`}
              className="bullet-reveal-card group flex flex-col cursor-pointer border p-4 transition-all duration-500 hover:-translate-y-1.5"
              style={{
                borderRadius: 'var(--radius-card)',
                borderColor: 'color-mix(in srgb, var(--accent) 55%, transparent)',
                borderWidth: '1px',
                backgroundColor: 'var(--bg-card)',
                boxShadow:
                  '0 12px 35px -12px rgba(255, 77, 77, 0.16), var(--shadow-card)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow =
                  '0 18px 45px -10px rgba(255, 77, 77, 0.32), 0 0 20px rgba(255, 77, 77, 0.18)'
              }}
              onMouseLeave={(e) => {
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
                restingStrokeOpacity={0.6}
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
                <div className="absolute bottom-6 left-5 right-5 z-10">
                  <div
                    className="mb-2.5 inline-block rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-lg"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: '#ffffff',
                    }}
                  >
                    {post.category}
                  </div>
                  <h4
                    className="bullet-reveal-title text-lg md:text-xl font-bold leading-snug transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span className="bullet-reveal-dot" aria-hidden />
                    <span className="bullet-reveal-text">
                      {keyword && titleParts.length > 1 ? (
                        <>
                          {titleParts.map((part, i) =>
                            part.toLowerCase() === keyword.toLowerCase() ? (
                              <span key={i} style={{ color: 'var(--accent)' }}>
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                        </>
                      ) : (
                        post.title
                      )}
                    </span>
                  </h4>
                </div>
              </ElasticBorderCard>

              {/* Resumen descriptivo con alto contraste */}
              <p
                className="mb-4 px-2 text-sm leading-relaxed line-clamp-2 flex-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                {post.content}
              </p>

              <div
                className="flex items-center justify-between px-2 pt-3 border-t text-xs font-semibold"
                style={{
                  color: 'var(--text-secondary)',
                  borderColor: 'var(--border-primary)',
                }}
              >
                <span>{post.date}</span>
                <span
                  className="flex items-center gap-1 font-bold transition-transform group-hover:translate-x-1"
                  style={{ color: 'var(--accent-text)' }}
                >
                  Lectura 5 min <ChevronRight size={13} aria-hidden />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
