import { ArrowRight, ShieldCheck } from 'lucide-react'
import { PROFILE_IMAGE_URL } from '../data/site'

type Props = {
  calendarUpdate: string
  onContactClick: () => void
}

export function HeroSection({ calendarUpdate, onContactClick }: Props) {
  return (
    <header className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 pb-20 pt-40 md:flex-row">
      <div className="flex-1 text-center md:text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
          </span>
          Consultas Disponibles
        </div>
        <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Redescubre tu <br />
          <span className="andi-hero-accent">bienestar sexual</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-400">
          Hola, soy <span className="font-semibold text-white">Andi</span>. Psicólogo clínico. Te
          acompaño a entender tu cuerpo y mente sin juicios ni presiones.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:justify-start">
          <button
            type="button"
            onClick={onContactClick}
            className="group flex items-center gap-2 rounded-2xl bg-rose-500 px-8 py-4 font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(244,63,94,0.5)]"
          >
            Contactar ahora{' '}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <div className="flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/30 px-5 py-3 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              Sincronizado:
            </span>
            <span className="font-mono text-sm text-slate-300">{calendarUpdate}</span>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="absolute inset-0 rounded-full bg-rose-500/20 blur-[60px] transition-all duration-700 group-hover:bg-rose-500/30" />
        <div className="relative h-64 w-64 overflow-hidden rounded-[3rem] border border-slate-700 bg-slate-900/50 p-3 backdrop-blur-xl md:h-96 md:w-96">
          <img
            src={PROFILE_IMAGE_URL}
            alt="Andi, psicólogo clínico"
            className="h-full w-full rounded-[2.5rem] object-cover grayscale transition-all duration-1000 hover:grayscale-0"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 rounded-3xl border border-slate-700 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-500/10 p-2 text-green-400">
              <ShieldCheck size={24} aria-hidden />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-slate-500">Validación</p>
              <p className="text-sm font-bold text-white">Certificado Clínico</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
