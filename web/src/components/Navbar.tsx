type Props = {
  onLogoClick: () => void
  onAgendarClick: () => void
}

export function Navbar({ onLogoClick, onAgendarClick }: Props) {
  return (
    <nav className="fixed z-50 w-full border-b border-slate-800/50 bg-[#0a0f1d]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left"
          onClick={onLogoClick}
          aria-label="Ir al inicio"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500 font-bold text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Andi</span>
        </button>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#especialidades" className="transition-colors hover:text-rose-400">
            Especialidades
          </a>
          <a href="#reviews" className="transition-colors hover:text-rose-400">
            Reseñas
          </a>
          <a href="#blog" className="transition-colors hover:text-rose-400">
            Psicoeducación
          </a>
          <button
            type="button"
            onClick={onAgendarClick}
            className="rounded-full bg-rose-500 px-5 py-2 text-white shadow-lg shadow-rose-500/20 transition-all hover:bg-rose-600 active:scale-95"
          >
            Agendar Cita
          </button>
        </div>
      </div>
    </nav>
  )
}
