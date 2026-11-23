import { useState, useCallback, useEffect, useRef } from 'react'
import { X, Calendar, Mail, Phone, User, ExternalLink, CheckCircle2 } from 'lucide-react'
import { kycSchema } from '../types/site'
import type { KycFormState } from '../types/site'
import { EMPTY_KYC } from '../data/site'
import { track } from '../lib/posthog'
import { useFocusTrap } from '../hooks/useFocusTrap'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const CALENDAR_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ39Fat2nS_wIdN-K0US69F2Hslv6FdqocYB_sC5Xow3g21NP1iE7dK29uQ39Fd12ZK80_QJptz9'

export function AppointmentModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<1 | 2>(1)
  const [formData, setFormData] = useState<KycFormState>(EMPTY_KYC)
  const [errors, setErrors] = useState<Partial<Record<keyof KycFormState, string>>>({})
  const dialogRef = useRef<HTMLDivElement>(null)
  const step2HeadingRef = useRef<HTMLHeadingElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = kycSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof KycFormState, string>> = {}
      result.error.issues.forEach(issue => {
        const field = issue.path[0]
        if (typeof field === 'string' && field in formData) {
          fieldErrors[field as keyof KycFormState] = issue.message
        }
      })
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setStep(2)
    track('reserva_datos_completados')
  }

  useEffect(() => {
    if (isOpen && step === 2) {
      step2HeadingRef.current?.focus()
    }
  }, [isOpen, step])

  const handleClose = useCallback(() => {
    onClose()
    // Reset after a delay to allow for exit animation if any
    setTimeout(() => {
      setStep(1)
      setFormData(EMPTY_KYC)
      setErrors({})
    }, 300)
  }, [onClose])

  useFocusTrap({
    containerRef: dialogRef,
    isActive: isOpen,
    onEscape: handleClose,
  })

  if (!isOpen) return null

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-md transition-opacity duration-500"
        style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Modal Container — ph-no-capture: PostHog no registra clics, textos ni replay con datos del paciente */}
      <div
        className="ph-no-capture relative w-full max-w-lg overflow-hidden border shadow-2xl animate-in fade-in zoom-in duration-300"
        style={{
          borderRadius: 'var(--radius-card-lg)',
          borderColor: 'var(--border-card)',
          backgroundColor: 'var(--bg-card-solid)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        {/* Top Accent Line */}
        <div
          className="absolute left-0 top-0 h-1 w-full"
          aria-hidden="true"
          style={{
            background: `linear-gradient(to right, transparent, var(--accent), transparent)`,
          }}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar ventana de agendamiento"
          className="absolute right-6 top-6 z-10 cursor-pointer rounded-full p-2 transition-all hover:scale-110 active:scale-95"
          style={{
            backgroundColor: 'var(--accent-soft)',
            color: 'var(--accent-text)',
          }}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="p-8 md:p-12">
          {step === 1 ? (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                aria-hidden="true"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  color: 'var(--accent)',
                }}
              >
                <User size={28} aria-hidden="true" />
              </div>
              
              <h2
                id="appointment-modal-title"
                className="mb-3 text-3xl font-bold"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
              >
                Comencemos
              </h2>
              <p className="mb-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Por favor, ingresa tus datos básicos para poder coordinar tu atención. 
                Toda la información es tratada con estricta confidencialidad.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} aria-hidden="true" />
                    <input
                      type="text"
                      name="nombre"
                      aria-label="Nombre completo"
                      aria-invalid={Boolean(errors.nombre)}
                      autoComplete="name"
                      maxLength={120}
                      placeholder="Nombre completo"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full rounded-2xl border bg-transparent py-4 pl-12 pr-4 transition-all focus:outline-none"
                      style={{
                        borderColor: errors.nombre ? 'var(--error)' : 'var(--border-primary)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                  {errors.nombre && <p className="px-2 text-xs font-medium" style={{ color: 'var(--accent-text)' }}>{errors.nombre}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} aria-hidden="true" />
                    <input
                      type="email"
                      name="correo"
                      aria-label="Correo electrónico"
                      aria-invalid={Boolean(errors.correo)}
                      autoComplete="email"
                      maxLength={254}
                      placeholder="Correo electrónico"
                      value={formData.correo}
                      onChange={handleChange}
                      className="w-full rounded-2xl border bg-transparent py-4 pl-12 pr-4 transition-all focus:outline-none"
                      style={{
                        borderColor: errors.correo ? 'var(--error)' : 'var(--border-primary)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                  {errors.correo && <p className="px-2 text-xs font-medium" style={{ color: 'var(--accent-text)' }}>{errors.correo}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} aria-hidden="true" />
                    <input
                      type="tel"
                      name="telefono"
                      aria-label="Número de WhatsApp"
                      aria-invalid={Boolean(errors.telefono)}
                      autoComplete="tel"
                      maxLength={25}
                      placeholder="Número de WhatsApp"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full rounded-2xl border bg-transparent py-4 pl-12 pr-4 transition-all focus:outline-none"
                      style={{
                        borderColor: errors.telefono ? 'var(--error)' : 'var(--border-primary)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                  {errors.telefono && <p className="px-2 text-xs font-medium" style={{ color: 'var(--accent-text)' }}>{errors.telefono}</p>}
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full cursor-pointer rounded-2xl py-5 font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--text-inverse)',
                    boxShadow: 'var(--shadow-accent)',
                  }}
                >
                  Siguiente
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center animate-in fade-in slide-in-from-right-4 duration-500">
              <div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                aria-hidden="true"
                style={{
                  backgroundColor: 'var(--success-soft)',
                  color: '#22c55e',
                }}
              >
                <CheckCircle2 size={36} aria-hidden="true" />
              </div>
              
              <h2
                ref={step2HeadingRef}
                tabIndex={-1}
                id="appointment-modal-title"
                className="mb-4 text-3xl font-bold focus:outline-none"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
              >
                ¡Datos recibidos!
              </h2>
              <p className="mb-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Gracias, <span className="font-bold theme-text">{formData.nombre}</span>. 
                Ahora puedes seleccionar el horario que más te acomode en el calendario de Andrei. 
                Al finalizar, recibirás la confirmación por correo.
              </p>

              <div className="space-y-4">
                <a
                  href={`${CALENDAR_URL}?gv.firstname=${encodeURIComponent(formData.nombre.trim())}&gv.emailaddress=${encodeURIComponent(formData.correo.trim())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  onClick={() => track('reserva_calendario_abierto')}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl py-5 font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--text-inverse)',
                    boxShadow: 'var(--shadow-accent)',
                  }}
                >
                  <Calendar size={20} aria-hidden="true" />
                  Ver Disponibilidad
                  <ExternalLink size={16} className="opacity-70" aria-hidden="true" />
                </a>
                
                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>
                  Se abrirá en una nueva pestaña
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
