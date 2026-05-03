import type { ArticlePageData, BlogPost } from '../types/site'
import { PROFILE_IMAGE_URL } from '../data/site'

type Props = {
  post: BlogPost
  article: ArticlePageData
  onCtaClick: () => void
}

export function ArticleContent({ post, article, onCtaClick }: Props) {
  return (
    <div style={{ gap: 'var(--article-section-gap)' }} className="flex flex-col">
      {/* ── Intro section ── */}
      <section>
        <p
          className="text-xs font-bold uppercase"
          style={{
            color: 'var(--accent)',
            letterSpacing: '0.2em',
          }}
        >
          {article.introKicker}
        </p>
        <h2
          className="mt-4 leading-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            letterSpacing: 'var(--heading-spacing)',
            color: 'var(--text-primary)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}
        >
          {article.introTitle}
        </h2>

        <blockquote
          className="mt-8 border-l-[3px] pl-6 italic"
          style={{
            borderColor: 'var(--accent)',
            color: 'var(--text-primary)',
            fontSize: 'var(--article-quote-size)',
            lineHeight: 1.6,
          }}
        >
          {article.introQuote}
        </blockquote>

        <p
          className="mt-8 leading-relaxed"
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--article-body-size)',
          }}
        >
          {article.introParagraph}
        </p>
      </section>

      {/* Divider */}
      <hr className="theme-divider" />

      {/* ── Content sections ── */}
      {article.sections.map((section, idx) => (
        <section key={section.title}>
          <h3
            className="leading-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              letterSpacing: 'var(--heading-spacing)',
              color: 'var(--text-primary)',
              fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
            }}
          >
            {section.title}
          </h3>

          <div className="mt-6 space-y-5">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--article-body-size)',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Clinical note — inline aside, not a separate card */}
          {section.clinicalNote ? (
            <aside
              className="mt-8 border-l-[3px] pl-6 py-4"
              style={{
                borderColor: 'var(--accent)',
                backgroundColor: 'var(--accent-soft)',
                borderRadius: '0 var(--radius-input) var(--radius-input) 0',
                padding: '1.5rem 1.5rem 1.5rem 1.5rem',
                marginLeft: '-0.5rem',
              }}
            >
              <p
                className="text-xs font-black uppercase"
                style={{
                  color: 'var(--accent-text)',
                  letterSpacing: '0.12em',
                }}
              >
                {section.clinicalNote.title}
              </p>
              <p
                className="mt-3 leading-relaxed"
                style={{
                  color: 'var(--text-primary)',
                  fontSize: 'var(--article-body-size)',
                }}
              >
                {section.clinicalNote.content}
              </p>
            </aside>
          ) : null}

          {/* Divider between sections */}
          {idx < article.sections.length - 1 && (
            <hr className="theme-divider mt-12" />
          )}
        </section>
      ))}

      {/* ── Boxed reflection — pull-quote style ── */}
      {article.boxedReflection ? (
        <>
          <hr className="theme-divider" />
          <section
            className="py-8 text-center"
            style={{
              borderTop: 'none',
            }}
          >
            <h3
              className="italic leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                color: 'var(--accent)',
                fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
              }}
            >
              {article.boxedReflection.title}
            </h3>
            <p
              className="mx-auto mt-6 max-w-lg leading-relaxed"
              style={{
                color: 'var(--text-primary)',
                fontSize: 'var(--article-quote-size)',
              }}
            >
              {article.boxedReflection.content}
            </p>
          </section>
        </>
      ) : null}

      {/* ── Closing message ── */}
      <hr className="theme-divider" />
      <section>
        <p
          className="leading-relaxed"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            color: 'var(--text-primary)',
            fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
          }}
        >
          {article.closingMessage}
        </p>
      </section>

      {/* ── CTA — accent background section ── */}
      <section
        className="px-8 py-12 text-center md:px-12"
        style={{
          borderRadius: 'var(--radius-card)',
          backgroundColor: 'var(--accent-soft)',
          border: `1px solid var(--border-accent)`,
        }}
      >
        <h3
          className="leading-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            color: 'var(--text-primary)',
            fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
          }}
        >
          {article.ctaTitle}
        </h3>
        <p
          className="mx-auto mt-6 max-w-xl leading-relaxed"
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--article-body-size)',
          }}
        >
          {article.ctaSummary}
        </p>
        <button
          type="button"
          onClick={onCtaClick}
          className="mt-8 px-8 py-4 font-bold uppercase tracking-wide transition-all hover:scale-105 active:scale-95"
          style={{
            borderRadius: 'var(--radius-btn)',
            backgroundColor: 'var(--accent)',
            color: 'var(--text-inverse)',
            boxShadow: 'var(--shadow-accent)',
            letterSpacing: 'var(--heading-spacing)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
        >
          {article.ctaLabel}
        </button>
      </section>

      {/* ── References — collapsible small text ── */}
      <details className="group">
        <summary
          className="cursor-pointer text-sm font-bold uppercase tracking-widest select-none"
          style={{ color: 'var(--accent)' }}
        >
          Referencias bibliográficas ▾
        </summary>
        <ul
          className="mt-4 space-y-3 text-sm leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {article.references.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
      </details>

      {/* ── Author footer ── */}
      <hr className="theme-divider" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={PROFILE_IMAGE_URL}
            className="h-12 w-12 rounded-full object-cover"
            style={{
              borderRadius: 'var(--radius-btn)',
              boxShadow: 'var(--shadow-card)',
            }}
            alt="Foto de Andi"
          />
          <div>
            <p
              className="font-bold"
              style={{ color: 'var(--text-primary)', fontSize: 'var(--body-size)' }}
            >
              Escrito por Andi
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Especialista en Salud Sexual
            </p>
          </div>
        </div>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {post.category} · {post.date}
        </p>
      </div>
    </div>
  )
}
