import { Lock, ShieldCheck } from 'lucide-react'

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
          <div className="mb-6 flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded text-sm font-bold shadow-lg"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--text-inverse)',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              A
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Andrei Andrusco Fidalgo
            </span>
          </div>
          <p
            className="max-w-2xl leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Hacia una salud sexual más humana, libre y auténtica. Recupera el placer de ser tú mismo, sin las etiquetas ni las presiones del entorno.
          </p>
        </div>

        <div>
          <h5
            className="mb-6 font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Seguridad
          </h5>
          <div className="flex gap-4">
            {[ShieldCheck, Lock].map((Icon, i) => (
              <div
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-xl border transition-colors"
                style={{
                  borderColor: 'var(--border-primary)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Icon size={20} aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
        style={{ borderColor: 'var(--border-primary)' }}
      >
        <p
          className="text-[10px] font-black uppercase italic tracking-widest"
          style={{ color: 'var(--text-muted)' }}
        >
        </p>
        <div
          className="flex gap-8 text-[10px] font-bold uppercase tracking-widest"
          style={{ color: 'var(--text-muted)' }}
        >
          {['Términos', 'Privacidad', 'Clínica Digital'].map((label) => (
            <a
              key={label}
              href="#"
              className="transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
