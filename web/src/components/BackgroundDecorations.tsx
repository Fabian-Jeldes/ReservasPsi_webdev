import { useMemo } from 'react'

export function BackgroundDecorations() {
  // Generamos posiciones estables para los círculos decorativos
  const lights = useMemo(() => [
    {
      id: 1,
      style: {
        top: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(80px)',
      }
    },
    {
      id: 2,
      style: {
        bottom: '10%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        opacity: 0.12,
        filter: 'blur(100px)',
      }
    },
    {
      id: 3,
      style: {
        top: '40%',
        right: '15%',
        width: '35vw',
        height: '35vw',
        background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 75%)',
        opacity: 0.1,
        filter: 'blur(60px)',
      }
    }
  ], [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* 1. Luces difusas de fondo (Glows) */}
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full transition-all duration-1000"
          style={light.style}
        />
      ))}

      {/* 2. Textura de cuadrícula fina (Grid pattern) */}
      <div 
        className="absolute inset-0 opacity-[0.02] md:opacity-[0.03] transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--text-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
