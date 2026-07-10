import { useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { BLOG_POSTS } from '../data/site'
import { SEO } from '../components/SEO'

export function ArticlesPage() {
  const navigate = useNavigate()
  const goHome = () => navigate('/')
  const goKyc = () => navigate('/#reserva')

  const articlesSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Biblioteca de Psicoeducación y Salud Sexual',
    'description': 'Biblioteca con artículos clínicos de psicoeducación sobre sexualidad, relaciones y terapia de pareja.'
  }), [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
      <SEO
        title="Biblioteca de Psicoeducación y Salud Sexual | Ps. Andrei Andrusco"
        description="Recursos y artículos clínicos sobre sexualidad masculina, disfunción eréctil, eyaculación precoz, desmitificación de la pornografía y comunicación de pareja."
        keywords="psicoeducación sexual, salud sexual digital, blog de sexología, educación sexual masculina"
        jsonLd={articlesSchema}
      />
      <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />
      
      {/* Header Section */}
      <header className="mx-auto max-w-6xl px-6 pt-40 pb-20 text-center">
        <div className="mb-6 inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-text)', border: '1px solid var(--border-accent)' }}>
          Psicoeducación y Salud Sexual
        </div>
        <h1 className="text-5xl md:text-7xl mb-8" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>
          Biblioteca de <span style={{ color: 'var(--accent)' }}>Recursos</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
              className="group relative flex flex-col border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)',
                borderRadius: 'var(--radius-card-lg)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden" style={{ borderTopLeftRadius: 'calc(var(--radius-card-lg) - 1px)', borderTopRightRadius: 'calc(var(--radius-card-lg) - 1px)' }}>
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    style={{ objectPosition: '50% 40%' }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-800">
                    <span className="text-4xl font-black opacity-10 text-white italic">Andi</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>
                  <span className="flex items-center gap-1.5"><Tag size={14} /> {post.category}</span>
                  <span className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}><Calendar size={14} /> {post.date}</span>
                </div>
                
                <h3 className="mb-4 text-2xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', color: 'var(--text-primary)' }}>
                  {post.title}
                </h3>
                
                <p className="mb-8 line-clamp-3 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {post.content}
                </p>

                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all group-hover:gap-4" style={{ color: 'var(--accent)' }}>
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
