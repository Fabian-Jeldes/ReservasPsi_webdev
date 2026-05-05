import { useParams, useNavigate } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { getArticleDataBySlug } from '../data/site'
import { useEffect } from 'react'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const data = slug ? getArticleDataBySlug(slug) : undefined

  useEffect(() => {
    if (slug && !data) {
      navigate('/articulos', { replace: true })
    }
  }, [slug, data, navigate])

  if (!data) return null

  const goHome = () => navigate('/')
  const goKyc = () => navigate('/#reserva')

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
      <Navbar onLogoClick={goHome} onAgendarClick={goKyc} />

      {/* Hero Section */}
      <header className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="mb-4 inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-text)', border: '1px solid var(--border-accent)' }}>
              {data.heroEyebrow}
            </div>
            <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>
              {data.heroTitle.split(' ').slice(0, -1).join(' ')}<br />
              <span style={{ color: 'var(--accent)', textShadow: 'var(--shadow-accent-lg)' }}>
                {data.heroAccent}
              </span>
            </h1>

            <p className="text-4xl leading-relaxed max-w-lg mb-10" style={{ color: 'var(--text-primary)' }}>
              {data.heroSummary}
            </p>

            <button
              onClick={() => document.getElementById('contenido')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-xl"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-btn)' }}
            >
              Explorar el artículo
            </button>
          </div>

          <div className="relative hidden lg:flex justify-end">
            <div
              className="w-full aspect-[16/9] relative overflow-hidden border"
              style={{ backgroundColor: 'var(--bg-card-solid)', borderColor: 'var(--border-accent)', borderRadius: 'var(--radius-card-lg)' }}
            >
              {data.heroImage ? (
                <>
                  <img
                    src={data.heroImage}
                    alt={data.heroTitle}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-accent to-transparent" />
                  <div className="relative z-10 flex h-full items-center justify-center text-9xl opacity-20 select-none font-black" style={{ color: 'var(--accent)' }}>
                    {data.heroTitle.charAt(0)}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article id="contenido" className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-20">
          <p className="font-bold uppercase tracking-widest text-sm mb-4" style={{ color: 'var(--accent-text)' }}>{data.introKicker}</p>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>
            {data.introTitle}
          </h2>

          {data.introQuote && (
            <blockquote className="text-2xl font-medium italic border-l-4 pl-6 mb-12" style={{ color: 'var(--text-muted)', borderColor: 'var(--accent)' }}>
              "{data.introQuote}"
            </blockquote>
          )}

          <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: data.introParagraph }} />
        </div>

        {data.sections.map((section, idx) => (
          <div key={idx} className="mb-16">
            {idx > 0 && <hr className="theme-divider mb-16" />}

            {section.title && (
              <h3 
                className="text-3xl mb-8" 
                style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 'var(--heading-weight)', 
                  textTransform: 'var(--heading-transform)' as any, 
                  letterSpacing: 'var(--heading-spacing)' 
                }}
                dangerouslySetInnerHTML={{ __html: section.title || '' }}
              />
            )}

            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            {section.lists?.map((list, lIdx) => (
              <div key={lIdx} className="mt-8">
                {list.title && <h4 className="text-xl font-bold mb-4">{list.title}</h4>}
                <ul className="space-y-4">
                  {list.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex gap-4 items-start">
                      <ChevronRight size={20} className="mt-1 shrink-0" style={{ color: 'var(--accent)' }} />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {section.images?.map((img, iIdx) => (
              <figure key={iIdx} className="my-12">
                <div className="overflow-hidden border border-white/10" style={{ borderRadius: 'var(--radius-card)' }}>
                  <img src={img.url} alt={img.caption || ''} className="w-full h-auto grayscale transition-all duration-700 hover:grayscale-0" />
                </div>
                {img.caption && <figcaption className="mt-4 text-center text-sm italic text-muted">{img.caption}</figcaption>}
              </figure>
            ))}

            {section.clinicalNote && (
              <aside className="mt-12 p-8 border-l-4" style={{ backgroundColor: 'var(--accent-soft)', borderColor: 'var(--accent)', borderTopRightRadius: 'var(--radius-card)', borderBottomRightRadius: 'var(--radius-card)' }}>
                <h4 className="font-black uppercase tracking-widest mb-3 text-sm" style={{ color: 'var(--accent-text)' }}>
                  {section.clinicalNote.title}
                </h4>
                <p className="leading-relaxed text-lg" style={{ color: 'var(--text-primary)' }} dangerouslySetInnerHTML={{ __html: section.clinicalNote.content }} />
              </aside>
            )}
          </div>
        ))}

        {data.boxedReflection && (
          <div className="my-20 p-12 text-center border-y bg-card/10" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-section-alt)', borderRadius: 'var(--radius-card-lg)' }}>
            <h3 className="text-2xl font-black italic mb-6" style={{ color: 'var(--accent-text)' }}>
              {data.boxedReflection.title}
            </h3>
            <p className="text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: data.boxedReflection.content }} />
          </div>
        )}

        {data.closingMessage && (
          <div className="mb-20 text-xl leading-relaxed italic text-center max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {data.closingMessage}
          </div>
        )}

        {/* References */}
        <div className="mb-20">
          <details className="group border rounded-2xl" style={{ borderColor: 'var(--border-primary)' }}>
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold uppercase tracking-widest text-sm" style={{ color: 'var(--text-primary)' }}>
              <span>Referencias Bibliográficas</span>
              <ChevronRight size={20} className="transition-transform group-open:rotate-90" />
            </summary>
            <div className="p-6 pt-0 border-t" style={{ borderColor: 'var(--border-primary)' }}>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                {data.references.map((ref, rIdx) => (
                  <li key={rIdx}>{ref}</li>
                ))}
              </ul>
            </div>
          </details>
        </div>

        {/* CTA */}
        <section className="text-center p-12 border shadow-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--bg-card-solid)', borderColor: 'var(--border-card)', borderRadius: 'var(--radius-card-lg)' }}>
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-accent to-transparent" />
          <div className="relative z-10">
            <h3 className="text-4xl mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}>
              {data.ctaTitle}
            </h3>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              {data.ctaSummary}
            </p>
            <button
              onClick={goKyc}
              className="px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 flex items-center gap-3 mx-auto shadow-lg"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-btn)' }}
            >
              {data.ctaLabel} <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </article>

      <SiteFooter />
    </div>
  )
}
