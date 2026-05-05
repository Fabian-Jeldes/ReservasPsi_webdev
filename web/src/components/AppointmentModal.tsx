import { useState, useCallback } from 'react'
import { X, Calendar, Mail, Phone, User, ExternalLink, CheckCircle2 } from 'lucide-react'
import { kycSchema } from '../types/site'
import type { KycFormState } from '../types/site'
import { EMPTY_KYC } from '../data/site'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const CALENDAR_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ39Fat2nS_wIdN-K0US69F2Hslv6FdqocYB_sC5Xow3g21NP1iE7dK29uQ39Fd12ZK80_QJptz9'

export function AppointmentModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<1 | 2>(1)
  const [formData, setFormData] = useState<KycFormState>(EMPTY_KYC)
  const [errors, setErrors] = useState<Partial<Record<keyof KycFormState, string>>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = kycSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: any = {}
      result.error.issues.forEach(issue => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0]] = issue.message
        }
      })
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setStep(2)
  }

  const handleClose = useCallback(() => {
    onClose()
    // Reset after a delay to allow for exit animation if any
    setTimeout(() => {
      setStep(1)
      setFormData(EMPTY_KYC)
      setErrors({})
    }, 300)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-md transition-opacity duration-500"
        style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
        onClick={handleClose}
      />
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-lg overflow-hidden border shadow-2xl animate-in fade-in zoom-in duration-300"
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
          style={{
            background: `linear-gradient(to right, transparent, var(--accent), transparent)`,
          }}
        />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-6 top-6 z-10 rounded-full p-2 transition-all hover:scale-110 active:scale-95"
          style={{
            backgroundColor: 'var(--accent-soft)',
            color: 'var(--accent-text)',
          }}
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          {step === 1 ? (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  color: 'var(--accent)',
                }}
              >
                <User size={28} />
              </div>
              
              <h2
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
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} />
                    <input
                      type="text"
                      name="nombre"
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
                  {errors.nombre && <p className="px-2 text-xs font-medium text-red-400">{errors.nombre}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} />
                    <input
                      type="email"
                      name="correo"
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
                  {errors.correo && <p className="px-2 text-xs font-medium text-red-400">{errors.correo}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={18} />
                    <input
                      type="tel"
                      name="telefono"
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
                  {errors.telefono && <p className="px-2 text-xs font-medium text-red-400">{errors.telefono}</p>}
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-2xl py-5 font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95"
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
                style={{
                  backgroundColor: 'var(--success-soft)',
                  color: '#22c55e',
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              
              <h2
                className="mb-4 text-3xl font-bold"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
              >
                ¡Datos recibidos!
              </h2>
              <p className="mb-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Gracias, <span className="font-bold text-white">{formData.nombre}</span>. 
                Ahora puedes seleccionar el horario que más te acomode en el calendario de Andrei. 
                Al finalizar, recibirás la confirmación por correo.
              </p>

              <div className="space-y-4">
                <a
                  href={`${CALENDAR_URL}?gv.firstname=${encodeURIComponent(formData.nombre)}&gv.emailaddress=${encodeURIComponent(formData.correo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl py-5 font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--text-inverse)',
                    boxShadow: 'var(--shadow-accent)',
                  }}
                >
                  <Calendar size={20} />
                  Ver Disponibilidad
                  <ExternalLink size={16} className="opacity-50" />
                </a>
                
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">
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
