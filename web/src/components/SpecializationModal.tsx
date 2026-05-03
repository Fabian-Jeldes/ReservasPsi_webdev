import { X } from 'lucide-react'
import type { Specialization } from '../types/site'

type Props = {
  spec: Specialization
  onClose: () => void
}

/** Misma estructura visual que el antiguo modal de blog: overlay, panel, cierre, tipografía. */
export function SpecializationModal({ spec, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="spec-modal-title"
    >
      <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[3rem] border border-slate-800 bg-slate-900 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="sticky top-6 float-right mr-6 rounded-full bg-slate-800 p-2 text-white transition-colors hover:bg-rose-500"
          aria-label="Cerrar"
        >
          <X size={20} aria-hidden />
        </button>
        <div className="p-10 md:p-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
            Área clínica
          </span>
          <p className="mt-2 text-sm font-bold uppercase tracking-widest text-rose-400/80">
            {spec.subtitle}
          </p>
          <h2
            id="spec-modal-title"
            className="mb-8 mt-4 text-3xl font-black leading-tight text-white md:text-4xl"
          >
            {spec.title}
          </h2>
          <div className="max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-slate-400">{spec.description}</p>
            <p className="text-lg leading-relaxed text-slate-400">{spec.moreContent}</p>
          </div>
          <div className="mt-12 flex justify-end border-t border-slate-800 pt-8">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-slate-800 px-6 py-2 text-sm font-bold text-white transition-all hover:bg-slate-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
