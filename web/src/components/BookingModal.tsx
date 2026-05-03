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
        className="absolute inset-0 backdrop-blur-sm transition-opacity"
        style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        onClick={isProcessing ? undefined : onClose}
      />
      
      {/* Modal */}
      <div
        className="relative w-full max-w-md overflow-hidden border shadow-2xl transition-all"
        style={{
          borderRadius: 'var(--radius-card)',
          borderColor: 'var(--border-card)',
          backgroundColor: 'var(--bg-card-solid)',
        }}
      >
        <div
          className="absolute left-0 top-0 h-1 w-full opacity-50"
          style={{
            background: `linear-gradient(to right, transparent, var(--accent), transparent)`,
          }}
        />
        
        <button
          onClick={onClose}
          disabled={isProcessing}
          className="absolute right-6 top-6 z-10 rounded-full p-2 transition-colors"
          style={{
            backgroundColor: 'var(--bg-section-alt)',
            color: 'var(--text-secondary)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-soft)'
            e.currentTarget.style.color = 'var(--text-primary)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-section-alt)'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
        >
          <X size={18} />
        </button>

        {!selectedTime ? (
          // PASO 1: Selección de Hora
          <div className="p-10">
            <div
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
              }}
            >
              <Clock size={32} />
            </div>
            
            <h3
              className="mb-2 text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Selecciona una hora
            </h3>
            <p className="mb-8 text-sm" style={{ color: 'var(--text-secondary)' }}>
              Disponibilidad para el día{' '}
              <span className="font-bold" style={{ color: 'var(--text-primary)' }}>
                {day} de Marzo
              </span>
              .
            </p>

            <div className="grid grid-cols-3 gap-3">
              {TIME_BLOCKS.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className="rounded-xl border py-3 text-sm font-bold transition-all active:scale-95"
                  style={{
                    borderColor: 'var(--border-card)',
                    backgroundColor: 'var(--bg-input)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)'
                    e.currentTarget.style.backgroundColor = 'var(--accent-soft)'
                    e.currentTarget.style.color = 'var(--accent-text)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-card)'
                    e.currentTarget.style.backgroundColor = 'var(--bg-input)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
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
              className="absolute left-6 top-6 z-10 flex items-center gap-1 rounded-full px-3 py-2 text-xs font-bold transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-section-alt)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              <ArrowLeft size={14} /> Volver
            </button>

            <div
              className="mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
              }}
            >
              <Calendar size={32} />
            </div>
            
            <h3
              className="mb-2 text-2xl font-bold"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Confirmar Reserva
            </h3>
            <p className="mb-8 text-sm" style={{ color: 'var(--text-secondary)' }}>
              Hola{' '}
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                {pacienteNombre}
              </span>
              , estás a un paso de confirmar tu sesión.
            </p>

            <div
              className="mb-8 space-y-4 rounded-2xl border p-6"
              style={{
                borderColor: 'var(--border-card)',
                backgroundColor: 'var(--bg-input)',
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Fecha y Hora:
                </span>
                <span className="font-bold text-right" style={{ color: 'var(--text-primary)' }}>
                  {day} de Marzo<br/>
                  <span style={{ color: 'var(--accent-text)' }}>{selectedTime} hrs</span>
                </span>
              </div>
              <div className="h-px w-full" style={{ backgroundColor: 'var(--border-card)' }} />
              <div className="flex justify-between items-center">
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Valor consulta:
                </span>
                <span
                  className="text-xl font-black"
                  style={{ color: 'var(--accent-text)' }}
                >
                  $35.000 CLP
                </span>
              </div>
            </div>

            <div
              className="mb-8 flex items-start gap-3 rounded-xl p-4 border"
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: 'rgba(59, 130, 246, 0.2)',
              }}
            >
              <Lock size={16} className="mt-0.5 shrink-0" style={{ color: '#60a5fa' }} />
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                El pago se procesa de forma segura mediante <strong>MercadoPago</strong>. 
                El enlace para tu sesión (Google Meet) será enviado automáticamente a tu correo tras el pago.
              </p>
            </div>

            <button
              onClick={() => onConfirm(selectedTime)}
              disabled={isProcessing}
              className="flex w-full items-center justify-center gap-2 rounded-2xl py-5 font-black uppercase tracking-widest transition-all active:scale-95"
              style={{
                backgroundColor: isProcessing ? 'var(--bg-section-alt)' : 'var(--text-primary)',
                color: isProcessing ? 'var(--text-muted)' : 'var(--bg-primary)',
                cursor: isProcessing ? 'not-allowed' : 'pointer',
                boxShadow: isProcessing ? 'none' : 'var(--shadow-accent)',
              }}
              onMouseEnter={(e) => {
                if (!isProcessing) {
                  e.currentTarget.style.backgroundColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--text-inverse)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isProcessing) {
                  e.currentTarget.style.backgroundColor = 'var(--text-primary)'
                  e.currentTarget.style.color = 'var(--bg-primary)'
                }
              }}
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
