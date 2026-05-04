import { AlertCircle, ArrowRight, Calendar } from 'lucide-react'
import type { CalendarDay } from '../types/site'

const WEEKDAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'] as const

type Props = {
  isRegistered: boolean
  calendarDays: CalendarDay[]
  onGoToKyc: () => void
  onDayClick?: (day: string) => void
}

export function CalendarSection({ isRegistered, calendarDays, onGoToKyc, onDayClick }: Props) {
  const formatter = new Intl.DateTimeFormat('es-CL', { month: 'long', year: 'numeric', timeZone: 'America/Santiago' });
  const now = new Date();
  const currentMonthYear = formatter.format(now);
  const headerText = currentMonthYear.charAt(0).toUpperCase() + currentMonthYear.slice(1);

  // Calcular en qué día de la semana empieza el mes actual y cuántos días tiene
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Santiago', year: 'numeric', month: 'numeric' }).formatToParts(now);
  const yearStr = parts.find(p => p.type === 'year')?.value || now.getFullYear().toString();
  const monthStr = parts.find(p => p.type === 'month')?.value || (now.getMonth() + 1).toString();

  const firstDayDate = new Date(`${yearStr}-${monthStr.padStart(2, '0')}-01T12:00:00`);
  const jsDay = firstDayDate.getDay();
  const emptyCells = jsDay === 0 ? 6 : jsDay - 1;
  const emptyCellsArray = Array.from({ length: emptyCells }, (_, i) => i);

  const daysInMonth = new Date(parseInt(yearStr), parseInt(monthStr), 0).getDate();
  const actualCalendarDays = calendarDays.slice(0, daysInMonth).map((day, idx) => {
    const cellIndex = (emptyCells + idx) % 7;
    const isWeekend = cellIndex === 5 || cellIndex === 6; // 5=Sábado, 6=Domingo
    if (isWeekend) {
      return { ...day, status: 'Ocupado' as const };
    }
    return day;
  });

  return (
    <section id="calendario-section" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <div
          className="mb-4 flex items-center justify-center gap-3 font-bold"
          style={{ color: 'var(--accent)' }}
        >
          <Calendar size={20} aria-hidden />
          <span className="text-xs uppercase tracking-widest">Paso 2: Agendamiento</span>
        </div>
        <h2
          className="text-4xl"
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            textTransform: 'var(--heading-transform)' as any,
            letterSpacing: 'var(--heading-spacing)',
          }}
        >
          Disponibilidad de Sesiones
        </h2>
      </div>

      <div className="relative">
        {!isRegistered && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center border backdrop-blur-md"
            style={{
              borderRadius: 'var(--radius-card-lg)',
              borderColor: 'var(--border-primary)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <div
              className="max-w-sm border p-10 text-center shadow-2xl"
              style={{
                borderRadius: 'var(--radius-card)',
                borderColor: 'var(--border-card)',
                backgroundColor: 'var(--bg-card-solid)',
              }}
            >
              <AlertCircle
                size={48}
                className="mx-auto mb-6"
                style={{ color: 'var(--accent)' }}
                aria-hidden
              />
              <h3
                className="mb-3 text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Acceso Restringido
              </h3>
              <p
                className="mb-6 text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                Debes completar el registro KYC arriba para desbloquear el calendario y ver las horas
                disponibles.
              </p>
              <button
                type="button"
                onClick={onGoToKyc}
                className="mx-auto flex items-center gap-2 font-bold transition-all hover:gap-3"
                style={{ color: 'var(--accent-text)' }}
              >
                Ir al registro <ArrowRight size={18} aria-hidden />
              </button>
            </div>
          </div>
        )}

        <div
          className={`border p-8 ${!isRegistered ? 'pointer-events-none opacity-20' : 'opacity-100'
            }`}
          style={{
            borderRadius: 'var(--radius-card-lg)',
            borderColor: 'var(--border-card)',
            borderWidth: 'var(--card-border-width)',
            backgroundColor: 'var(--bg-section-alt)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="mb-8 flex items-center justify-between">
            <h4
              className="text-lg font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              {headerText}
            </h4>
            <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full border"
                  style={{
                    borderColor: 'var(--border-accent)',
                    backgroundColor: 'var(--accent-soft)',
                  }}
                />
                <span style={{ color: 'var(--text-muted)' }}>Ocupado</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: 'var(--accent)',
                    boxShadow: 'var(--shadow-accent)',
                  }}
                />
                <span style={{ color: 'var(--text-secondary)' }}>Disponible</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className="pb-2 text-center text-[10px] font-black"
                style={{ color: 'var(--text-muted)' }}
              >
                {d}
              </div>
            ))}
            {emptyCellsArray.map((i) => (
              <div key={`empty-${i}`} />
            ))}
            {actualCalendarDays.map((day) => (
              <button
                key={day.day}
                type="button"
                onClick={() => onDayClick?.(day.day)}
                disabled={day.status === 'Ocupado'}
                className="flex aspect-square items-center justify-center rounded-2xl border text-sm font-bold transition-all"
                style={{
                  borderColor:
                    day.status === 'Disponible'
                      ? 'var(--border-accent)'
                      : 'var(--border-card)',
                  backgroundColor:
                    day.status === 'Disponible'
                      ? 'var(--accent-soft)'
                      : 'transparent',
                  color:
                    day.status === 'Disponible'
                      ? 'var(--accent-text)'
                      : 'var(--text-muted)',
                  cursor: day.status === 'Ocupado' ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (day.status === 'Disponible') {
                    e.currentTarget.style.backgroundColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--text-inverse)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-accent)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (day.status === 'Disponible') {
                    e.currentTarget.style.backgroundColor = 'var(--accent-soft)'
                    e.currentTarget.style.color = 'var(--accent-text)'
                    e.currentTarget.style.boxShadow = 'none'
                  }
                }}
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
