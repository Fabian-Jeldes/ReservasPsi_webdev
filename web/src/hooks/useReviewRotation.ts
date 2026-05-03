import { useCallback, useEffect, useRef, useState } from 'react'

type Options = {
  /** Tiempo entre cambios de reseña (ms). Por defecto 6000. */
  intervalMs?: number
  /** Duración del fade antes de cambiar el índice (ms). Por defecto 400. */
  fadeMs?: number
}

/** Fisher-Yates shuffle (in-place) */
function shuffle<T>(array: T[]): T[] {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Avanza el índice de reseña en bucle aleatorio.
 * Baraja los índices, los recorre todos, luego re-baraja evitando repetir
 * la última reseña al inicio del nuevo ciclo.
 */
export function useReviewRotation(total: number, options?: Options) {
  const intervalMs = options?.intervalMs ?? 6000
  const fadeMs = options?.fadeMs ?? 400

  const [order, setOrder] = useState<number[]>(() => {
    if (total <= 0) return []
    return shuffle(Array.from({ length: total }, (_, i) => i))
  })
  const [position, setPosition] = useState(0)
  const [fade, setFade] = useState(true)

  const positionRef = useRef(position)
  positionRef.current = position

  const orderRef = useRef(order)
  orderRef.current = order

  // Reshuffle when we exhaust the current order
  const advance = useCallback(() => {
    const nextPos = positionRef.current + 1
    if (nextPos >= orderRef.current.length) {
      // Reshuffle, avoiding the last shown review at position 0
      const lastShown = orderRef.current[orderRef.current.length - 1]
      let newOrder = shuffle(Array.from({ length: total }, (_, i) => i))
      // If the new first element is the same as the last shown, swap it
      if (newOrder[0] === lastShown && newOrder.length > 1) {
        const swapIdx = 1 + Math.floor(Math.random() * (newOrder.length - 1))
        ;[newOrder[0], newOrder[swapIdx]] = [newOrder[swapIdx], newOrder[0]]
      }
      setOrder(newOrder)
      setPosition(0)
    } else {
      setPosition(nextPos)
    }
  }, [total])

  useEffect(() => {
    if (total <= 0) return

    let fadeTimeout: ReturnType<typeof setTimeout> | undefined

    const interval = window.setInterval(() => {
      setFade(false)
      if (fadeTimeout !== undefined) window.clearTimeout(fadeTimeout)
      fadeTimeout = window.setTimeout(() => {
        advance()
        setFade(true)
      }, fadeMs)
    }, intervalMs)

    return () => {
      window.clearInterval(interval)
      if (fadeTimeout !== undefined) window.clearTimeout(fadeTimeout)
    }
  }, [total, intervalMs, fadeMs, advance])

  const currentIndex = order[position] ?? 0

  return { currentIndex, fade, order, position }
}
