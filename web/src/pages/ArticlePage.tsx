import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { getArticleDataBySlug } from '../data/site'
import { NotFoundPage } from './NotFoundPage'
import { ElasticBorderCard } from '../components/ElasticBorderCard'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const data = slug ? getArticleDataBySlug(slug) : undefined

  if (!data) return <NotFoundPage />

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

      {/* Hero Section */}
      <header className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div
              className="mb-4 inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent-text)',
                border: '1px solid var(--border-accent)',
              }}
            >
              {data.heroEyebrow}
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl leading-[1.14] mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as any,
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              {data.heroTitle.trim()}
              <br />
              <span
                className="font-editorial-accent"
                style={{
                  color: 'var(--accent)',
                  textShadow: 'var(--shadow-accent-lg)',
                }}
              >
                {data.heroAccent}
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl leading-relaxed max-w-prose mb-10"
              style={{ color: 'var(--text-secondary)' }}
            >
              {data.heroSummary}
            </p>

            <button
              onClick={() =>
                document
                  .getElementById('contenido')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-xl cursor-pointer"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                borderRadius: 'var(--radius-btn)',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              Explorar el artículo
            </button>
          </div>

          <div className="relative hidden lg:flex justify-end">
            <ElasticBorderCard
              className="group w-full aspect-[16/9]"
              cornerRadius={28}
              maxPull={20}
              borderWidth={2}
              restingStrokeOpacity={0.95}
              backgroundColor="var(--bg-card-solid)"
              boxShadow="var(--shadow-photo-frame, 0 24px 60px -12px rgba(255, 77, 77, 0.35))"
            >
              {data.heroImage ? (
                <>
                  <img
                    src={data.heroImage}
                    alt={data.heroTitle}
                    width={1280}
                    height={720}
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-accent to-transparent" />
                  <div
                    className="relative z-10 flex h-full items-center justify-center text-9xl opacity-20 select-none font-black"
                    style={{ color: 'var(--accent)' }}
                  >
                    {data.heroTitle.charAt(0)}
                  </div>
                </>
              )}
            </ElasticBorderCard>
          </div>
        </div>
      </header>

      <hr className="theme-divider mx-auto max-w-4xl" />

      {/* Article Content */}
      <article
        id="contenido"
        className="editorial-prose mx-auto max-w-3xl px-6 py-20"
      >
        <div className="mb-20">
          <p
            className="font-bold uppercase tracking-widest text-sm mb-4"
            style={{ color: 'var(--accent-text)' }}
          >
            {data.introKicker}
          </p>
          {data.introTitle && (
            <h2
              className="text-3xl md:text-5xl mb-8 leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as any,
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              {data.introTitle}
            </h2>
          )}

          {data.introQuote && (
            <blockquote className="editorial-blockquote mb-10">
              &ldquo;{data.introQuote}&rdquo;
            </blockquote>
          )}

          <p
            className="max-w-prose text-lg md:text-xl leading-[1.82]"
            style={{ color: 'var(--text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: data.introParagraph }}
          />
        </div>

        {data.sections.map((section, idx) => (
          <div key={idx} className="mb-16">
            {idx > 0 && <hr className="theme-divider mb-16" />}

            {section.title && (
              <h2
                className="text-2xl md:text-3xl mb-8"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--heading-weight)',
                  textTransform: 'var(--heading-transform)' as any,
                  letterSpacing: 'var(--heading-spacing)',
                }}
                dangerouslySetInnerHTML={{ __html: section.title || '' }}
              />
            )}

            <div
              className="space-y-6 max-w-prose text-lg leading-[1.82]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            {section.lists?.map((list, lIdx) => (
              <div key={lIdx} className="mt-8 clinical-callout max-w-prose">
                {list.title && (
                  <h4
                    className="text-xl font-bold mb-4"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {list.title}
                  </h4>
                )}
                <ul className="space-y-4">
                  {list.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="flex gap-3.5 items-start leading-[1.78]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <ChevronRight
                        size={20}
                        className="mt-1 shrink-0"
                        style={{ color: 'var(--accent)' }}
                      />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {section.images?.map((img, iIdx) => (
              <figure key={iIdx} className="my-12 max-w-prose">
                <ElasticBorderCard
                  className="group w-full"
                  cornerRadius={24}
                  maxPull={20}
                  borderWidth={1.5}
                  restingStrokeOpacity={0.65}
                  backgroundColor="var(--bg-card)"
                >
                  <img
                    src={img.url}
                    alt={img.caption || ''}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </ElasticBorderCard>
                {img.caption && (
                  <figcaption
                    className="mt-4 text-center text-sm italic"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}

            {section.clinicalNote && (
              <aside
                className="clinical-callout mt-12 max-w-prose"
                style={{
                  borderLeft: '5px solid var(--accent)',
                }}
              >
                <div
                  className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest"
                  style={{
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent-text)',
                  }}
                >
                  {section.clinicalNote.title}
                </div>
                <p
                  className="leading-[1.8] text-lg"
                  style={{ color: 'var(--text-primary)' }}
                  dangerouslySetInnerHTML={{
                    __html: section.clinicalNote.content,
                  }}
                />
              </aside>
            )}
          </div>
        ))}

        {data.boxedReflection && (
          <blockquote className="editorial-blockquote my-16 p-8 md:p-10">
            <h3
              className="text-xl md:text-2xl font-black not-italic mb-4"
              style={{ color: 'var(--accent-text)' }}
            >
              {data.boxedReflection.title}
            </h3>
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{ color: 'var(--text-primary)' }}
              dangerouslySetInnerHTML={{ __html: data.boxedReflection.content }}
            />
          </blockquote>
        )}

        {data.closingMessage && (
          <div
            className="mb-20 text-xl leading-relaxed italic text-center max-w-prose mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {data.closingMessage}
          </div>
        )}

        {/* References */}
        <div className="mb-20 max-w-prose">
          <details
            className="bullet-reveal-card group clinical-callout p-0 overflow-hidden"
          >
            <summary
              className="flex items-center justify-between p-6 cursor-pointer list-none font-bold uppercase tracking-widest text-sm"
              style={{ color: 'var(--text-primary)' }}
            >
              <span className="bullet-reveal-title">
                <span className="bullet-reveal-dot" aria-hidden />
                <span className="bullet-reveal-text">
                  Referencias Bibliográficas
                </span>
              </span>
              <ChevronRight
                size={20}
                className="bullet-reveal-chevron shrink-0"
                style={{ color: 'var(--accent)' }}
              />
            </summary>
            <div
              className="p-6 pt-4 border-t"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <ul
                className="space-y-3 text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {data.references.map((ref, rIdx) => (
                  <li
                    key={rIdx}
                    dangerouslySetInnerHTML={{ __html: ref }}
                    className="hover:text-[var(--accent-text)] transition-colors"
                  />
                ))}
              </ul>
            </div>
          </details>
        </div>

        {/* CTA */}
        <section
          className="text-center p-10 md:p-12 border relative overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-card-solid)',
            borderColor: 'var(--accent)',
            borderWidth: '1.5px',
            borderRadius: 'var(--radius-card-lg)',
            boxShadow:
              '0 20px 55px -12px rgba(255, 77, 77, 0.28), 0 8px 30px -6px rgba(0, 0, 0, 0.45)',
          }}
        >
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-accent to-transparent" />
          <div className="relative z-10">
            <h3
              className="text-3xl md:text-4xl mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as any,
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              {data.ctaTitle}
            </h3>
            <p
              className="text-lg mb-10 max-w-xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              {data.ctaSummary}
            </p>
            <Link
              to="/#reserva"
              className="px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 inline-flex items-center gap-3 mx-auto shadow-lg"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                borderRadius: 'var(--radius-btn)',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              {data.ctaLabel} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </article>

      <SiteFooter />
    </div>
  )
}
