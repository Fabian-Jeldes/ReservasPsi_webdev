import { useMemo } from 'react'
import type { CSSProperties } from 'react'
import fondo1 from '../assets/fondo1.svg'
import fondo2 from '../assets/fondo2.svg'
import fondo3 from '../assets/fondo3.svg'
import fondo4 from '../assets/fondo4.svg'
import fondo5 from '../assets/fondo5.svg'
import fondo6 from '../assets/fondo6.svg'
import fondo7 from '../assets/fondo7.svg'
import fondo8 from '../assets/fondo8.svg'

const FONDO_ICONS = [
  fondo1,
  fondo2,
  fondo3,
  fondo4,
  fondo5,
  fondo6,
  fondo7,
  fondo8,
]

type WatermarkCell = {
  id: string
  src: string
  row: number
  col: number
  offsetX: number
  offsetY: number
  rotationDeg: number
  opacity: number
  duration: string
  delay: string
}

export function BackgroundDecorations() {
  // Luces difusas de ambiente distribuidas a lo largo del documento
  const lights = useMemo(
    () => [
      {
        id: 1,
        style: {
          top: '2%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background:
            'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          opacity: 0.14,
          filter: 'blur(80px)',
        },
      },
      {
        id: 2,
        style: {
          top: '38%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background:
            'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          opacity: 0.11,
          filter: 'blur(100px)',
        },
      },
      {
        id: 3,
        style: {
          top: '72%',
          left: '10%',
          width: '40vw',
          height: '40vw',
          background:
            'radial-gradient(circle, var(--accent-soft) 0%, transparent 75%)',
          opacity: 0.1,
          filter: 'blur(70px)',
        },
      },
    ],
    []
  )

  // Malla intercalada anti-repetición con escalado asimétrico y desincronizado
  const watermarkCells = useMemo<WatermarkCell[]>(() => {
    const rows = 28
    const cols = 6
    const cells: WatermarkCell[] = []

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const index = r * cols + c
        const iconIdx = (c * 3 + r * 5 + Math.floor(r / 4)) % FONDO_ICONS.length

        // Hash determinista no lineal para evitar patrones por fila o columna
        const hash1 = ((r * 73 + c * 131 + index * 37) * 2654435761) >>> 0
        const hash2 = ((r * 199 + c * 53 + index * 89) * 1597334677) >>> 0

        const randA = (hash1 % 1000) / 1000 // [0, 1)
        const randB = (hash2 % 1000) / 1000 // [0, 1)

        // Desplazamiento orgánico dentro de cada celda con amplio whitespace
        const offsetX = Math.round((randA - 0.5) * 24)
        const offsetY = Math.round((randB - 0.5) * 20)

        // Rotación alternada (impares a la izquierda -15° a -25°, pares a la derecha +15° a +25°)
        const isOdd = index % 2 === 0
        const baseAngle = 15 + Math.round(randA * 10)
        const rotationDeg = isOdd ? -baseAngle : baseAngle

        // Opacidad base entre 0.12 y 0.155; en el pico de expansión (+15%) alcanza ~0.14 a 0.18
        const baseOpacity = 0.12 + randB * 0.036
        const peakOpacity = Number((baseOpacity * 1.15).toFixed(3))

        // Duración independiente y asimétrica entre 8s y 16s
        const durationSec = (8 + randA * 8).toFixed(2)
        // Retraso negativo aleatorio entre -0.5s y -15.8s para desincronización total
        const delaySec = -(0.5 + randB * 15.3).toFixed(2)

        cells.push({
          id: `wm-${r}-${c}`,
          src: FONDO_ICONS[iconIdx],
          row: r,
          col: c,
          offsetX,
          offsetY,
          rotationDeg,
          opacity: peakOpacity,
          duration: `${durationSec}s`,
          delay: `${delaySec}s`,
        })
      }
    }

    return cells
  }, [])

  return (
    <div
      className="
        absolute inset-0 z-0 pointer-events-none overflow-hidden select-none
      "
      style={{
        backgroundColor: 'var(--bg-primary)',
        backgroundAttachment: 'scroll',
      }}
      aria-hidden="true"
    >
      {/* 1. Luces difusas de fondo (Glows) */}
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full transition-all duration-1000"
          style={light.style}
        />
      ))}

      {/* 2. Patrón intercalado con pulse-scale desincronizado y rotación alternada */}
      <div
        className="
          watermark-grid w-full py-12 px-6 md:px-12
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
          gap-x-16 gap-y-24 md:gap-x-24 md:gap-y-28
          place-items-center
        "
      >
        {watermarkCells.map((cell) => {
          const isOddRow = cell.row % 2 === 1
          const itemStyle = {
            transform: `translate3d(${
              (isOddRow ? 42 : 0) + cell.offsetX
            }px, ${cell.offsetY}px, 0) rotate(${cell.rotationDeg}deg)`,
            opacity: cell.opacity,
            '--wm-duration': cell.duration,
            '--wm-delay': cell.delay,
          } as CSSProperties

          return (
            <div
              key={cell.id}
              className="watermark-item flex items-center justify-center w-24 h-24 md:w-28 md:h-28"
              style={itemStyle}
            >
              <img
                src={cell.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="watermark-icon w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
