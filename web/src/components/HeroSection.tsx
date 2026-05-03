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
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest"
          style={{
            borderColor: 'var(--border-accent)',
            backgroundColor: 'var(--accent-soft)',
            color: 'var(--accent-text)',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: 'var(--accent-text)' }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
          </span>
          Consultas Disponibles
        </div>
        <h1
          className="text-5xl leading-tight md:text-7xl"
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--heading-weight)',
            textTransform: 'var(--heading-transform)' as any,
            letterSpacing: 'var(--heading-spacing)',
          }}
        >
          Redescubre tu <br />
          <span className="andi-hero-accent">bienestar sexual</span>
        </h1>
        <p
          className="mt-6 max-w-2xl text-xl leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Hola, soy{' '}
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            Andi
          </span>
          . Psicólogo clínico. Te acompaño a entender tu cuerpo y mente sin juicios ni
          presiones.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:justify-start">
          <button
            type="button"
            onClick={onContactClick}
            className="group flex items-center gap-2 px-8 py-4 font-bold transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--text-inverse)',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-accent)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-accent-lg)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-accent)')}
          >
            Contactar ahora{' '}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <div
            className="flex items-center gap-4 rounded-2xl border px-5 py-3 backdrop-blur-sm"
            style={{
              borderColor: 'var(--border-primary)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: 'var(--accent-text)' }}
            >
              Sincronizado:
            </span>
            <span
              className="font-mono text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              {calendarUpdate}
            </span>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div
          className="absolute inset-0 rounded-full blur-[60px] transition-all duration-700"
          style={{ backgroundColor: 'var(--accent-soft)' }}
        />
        <div
          className="relative h-64 w-64 overflow-hidden border p-3 backdrop-blur-xl md:h-96 md:w-96"
          style={{
            borderRadius: 'var(--radius-card-lg)',
            borderColor: 'var(--border-card)',
            backgroundColor: 'var(--bg-card)',
          }}
        >
          <img
            src={PROFILE_IMAGE_URL}
            alt="Andi, psicólogo clínico"
            className="h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
            style={{ borderRadius: 'var(--radius-card)' }}
          />
        </div>
        <div
          className="absolute -bottom-6 -left-6 rounded-3xl border p-5 shadow-2xl backdrop-blur-md"
          style={{
            borderColor: 'var(--border-card)',
            backgroundColor: 'var(--bg-card-solid)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="rounded-xl p-2"
              style={{ backgroundColor: 'var(--success-soft)', color: 'var(--success)' }}
            >
              <ShieldCheck size={24} aria-hidden />
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase"
                style={{ color: 'var(--text-muted)' }}
              >
                Validación
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Certificado Clínico
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
