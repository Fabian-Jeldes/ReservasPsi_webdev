import type { Review } from '../types/site'

type Props = {
  reviews: Review[]
  currentIndex: number
  fade: boolean
}

export function ReviewsSection({ reviews, currentIndex, fade }: Props) {
  const current = reviews[currentIndex]
  if (!current) return null

  return (
    <section id="reviews" className="overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-[4rem] border border-slate-800 bg-[#0f172a] p-12 shadow-2xl">
          <div className="absolute right-12 top-0 translate-y-[-50%] rounded-full bg-rose-500 px-6 py-2 text-sm font-bold text-white shadow-xl">
            Doctoralia Verified
          </div>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="shrink-0 text-center md:text-left">
              <div className="mb-4 flex justify-center gap-1 md:justify-start">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-1.5 animate-pulse rounded-full bg-rose-500"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-white">
                Lo que dicen <br />
                mis pacientes
              </h2>
            </div>

            <div
              className={`flex min-h-[140px] flex-1 items-center transition-all duration-700 ${
                fade ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative">
                <div className="absolute -left-6 -top-6 scale-[4] text-rose-500/20">&quot;</div>
                <p className="relative z-10 text-xl italic leading-relaxed text-slate-300">
                  {current.content}
                </p>
                <p className="mt-6 font-bold tracking-wide text-rose-400">— {current.author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
