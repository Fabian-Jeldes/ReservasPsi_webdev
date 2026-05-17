import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

type Props = {
  onLogoClick: () => void
  onAgendarClick: () => void
}

export function Navbar({ onLogoClick, onAgendarClick }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      className="fixed z-50 w-full border-b transition-colors duration-300"
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
          className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left relative z-50"
          onClick={() => {
            onLogoClick()
            closeMenu()
          }}
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
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="brand-text">
              <span className="brand-initial">A</span>ndrei <span className="brand-initial">A</span>ndrusco <span className="brand-initial">F</span>idalgo
            </span>
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            to="/sobre-mi"
            className="transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Sobre Mí
          </Link>
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
          <Link
            to="/articulos"
            className="transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Psicoeducación
          </Link>
          <button
            type="button"
            onClick={onAgendarClick}
            className="rounded-full px-5 py-2 font-bold shadow-lg transition-all active:scale-95 cursor-pointer"
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-xl border md:hidden transition-all duration-300 relative z-50 cursor-pointer"
          style={{
            borderColor: 'var(--border-primary)',
            color: 'var(--text-primary)',
            backgroundColor: 'var(--bg-card)',
          }}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-0 left-0 z-40 flex h-screen w-screen flex-col pt-24 px-6 md:hidden transition-all duration-300"
          style={{
            backgroundColor: 'var(--bg-primary)',
            backdropFilter: 'var(--nav-backdrop)',
            WebkitBackdropFilter: 'var(--nav-backdrop)',
          }}
        >
          {/* Ambient background glow for standard theme */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
            }}
          />

          <div 
            className="relative z-10 flex flex-col gap-6 text-center text-lg font-semibold py-8 border-t" 
            style={{ borderColor: 'var(--border-primary)' }}
          >
            <Link
              to="/sobre-mi"
              onClick={closeMenu}
              className="py-3 transition-colors text-2xl"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Sobre Mí
            </Link>
            <a
              href="/#especialidades"
              onClick={closeMenu}
              className="py-3 transition-colors text-2xl"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Especialidades
            </a>
            <a
              href="/#reviews"
              onClick={closeMenu}
              className="py-3 transition-colors text-2xl"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Reseñas
            </a>
            <Link
              to="/articulos"
              onClick={closeMenu}
              className="py-3 transition-colors text-2xl"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Psicoeducación
            </Link>
            
            <div className="mt-8 px-4">
              <button
                type="button"
                onClick={() => {
                  onAgendarClick()
                  closeMenu()
                }}
                className="w-full py-4 font-bold shadow-lg transition-all active:scale-95 cursor-pointer text-lg animate-pulse"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--text-inverse)',
                  boxShadow: 'var(--shadow-accent)',
                  borderRadius: 'var(--radius-btn)',
                }}
              >
                Agendar Cita
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
