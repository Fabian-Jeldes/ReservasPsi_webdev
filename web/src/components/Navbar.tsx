import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoPsAndrei from '../assets/logo-psandrei.jpeg'

type Props = {
  onLogoClick: () => void
  onAgendarClick: () => void
}

function easeOutLiquid(t: number): number {
  return 1 - Math.pow(1 - t, 3.4)
}

export function Navbar({ onLogoClick, onAgendarClick }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const navigate = useNavigate()

  const drawerFillRef = useRef<SVGPathElement>(null)
  const drawerStrokeRef = useRef<SVGPathElement>(null)
  const drawerGlowRef = useRef<SVGPathElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const progressRef = useRef(0)

  const animateDrawer = useCallback((target: 0 | 1, onComplete?: () => void) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    const startVal = progressRef.current
    const delta = target - startVal
    if (Math.abs(delta) < 0.005) {
      progressRef.current = target
      onComplete?.()
      return
    }

    const duration = target === 1 ? 480 : 380
    const startTime = performance.now()

    const step = (now: number) => {
      const rawT = Math.min(1, Math.max(0, (now - startTime) / duration))
      const eased = easeOutLiquid(rawT)
      const p = startVal + delta * eased
      progressRef.current = p

      // edgeX viaja desde 100 (borde derecho) hasta 0 (borde izquierdo)
      const edgeX = 100 * (1 - p)
      // Arco Bézier elástico que se curva hacia afuera al abrir y se recoge al cerrar
      const bend =
        target === 1
          ? -Math.sin(rawT * Math.PI) * 34
          : Math.sin(rawT * Math.PI) * 28
      const ctrlX = edgeX + bend

      const fillD = `M 100,0 L ${edgeX.toFixed(2)},0 Q ${ctrlX.toFixed(2)},42 ${edgeX.toFixed(2)},100 L 100,100 Z`
      const strokeD = `M ${edgeX.toFixed(2)},0 Q ${ctrlX.toFixed(2)},42 ${edgeX.toFixed(2)},100`

      drawerFillRef.current?.setAttribute('d', fillD)
      drawerStrokeRef.current?.setAttribute('d', strokeD)
      drawerGlowRef.current?.setAttribute('d', strokeD)

      if (backdropRef.current) {
        backdropRef.current.style.opacity = p.toFixed(3)
      }

      if (rawT < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        progressRef.current = target
        rafRef.current = 0
        onComplete?.()
      }
    }

    rafRef.current = requestAnimationFrame(step)
  }, [])

  const openMenu = () => {
    setIsRendered(true)
    setIsOpen(true)
    requestAnimationFrame(() => {
      animateDrawer(1)
    })
  }

  const closeMenuWithAction = useCallback(
    (action?: () => void) => {
      setIsOpen(false)
      animateDrawer(0, () => {
        setIsRendered(false)
        action?.()
      })
    },
    [animateDrawer],
  )

  const toggleMenu = () => {
    if (isOpen) {
      closeMenuWithAction()
    } else {
      openMenu()
    }
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const mobileLinks = [
    {
      label: (
        <>
          <span className="brand-initial" style={{ color: 'var(--accent)' }}>
            S
          </span>
          obre{' '}
          <span className="brand-initial" style={{ color: 'var(--accent)' }}>
            M
          </span>
          í
        </>
      ),
      to: '/sobre-mi',
    },
    {
      label: (
        <>
          <span className="brand-initial" style={{ color: 'var(--accent)' }}>
            E
          </span>
          specialidades
        </>
      ),
      to: '/#especialidades',
    },
    {
      label: (
        <>
          <span className="brand-initial" style={{ color: 'var(--accent)' }}>
            R
          </span>
          eseñas
        </>
      ),
      to: '/#reviews',
    },
    {
      label: (
        <>
          <span className="brand-initial" style={{ color: 'var(--accent)' }}>
            P
          </span>
          sicoeducación
        </>
      ),
      to: '/articulos',
    },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full border-b transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-nav)',
        borderColor: 'var(--border-primary)',
        backdropFilter: 'var(--nav-backdrop)',
        WebkitBackdropFilter: 'var(--nav-backdrop)',
      }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <button
          type="button"
          className="relative z-50 flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 text-left"
          onClick={() => {
            if (isOpen) {
              closeMenuWithAction(onLogoClick)
            } else {
              onLogoClick()
            }
          }}
          aria-label="Ir al inicio"
        >
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
        </button>

        {/* Desktop Menu (sin cambios) */}
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link
            to="/sobre-mi"
            className="transition-colors"
            style={{ color: 'var(--text-primary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            <span className="brand-initial" style={{ color: 'var(--accent)' }}>
              S
            </span>
            obre{' '}
            <span className="brand-initial" style={{ color: 'var(--accent)' }}>
              M
            </span>
            í
          </Link>
          <Link
            to="/#especialidades"
            className="transition-colors"
            style={{ color: 'var(--text-primary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            <span className="brand-initial" style={{ color: 'var(--accent)' }}>
              E
            </span>
            specialidades
          </Link>
          <Link
            to="/#reviews"
            className="transition-colors"
            style={{ color: 'var(--text-primary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            <span className="brand-initial" style={{ color: 'var(--accent)' }}>
              R
            </span>
            eseñas
          </Link>
          <Link
            to="/articulos"
            className="transition-colors"
            style={{ color: 'var(--text-primary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            <span className="brand-initial" style={{ color: 'var(--accent)' }}>
              P
            </span>
            sicoeducación
          </Link>
          <button
            type="button"
            onClick={onAgendarClick}
            className="cursor-pointer rounded-full px-5 py-2.5 font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#ffffff',
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
          className="relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border transition-all duration-300 md:hidden"
          style={{
            borderColor: isOpen ? 'var(--accent)' : 'var(--border-primary)',
            color: 'var(--text-primary)',
            backgroundColor: 'var(--bg-card)',
            boxShadow: isOpen ? '0 0 14px rgba(255, 77, 77, 0.3)' : 'none',
          }}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay con Despliegue Orgánico Curvo */}
      {isRendered && (
        <div
          className="fixed inset-0 top-0 left-0 z-40 flex h-screen w-screen flex-col justify-between px-6 pt-28 pb-12 md:hidden"
          style={{
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
        >
          {/* Capa de desenfoque de fondo sincronizada */}
          <div
            ref={backdropRef}
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              backgroundColor: 'rgba(10, 15, 29, 0.45)',
            }}
          />

          {/* Cortina SVG Orgánica que se expande desde el borde derecho */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={drawerFillRef}
              d="M 100,0 L 100,0 Q 100,42 100,100 L 100,100 Z"
              fill="var(--bg-primary)"
              fillOpacity="0.93"
            />
            <path
              ref={drawerGlowRef}
              d="M 100,0 Q 100,42 100,100"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeOpacity="0.6"
              vectorEffect="non-scaling-stroke"
              style={{ filter: 'blur(6px)' }}
            />
            <path
              ref={drawerStrokeRef}
              d="M 100,0 Q 100,42 100,100"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeOpacity="0.95"
              vectorEffect="non-scaling-stroke"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(255, 77, 77, 0.55))',
              }}
            />
          </svg>

          {/* Resplandor ambiental coral en el interior del menú */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: isOpen ? 0.14 : 0,
              background:
                'radial-gradient(circle at 80% 35%, var(--accent) 0%, transparent 65%)',
            }}
          />

          {/* Enlaces principales con aparición escalonada (stagger 60ms) */}
          <div
            className="relative z-10 flex flex-1 flex-col justify-center gap-6 border-t pt-6 text-center"
            style={{ borderColor: 'var(--border-primary)' }}
          >
            {mobileLinks.map((item, idx) => (
              <button
                key={item.to}
                type="button"
                onClick={() =>
                  closeMenuWithAction(() => {
                    navigate(item.to)
                  })
                }
                className="cursor-pointer border-0 bg-transparent py-2.5 text-3xl font-bold tracking-tight"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0px)' : 'translateX(24px)',
                  transition:
                    'opacity 420ms cubic-bezier(0.22, 1, 0.36, 1), transform 420ms cubic-bezier(0.22, 1, 0.36, 1), color 250ms ease',
                  transitionDelay: isOpen ? `${90 + idx * 60}ms` : '0ms',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botón Agendar Cita destacado en la parte inferior */}
          <div
            className="relative z-10 px-4 pt-4"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0px)' : 'translateY(20px)',
              transition:
                'opacity 440ms cubic-bezier(0.22, 1, 0.36, 1), transform 440ms cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: isOpen
                ? `${90 + mobileLinks.length * 60}ms`
                : '0ms',
            }}
          >
            <button
              type="button"
              onClick={() =>
                closeMenuWithAction(() => {
                  onAgendarClick()
                })
              }
              className="w-full cursor-pointer py-4 text-lg font-bold shadow-lg transition-all active:scale-95"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                boxShadow: 'var(--shadow-accent)',
                borderRadius: 'var(--radius-btn)',
              }}
            >
              Agendar Cita
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
