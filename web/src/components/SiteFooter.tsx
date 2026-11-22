import { Link } from 'react-router-dom'
import { FileText, Lock, ShieldCheck } from 'lucide-react'
import logoPsAndrei from '../assets/logo-psandrei.jpeg'
import instagramBotonImg from '../assets/InstagramBoton.jpeg'
import { LEGAL_NAV_LINKS } from '../data/site'
import type { LegalPageId } from '../types/site'

const SECURITY_ICONS: Record<LegalPageId, typeof ShieldCheck> = {
  privacidad: ShieldCheck,
  'practica-digital': Lock,
  terminos: FileText,
}

export function SiteFooter() {
  return (
    <footer
      className="border-t px-6 py-20"
      style={{
        borderColor: 'var(--border-footer)',
        backgroundColor: 'var(--bg-footer)',
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div className="md:col-span-3">
          <div className="mb-6 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src={logoPsAndrei}
                alt="Logo Ps. Andrei Andrusco"
                className="h-10 w-10 shrink-0 rounded-lg object-contain"
              />
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="brand-text">
                  <span className="brand-initial">A</span>ndrei{' '}
                  <span className="brand-initial">A</span>ndrusco{' '}
                  <span className="brand-initial">F</span>idalgo
                </span>
              </span>
            </div>
            <Link
              to="/#reserva"
              className="rounded-full px-4 py-2 text-xs font-bold transition-all hover:scale-105"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--text-inverse)',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              Ver horas disponibles
            </Link>
            <a
              href="https://www.instagram.com/ps.aandrusco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir a Ps. Andrei Andrusco en Instagram"
              title="Instagram @ps.aandrusco"
              className="block h-10 w-10 shrink-0 overflow-hidden rounded-xl transition-transform hover:scale-105"
            >
              <img
                src={instagramBotonImg}
                alt="Instagram @ps.aandrusco"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
          <p
            className="max-w-2xl leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Hacia una salud sexual más humana, libre y auténtica. Recupera el placer de ser tú mismo, sin las etiquetas ni las presiones del entorno.
          </p>
        </div>

        <div>
          <h2
            className="mb-5 text-base font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Seguridad
          </h2>
          <div className="flex items-center gap-3">
            {LEGAL_NAV_LINKS.map((item) => {
              const Icon = SECURITY_ICONS[item.id]
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  aria-label={`${item.label}: ${item.description}`}
                  title={`${item.label} — ${item.description}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all hover:scale-105"
                  style={{
                    borderColor: 'var(--border-card)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.borderColor = 'var(--border-accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.borderColor = 'var(--border-card)'
                  }}
                >
                  <Icon size={19} aria-hidden />
                </Link>
              )
            })}
          </div>
          <p
            className="mt-4 text-xs leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Consulta nuestras condiciones de{' '}
            <Link to="/privacidad" className="editorial-link">
              privacidad
            </Link>
            ,{' '}
            <Link to="/practica-digital" className="editorial-link">
              práctica digital
            </Link>{' '}
            y{' '}
            <Link to="/terminos" className="editorial-link">
              términos de uso
            </Link>
            .
          </p>
        </div>
      </div>
      <div
        className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
        style={{ borderColor: 'var(--border-primary)' }}
      >
        <p
          className="text-center text-[10px] font-black uppercase italic tracking-widest md:text-left"
          style={{ color: 'var(--text-muted)' }}
        >
          © 2026 Andrei Andrusco Fidalgo — Psicología Clínica
        </p>
        <nav
          aria-label="Enlaces legales y de seguridad"
          className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest md:gap-8"
          style={{ color: 'var(--text-muted)' }}
        >
          {LEGAL_NAV_LINKS.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className="transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
