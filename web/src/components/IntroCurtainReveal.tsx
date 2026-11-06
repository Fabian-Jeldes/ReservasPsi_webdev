import { useEffect, useRef, useState } from 'react'

/**
 * Aproximación de cubic-bezier(0.22, 1, 0.36, 1) para la apertura inicial
 */
function easeOutCubicBezier(t: number): number {
  return 1 - Math.pow(1 - t, 3.5)
}

export function IntroCurtainReveal() {
  const [done, setDone] = useState(false)
  const fillPathRef = useRef<SVGPathElement>(null)
  const strokePathRef = useRef<SVGPathElement>(null)
  const glowPathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    let rafId = 0
    const duration = 700
    const startTime = performance.now()

    // Fail-safe estricto: desmonta el componente pase lo que pase tras 820ms
    const failSafeTimer = window.setTimeout(() => {
      setDone(true)
    }, duration + 120)

    const tick = (now: number) => {
      const elapsed = now - startTime
      const rawT = Math.min(1, Math.max(0, elapsed / duration))
      const eased = easeOutCubicBezier(rawT)

      // La cortina se retira desde abajo (100) hacia arriba (-4) con una curva Bézier orgánica
      const bottomY = 100 * (1 - eased)
      const arch = Math.sin(rawT * Math.PI) * 24
      const ctrlY = bottomY - arch

      const fillD = `M 0,0 L 100,0 L 100,${bottomY.toFixed(2)} Q 50,${ctrlY.toFixed(2)} 0,${bottomY.toFixed(2)} Z`
      const strokeD = `M 0,${bottomY.toFixed(2)} Q 50,${ctrlY.toFixed(2)} 100,${bottomY.toFixed(2)}`

      fillPathRef.current?.setAttribute('d', fillD)
      strokePathRef.current?.setAttribute('d', strokeD)
      glowPathRef.current?.setAttribute('d', strokeD)

      if (rawT < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setDone(true)
      }
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.clearTimeout(failSafeTimer)
    }
  }, [])

  if (done) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80]"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={fillPathRef}
          d="M 0,0 L 100,0 L 100,100 Q 50,100 0,100 Z"
          fill="var(--bg-primary)"
        />
        <path
          ref={glowPathRef}
          d="M 0,100 Q 50,100 100,100"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeOpacity="0.6"
          vectorEffect="non-scaling-stroke"
          style={{ filter: 'blur(6px)' }}
        />
        <path
          ref={strokePathRef}
          d="M 0,100 Q 50,100 100,100"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeOpacity="0.95"
          vectorEffect="non-scaling-stroke"
          style={{
            filter: 'drop-shadow(0 0 12px rgba(255, 77, 77, 0.55))',
          }}
        />
      </svg>
    </div>
  )
}

