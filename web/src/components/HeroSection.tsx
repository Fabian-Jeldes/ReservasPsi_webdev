import { useState, useEffect, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import { PROFILE_IMAGE_URL } from '../data/site'
import { ElasticBorderCard } from './ElasticBorderCard'

const HERO_ROTATING_PHRASES = [
  'bienestar sexual',
  'paz mental',
  'vínculo auténtico',
] as const

const HERO_ROTATION_INTERVAL_MS = 3500

type Props = {
  onContactClick: () => void
}

export function HeroSection({ onContactClick }: Props) {
  const [activePhraseIdx, setActivePhraseIdx] = useState(0)
  const [leavingPhraseIdx, setLeavingPhraseIdx] = useState<number | null>(null)
  const [timerResetKey, setTimerResetKey] = useState(0)

  const selectPhrase = useCallback((nextIdx: number, isManual = false) => {
    setActivePhraseIdx((currentIdx) => {
      if (nextIdx === currentIdx) return currentIdx
      setLeavingPhraseIdx(currentIdx)
      return nextIdx
    })
    if (isManual) {
      setTimerResetKey((k) => k + 1)
    }
  }, [])

  useEffect(() => {
    if (leavingPhraseIdx === null) return
    const cleanup = window.setTimeout(() => {
      setLeavingPhraseIdx(null)
    }, 660)
    return () => window.clearTimeout(cleanup)
  }, [leavingPhraseIdx])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhraseIdx((currentIdx) => {
        const nextIdx = (currentIdx + 1) % HERO_ROTATING_PHRASES.length
        setLeavingPhraseIdx(currentIdx)
        return nextIdx
      })
    }, HERO_ROTATION_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [timerResetKey])
  return (
    <header
      id="sobre-mi"
      className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-6 pb-20 pt-36 md:flex-row lg:gap-16 lg:px-8"
    >
      <div className="flex-1 max-w-xl lg:max-w-[38rem] text-center md:text-left">
        {/* Badge superior con microinteracción de pulso lento */}
        <div
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]"
          style={{
            borderColor: 'var(--border-accent)',
            backgroundColor: 'var(--accent-soft)',
            color: 'var(--accent-text)',
          }}
        >
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span
              className="status-dot-halo absolute inline-flex h-full w-full rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            <span
              className="status-dot-core relative inline-flex h-2 w-2 rounded-full"
              style={{
                backgroundColor: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
              }}
            />
          </span>
          Consultas Disponibles
        </div>

        {/* Titular principal en 2 líneas estrictas con frase rotativa dinámica */}
        <h1
          className="leading-[1.16] md:leading-[1.12]"
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            textTransform: 'var(--heading-transform)' as any,
            fontSize: 'clamp(2.2rem, 3.6vw, 3.25rem)',
            letterSpacing: '-0.02em',
          }}
        >
          <span className="block md:whitespace-nowrap">
            Terapia enfocada en tu
          </span>
          <span className="hero-rotator-grid mt-1 justify-items-center md:justify-items-start">
            {HERO_ROTATING_PHRASES.map((phrase, idx) => {
              const stateClass =
                idx === activePhraseIdx
                  ? 'is-active'
                  : idx === leavingPhraseIdx
                    ? 'is-leaving'
                    : 'is-waiting'

              return (
                <span
                  key={phrase}
                  aria-hidden={idx !== activePhraseIdx}
                  className={`hero-rotator-item andi-hero-accent font-editorial-accent ${stateClass}`}
                >
                  {phrase}
                </span>
              )
            })}
          </span>
        </h1>

        {/* Indicadores interactivos (Ancla visual de 3 puntos) */}
        <div
          className="mt-3.5 flex items-center justify-center gap-2 md:justify-start"
          role="tablist"
          aria-label="Enfoques de la terapia"
        >
          {HERO_ROTATING_PHRASES.map((phrase, idx) => {
            const isActive = idx === activePhraseIdx
            return (
              <button
                key={phrase}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Mostrar frase: ${phrase}`}
                onClick={() => selectPhrase(idx, true)}
                onMouseEnter={() => selectPhrase(idx, true)}
                className="cursor-pointer rounded-full border-0 p-0"
                style={{
                  height: '6px',
                  width: isActive ? '20px' : '6px',
                  backgroundColor: isActive
                    ? 'var(--accent)'
                    : 'rgba(255, 255, 255, 0.25)',
                  boxShadow: isActive
                    ? '0 0 10px var(--accent), 0 0 4px rgba(255, 77, 77, 0.55)'
                    : 'none',
                  transition:
                    'width 450ms cubic-bezier(0.22, 1, 0.36, 1), background-color 350ms ease, box-shadow 350ms ease',
                }}
              />
            )
          })}
        </div>

        <p
          className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--text-primary)' }}
        >
          Soy{' '}
          <span className="font-bold brand-text">
            <span className="brand-initial">A</span>ndrei{' '}
            <span className="brand-initial">A</span>ndrusco{' '}
            <span className="brand-initial">F</span>idalgo
          </span>
          , psicólogo y sexólogo clínico. Te invito a que juntos entendamos tu{' '}
          <strong className="font-bold text-white">cuerpo</strong> y tu{' '}
          <strong className="font-bold text-white">sexualidad</strong> desde una
          mirada distinta: más libre, sin juicios ni presiones. Busquemos una
          forma que te funcione y, sobre todo, que te haga{' '}
          <strong className="font-bold" style={{ color: 'var(--accent)' }}>
            feliz
          </strong>{' '}
          a ti.
        </p>

        {/* CTA Principal optimizado con mayor peso visual, saturación y brillo */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:justify-start">
          <button
            type="button"
            onClick={onContactClick}
            className="group relative overflow-hidden flex items-center gap-3 px-9 py-4.5 text-base md:text-lg font-extrabold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] cursor-pointer"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #FF5C5C 0%, var(--accent) 55%, var(--accent-hover) 100%)',
              backgroundColor: 'var(--accent)',
              color: '#ffffff',
              borderRadius: 'var(--radius-card)',
              boxShadow:
                'var(--shadow-accent), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                'var(--shadow-accent-lg), inset 0 1px 2px rgba(255, 255, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                'var(--shadow-accent), inset 0 1px 1px rgba(255, 255, 255, 0.35)'
            }}
          >
            {/* Destello sutil al hacer hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span className="relative z-10">Ver horas disponibles</span>
            <ArrowRight
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </button>
        </div>
      </div>

      {/* Fotografía con marco rojo coral corporativo, sombra difusa cálida y borde elástico reactivo al cursor */}
      <div className="group relative shrink-0">
        <div
          className="pointer-events-none absolute -inset-3 rounded-full blur-[65px] transition-all duration-700 group-hover:blur-[80px]"
          style={{ backgroundColor: 'var(--accent-glow)' }}
        />
        <ElasticBorderCard
          className="h-64 w-64 md:h-96 md:w-96"
          cornerRadius={28}
          maxPull={20}
          borderWidth={2}
          restingStrokeOpacity={0.9}
          innerPadding={12}
          backgroundColor="var(--bg-card)"
          boxShadow="var(--shadow-photo-frame, 0 24px 60px -12px rgba(255, 77, 77, 0.4), 0 10px 30px -6px rgba(255, 115, 77, 0.25), 0 0 25px rgba(255, 77, 77, 0.2))"
        >
          <img
            src={PROFILE_IMAGE_URL}
            alt="Andrei Andrusco Fidalgo, psicólogo clínico"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </ElasticBorderCard>
      </div>
    </header>
  )
}
