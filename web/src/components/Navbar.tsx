import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoPsAndrei from '../assets/logo-psandrei.webp'
import { useActiveNavSection, type NavSectionId } from '../hooks/useActiveNavSection'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { prefetchRoute } from '../lib/route-loaders'
import { DevAccentToggle } from '../dev/DevAccentToggle'

type Props = {
  onLogoClick: () => void
  onAgendarClick: () => void
}

type NavItem = {
  id: NavSectionId
  to: string
  label: ReactNode
}

const NAV_ITEMS: readonly NavItem[] = [
  {
    id: 'sobre-mi',
    to: '/sobre-mi',
    label: (
      <>
        <span className="brand-initial">S</span>obre <span className="brand-initial">M</span>í
      </>
    ),
  },
  {
    id: 'especialidades',
    to: '/#especialidades',
    label: (
      <>
        <span className="brand-initial">E</span>specialidades
      </>
    ),
  },
  {
    id: 'reviews',
    to: '/#reviews',
    label: (
      <>
        <span className="brand-initial">R</span>eseñas
      </>
    ),
  },
  {
    id: 'blog',
    to: '/#blog',
    label: (
      <>
        <span className="brand-initial">P</span>sicoeducación
      </>
    ),
  },
  {
    id: 'preguntas',
    to: '/#preguntas',
    label: (
      <>
        <span className="brand-initial">P</span>reguntas
      </>
    ),
  },
]

const NAV_RAIL_BUTTON_COUNT = NAV_ITEMS.length + 1
const NAV_CURTAIN_CYCLE_MS = 14000
const NAV_CURTAIN_OPEN_BASE_MS = 5000
const NAV_CURTAIN_SPARK_LEAD_MS = 350
const NAV_CURTAIN_SPARK_DURATION_MS = 420
const NAV_CURTAIN_CLOSE_BASE_MS = 11250
const NAV_CURTAIN_STAGGER_MS = 150

