type Props = {
  onLogoClick: () => void
  onAgendarClick: () => void
}

export function Navbar({ onLogoClick, onAgendarClick }: Props) {
  return (
    <nav
      className="fixed z-50 w-full border-b"
      style={{
        backgroundColor: 'var(--bg-nav)',
        borderColor: 'var(--border-primary)',
        backdropFilter: 'var(--nav-backdrop)',
        WebkitBackdropFilter: 'var(--nav-backdrop)',
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left"
          onClick={onLogoClick}
          aria-label="Ir al inicio"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg font-bold shadow-lg"
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
            Andi
          </span>
        </button>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a
            href="/#especialidades"
            className="transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Especialidades
          </a>
          <a
            href="/#reviews"
            className="transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Reseñas
          </a>
          <a
            href="/#blog"
            className="transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Psicoeducación
          </a>
          <button
            type="button"
            onClick={onAgendarClick}
            className="rounded-full px-5 py-2 font-bold shadow-lg transition-all active:scale-95"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--text-inverse)',
              boxShadow: 'var(--shadow-accent)',
              borderRadius: 'var(--radius-btn)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          >
            Agendar Cita
          </button>
        </div>
      </div>
    </nav>
  )
}
