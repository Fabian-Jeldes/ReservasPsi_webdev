import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { NOT_FOUND_PAGE } from '../data/site'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
      <Navbar onLogoClick={() => navigate('/')} onAgendarClick={() => navigate('/#reserva')} />

      <main className="mx-auto max-w-3xl px-6 pt-40 pb-32 text-center">
        <p className="mb-6 text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent-text)' }}>
          {NOT_FOUND_PAGE.code}
        </p>
        <h1
          className="mb-8 text-5xl md:text-6xl"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--heading-weight)', textTransform: 'var(--heading-transform)' as any, letterSpacing: 'var(--heading-spacing)' }}
        >
          {NOT_FOUND_PAGE.title}
        </h1>
        <p className="mx-auto mb-12 max-w-xl text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {NOT_FOUND_PAGE.summary}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--text-inverse)', borderRadius: 'var(--radius-btn)' }}
          >
            {NOT_FOUND_PAGE.homeLabel}
          </Link>
          <Link
            to="/articulos"
            className="border px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105"
            style={{ borderColor: 'var(--border-accent)', color: 'var(--accent-text)', borderRadius: 'var(--radius-btn)' }}
          >
            {NOT_FOUND_PAGE.articlesLabel}
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
