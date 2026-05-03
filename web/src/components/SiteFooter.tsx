import { Lock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/20 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-rose-500 text-sm font-bold text-white shadow-[0_0_10px_rgba(244,63,94,0.3)]">
              A
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Andi</span>
          </div>
          <p className="max-w-sm leading-relaxed text-slate-500">
            Terapia sexual clínica con un enfoque humanista. Recupera tu vida sexual sin presiones ni
            juicios sociales.
          </p>
        </div>

        <div>
          <h5 className="mb-6 font-bold text-white">Contacto</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex cursor-pointer items-center gap-2 transition-colors hover:text-rose-400">
              <Mail size={16} aria-hidden /> hola@andi.cl
            </li>
            <li className="flex cursor-pointer items-center gap-2 transition-colors hover:text-rose-400">
              <Phone size={16} aria-hidden /> +56 9 1234 5678
            </li>
            <li className="flex cursor-pointer items-center gap-2 transition-colors hover:text-rose-400">
              <MapPin size={16} aria-hidden /> Santiago, Chile
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-6 font-bold text-white">Seguridad</h5>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800 text-slate-400 transition-colors hover:text-rose-500">
              <ShieldCheck size={20} aria-hidden />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800 text-slate-400 transition-colors hover:text-rose-500">
              <Lock size={20} aria-hidden />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-800/30 pt-8 md:flex-row">
        <p className="text-[10px] font-black uppercase italic tracking-widest text-slate-600">
          Desarrollado para Andi Project © 2024
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <a href="#" className="transition-colors hover:text-white">
            Términos
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Privacidad
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Clínica Digital
          </a>
        </div>
      </div>
    </footer>
  )
}
