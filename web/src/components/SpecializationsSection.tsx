import { ArrowRight, Heart } from 'lucide-react'
import type { Specialization } from '../types/site'

type Props = {
  items: Specialization[]
  onSelectSpec: (spec: Specialization) => void
}

export function SpecializationsSection({ items, onSelectSpec }: Props) {
  return (
    <section id="especialidades" className="bg-slate-900/20 py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">Áreas de Especialización</h2>
        <p className="mx-auto mb-16 max-w-xl text-slate-500">
          Un enfoque humano para desarmar la ansiedad y reconectar con el placer genuino.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((spec) => (
            <div
              key={spec.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectSpec(spec)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelectSpec(spec)
                }
              }}
              className="group relative cursor-pointer rounded-[2.5rem] border border-slate-800 bg-slate-800/20 p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-rose-500/30 hover:bg-slate-800/40 hover:shadow-[0_0_40px_-10px_rgba(244,63,94,0.25)]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/5 text-rose-500 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white">
                <Heart size={28} aria-hidden />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{spec.title}</h3>
              <p className="mb-5 text-xs font-bold uppercase tracking-widest text-rose-400/80">
                {spec.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-slate-400">{spec.description}</p>
              <div className="mt-8 flex items-center justify-between border-t border-slate-700/30 pt-6">
                <span className="text-xs font-medium text-slate-600" />
                <span
                  className="text-rose-500 transition-transform group-hover:translate-x-2"
                  aria-hidden
                >
                  <ArrowRight size={20} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
