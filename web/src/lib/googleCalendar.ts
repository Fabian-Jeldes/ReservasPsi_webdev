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
export async function fetchCalendarBusySlots(): Promise<{ start: string, end: string }[]> {
  const workerUrl = import.meta.env.DEV ? 'http://localhost:8787/api/calendar/availability' : '/api/calendar/availability'
  
  try {
    const res = await fetch(workerUrl, { method: 'GET' })
    if (!res.ok) return []
    const data = await res.json() as any
    return data.busy || []
  } catch {
    return []
  }
}
