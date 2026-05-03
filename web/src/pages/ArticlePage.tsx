import { Link, useNavigate, useParams } from 'react-router-dom'
import { getArticlePageBySlug, getBlogPostBySlug } from '../data/site'
import { Navbar } from '../components/Navbar'
import { ArticleContent } from '../components/ArticleContent'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = slug ? getBlogPostBySlug(slug) : undefined
  const article = slug ? getArticlePageBySlug(slug) : undefined

  const goHome = () => {
    navigate('/')
  }

  const goKyc = () => {
    navigate('/#consentimiento')
  }

  if (!post || !article) {
    return (
      <div className="min-h-screen bg-[#0a0f1d] font-sans text-slate-200">
        <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />
        <div className="mx-auto max-w-2xl px-6 py-32 text-center">
          <h1 className="text-2xl font-bold text-white">Artículo no encontrado</h1>
          <p className="mt-4 text-slate-400">El enlace puede estar desactualizado.</p>
          <Link
            to="/#blog"
            className="mt-8 inline-block font-bold text-rose-500 hover:text-rose-400"
          >
            ← Volver a psicoeducación
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0f1d] font-sans text-slate-200 selection:bg-rose-500/30">
      <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-28">
        <Link
          to="/#blog"
          className="mb-10 inline-flex text-sm font-bold text-rose-500 hover:text-rose-400"
        >
          ← Volver a psicoeducación
        </Link>
        <div className="rounded-[2.5rem] border border-slate-800 bg-slate-900/40 p-8 md:p-12">
          <ArticleContent post={post} article={article} onCtaClick={goKyc} />
        </div>
      </article>
    </div>
  )
}
