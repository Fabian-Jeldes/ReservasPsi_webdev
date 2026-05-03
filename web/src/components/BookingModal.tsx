import { useState } from 'react'
import { Calendar, Clock, CreditCard, Lock, ArrowLeft, X } from 'lucide-react'

type Props = {
  day: string
  pacienteNombre: string
  onClose: () => void
  onConfirm: (time: string) => void
  isProcessing: boolean
}

// Generamos los bloques de horas de 08:00 a 19:00
const TIME_BLOCKS = Array.from({ length: 12 }, (_, i) => {
  const hour = i + 8
  return `${hour.toString().padStart(2, '0')}:00`
})

export function BookingModal({ day, pacienteNombre, onClose, onConfirm, isProcessing }: Props) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={isProcessing ? undefined : onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 shadow-2xl transition-all">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50" />
        
        <button
          onClick={onClose}
          disabled={isProcessing}
          className="absolute right-6 top-6 z-10 rounded-full bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {!selectedTime ? (
          // PASO 1: Selección de Hora
          <div className="p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
              <Clock size={32} />
            </div>
            
            <h3 className="mb-2 text-2xl font-bold text-white">Selecciona una hora</h3>
            <p className="mb-8 text-sm text-slate-400">
              Disponibilidad para el día <span className="font-bold text-white">{day} de Marzo</span>.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {TIME_BLOCKS.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className="rounded-xl border border-slate-800 bg-slate-950/50 py-3 text-sm font-bold text-slate-300 transition-all hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-400 active:scale-95"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // PASO 2: Confirmación
          <div className="p-10">
            {/* Botón volver */}
            <button
              onClick={() => setSelectedTime(null)}
              disabled={isProcessing}
              className="absolute left-6 top-6 z-10 flex items-center gap-1 rounded-full px-3 py-2 text-xs font-bold text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} /> Volver
            </button>

            <div className="mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
              <Calendar size={32} />
            </div>
            
            <h3 className="mb-2 text-2xl font-bold text-white">Confirmar Reserva</h3>
            <p className="mb-8 text-sm text-slate-400">
              Hola <span className="font-medium text-slate-300">{pacienteNombre}</span>, estás a un paso de confirmar tu sesión.
            </p>

            <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Fecha y Hora:</span>
                <span className="font-bold text-white text-right">{day} de Marzo<br/><span className="text-rose-400">{selectedTime} hrs</span></span>
              </div>
              <div className="h-px w-full bg-slate-800" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Valor consulta:</span>
                <span className="text-xl font-black text-rose-400">$35.000 CLP</span>
              </div>
            </div>

            <div className="mb-8 flex items-start gap-3 rounded-xl bg-blue-500/10 p-4 border border-blue-500/20">
              <Lock size={16} className="mt-0.5 text-blue-400 shrink-0" />
              <p className="text-xs leading-relaxed text-blue-200/70">
                El pago se procesa de forma segura mediante <strong>MercadoPago</strong>. 
                El enlace para tu sesión (Google Meet) será enviado automáticamente a tu correo tras el pago.
              </p>
            </div>

            <button
              onClick={() => onConfirm(selectedTime)}
              disabled={isProcessing}
              className={`flex w-full items-center justify-center gap-2 rounded-2xl py-5 font-black uppercase tracking-widest transition-all ${
                isProcessing 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-white text-slate-950 hover:bg-rose-500 hover:text-white shadow-xl hover:shadow-rose-500/25 active:scale-95'
              }`}
            >
              {isProcessing ? (
                <span className="animate-pulse">Procesando...</span>
              ) : (
                <>
                  <CreditCard size={20} />
                  Proceder al Pago
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
