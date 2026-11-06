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
] as const

/**
 * Permutaciones de los 8 iconos (fondo1..fondo8) por fila:
 * - Cada fila contiene exactamente los 8 iconos en igual proporción.
 * - Ningún icono se repite horizontalmente (ni siquiera al cerrar el ciclo infinito)
 *   ni coincide verticalmente con el icono de la fila superior/inferior.
 */
const ROW_PERMUTATIONS: number[][] = [
  [0, 3, 6, 1, 4, 7, 2, 5],
  [2, 5, 0, 3, 6, 1, 4, 7],
  [4, 7, 2, 5, 0, 3, 6, 1],
  [6, 1, 4, 7, 2, 5, 0, 3],
  [1, 4, 7, 2, 5, 0, 3, 6],
  [3, 6, 1, 4, 7, 2, 5, 0],
]

type RowIconItem = {
  key: string
  src: string
  rotationDeg: number
  peakOpacity: number
  floatDuration: string
  floatDelay: string
  pulseDuration: string
  pulseDelay: string
}

type WatermarkRow = {
  rowIndex: number
  isOddRowNumber: boolean // Fila 1, 3, 5 (1-based) -> izquierda; Fila 2, 4, 6 -> derecha
  rowDuration: string
  rowDelay: string
  items: RowIconItem[]
}

export function BackgroundDecorations() {
  // Luces difusas de ambiente
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
    [],
  )

  const rows = useMemo<WatermarkRow[]>(() => {
    const rowDurations = [118, 134, 112, 140, 126, 130]

    return ROW_PERMUTATIONS.map((perm, r) => {
      // Repetimos la permutación de 8 iconos 2 veces (16 iconos = 1 mitad) para cubrir >2560px
      // y luego duplicamos esa secuencia completa (32 iconos en total) para el loop infinito -50% <-> 0%
      const halfSequence = [...perm, ...perm]

      const baseItems: RowIconItem[] = halfSequence.map((iconIdx, c) => {
        const seed1 = ((r * 73 + c * 131 + 19) * 2654435761) >>> 0
        const seed2 = ((r * 199 + c * 53 + 47) * 1597334677) >>> 0
        const randA = (seed1 % 1000) / 1000
        const randB = (seed2 % 1000) / 1000

        // Rotación alternada suave (-22° a -14° / +14° a +22°)
        const angle = 14 + Math.round(randA * 8)
        const rotationDeg = (r + c) % 2 === 0 ? -angle : angle

        // Opacidad base con +15% en el pico de pulse-scale
        const baseOpacity = 0.125 + randB * 0.032
        const peakOpacity = Number((baseOpacity * 1.15).toFixed(3))

        // Capa B: Flotación vertical tipo ola (entre 6s y 9s) con desfase progresivo por columna
        const floatDuration = `${(6.2 + randA * 2.6).toFixed(2)}s`
        const floatDelay = `${-(c * 0.75 + r * 1.15).toFixed(2)}s`

        // Capa C: Pulso de escala y opacidad (entre 9s y 15s)
        const pulseDuration = `${(9 + randB * 6).toFixed(2)}s`
        const pulseDelay = `${-(0.6 + randA * 13.5).toFixed(2)}s`

        return {
          key: `r${r}-c${c}`,
          src: FONDO_ICONS[iconIdx],
          rotationDeg,
          peakOpacity,
          floatDuration,
          floatDelay,
          pulseDuration,
          pulseDelay,
        }
      })

      // Duplicamos exactamente la mitad para que el desplazamiento del 50% sea un bucle continuo perfecto
      const duplicatedItems: RowIconItem[] = [
        ...baseItems,
        ...baseItems.map((item, idx) => ({
          ...item,
          key: `${item.key}-dup-${idx}`,
        })),
      ]

      return {
        rowIndex: r,
        isOddRowNumber: r % 2 === 0, // r=0 -> Fila 1 (impar, izquierda), r=1 -> Fila 2 (par, derecha)
        rowDuration: `${rowDurations[r % rowDurations.length]}s`,
        rowDelay: `${-(r * 17)}s`,
        items: duplicatedItems,
      }
    })
  }, [])

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '96px',
        paddingBottom: '48px',
        overflow: 'hidden',
        contain: 'strict',
        maxWidth: '100vw',
        maxHeight: '100vh',
      }}
      aria-hidden="true"
    >
      {/* 1. Luces difusas de ambiente (Glows) */}
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full transition-all duration-1000"
          style={light.style}
        />
      ))}

      {/* 2. Contenedor de filas horizontales con holgura vertical para no recortar crestas ni escalas */}
      <div className="relative flex h-full w-full flex-col justify-between gap-y-8 overflow-visible py-4">
        {rows.map((row) => (
          <div
            key={row.rowIndex}
            className="w-full overflow-visible py-2"
          >
            {/* Capa A: Fila Horizontal con desplazamiento continuo (-50% <-> 0%) */}
            <div
              className={`wm-row-track ${
                row.isOddRowNumber ? 'is-odd-row' : 'is-even-row'
              }`}
              style={
                {
                  '--row-duration': row.rowDuration,
                  '--row-delay': row.rowDelay,
                } as CSSProperties
              }
            >
              {row.items.map((item) => (
                <div
                  key={item.key}
                  className="flex shrink-0 items-center justify-center px-10 md:px-14 overflow-visible"
                >
                  {/* Capa B: Wrapper del icono con flotación vertical tipo ola (-14px a +14px) */}
                  <div
                    className="wm-float-wrapper flex items-center justify-center p-3"
                    style={
                      {
                        '--float-duration': item.floatDuration,
                        '--float-delay': item.floatDelay,
                        opacity: item.peakOpacity,
                      } as CSSProperties
                    }
                  >
                    {/* Capa C: Elemento <img> con pulso de escala y opacidad (+15%) */}
                    <img
                      src={item.src}
                      alt=""
                      decoding="async"
                      className="watermark-icon h-14 w-14 md:h-18 md:w-18 object-contain"
                      style={
                        {
                          '--wm-rot': `${item.rotationDeg}deg`,
                          '--wm-duration': item.pulseDuration,
                          '--wm-delay': item.pulseDelay,
                        } as CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
