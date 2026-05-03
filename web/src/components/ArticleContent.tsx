import type { ArticlePageData, BlogPost } from '../types/site'
import { PROFILE_IMAGE_URL } from '../data/site'

type Props = {
  post: BlogPost
  article: ArticlePageData
  onCtaClick: () => void
}

export function ArticleContent({ post, article, onCtaClick }: Props) {
  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/70 bg-black p-8 md:p-12">
        <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-rose-600/20 blur-[90px]" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          {article.heroEyebrow}
        </span>
        <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl">
          {article.heroTitle}
          <span className="mt-2 block text-rose-500 [text-shadow:0_0_24px_rgba(244,63,94,0.4)]">
            {article.heroAccent}
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">{article.heroSummary}</p>
      </section>

      <section className="rounded-[2.25rem] border border-slate-800/70 bg-slate-950/50 p-8 md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">{article.introKicker}</p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
          {article.introTitle}
        </h2>
        <blockquote className="mt-8 border-l-2 border-rose-500 pl-6 text-2xl italic leading-relaxed text-slate-100">
          {article.introQuote}
        </blockquote>
        <p className="mt-8 text-xl leading-relaxed text-slate-300">{article.introParagraph}</p>
      </section>

      {article.sections.map((section) => (
        <section
          key={section.title}
          className="rounded-[2.25rem] border border-slate-800/70 bg-slate-950/45 p-8 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="text-3xl font-black italic leading-tight text-white md:text-4xl">
                {section.title}
              </h3>
              <div className="mt-6 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[1.15rem] leading-relaxed text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            {section.clinicalNote ? (
              <aside className="h-fit rounded-[1.5rem] border border-rose-500/20 bg-rose-950/20 p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-rose-400">
                  {section.clinicalNote.title}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-200">
                  {section.clinicalNote.content}
                </p>
              </aside>
            ) : null}
          </div>
        </section>
      ))}

      {article.boxedReflection ? (
        <section className="rounded-[2rem] border border-rose-500 bg-rose-950/15 p-8 md:p-10">
          <h3 className="text-right text-3xl font-black italic text-white md:text-4xl">
            {article.boxedReflection.title}
          </h3>
          <p className="mt-6 text-right text-2xl leading-relaxed text-slate-200">
            {article.boxedReflection.content}
          </p>
        </section>
      ) : null}

      <section className="rounded-[2rem] border border-slate-800/70 bg-slate-950/45 p-8 md:p-10">
        <p className="text-3xl font-black leading-relaxed text-white md:text-4xl">{article.closingMessage}</p>
      </section>

      <section className="rounded-[2rem] border border-slate-800/70 bg-black/60 p-8 md:p-10">
        <h3 className="text-xl font-black uppercase tracking-[0.15em] text-rose-500">
          Referencias bibliográficas
        </h3>
        <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-400">
          {article.references.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-[2.25rem] border border-slate-800/70 bg-black p-8 text-center md:p-12">
        <h3 className="text-5xl font-black text-white">{article.ctaTitle}</h3>
        <p className="mx-auto mt-6 max-w-2xl text-2xl leading-relaxed text-slate-300">{article.ctaSummary}</p>
        <button
          type="button"
          onClick={onCtaClick}
          className="mt-10 rounded-full bg-rose-500 px-8 py-4 text-lg font-black uppercase tracking-[0.08em] text-white shadow-[0_0_25px_rgba(244,63,94,0.35)] transition-colors hover:bg-rose-600"
        >
          {article.ctaLabel}
        </button>
      </section>

      <div className="flex flex-col gap-6 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={PROFILE_IMAGE_URL} className="h-10 w-10 rounded-full grayscale" alt="" />
          <div>
            <p className="text-sm font-bold text-white">Escrito por Andi</p>
            <p className="text-xs text-slate-500">Especialista en Salud Sexual</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">
          {post.category} · {post.date}
        </p>
      </div>
    </div>
  )
}
