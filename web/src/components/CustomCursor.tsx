import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, summary, input, textarea, select, label, [role="button"], [role="tab"], .bullet-reveal-card, .cursor-pointer'

export function CustomCursor() {
  const [isDesktopPointer, setIsDesktopPointer] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateMatch = () => setIsDesktopPointer(mq.matches)
    updateMatch()
    mq.addEventListener('change', updateMatch)
    return () => mq.removeEventListener('change', updateMatch)
  }, [])

  useEffect(() => {
    if (!isDesktopPointer) {
      document.documentElement.classList.remove('has-custom-cursor')
      return
    }

    document.documentElement.classList.add('has-custom-cursor')

    const state = {
      mouseX: -100,
      mouseY: -100,
      ringX: -100,
      ringY: -100,
      ringScale: 1,
      targetRingScale: 1,
      dotScale: 1,
      targetDotScale: 1,
      visible: false,
      hovered: false,
      pressed: false,
      rafId: 0,
    }

    const updateVisibility = (vis: boolean) => {
      state.visible = vis
      const op = vis ? '1' : '0'
      if (dotRef.current) dotRef.current.style.opacity = op
      if (ringRef.current) ringRef.current.style.opacity = op
    }

    const updateHoverStyle = (hovered: boolean) => {
      if (!ringRef.current) return
      if (hovered) {
        ringRef.current.style.backgroundColor =
          'color-mix(in srgb, var(--accent) 18%, transparent)'
        ringRef.current.style.borderColor = 'var(--accent)'
        ringRef.current.style.boxShadow =
          '0 0 20px color-mix(in srgb, var(--accent) 35%, transparent)'
      } else {
        ringRef.current.style.backgroundColor =
          'color-mix(in srgb, var(--accent) 7%, transparent)'
        ringRef.current.style.borderColor =
          'color-mix(in srgb, var(--accent) 72%, transparent)'
        ringRef.current.style.boxShadow = 'none'
      }
    }

    const tick = (now: number) => {
      // Interpolación lerp suave (60 FPS) para el anillo exterior
      state.ringX += (state.mouseX - state.ringX) * 0.16
      state.ringY += (state.mouseY - state.ringY) * 0.16

      // Pulso sutil cuando el cursor está sobre un elemento interactivo
      const hoverPulse = state.hovered ? Math.sin(now * 0.006) * 0.06 : 0
      const pressFactor = state.pressed ? 0.86 : 1
      const desiredRingScale =
        (state.targetRingScale + hoverPulse) * pressFactor

      state.ringScale += (desiredRingScale - state.ringScale) * 0.18
      state.dotScale += (state.targetDotScale - state.dotScale) * 0.22

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${state.mouseX.toFixed(1)}px, ${state.mouseY.toFixed(1)}px, 0) translate(-50%, -50%) scale(${state.dotScale.toFixed(3)})`
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${state.ringX.toFixed(1)}px, ${state.ringY.toFixed(1)}px, 0) translate(-50%, -50%) scale(${state.ringScale.toFixed(3)})`
      }

      state.rafId = requestAnimationFrame(tick)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!state.visible) {
        state.ringX = e.clientX
        state.ringY = e.clientY
        updateVisibility(true)
      }
      state.mouseX = e.clientX
      state.mouseY = e.clientY
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      const isInteractive = Boolean(target?.closest(INTERACTIVE_SELECTOR))
      if (isInteractive !== state.hovered) {
        state.hovered = isInteractive
        state.targetRingScale = isInteractive ? 1.55 : 1
        state.targetDotScale = isInteractive ? 0.65 : 1
        updateHoverStyle(isInteractive)
      }
    }

    const handleMouseDown = () => {
      state.pressed = true
    }

    const handleMouseUp = () => {
      state.pressed = false
    }

    const handleMouseLeaveWindow = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        updateVisibility(false)
      }
    }

    const handleWindowBlur = () => {
      updateVisibility(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })
    document.addEventListener('mouseout', handleMouseLeaveWindow, {
      passive: true,
    })
    window.addEventListener('blur', handleWindowBlur)

    state.rafId = requestAnimationFrame(tick)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      if (state.rafId) cancelAnimationFrame(state.rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseout', handleMouseLeaveWindow)
      window.removeEventListener('blur', handleWindowBlur)
    }
  }, [isDesktopPointer])

  if (!isDesktopPointer) return null

  return (
    <>
      {/* Círculo exterior elástico con lerp y expansión en hover */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full"
        style={{
          width: '36px',
          height: '36px',
          opacity: 0,
          border:
            '1.5px solid color-mix(in srgb, var(--accent) 72%, transparent)',
          backgroundColor: 'color-mix(in srgb, var(--accent) 7%, transparent)',
          transition:
            'opacity 200ms ease, background-color 250ms ease, border-color 250ms ease, box-shadow 250ms ease',
          willChange: 'transform, opacity',
        }}
      />

      {/* Punto central sólido rojo coral */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: '8px',
          height: '8px',
          opacity: 0,
          backgroundColor: 'var(--accent)',
          boxShadow: '0 0 10px var(--accent)',
          transition: 'opacity 180ms ease',
          willChange: 'transform, opacity',
        }}
      />
    </>
  )
}

