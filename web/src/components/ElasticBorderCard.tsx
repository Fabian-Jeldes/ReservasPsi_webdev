import { useEffect, useRef, useCallback } from 'react'
import type { CSSProperties, ReactNode, MouseEvent } from 'react'

export type LiquidMouseState = {
  x: number
  y: number
  active: boolean
  intensity: number
}

/**
 * Calcula un punto de anclaje sobre el segmento que une dos puntos de control (p1 -> p2)
 * a una distancia `dist` desde `p1`. Al situar el punto de anclaje en la recta entre ambos
 * puntos de control cuadráticos, la unión entre las curvas Bézier tiene continuidad
 * tangencial C1 perfecta (cero vértices duros o quebrados).
 */
function anchorAlongSegment(
  p1x: number,
  p1y: number,
  p2x: number,
  p2y: number,
  dist: number,
): [number, number] {
  const dx = p2x - p1x
  const dy = p2y - p1y
  const len = Math.hypot(dx, dy)
  if (len <= 0.001) return [p1x, p1y]
  const t = Math.min(0.46, dist / len)
  return [p1x + dx * t, p1y + dy * t]
}

/**
 * Genera el path orgánico flotante donde tanto los 4 lados (hasta `maxPull` ~20px)
 * como las 4 esquinas (hasta `12px`) se desplazan suavemente hacia el cursor (mx, my),
 * usando 8 curvas Bézier cuadráticas continuas sin esquinas clavadas ni vértices rígidos.
 */
export function buildLiquidPath(
  w: number,
  h: number,
  r: number,
  mouse: LiquidMouseState,
  maxPull = 20,
): string {
  if (w <= 0 || h <= 0) return ''
  const safeR = Math.min(r, w * 0.24, h * 0.24)
  const activeFactor = mouse.intensity > 0.001 ? mouse.intensity : 0

  const mx = Math.max(0, Math.min(w, mouse.x))
  const my = Math.max(0, Math.min(h, mouse.y))
  const diag = Math.hypot(w, h) || 1
  const maxCornerShift = Math.min(13, maxPull * 0.65) // 10px - 14px para las esquinas

  // Función que desplaza cada esquina suavemente en dirección al cursor
  const shiftCorner = (cx: number, cy: number): [number, number] => {
    if (activeFactor <= 0) return [cx, cy]
    const dx = mx - cx
    const dy = my - cy
    const dist = Math.hypot(dx, dy) || 1
    const proximity = Math.max(0, 1 - dist / (diag * 0.78))
    const pull = (0.28 + 0.72 * proximity) * maxCornerShift * activeFactor
    return [cx + (dx / dist) * pull, cy + (dy / dist) * pull]
  }

  // 4 puntos de control de esquina flotantes
  const [tlX, tlY] = shiftCorner(0, 0)
  const [trX, trY] = shiftCorner(w, 0)
  const [brX, brY] = shiftCorner(w, h)
  const [blX, blY] = shiftCorner(0, h)

  // Hundimiento de los 4 lados según cercanía del cursor a cada borde (máx ~20px)
  const topPull =
    activeFactor > 0
      ? Math.max(0, 1 - my / (h * 0.55)) * maxPull * activeFactor
      : 0
  const bottomPull =
    activeFactor > 0
      ? Math.max(0, 1 - (h - my) / (h * 0.55)) * maxPull * activeFactor
      : 0
  const leftPull =
    activeFactor > 0
      ? Math.max(0, 1 - mx / (w * 0.55)) * maxPull * activeFactor
      : 0
  const rightPull =
    activeFactor > 0
      ? Math.max(0, 1 - (w - mx) / (w * 0.55)) * maxPull * activeFactor
      : 0

  // Coordenadas tangenciales de los 4 puntos de control laterales (suavizadas hacia el cursor)
  const clampX = Math.max(safeR * 1.6, Math.min(w - safeR * 1.6, mx))
  const clampY = Math.max(safeR * 1.6, Math.min(h - safeR * 1.6, my))

  const tcX = w * 0.5 + (clampX - w * 0.5) * activeFactor
  const tcY = (tlY + trY) * 0.35 + topPull

  const rcX = w - ((w - trX + (w - brX)) * 0.35 + rightPull)
  const rcY = h * 0.5 + (clampY - h * 0.5) * activeFactor

  const bcX = w * 0.5 + (clampX - w * 0.5) * activeFactor
  const bcY = h - ((h - brY + (h - blY)) * 0.35 + bottomPull)

  const lcX = (tlX + blX) * 0.35 + leftPull
  const lcY = h * 0.5 + (clampY - h * 0.5) * activeFactor

  // 8 puntos de anclaje colineales entre esquina y lado para garantizar tangencia C1 sin vértices duros
  const [tlTopX, tlTopY] = anchorAlongSegment(tlX, tlY, tcX, tcY, safeR)
  const [trTopX, trTopY] = anchorAlongSegment(trX, trY, tcX, tcY, safeR)
  const [trRightX, trRightY] = anchorAlongSegment(trX, trY, rcX, rcY, safeR)
  const [brRightX, brRightY] = anchorAlongSegment(brX, brY, rcX, rcY, safeR)
  const [brBottomX, brBottomY] = anchorAlongSegment(brX, brY, bcX, bcY, safeR)
  const [blBottomX, blBottomY] = anchorAlongSegment(blX, blY, bcX, bcY, safeR)
  const [blLeftX, blLeftY] = anchorAlongSegment(blX, blY, lcX, lcY, safeR)
  const [tlLeftX, tlLeftY] = anchorAlongSegment(tlX, tlY, lcX, lcY, safeR)

  const f = (n: number) => n.toFixed(2)

  return `
    M ${f(tlTopX)},${f(tlTopY)}
    Q ${f(tcX)},${f(tcY)} ${f(trTopX)},${f(trTopY)}
    Q ${f(trX)},${f(trY)} ${f(trRightX)},${f(trRightY)}
    Q ${f(rcX)},${f(rcY)} ${f(brRightX)},${f(brRightY)}
    Q ${f(brX)},${f(brY)} ${f(brBottomX)},${f(brBottomY)}
    Q ${f(bcX)},${f(bcY)} ${f(blBottomX)},${f(blBottomY)}
    Q ${f(blX)},${f(blY)} ${f(blLeftX)},${f(blLeftY)}
    Q ${f(lcX)},${f(lcY)} ${f(tlLeftX)},${f(tlLeftY)}
    Q ${f(tlX)},${f(tlY)} ${f(tlTopX)},${f(tlTopY)}
    Z
  `
    .replace(/\s+/g, ' ')
    .trim()
}

type ElasticBorderCardProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** Radio de las 4 esquinas en px (por defecto 24) */
  cornerRadius?: number
  /** Hundimiento máximo hacia adentro en px (por defecto 26) */
  maxPull?: number
  /** Grosor del trazo SVG en px (por defecto 1.75) */
  borderWidth?: number
  /** Opacidad del borde coral en reposo (por defecto 0.72) */
  restingStrokeOpacity?: number
  /** Padding interno opcional (en px) para marcos tipo retrato que recortan su foto interior en paralelo */
  innerPadding?: number
  /** Color de fondo del contenedor recortado */
  backgroundColor?: string
  /** Sombra exterior del contenedor */
  boxShadow?: string
}

export function ElasticBorderCard({
  children,
  className = '',
  style,
  cornerRadius = 24,
  maxPull = 20,
  borderWidth = 1.75,
  restingStrokeOpacity = 0.75,
  innerPadding = 0,
  backgroundColor = 'var(--bg-card)',
  boxShadow,
}: ElasticBorderCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const clipTargetRef = useRef<HTMLDivElement>(null)
  const innerClipTargetRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const borderPathRef = useRef<SVGPathElement>(null)
  const glowPathRef = useRef<SVGPathElement>(null)

  const stateRef = useRef({
    w: 0,
    h: 0,
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    offsetX: 0,
    offsetY: 0,
    targetOffsetX: 0,
    targetOffsetY: 0,
    intensity: 0,
    targetIntensity: 0,
    active: false,
    rafId: 0,
  })

  const applyGeometry = useCallback(() => {
    const s = stateRef.current
    if (s.w <= 0 || s.h <= 0) return

    const mouseState: LiquidMouseState = {
      x: s.x,
      y: s.y,
      active: s.active,
      intensity: s.intensity,
    }

    const d = buildLiquidPath(s.w, s.h, cornerRadius, mouseState, maxPull)

    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${s.offsetX.toFixed(2)}px, ${s.offsetY.toFixed(2)}px, 0)`
    }
    if (clipTargetRef.current) {
      clipTargetRef.current.style.clipPath = `path('${d}')`
    }
    if (borderPathRef.current) {
      borderPathRef.current.setAttribute('d', d)
      const hoverProgress = Math.max(0, Math.min(1, s.intensity))
      const opacity = restingStrokeOpacity + (1 - restingStrokeOpacity) * hoverProgress
      borderPathRef.current.setAttribute('stroke-opacity', opacity.toFixed(3))
    }
    if (glowPathRef.current) {
      glowPathRef.current.setAttribute('d', d)
      const glowOpacity = Math.max(0, Math.min(0.65, s.intensity * 0.55))
      glowPathRef.current.setAttribute('stroke-opacity', glowOpacity.toFixed(3))
    }

    if (innerPadding > 0 && innerClipTargetRef.current) {
      const iw = Math.max(0, s.w - innerPadding * 2)
      const ih = Math.max(0, s.h - innerPadding * 2)
      const ir = Math.max(12, cornerRadius - innerPadding * 0.4)
      const innerMouse: LiquidMouseState = {
        x: s.x - innerPadding,
        y: s.y - innerPadding,
        active: s.active,
        intensity: s.intensity,
      }
      const innerD = buildLiquidPath(iw, ih, ir, innerMouse, maxPull)
      innerClipTargetRef.current.style.clipPath = `path('${innerD}')`
    }
  }, [cornerRadius, maxPull, restingStrokeOpacity, innerPadding])

  const tick = useCallback(() => {
    const s = stateRef.current

    // Interpolación continua y sedosa (lerp 0.07) para coordenadas, intensidad y desplazamiento magnético
    const lerp = 0.07
    s.x += (s.targetX - s.x) * lerp
    s.y += (s.targetY - s.y) * lerp
    s.intensity += (s.targetIntensity - s.intensity) * lerp
    s.offsetX += (s.targetOffsetX - s.offsetX) * lerp
    s.offsetY += (s.targetOffsetY - s.offsetY) * lerp

    applyGeometry()

    const posDelta = Math.hypot(s.targetX - s.x, s.targetY - s.y)
    const offsetDelta = Math.hypot(
      s.targetOffsetX - s.offsetX,
      s.targetOffsetY - s.offsetY,
    )

    if (
      s.targetIntensity > 0 ||
      s.intensity >= 0.004 ||
      offsetDelta > 0.05 ||
      (s.active && posDelta > 0.25)
    ) {
      s.rafId = requestAnimationFrame(tick)
    } else {
      s.intensity = 0
      s.offsetX = 0
      s.offsetY = 0
      s.active = false
      s.rafId = 0
      applyGeometry()
    }
  }, [applyGeometry])

  const startLoop = useCallback(() => {
    if (!stateRef.current.rafId) {
      stateRef.current.rafId = requestAnimationFrame(tick)
    }
  }, [tick])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const updateSize = () => {
      const rect = el.getBoundingClientRect()
      const w = Math.round(rect.width)
      const h = Math.round(rect.height)
      if (w > 0 && h > 0) {
        stateRef.current.w = w
        stateRef.current.h = h
        if (!stateRef.current.active) {
          stateRef.current.x = w / 2
          stateRef.current.y = h / 2
          stateRef.current.targetX = w / 2
          stateRef.current.targetY = h / 2
        }
        if (svgRef.current) {
          svgRef.current.setAttribute('viewBox', `0 0 ${w} ${h}`)
        }
        applyGeometry()
      }
    }

    updateSize()

    const ro = new ResizeObserver(updateSize)
    ro.observe(el)

    return () => {
      ro.disconnect()
      if (stateRef.current.rafId) {
        cancelAnimationFrame(stateRef.current.rafId)
        stateRef.current.rafId = 0
      }
    }
  }, [applyGeometry])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    const s = stateRef.current

    if (!s.active && s.intensity < 0.03) {
      // Al primer ingreso, ubicamos el foco suavemente en el punto de entrada
      s.x = mx
      s.y = my
    }

    s.targetX = mx
    s.targetY = my
    // Movimiento magnético de todo el contenedor (máximo 6px hacia el cursor)
    if (s.w > 0 && s.h > 0) {
      const normX = Math.max(-1, Math.min(1, (mx / s.w - 0.5) * 2))
      const normY = Math.max(-1, Math.min(1, (my / s.h - 0.5) * 2))
      s.targetOffsetX = normX * 6
      s.targetOffsetY = normY * 6
    }
    s.targetIntensity = 1
    s.active = true
    startLoop()
  }

  const handleMouseLeave = () => {
    const s = stateRef.current
    s.targetIntensity = 0
    s.targetOffsetX = 0
    s.targetOffsetY = 0
    startLoop()
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${className}`}
      style={{
        borderRadius: `${cornerRadius}px`,
        boxShadow,
        ...style,
      }}
    >
      {/* a) Contenedor recortado por el mismo path Bézier dinámico */}
      <div
        ref={clipTargetRef}
        className="relative h-full w-full overflow-hidden backdrop-blur-xl"
        style={{
          borderRadius: `${cornerRadius}px`,
          backgroundColor,
          padding: innerPadding > 0 ? `${innerPadding}px` : undefined,
          willChange: 'clip-path',
        }}
      >
        {innerPadding > 0 ? (
          <div
            ref={innerClipTargetRef}
            className="relative h-full w-full overflow-hidden"
            style={{
              borderRadius: `${Math.max(12, cornerRadius - innerPadding * 0.4)}px`,
              willChange: 'clip-path',
            }}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </div>

      {/* b) SVG superpuesto que dibuja el borde rojo coral y el resplandor en sincronía exacta */}
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        {/* Halo difuso de resplandor coral que se intensifica con la deformación */}
        <path
          ref={glowPathRef}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={borderWidth + 3.5}
          strokeOpacity={0}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'blur(6px)' }}
        />
        {/* Línea principal de borde rojo coral */}
        <path
          ref={borderPathRef}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={borderWidth}
          strokeOpacity={restingStrokeOpacity}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(255, 77, 77, 0.35))',
          }}
        />
      </svg>
    </div>
  )
}

