import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight } from 'lucide-react'
import type { BlogPost } from '../types/site'

type Props = {
  posts: BlogPost[]
}

export function BlogSection({ posts }: Props) {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 flex items-end justify-between">
        <div>
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
            Psicoeducación Sexual
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Herramientas y artículos para entender nuestra propia humanidad.
          </p>
        </div>
        <span
          className="hidden items-center gap-2 font-bold md:flex"
          style={{ color: 'var(--accent)' }}
        >
          Explorar Biblioteca <ChevronRight size={18} aria-hidden />
        </span>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/articulos/${post.slug}`}
            className="group block cursor-pointer border border-transparent p-4 transition-all duration-500"
            style={{
              borderRadius: 'var(--radius-card)',
              borderWidth: 'var(--card-border-width)',
              backgroundColor: 'var(--bg-card)',
              boxShadow: 'var(--shadow-card)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
          >
            <div
              className="relative mb-6 aspect-[4/5] overflow-hidden"
              style={{
                borderRadius: 'calc(var(--radius-card) - 0.5rem)',
                backgroundColor: 'var(--bg-section-alt)',
              }}
            >
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background: `linear-gradient(to top, var(--bg-primary), transparent)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {post.imageUrl ? (
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                  />
                ) : (
                  <BookOpen
                    size={48}
                    className="transition-all duration-700 group-hover:scale-110"
                    style={{ color: 'var(--accent-soft)' }}
                    aria-hidden
                  />
                )}
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="mb-2 inline-block rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-tighter shadow-lg"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--text-inverse)',
                  }}
                >
                  {post.category}
                </div>
                <h4
                  className="text-xl font-bold leading-tight transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {post.title}
                </h4>
              </div>
            </div>
            <div
              className="flex items-center justify-between px-2 text-xs font-medium italic"
              style={{ color: 'var(--text-muted)' }}
            >
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                Lectura 5 min <ChevronRight size={12} aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
