import { Link, useNavigate, useParams } from 'react-router-dom'
import { getArticlePageBySlug, getBlogPostBySlug } from '../data/site'
import { Navbar } from '../components/Navbar'
import { ArticleContent } from '../components/ArticleContent'
import { SiteFooter } from '../components/SiteFooter'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = slug ? getBlogPostBySlug(slug) : undefined
  const article = slug ? getArticlePageBySlug(slug) : undefined

  const goHome = () => navigate('/')
  const goKyc = () => navigate('/#consentimiento')

  if (!post || !article) {
    return (
      <div
        className="min-h-screen"
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />
        <div className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1
            className="text-2xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Artículo no encontrado
          </h1>
          <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
            El enlace puede estar desactualizado.
          </p>
          <Link
            to="/#blog"
            className="mt-8 inline-block font-bold"
            style={{ color: 'var(--accent)' }}
          >
            ← Volver a psicoeducación
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--body-size)',
        lineHeight: 'var(--body-line-height)',
      }}
    >
      <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />

      {/* Hero — full width, no card wrapper */}
      <header
        className="relative overflow-hidden px-6 pb-16 pt-28"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full blur-[120px] opacity-40"
          style={{ backgroundColor: 'var(--accent-glow)' }}
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full blur-[100px] opacity-20"
          style={{ backgroundColor: 'var(--accent)' }}
        />
        <div className="relative mx-auto" style={{ maxWidth: 'var(--article-max-width)' }}>
          <Link
            to="/#blog"
            className="mb-8 inline-flex items-center gap-1 text-sm font-bold transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent-text)' }}
          >
            ← Volver a psicoeducación
          </Link>
          <span
            className="mb-4 block text-xs font-bold uppercase"
            style={{
              color: 'var(--accent-text)',
              letterSpacing: 'var(--heading-spacing, 0.2em)',
            }}
          >
            {article.heroEyebrow}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              textTransform: 'var(--heading-transform)' as any,
              letterSpacing: 'var(--heading-spacing)',
              fontSize: 'var(--article-heading-size)',
              lineHeight: 1,
              color: 'var(--text-primary)',
            }}
          >
            {article.heroTitle}{' '}
            <span
              style={{
                color: 'var(--accent)',
                textShadow: `0 0 40px var(--accent-glow)`,
              }}
            >
              {article.heroAccent}
            </span>
          </h1>
          <p
            className="mt-8 text-lg leading-relaxed"
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '36rem',
              fontSize: 'var(--article-body-size)',
            }}
          >
            {article.heroSummary}
          </p>
        </div>
        {/* Bottom fade into bg-primary */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: `linear-gradient(to bottom, transparent, var(--bg-primary))`,
          }}
        />
      </header>

      {/* Article body — fluid editorial content */}
      <article
        className="mx-auto px-6"
        style={{
          maxWidth: 'var(--article-max-width)',
          paddingTop: 'var(--article-section-gap)',
          paddingBottom: 'var(--article-section-gap)',
        }}
      >
        <ArticleContent post={post} article={article} onCtaClick={goKyc} />
      </article>

      <SiteFooter />
    </div>
  )
}
