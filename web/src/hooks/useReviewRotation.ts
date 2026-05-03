import { useEffect, useState } from 'react'

type Options = {
  /** Tiempo entre cambios de reseña (ms). Por defecto 6000. */
  intervalMs?: number
  /** Duración del fade antes de cambiar el índice (ms). Por defecto 500. */
  fadeMs?: number
}

/**
 * Avanza el índice de reseña en bucle y sincroniza un booleano `fade` para animar la transición.
 * Encapsula timers y su limpieza al desmontar el componente.
 */
export function useReviewRotation(total: number, options?: Options) {
  const intervalMs = options?.intervalMs ?? 6000
  const fadeMs = options?.fadeMs ?? 500

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    if (total <= 0) return

    let fadeTimeout: ReturnType<typeof setTimeout> | undefined

    const interval = window.setInterval(() => {
      setFade(false)
      if (fadeTimeout !== undefined) window.clearTimeout(fadeTimeout)
      fadeTimeout = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % total)
        setFade(true)
      }, fadeMs)
    }, intervalMs)

    return () => {
      window.clearInterval(interval)
      if (fadeTimeout !== undefined) window.clearTimeout(fadeTimeout)
    }
  }, [total, intervalMs, fadeMs])

  return { currentIndex, fade }
}
