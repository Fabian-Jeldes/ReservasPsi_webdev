import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export type NavSectionId =
  | 'sobre-mi'
  | 'especialidades'
  | 'reviews'
  | 'blog'
  | 'preguntas'

export const HOME_SECTION_IDS: readonly NavSectionId[] = [
  'especialidades',
  'reviews',
  'blog',
  'preguntas',
]

function isHomeSectionId(value: string): value is NavSectionId {
  return (HOME_SECTION_IDS as readonly string[]).includes(value)
}

function getRouteSection(pathname: string): NavSectionId | null {
  if (pathname === '/') return null
  if (pathname === '/sobre-mi') return 'sobre-mi'
  if (pathname === '/articulos' || pathname.startsWith('/articulos/')) return 'blog'
  if (
    pathname.startsWith('/especialidades') ||
    pathname.startsWith('/sexualidad-masculina') ||
    pathname.startsWith('/sexualidad-femenina') ||
    pathname.startsWith('/salud-emocional')
  ) {
    return 'especialidades'
  }
  return null
}

/**
 * Detecta la sección activa en la barra de navegación superior:
 * - En la página principal (`/`): en el hero inicial no marca ningún enlace (evitando
 *   que "Sobre Mí" parezca ya abierto); al bajar destaca la sección visible en scroll.
 * - En páginas internas (`/sobre-mi`, `/articulos`, especialidades): resalta la ruta activa.
 * - Al hacer clic en un enlace de ancla, bloquea brevemente la sección destino durante el
 *   scroll suave para evitar parpadeos intermedios.
 */
export function useActiveNavSection() {
  const location = useLocation()
  const [homeSection, setHomeSection] = useState<NavSectionId | null>(null)

  const lockedSectionRef = useRef<NavSectionId | null>(null)
  const lockTimerRef = useRef<number | null>(null)

  const clearLock = useCallback(() => {
    lockedSectionRef.current = null
    if (lockTimerRef.current !== null) {
      window.clearTimeout(lockTimerRef.current)
      lockTimerRef.current = null
    }
  }, [])

  const computeVisibleSection = useCallback((): NavSectionId | null => {
    const navHeight = window.innerWidth >= 768 ? 80 : 64
    const activationLine = Math.max(navHeight + 48, window.innerHeight * 0.32)

    // En pantallas muy altas al llegar al final de la página, asegurar que la última sección se active
    const nearBottom =
      window.scrollY > 120 &&
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 48
    if (nearBottom) {
      const lastId = HOME_SECTION_IDS[HOME_SECTION_IDS.length - 1]
      const lastEl = document.getElementById(lastId)
      if (lastEl && lastEl.getBoundingClientRect().top < window.innerHeight) {
        return lastId
      }
    }

    let current: NavSectionId | null = null
    for (const id of HOME_SECTION_IDS) {
      const el = document.getElementById(id)
      if (!el) continue
      const rect = el.getBoundingClientRect()
      if (rect.top <= activationLine) {
        current = id
      }
    }

    return current
  }, [])

  const armLock = useCallback(
    (section: NavSectionId) => {
      clearLock()
      lockedSectionRef.current = section
      lockTimerRef.current = window.setTimeout(() => {
        lockedSectionRef.current = null
        lockTimerRef.current = null
        setHomeSection(computeVisibleSection())
      }, 950)
    },
    [clearLock, computeVisibleSection],
  )

  const selectSection = useCallback(
    (section: NavSectionId | null) => {
      if (section === null) {
        clearLock()
        setHomeSection(null)
        return
      }
      armLock(section)
      setHomeSection(section)
    },
    [armLock, clearLock],
  )

  useEffect(() => {
    if (location.pathname !== '/') {
      clearLock()
      return
    }

    const hashId = location.hash.replace(/^#/, '')
    if (hashId && isHomeSectionId(hashId)) {
      armLock(hashId)
    }

    let rafId = 0

    const syncFromScroll = () => {
      rafId = 0
      const detected = computeVisibleSection()
      if (lockedSectionRef.current) {
        const target = lockedSectionRef.current
        setHomeSection(target)
        if (detected === target) {
          clearLock()
        }
        return
      }
      setHomeSection(detected)
    }

    const scheduleSync = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(syncFromScroll)
    }

    const handleUserScrollInterrupt = () => {
      if (lockedSectionRef.current) {
        clearLock()
        scheduleSync()
      }
    }

    // Sincronizar en la carga inicial o cambio de hash
    scheduleSync()

    window.addEventListener('scroll', scheduleSync, { passive: true })
    window.addEventListener('resize', scheduleSync, { passive: true })
    window.addEventListener('wheel', handleUserScrollInterrupt, { passive: true })
    window.addEventListener('touchmove', handleUserScrollInterrupt, { passive: true })

    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(scheduleSync, {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.15, 0.4],
      })
      for (const id of HOME_SECTION_IDS) {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      }
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', scheduleSync)
      window.removeEventListener('resize', scheduleSync)
      window.removeEventListener('wheel', handleUserScrollInterrupt)
      window.removeEventListener('touchmove', handleUserScrollInterrupt)
      observer?.disconnect()
    }
  }, [
    location.pathname,
    location.hash,
    location.key,
    armLock,
    clearLock,
    computeVisibleSection,
  ])

  useEffect(() => {
    return () => {
      clearLock()
    }
  }, [clearLock])

  const activeSection: NavSectionId | null =
    location.pathname === '/' ? homeSection : getRouteSection(location.pathname)

  return { activeSection, selectSection }
}
