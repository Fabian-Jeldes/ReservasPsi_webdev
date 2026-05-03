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
  return (
    <section ref={sectionRef} id="consentimiento" className="px-6 py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3.5rem] border border-slate-800 bg-slate-900/40 p-12">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-30" />

        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3 font-bold text-rose-500">
              <User size={20} aria-hidden />
              <span className="text-xs uppercase tracking-widest">Paso 1: Registro Clínico</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-white">Identificación de Cliente (KYC)</h2>
            <p className="mb-8 leading-relaxed text-slate-400">
              Para garantizar un entorno seguro y profesional, requerimos completar tu ficha de
              identificación. Tus datos están protegidos por el{' '}
              <span className="font-medium text-white">secreto profesional</span> y encriptación de
              extremo a extremo.
            </p>

            {isRegistered ? (
              <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  <CheckCircle2 size={32} aria-hidden />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">¡Registro Completado!</h3>
                <p className="text-sm text-slate-400">
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
                      className={`w-full rounded-2xl border ${errors.nombre ? 'border-red-500' : 'border-slate-800'} bg-slate-950/50 px-5 py-4 text-sm transition-all focus:border-rose-500 focus:outline-none`}
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
                      className={`w-full rounded-2xl border ${errors.rut ? 'border-red-500' : 'border-slate-800'} bg-slate-950/50 px-5 py-4 text-sm transition-all focus:border-rose-500 focus:outline-none`}
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
                    className={`w-full rounded-2xl border ${errors.correo ? 'border-red-500' : 'border-slate-800'} bg-slate-950/50 px-5 py-4 text-sm transition-all focus:border-rose-500 focus:outline-none`}
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
                    className={`w-full rounded-2xl border ${errors.telefono ? 'border-red-500' : 'border-slate-800'} bg-slate-950/50 px-5 py-4 text-sm transition-all focus:border-rose-500 focus:outline-none`}
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
                    className={`w-full rounded-2xl border ${errors.direccion ? 'border-red-500' : 'border-slate-800'} bg-slate-950/50 px-5 py-4 text-sm transition-all focus:border-rose-500 focus:outline-none`}
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
                      className={`w-full rounded-2xl border ${errors.ciudad ? 'border-red-500' : 'border-slate-800'} bg-slate-950/50 px-4 py-4 text-sm focus:border-rose-500 focus:outline-none`}
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
                      className={`w-full rounded-2xl border ${errors.region ? 'border-red-500' : 'border-slate-800'} bg-slate-950/50 px-4 py-4 text-sm focus:border-rose-500 focus:outline-none`}
                      onChange={onFieldChange}
                    />
                    {errors.region && <p className="mt-1 ml-2 text-xs text-red-500">{errors.region}</p>}
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-slate-800/50 bg-slate-950/30 p-6">
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={consentSigned}
                      className="mt-1 h-5 w-5 accent-rose-500"
                      onChange={(e) => onConsentChange(e.target.checked)}
                    />
                    <label htmlFor="consent" className="text-xs leading-relaxed text-slate-400">
                      Acepto los términos del{' '}
                      <span className="text-rose-400 underline">Consentimiento Informado</span>.
                      Los datos recolectados serán utilizados únicamente para fines terapéuticos.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-white py-5 font-black uppercase tracking-widest text-slate-950 shadow-xl transition-all hover:bg-rose-500 hover:text-white active:scale-95"
                >
                  Confirmar Registro Profesional
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-[3rem] border border-slate-800 bg-slate-950/50 p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
                <Lock size={24} aria-hidden />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Privacidad Garantizada</h3>
              <ul className="space-y-4">
                {PRIVACY_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-500">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-rose-500" aria-hidden />
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
