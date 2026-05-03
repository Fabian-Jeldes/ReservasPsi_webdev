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
  return (
    <section id="calendario-section" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-3 font-bold text-rose-500">
          <Calendar size={20} aria-hidden />
          <span className="text-xs uppercase tracking-widest">Paso 2: Agendamiento</span>
        </div>
        <h2 className="text-4xl font-bold text-white">Disponibilidad de Sesiones</h2>
      </div>

      <div className="relative">
        {!isRegistered && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[3rem] border border-slate-700/30 bg-slate-900/40 backdrop-blur-md">
            <div className="max-w-sm rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">
              <AlertCircle size={48} className="mx-auto mb-6 text-rose-500" aria-hidden />
              <h3 className="mb-3 text-xl font-bold text-white">Acceso Restringido</h3>
              <p className="mb-6 text-sm text-slate-500">
                Debes completar el registro KYC arriba para desbloquear el calendario y ver las horas
                disponibles.
              </p>
              <button
                type="button"
                onClick={onGoToKyc}
                className="mx-auto flex items-center gap-2 font-bold text-rose-400 transition-all hover:gap-3"
              >
                Ir al registro <ArrowRight size={18} aria-hidden />
              </button>
            </div>
          </div>
        )}

        <div
          className={`rounded-[3rem] border border-slate-800 bg-slate-900/20 p-8 ${
            !isRegistered ? 'pointer-events-none opacity-20' : 'opacity-100'
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <h4 className="text-lg font-bold text-white">Marzo 2024</h4>
            <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full border border-rose-500/40 bg-rose-500/20" />
                <span className="text-slate-500">Ocupado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                <span className="text-slate-300">Disponible</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {WEEKDAYS.map((d) => (
              <div key={d} className="pb-2 text-center text-[10px] font-black text-slate-700">
                {d}
              </div>
            ))}
            {calendarDays.map((day) => (
              <button
                key={day.day}
                type="button"
                onClick={() => onDayClick?.(day.day)}
                disabled={day.status === 'Ocupado'}
                className={`flex aspect-square items-center justify-center rounded-2xl border text-sm font-bold transition-all ${
                  day.status === 'Disponible'
                    ? 'border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                    : 'cursor-not-allowed border-slate-800 bg-slate-800/10 text-slate-700'
                }`}
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
