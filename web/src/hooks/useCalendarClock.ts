import { useEffect, useState } from 'react'

/**
 * Devuelve la hora local formateada y la actualiza cada `tickIntervalMs`.
 * Útil para simular “sincronización” con el servidor/calendario sin polling real.
 */
export function useCalendarClock(tickIntervalMs = 10_000) {
  const [timeLabel, setTimeLabel] = useState(() => new Date().toLocaleTimeString())

  useEffect(() => {
    const id = window.setInterval(() => {
      setTimeLabel(new Date().toLocaleTimeString())
    }, tickIntervalMs)
    return () => window.clearInterval(id)
  }, [tickIntervalMs])

  return timeLabel
}
