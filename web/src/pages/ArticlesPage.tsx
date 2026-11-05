import { useNavigate, Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { BLOG_POSTS } from '../data/site'

const psicoeducacionIconModules = import.meta.glob<string>(
  '../assets/*psicoeducacion*',
  {
    eager: true,
    import: 'default',
  }
)
const iconPsicoeducacionUrl =
  Object.values(psicoeducacionIconModules)[0] || '/assets/icon-psicoeducacion.png'

export function ArticlesPage() {
  const navigate = useNavigate()
  const goHome = () => navigate('/')
  const goKyc = () => navigate('/#reserva')

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />

      {/* Header Section */}
      <header className="mx-auto max-w-6xl px-6 pt-40 pb-20 text-center">
        <div className="mb-5 flex justify-center">
          <img
            src={iconPsicoeducacionUrl}
            alt="Icono Biblioteca de Recursos de Psicoeducación"
            className="h-16 w-16 shrink-0 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div
          className="mb-6 inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
          style={{
            backgroundColor: 'var(--accent-soft)',
            color: 'var(--accent-text)',
            border: '1px solid var(--border-accent)',
          }}
        >
          Psicoeducación y Salud Sexual
        </div>
        <h1
          className="text-5xl md:text-7xl mb-8"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            textTransform: 'var(--heading-transform)' as any,
            letterSpacing: 'var(--heading-spacing)',
          }}
        >
          Biblioteca de <span style={{ color: 'var(--accent)' }}>Recursos</span>
        </h1>
        <p
          className="text-xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Un espacio diseñado para explorar, entender y desmitificar la sexualidad humana. Aquí encontrarás artículos basados en evidencia clínica para fortalecer tu bienestar y el de tus vínculos.
        </p>
      </header>

      {/* Articles Grid */}
      <main className="mx-auto max-w-6xl px-6 pb-40">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              to={`/articulos/${post.slug}`}
              className="group relative flex flex-col border transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'color-mix(in srgb, var(--accent) 60%, transparent)',
                borderWidth: '1px',
                borderRadius: 'var(--radius-card-lg)',
                boxShadow:
                  '0 14px 40px -12px rgba(255, 77, 77, 0.18), var(--shadow-card)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow =
                  '0 20px 50px -10px rgba(255, 77, 77, 0.35), 0 0 22px rgba(255, 77, 77, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  'color-mix(in srgb, var(--accent) 60%, transparent)'
                e.currentTarget.style.boxShadow =
                  '0 14px 40px -12px rgba(255, 77, 77, 0.18), var(--shadow-card)'
              }}
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{
                  borderTopLeftRadius: 'calc(var(--radius-card-lg) - 1px)',
                  borderTopRightRadius: 'calc(var(--radius-card-lg) - 1px)',
                }}
              >
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    width={1280}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: '50% 40%' }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-800">
                    <span className="text-4xl font-black opacity-10 text-white italic">
                      Andi
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div
                  className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest"
                  style={{ color: 'var(--accent-text)' }}
                >
                  <span className="flex items-center gap-1.5">
                    <Tag size={14} /> {post.category}
                  </span>
                  <span
                    className="flex items-center gap-1.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <Calendar size={14} /> {post.date}
                  </span>
                </div>

                <h3
                  className="mb-4 text-2xl"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'var(--heading-weight)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="mb-8 line-clamp-3 flex-1 text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {post.content}
                </p>

                <div
                  className="flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all group-hover:gap-4"
                  style={{ color: 'var(--accent)' }}
                >
                  Leer artículo completo <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
