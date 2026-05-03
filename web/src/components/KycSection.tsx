import type { ChangeEvent, FormEvent, RefObject } from 'react'
import { CheckCircle2, Lock, User } from 'lucide-react'
import type { KycFormState } from '../types/site'

const PRIVACY_ITEMS = [
  'Cifrado de datos AES-256.',
  'Sincronización segura con Google Calendar.',
  'Sin acceso a terceros ni fines comerciales.',
  'Ficha clínica bajo normativa de salud.',
]

type Props = {
  sectionRef: RefObject<HTMLElement | null>
  kycData: KycFormState
  errors?: Partial<Record<keyof KycFormState, string>>
  onFieldChange: (e: ChangeEvent<HTMLInputElement>) => void
  consentSigned: boolean
  onConsentChange: (checked: boolean) => void
  isRegistered: boolean
  onSubmit: (e: FormEvent) => void
}

export function KycSection({
  sectionRef,
  kycData,
  errors = {},
  onFieldChange,
  consentSigned,
  onConsentChange,
  isRegistered,
  onSubmit,
}: Props) {
  const inputStyle = (hasError: boolean) => ({
    backgroundColor: 'var(--bg-input)',
    borderColor: hasError ? '#ef4444' : 'var(--border-card)',
    color: 'var(--text-primary)',
  })

  return (
    <section ref={sectionRef} id="consentimiento" className="px-6 py-32">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden border p-12"
        style={{
          borderRadius: 'var(--radius-card-lg)',
          borderColor: 'var(--border-card)',
          borderWidth: 'var(--card-border-width)',
          backgroundColor: 'var(--bg-card)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div
          className="absolute left-0 top-0 h-1 w-full opacity-30"
          style={{
            background: `linear-gradient(to right, transparent, var(--accent), transparent)`,
          }}
        />

        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <div
              className="mb-4 flex items-center gap-3 font-bold"
              style={{ color: 'var(--accent)' }}
            >
              <User size={20} aria-hidden />
              <span className="text-xs uppercase tracking-widest">Paso 1: Registro Clínico</span>
            </div>
            <h2
              className="mb-6 text-4xl"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--heading-weight)',
                textTransform: 'var(--heading-transform)' as any,
                letterSpacing: 'var(--heading-spacing)',
              }}
            >
              Identificación de Cliente (KYC)
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Para garantizar un entorno seguro y profesional, requerimos completar tu ficha de
              identificación. Tus datos están protegidos por el{' '}
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                secreto profesional
              </span>{' '}
              y encriptación de extremo a extremo.
            </p>

            {isRegistered ? (
              <div
                className="rounded-3xl border p-8 text-center"
                style={{
                  borderColor: 'var(--success)',
                  backgroundColor: 'var(--success-soft)',
                }}
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg"
                  style={{
                    backgroundColor: 'var(--success)',
                    color: '#ffffff',
                    boxShadow: `0 0 20px var(--success-glow)`,
                  }}
                >
                  <CheckCircle2 size={32} aria-hidden />
                </div>
                <h3
                  className="mb-2 text-xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  ¡Registro Completado!
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Ahora puedes seleccionar tu fecha en el calendario inferior.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre completo"
                      value={kycData.nombre}
                      className="w-full rounded-2xl border px-5 py-4 text-sm transition-all focus:outline-none"
                      style={{
                        ...inputStyle(!!errors.nombre),
                        '--tw-ring-color': 'var(--accent)',
                      } as React.CSSProperties}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.nombre ? '#ef4444' : 'var(--border-card)')}
                      onChange={onFieldChange}
                    />
                    {errors.nombre && <p className="mt-1 ml-2 text-xs text-red-500">{errors.nombre}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="rut"
                      placeholder="RUT (Ej: 12.345.678-9)"
                      value={kycData.rut}
                      className="w-full rounded-2xl border px-5 py-4 text-sm transition-all focus:outline-none"
                      style={inputStyle(!!errors.rut)}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.rut ? '#ef4444' : 'var(--border-card)')}
                      onChange={onFieldChange}
                    />
                    {errors.rut && <p className="mt-1 ml-2 text-xs text-red-500">{errors.rut}</p>}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    autoComplete="email"
                    value={kycData.correo}
                    className="w-full rounded-2xl border px-5 py-4 text-sm transition-all focus:outline-none"
                    style={inputStyle(!!errors.correo)}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.correo ? '#ef4444' : 'var(--border-card)')}
                    onChange={onFieldChange}
                  />
                  {errors.correo && <p className="mt-1 ml-2 text-xs text-red-500">{errors.correo}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="WhatsApp / Teléfono"
                    value={kycData.telefono}
                    className="w-full rounded-2xl border px-5 py-4 text-sm transition-all focus:outline-none"
                    style={inputStyle(!!errors.telefono)}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.telefono ? '#ef4444' : 'var(--border-card)')}
                    onChange={onFieldChange}
                  />
                  {errors.telefono && <p className="mt-1 ml-2 text-xs text-red-500">{errors.telefono}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección completa"
                    value={kycData.direccion}
                    className="w-full rounded-2xl border px-5 py-4 text-sm transition-all focus:outline-none"
                    style={inputStyle(!!errors.direccion)}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.direccion ? '#ef4444' : 'var(--border-card)')}
                    onChange={onFieldChange}
                  />
                  {errors.direccion && <p className="mt-1 ml-2 text-xs text-red-500">{errors.direccion}</p>}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="ciudad"
                      placeholder="Ciudad"
                      value={kycData.ciudad}
                      className="w-full rounded-2xl border px-4 py-4 text-sm focus:outline-none"
                      style={inputStyle(!!errors.ciudad)}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.ciudad ? '#ef4444' : 'var(--border-card)')}
                      onChange={onFieldChange}
                    />
                    {errors.ciudad && <p className="mt-1 ml-2 text-xs text-red-500">{errors.ciudad}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="region"
                      placeholder="Región"
                      value={kycData.region}
                      className="w-full rounded-2xl border px-4 py-4 text-sm focus:outline-none"
                      style={inputStyle(!!errors.region)}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.region ? '#ef4444' : 'var(--border-card)')}
                      onChange={onFieldChange}
                    />
                    {errors.region && <p className="mt-1 ml-2 text-xs text-red-500">{errors.region}</p>}
                  </div>
                </div>

                <div
                  className="mt-6 rounded-3xl border p-6"
                  style={{
                    borderColor: 'var(--border-primary)',
                    backgroundColor: 'var(--bg-input)',
                  }}
                >
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={consentSigned}
                      className="mt-1 h-5 w-5"
                      style={{ accentColor: 'var(--accent)' }}
                      onChange={(e) => onConsentChange(e.target.checked)}
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Acepto los términos del{' '}
                      <span
                        className="underline"
                        style={{ color: 'var(--accent-text)' }}
                      >
                        Consentimiento Informado
                      </span>
                      . Los datos recolectados serán utilizados únicamente para fines terapéuticos.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl py-5 font-black uppercase tracking-widest shadow-xl transition-all active:scale-95"
                  style={{
                    backgroundColor: 'var(--text-primary)',
                    color: 'var(--bg-primary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--text-inverse)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--text-primary)'
                    e.currentTarget.style.color = 'var(--bg-primary)'
                  }}
                >
                  Confirmar Registro Profesional
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div
              className="border p-10"
              style={{
                borderRadius: 'var(--radius-card-lg)',
                borderColor: 'var(--border-card)',
                backgroundColor: 'var(--bg-input)',
              }}
            >
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  color: 'var(--accent)',
                }}
              >
                <Lock size={24} aria-hidden />
              </div>
              <h3
                className="mb-4 text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Privacidad Garantizada
              </h3>
              <ul className="space-y-4">
                {PRIVACY_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0"
                      style={{ color: 'var(--accent)' }}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