function easeOutSmooth(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function easeInOutSmooth(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function Navbar({ onLogoClick, onAgendarClick }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const [railAnimCycle, setRailAnimCycle] = useState(0)
  const [animateMobileRails, setAnimateMobileRails] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { activeSection, selectSection } = useActiveNavSection()

  const drawerFillRef = useRef<SVGPathElement>(null)
  const drawerStrokeRef = useRef<SVGPathElement>(null)
  const drawerGlowRef = useRef<SVGPathElement>(null)
  const drawerContentRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const mobileDrawerRef = useRef<HTMLDivElement>(null)
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  const rafRef = useRef<number>(0)
  const mountRafRef = useRef<number>(0)
  const actionTimerRef = useRef<number | null>(null)
  const progressRef = useRef(0)

  const clearPendingAnimations = useCallback(() => {
    if (actionTimerRef.current !== null) {
      window.clearTimeout(actionTimerRef.current)
      actionTimerRef.current = null
    }
    if (mountRafRef.current) {
      cancelAnimationFrame(mountRafRef.current)
      mountRafRef.current = 0
    }
  }, [])

  const animateDrawer = useCallback(
    (
      target: 0 | 1,
      onComplete?: () => void,
      options?: { durationMs?: number; onThreshold?: { at: number; fn: () => void } },
    ) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = 0
      }

      const startVal = progressRef.current
      const delta = target - startVal
      if (Math.abs(delta) < 0.004) {
        progressRef.current = target
        options?.onThreshold?.fn()
        onComplete?.()
        return
      }

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      const clampPct = (v: number) => Math.max(0, Math.min(100, v))

      const applyFrame = (p: number, bend: number) => {
        const clampedP = Math.max(0, Math.min(1, p))
        const edgeX = 100 * (1 - clampedP)
        const ctrlX = edgeX + bend
        const fillD = `M 100,0 L ${edgeX.toFixed(2)},0 Q ${ctrlX.toFixed(2)},44 ${edgeX.toFixed(2)},100 L 100,100 Z`
        const strokeD = `M ${edgeX.toFixed(2)},0 Q ${ctrlX.toFixed(2)},44 ${edgeX.toFixed(2)},100`

        drawerFillRef.current?.setAttribute('d', fillD)
        drawerStrokeRef.current?.setAttribute('d', strokeD)
        drawerGlowRef.current?.setAttribute('d', strokeD)

        // Enciende y atenúa suavemente la línea roja en los extremos para evitar cortes secos al 0% o 100%
        const frontierIntensity = Math.sin(clampedP * Math.PI)
        const strokeAlpha = clampedP <= 0.002 || clampedP >= 0.998 ? 0 : Math.min(0.96, 0.25 + frontierIntensity * 0.75)
        const glowAlpha = clampedP <= 0.002 || clampedP >= 0.998 ? 0 : frontierIntensity * 0.58
        drawerStrokeRef.current?.setAttribute('stroke-opacity', strokeAlpha.toFixed(3))
        drawerGlowRef.current?.setAttribute('stroke-opacity', glowAlpha.toFixed(3))

        // Sincroniza el recorte del contenido exactamente con la curva de la línea roja
        if (drawerContentRef.current) {
          if (clampedP >= 0.998) {
            drawerContentRef.current.style.clipPath = 'none'
            drawerContentRef.current.style.opacity = '1'
          } else if (clampedP <= 0.002) {
            drawerContentRef.current.style.clipPath = 'inset(0 0 0 100%)'
            drawerContentRef.current.style.opacity = '0'
          } else {
            const e = clampPct(edgeX)
            const p18 = clampPct(edgeX + 2 * 0.2 * 0.8 * bend)
            const p44 = clampPct(edgeX + 2 * 0.5 * 0.5 * bend)
            const p74 = clampPct(edgeX + 2 * 0.78 * 0.22 * bend)
            drawerContentRef.current.style.clipPath = `polygon(${e.toFixed(2)}% 0%, 100% 0%, 100% 100%, ${e.toFixed(2)}% 100%, ${p74.toFixed(2)}% 74%, ${p44.toFixed(2)}% 44%, ${p18.toFixed(2)}% 18%)`
            drawerContentRef.current.style.opacity = Math.min(1, clampedP * 2.4).toFixed(3)
          }
        }

        if (backdropRef.current) {
          backdropRef.current.style.opacity = (clampedP * 0.42).toFixed(3)
        }
      }

      if (prefersReducedMotion) {
        progressRef.current = target
        applyFrame(target, 0)
        options?.onThreshold?.fn()
        onComplete?.()
        return
      }

      const baseDuration = options?.durationMs ?? (target === 1 ? 380 : 340)
      const duration = Math.max(120, Math.round(baseDuration * Math.abs(delta)))
      const startTime = performance.now()
      let thresholdFired = false

      const step = (now: number) => {
        const rawT = Math.min(1, Math.max(0, (now - startTime) / duration))
        const eased = target === 1 ? easeOutSmooth(rawT) : easeInOutSmooth(rawT)
        const p = startVal + delta * eased
        progressRef.current = p

        // Arco Bézier contenido para un barrido fluido a 60 fps
        const bend =
          target === 1
            ? -Math.sin(rawT * Math.PI) * 20
            : Math.sin(rawT * Math.PI) * 18
        applyFrame(p, bend)

        if (
          options?.onThreshold &&
          !thresholdFired &&
          ((delta < 0 && p <= options.onThreshold.at) ||
            (delta > 0 && p >= options.onThreshold.at))
        ) {
          thresholdFired = true
          options.onThreshold.fn()
        }

        if (rawT < 1) {
          rafRef.current = requestAnimationFrame(step)
        } else {
          progressRef.current = target
          applyFrame(target, 0)
          rafRef.current = 0
          if (options?.onThreshold && !thresholdFired) {
            thresholdFired = true
            options.onThreshold.fn()
          }
          onComplete?.()
        }
      }

      rafRef.current = requestAnimationFrame(step)
    },
    [],
  )

  const openMenu = () => {
    clearPendingAnimations()
    const wasAlreadyRendered = isRendered

    // Ejecutar la animación de rieles en cada apertura (respetando reduced-motion)
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setAnimateMobileRails(!prefersReducedMotion)
    if (!prefersReducedMotion) {
      setRailAnimCycle((c) => c + 1)
    }

    if (!wasAlreadyRendered) {
      progressRef.current = 0
      setIsRendered(true)
    }
    setIsOpen(true)

    // Si recién se monta, espera un frame de pintura inicial para arrancar la ola desde 0% sin saltos
    if (!wasAlreadyRendered) {
      mountRafRef.current = requestAnimationFrame(() => {
        mountRafRef.current = requestAnimationFrame(() => {
          mountRafRef.current = 0
          animateDrawer(1)
        })
      })
    } else {
      animateDrawer(1)
    }
  }

  const closeMenuWithAction = useCallback(
    (
      action?: () => void,
      options?: { durationMs?: number; overlapAt?: number },
    ) => {
      clearPendingAnimations()
      setIsOpen(false)
      if (action && options?.overlapAt !== undefined) {
        animateDrawer(
          0,
          () => {
            setIsRendered(false)
          },
          {
            durationMs: options.durationMs,
            onThreshold: { at: options.overlapAt, fn: action },
          },
        )
        return
      }
      animateDrawer(
        0,
        () => {
          setIsRendered(false)
          action?.()
        },
        { durationMs: options?.durationMs },
      )
    },
    [animateDrawer, clearPendingAnimations],
  )

  const handleMobileNavSelect = useCallback(
    (item: NavItem) => {
      clearPendingAnimations()
      const isSamePageAnchor = item.to.startsWith('/#') && location.pathname === '/'
      const isSameRoute = !item.to.startsWith('/#') && location.pathname === item.to

      // Si el usuario ya está en la sección seleccionada, solo cierra en ola sin scrollear
      if (isSameRoute || (isSamePageAnchor && activeSection === item.id)) {
        closeMenuWithAction()
        return
      }

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      const confirmDelay = prefersReducedMotion ? 0 : 100

      if (isSamePageAnchor) {
        const targetId = item.to.slice(2)
        selectSection(item.id)

        // 1) Enciende brevemente el LED "REC", 2) posiciona en segundo plano bajo el telón opaco,
        // 3) barre la ola roja desmaterializando el taskbar y revelando la sección ya ubicada
        actionTimerRef.current = window.setTimeout(() => {
          actionTimerRef.current = null
          const targetEl = document.getElementById(targetId)
          if (targetEl) {
            const headerOffset = window.innerWidth >= 768 ? 80 : 64
            const targetTop = Math.max(
              0,
              Math.round(targetEl.getBoundingClientRect().top + window.scrollY - headerOffset),
            )
            document.documentElement.style.overflow = ''
            document.body.style.overflow = ''
            window.scrollTo({ top: targetTop, behavior: 'auto' })
            document.documentElement.style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
          }
          navigate(item.to, { state: { skipScroll: true } })

          mountRafRef.current = requestAnimationFrame(() => {
            mountRafRef.current = 0
            setIsOpen(false)
            animateDrawer(0, () => {
              setIsRendered(false)
            })
          })
        }, confirmDelay)
        return
      }

      // Cambio hacia otra página (ej. /sobre-mi): confirma el LED, recoge la ola con agilidad y cruza limpio
      selectSection(item.id)
      actionTimerRef.current = window.setTimeout(() => {
        actionTimerRef.current = null
        closeMenuWithAction(
          () => {
            navigate(item.to, { state: { instantScroll: true } })
          },
          { durationMs: 260 },
        )
      }, confirmDelay)
    },
    [
      activeSection,
      animateDrawer,
      clearPendingAnimations,
      closeMenuWithAction,
      location.pathname,
      navigate,
      selectSection,
    ],
  )

  const toggleMenu = () => {
    if (isOpen) {
      closeMenuWithAction()
    } else {
      openMenu()
    }
  }

  useFocusTrap({
    containerRef: mobileDrawerRef,
    includeRef: mobileToggleRef,
    isActive: isOpen,
    onEscape: () => closeMenuWithAction(),
  })

  const desktopBtnRefs = useRef<(HTMLElement | null)[]>([])
  const railPausedRef = useRef<boolean>(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Reloj maestro de 14s para el riel desktop (chispa anticipatoria + visor mecánico bidireccional)
  useEffect(() => {
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frameId = 0
    let lastNow = 0
    let elapsedMs = 0
    const sparkedInCycle = Array<boolean>(NAV_RAIL_BUTTON_COUNT).fill(false)

    const resetDynamicClasses = () => {
      for (let i = 0; i < NAV_RAIL_BUTTON_COUNT; i++) {
        desktopBtnRefs.current[i]?.classList.remove('is-curtain-open', 'is-sparking')
      }
    }

    const tick = (now: number) => {
      if (motionMedia.matches) {
        resetDynamicClasses()
        frameId = 0
        return
      }

      const dt = lastNow === 0 ? 0 : Math.min(100, now - lastNow)
      lastNow = now

      if (!railPausedRef.current) {
        const prevElapsed = elapsedMs
        elapsedMs = (elapsedMs + dt) % NAV_CURTAIN_CYCLE_MS
        if (elapsedMs < prevElapsed) {
          sparkedInCycle.fill(false)
        }
      }

      for (let i = 0; i < NAV_RAIL_BUTTON_COUNT; i++) {
        const el = desktopBtnRefs.current[i]
        if (!el) continue

        const openStart = NAV_CURTAIN_OPEN_BASE_MS + i * NAV_CURTAIN_STAGGER_MS
        const sparkStart = openStart - NAV_CURTAIN_SPARK_LEAD_MS
        const closeStart =
          NAV_CURTAIN_CLOSE_BASE_MS +
          (NAV_RAIL_BUTTON_COUNT - 1 - i) * NAV_CURTAIN_STAGGER_MS

        const isWaveOpen = elapsedMs >= openStart && elapsedMs < closeStart

        // Chispa anticipatoria ~0.35s antes de que inicie la apertura de cada botón
        if (
          elapsedMs >= sparkStart &&
          elapsedMs < sparkStart + NAV_CURTAIN_SPARK_DURATION_MS &&
          !sparkedInCycle[i]
        ) {
          sparkedInCycle[i] = true
          if (!railPausedRef.current) {
            el.classList.add('is-sparking')
          }
        } else if (
          elapsedMs >= sparkStart + NAV_CURTAIN_SPARK_DURATION_MS ||
          elapsedMs < sparkStart
        ) {
          if (el.classList.contains('is-sparking')) {
            el.classList.remove('is-sparking')
          }
        }

        el.classList.toggle('is-curtain-open', isWaveOpen)
      }

      frameId = requestAnimationFrame(tick)
    }

    const startIfAllowed = () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
        frameId = 0
      }
      if (motionMedia.matches) {
        resetDynamicClasses()
        return
      }
      lastNow = 0
      frameId = requestAnimationFrame(tick)
    }

    startIfAllowed()
    motionMedia.addEventListener('change', startIfAllowed)

    return () => {
      motionMedia.removeEventListener('change', startIfAllowed)
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearPendingAnimations()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [clearPendingAnimations])

  // Bloqueo de scroll sin alterar position: fixed del body ni modificar window.scrollY
  useEffect(() => {
    if (!isRendered) return

    const html = document.documentElement
    const body = document.body
    const prevHtmlOverflow = html.style.overflow
    const prevHtmlOverscroll = html.style.overscrollBehavior
    const prevBodyOverflow = body.style.overflow

    html.style.overflow = 'hidden'
    html.style.overscrollBehavior = 'none'
    html.dataset.mobileMenuOpen = 'true'
    body.style.overflow = 'hidden'

    const blockScrollGesture = (event: Event) => {
      const inner = drawerContentRef.current
      if (
        inner &&
        event.target instanceof Node &&
        inner.contains(event.target) &&
        inner.scrollHeight > inner.clientHeight
      ) {
        return
      }
      event.preventDefault()
    }

    const desktopMedia = window.matchMedia('(min-width: 768px)')
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        clearPendingAnimations()
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
          rafRef.current = 0
        }
        progressRef.current = 0
        setIsOpen(false)
        setIsRendered(false)
      }
    }

    window.addEventListener('touchmove', blockScrollGesture, { passive: false })
    window.addEventListener('wheel', blockScrollGesture, { passive: false })
    desktopMedia.addEventListener('change', handleViewportChange)

    return () => {
      html.style.overflow = prevHtmlOverflow
      html.style.overscrollBehavior = prevHtmlOverscroll
      delete html.dataset.mobileMenuOpen
      body.style.overflow = prevBodyOverflow
      window.removeEventListener('touchmove', blockScrollGesture)
      window.removeEventListener('wheel', blockScrollGesture)
      desktopMedia.removeEventListener('change', handleViewportChange)
    }
  }, [isRendered, clearPendingAnimations])

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled && !isOpen ? 'shadow-md md:shadow-lg' : ''
      }`}
      style={{
        backgroundColor: 'var(--bg-nav)',
        borderColor: isScrolled ? 'var(--nav-border-scrolled)' : 'var(--border-primary)',
        backdropFilter: 'var(--nav-backdrop)',
        WebkitBackdropFilter: 'var(--nav-backdrop)',
      }}
    >
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:px-4 focus:py-2 focus:text-xs focus:font-bold"
        style={{
          backgroundColor: 'var(--btn-accent-bg)',
          color: 'var(--btn-accent-text)',
        }}
      >
        Saltar al contenido principal
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 md:h-20 lg:px-8">
        <button
          type="button"
          className="relative z-50 flex min-w-0 cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left md:gap-3"
          onClick={() => {
            if (location.pathname === '/') {
              selectSection(null)
            }
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
            decoding="async"
            className="h-9 w-9 shrink-0 rounded-xl border object-contain md:h-12 md:w-12"
            style={{ borderColor: 'var(--nav-rail-border)' }}
          />
          <span className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
            <span className="brand-monogram text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px]">
              <span className="brand-monogram-initial">A</span>
              <span className="brand-monogram-rest">ndrei</span>
              <span className="brand-monogram-initial">A</span>
              <span className="brand-monogram-rest">ndrusco</span>
              <span className="brand-monogram-initial">F</span>
              <span className="brand-monogram-rest">idalgo</span>
            </span>
            <span className="brand-monogram-divider shrink-0" aria-hidden="true" />
            <span className="brand-wordmark-subtitle flex flex-col whitespace-nowrap text-[11px] sm:text-[11.5px] md:text-[12.5px] lg:text-[13px]">
              <span>
                <span className="brand-wordmark-sub-initial">P</span>sicólogo &amp;
              </span>
              <span>
                <span className="brand-wordmark-sub-initial">S</span>exólogo{' '}
                <span className="brand-wordmark-sub-initial">C</span>línico
              </span>
            </span>
          </span>
        </button>

        {/* Desktop Menu — Botonera analógica continua (5 teclas + tecla coral Agendar Cita) */}
        <div className="hidden items-center md:flex">
          <div
            className="nav-rail-desktop text-[13px] font-medium lg:text-sm"
            onMouseEnter={() => {
              railPausedRef.current = true
            }}
            onMouseLeave={() => {
              railPausedRef.current = false
            }}
          >
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id
              return (
                <Link
                  key={item.id}
                  ref={(el) => {
                    desktopBtnRefs.current[idx] = el
                  }}
                  to={item.to}
                  aria-current={isActive ? 'location' : undefined}
                  onMouseEnter={() => prefetchRoute(item.to)}
                  onFocus={() => prefetchRoute(item.to)}
                  onClick={() => {
                    if (item.to.startsWith('/#') && location.pathname === '/') {
                      selectSection(item.id)
                    }
                  }}
                  className={`nav-link-desktop whitespace-nowrap ${
                    isActive ? 'is-active' : ''
                  }`}
                >
                  <span className="nav-armor-plates" aria-hidden="true">
                    <span className="nav-armor-plate nav-armor-plate-top" />
                    <span className="nav-armor-plate nav-armor-plate-bottom" />
                    <span className="nav-armor-spark" />
                  </span>
                  <span className="nav-key-label">{item.label}</span>
                </Link>
              )
            })}
            <button
              ref={(el) => {
                desktopBtnRefs.current[NAV_ITEMS.length] = el
              }}
              type="button"
              onClick={onAgendarClick}
              className="nav-link-desktop nav-key-cta cursor-pointer whitespace-nowrap font-bold"
            >
              <span className="nav-armor-plates" aria-hidden="true">
                <span className="nav-armor-plate nav-armor-plate-top" />
                <span className="nav-armor-plate nav-armor-plate-bottom" />
                <span className="nav-armor-spark" />
              </span>
              <span className="nav-key-label">Agendar Cita</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={mobileToggleRef}
          type="button"
          onClick={toggleMenu}
          className={`mobile-menu-toggle relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border transition-colors duration-300 md:hidden ${
            isOpen ? 'is-open' : ''
          }`}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay con Ola de Línea Roja (materialización y desmaterialización progresiva) */}
      {isRendered && (
        <div
          id="mobile-nav-drawer"
          ref={mobileDrawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-40 h-[100dvh] w-screen overflow-hidden overscroll-none md:hidden"
          style={{
            pointerEvents: isOpen ? 'auto' : 'none',
            touchAction: 'none',
          }}
        >
          {/* Velo sutil de contraste sin backdrop-filter pesado durante la animación para mantener 60 fps */}
          <div
            ref={backdropRef}
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0,
              backgroundColor: 'var(--nav-drawer-backdrop)',
              willChange: 'opacity',
            }}
          />

          {/* Cortina SVG Orgánica que se expande y recoge con la línea roja */}
          <svg
            className="pointer-events-none absolute inset-0 z-20 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={drawerFillRef}
              d="M 100,0 L 100,0 Q 100,44 100,100 L 100,100 Z"
              fill="var(--bg-primary)"
              fillOpacity="1"
            />
            <path
              ref={drawerGlowRef}
              d="M 100,0 Q 100,44 100,100"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeOpacity="0"
              vectorEffect="non-scaling-stroke"
              style={{ filter: 'blur(6px)' }}
            />
            <path
              ref={drawerStrokeRef}
              d="M 100,0 Q 100,44 100,100"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.2"
              strokeOpacity="0"
              vectorEffect="non-scaling-stroke"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 77, 77, 0.55))',
              }}
            />
          </svg>

          {/* Contenido del taskbar recortado 1:1 por la curva de la línea roja */}
          <div
            ref={drawerContentRef}
            className="mobile-drawer-inner absolute inset-0 z-30"
            style={{
              clipPath: 'inset(0 0 0 100%)',
              opacity: 0,
              willChange: 'clip-path',
            }}
          >
            {/* Resplandor ambiental coral en el interior del menú */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                opacity: 0.12,
                background:
                  'radial-gradient(circle at 80% 35%, var(--accent) 0%, transparent 65%)',
              }}
            />

            {/* Bloque balanceado: 5 enlaces en rieles + botón Agendar Cita + pie Cambiar Tema */}
            <div className="relative z-10 my-auto flex w-full flex-col">
              <div
                key={railAnimCycle}
                className={`nav-rail-mobile flex flex-col ${
                  animateMobileRails ? 'animate-rails' : ''
                }`}
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <div key={item.id} className="nav-rail-track">
                      <div className="mx-auto w-full max-w-md px-5">
                        <button
                          type="button"
                          aria-current={isActive ? 'location' : undefined}
                          onFocus={() => prefetchRoute(item.to)}
                          onTouchStart={() => prefetchRoute(item.to)}
                          onClick={() => handleMobileNavSelect(item)}
                          className={`nav-link-mobile cursor-pointer text-base font-semibold sm:text-lg ${
                            isActive ? 'is-active' : ''
                          }`}
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          <span className="nav-link-mobile-label">{item.label}</span>
                          <span className="nav-mobile-led" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Exclusión estricta: "Agendar Cita" fijo sin rieles laterales extendidos */}
              <div className="mobile-cta-wrap mx-auto w-full max-w-md">
                <button
                  type="button"
                  onClick={() =>
                    closeMenuWithAction(
                      () => {
                        onAgendarClick()
                      },
                      { durationMs: 260, overlapAt: 0.3 },
                    )
                  }
                  className="nav-link-mobile nav-mobile-cta cursor-pointer text-base font-bold sm:text-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <span className="nav-link-mobile-label">Agendar Cita</span>
                  <span className="nav-mobile-led nav-mobile-led-cta" aria-hidden="true" />
                </button>
              </div>

              {/* Pie del menú móvil en flujo natural con equidistancia simétrica */}
              <div className="mobile-menu-footer">
                <DevAccentToggle inline />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
