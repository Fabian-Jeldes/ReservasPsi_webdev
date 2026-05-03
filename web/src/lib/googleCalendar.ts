import { generateCalendarDays } from '../data/site'
import type { CalendarDay } from '../types/site'

/**
 * Obtiene disponibilidad para la UI del calendario.
 *
 * - Sin `VITE_CALENDAR_API_BASE_URL`: datos mock locales (misma forma que antes).
 * - Con base URL: GET `{base}/availability` cada ~10s desde el front; el **backend**
 *   es quien debe usar la Google Calendar API con la clave/OAuth de Andi (nunca en el bundle).
 *
 * Contrato sugerido de respuesta: `{ "days": CalendarDay[] }`
 */
export async function fetchCalendarAvailability(): Promise<CalendarDay[]> {
  const base = import.meta.env.VITE_CALENDAR_API_BASE_URL?.replace(/\/$/, '')
  if (!base) {
    return generateCalendarDays()
  }

  try {
    const res = await fetch(`${base}/availability`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) throw new Error(`Calendar API ${res.status}`)
    const data: unknown = await res.json()
    if (
      data &&
      typeof data === 'object' &&
      'days' in data &&
      Array.isArray((data as { days: unknown }).days)
    ) {
      return (data as { days: CalendarDay[] }).days
    }
    throw new Error('Invalid calendar response shape')
  } catch {
    return generateCalendarDays()
  }
}
