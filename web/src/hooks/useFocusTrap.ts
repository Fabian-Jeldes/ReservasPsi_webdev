import { useEffect, useRef, type RefObject } from 'react'

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

type UseFocusTrapOptions = {
  containerRef: RefObject<HTMLElement | null>
  isActive: boolean
  onEscape?: () => void
  /** Elemento externo que también participa en el ciclo de foco (ej. botón toggle del drawer) */
  includeRef?: RefObject<HTMLElement | null>
}

function getFocusableElements(
  container: HTMLElement | null,
  extra: HTMLElement | null,
): HTMLElement[] {
  const list: HTMLElement[] = []
  if (extra && !extra.hasAttribute('disabled') && extra.offsetParent !== null) {
    list.push(extra)
  }
  if (container) {
    const nodes = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    nodes.forEach((node) => {
      if (node !== extra && node.offsetParent !== null) {
        list.push(node)
      }
    })
  }
  return list
}

/**
 * Implementa focus trap (Tab / Shift+Tab), cierre con Escape y retorno de foco
 * al elemento disparador previo al cerrarse el diálogo o drawer.
 */
export function useFocusTrap({
  containerRef,
  isActive,
  onEscape,
  includeRef,
}: UseFocusTrapOptions) {
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const wasActiveRef = useRef(false)
  const onEscapeRef = useRef(onEscape)

  useEffect(() => {
    onEscapeRef.current = onEscape
  }, [onEscape])

  useEffect(() => {
    if (isActive && !wasActiveRef.current) {
      previousFocusRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null
    }

    if (!isActive) {
      if (wasActiveRef.current) {
        const target = previousFocusRef.current
        previousFocusRef.current = null
        if (target && target.isConnected) {
          target.focus()
        }
      }
      wasActiveRef.current = false
      return
    }

    wasActiveRef.current = true

    const rafId = window.requestAnimationFrame(() => {
      const container = containerRef.current
      if (!container) return
      const inside = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.offsetParent !== null)
      if (inside.length > 0 && !container.contains(document.activeElement)) {
        inside[0].focus()
      }
    })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onEscapeRef.current?.()
        return
      }

      if (event.key !== 'Tab') return

      const focusables = getFocusableElements(
        containerRef.current,
        includeRef?.current ?? null,
      )
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (!active || active === first || !focusables.includes(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (!active || active === last || !focusables.includes(active)) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      window.cancelAnimationFrame(rafId)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [containerRef, includeRef, isActive])
}
