import { Link } from 'react-router-dom'
import { FileText, Lock, Mail, ShieldCheck } from 'lucide-react'
import logoPsAndrei from '../assets/logo-psandrei.webp'
import instagramBotonImg from '../assets/InstagramBoton.webp'
import { LEGAL_NAV_LINKS, PROFESSIONAL } from '../data/site'
import type { LegalPageId } from '../types/site'

const SECURITY_ICONS: Record<LegalPageId, typeof ShieldCheck> = {
  privacidad: ShieldCheck,
  'practica-digital': Lock,
  terminos: FileText,
}

export function SiteFooter() {
  return (
    <footer
      className="border-t px-6 py-14"
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
                loading="lazy"
                decoding="async"
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
                backgroundColor: 'var(--btn-accent-bg)',
                color: 'var(--btn-accent-text)',
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
            className="mb-4 text-sm font-bold uppercase tracking-widest"
            style={{ color: 'var(--text-primary)' }}
          >
            Seguridad
          </h2>
          <nav aria-label="Enlaces legales y de seguridad">
            <ul className="space-y-2.5">
              {LEGAL_NAV_LINKS.map((item) => {
                const Icon = SECURITY_ICONS[item.id]
                return (
                  <li key={item.id}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-2.5 text-sm font-medium transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-text)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)'
                      }}
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors"
                        aria-hidden="true"
                        style={{
                          borderColor: 'var(--border-card)',
                          backgroundColor: 'var(--bg-card)',
                          color: 'var(--accent-text)',
                        }}
                      >
                        <Icon size={15} aria-hidden="true" />
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
        style={{ borderColor: 'var(--border-primary)' }}
      >
        <p
          className="text-center text-[10px] font-black uppercase italic tracking-widest md:text-left"
          style={{ color: 'var(--text-muted)' }}
        >
          © 2026 Andrei Andrusco Fidalgo — Psicología Clínica
        </p>
        <a
          href={`mailto:${PROFESSIONAL.email}`}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide transition-colors"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <Mail size={14} aria-hidden="true" style={{ color: 'var(--accent-text)' }} />
          <span>{PROFESSIONAL.email}</span>
        </a>
      </div>
    </footer>
  )
}
