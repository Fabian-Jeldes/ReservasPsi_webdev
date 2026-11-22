import { useEffect, useState } from 'react'
import { Palette } from 'lucide-react'

const THEMES = [
  { id: 'standard', label: 'Standar', dot: '#f43f5e' },
  { id: 'bold-dark', label: 'Bold darkness', dot: '#c41e2a' },
  { id: 'warm-editorial', label: 'Warm delight', dot: '#c47628' },
  { id: 'lavender', label: 'Lavender light', dot: '#9b7bb8' },
] as const


const STORAGE_KEY = 'andi-dev-theme'

/**
 * Solo en desarrollo: cicla entre 4 temas de diseño.
 * Persiste en localStorage para no perder la selección al recargar.
 * No debe mostrarse en producción.
 */
export function DevAccentToggle() {
  const [themeIndex, setThemeIndex] = useState(() => {
    if (typeof window === 'undefined') return 0
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const idx = THEMES.findIndex((t) => t.id === stored)
      return idx >= 0 ? idx : 0
    }
    return 0
  })

  const [expanded, setExpanded] = useState(false)

  const current = THEMES[themeIndex]

  useEffect(() => {

    document.documentElement.dataset.theme = current.id
    localStorage.setItem(STORAGE_KEY, current.id)

    // Limpiar data-dev-accent legacy
    if (current.id !== 'standard') {
      delete document.documentElement.dataset.devAccent
    }

    return () => {
      document.documentElement.dataset.theme = 'standard'
    }
  }, [current.id])



  const selectTheme = (idx: number) => {
    setThemeIndex(idx)
    setExpanded(false)
  }

  return (
    <div className="fixed bottom-3 left-3 z-[200] flex flex-col items-start gap-2 md:bottom-4 md:left-4">
      {/* Panel expandido */}
      {expanded && (
        <div
          className="flex flex-col gap-1 rounded-2xl border p-2 shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: 'var(--bg-card-solid)',
            borderColor: 'var(--border-card)',
          }}
        >
          {THEMES.map((theme, idx) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => selectTheme(idx)}
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide transition-all hover:scale-[1.02]"
              style={{
                color:
                  idx === themeIndex
                    ? 'var(--text-primary)'
                    : 'var(--text-muted)',
                backgroundColor:
                  idx === themeIndex ? 'var(--accent-soft)' : 'transparent',
              }}
            >
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{
                  backgroundColor: theme.dot,
                  boxShadow:
                    idx === themeIndex
                      ? `0 0 8px ${theme.dot}`
                      : 'none',
                }}
              />
              {theme.label}
              {idx === themeIndex && (
                <span className="ml-auto text-[10px] opacity-60">✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Botón principal (compacto circular en móvil, píldora completa en desktop) */}
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="flex h-10 w-10 items-center justify-center rounded-full border p-0 text-xs font-bold uppercase tracking-wide shadow-lg backdrop-blur-xl transition-all hover:scale-105 md:h-auto md:w-auto md:gap-2.5 md:px-4 md:py-2.5"
        style={{
          backgroundColor: 'var(--bg-card-solid)',
          borderColor: 'var(--border-card)',
          color: 'var(--text-primary)',
        }}
        title="Cambiar tema de diseño (solo dev)"
        aria-label={`Cambiar tema de diseño: ${current.label}`}
      >
        <Palette size={15} style={{ color: current.dot }} />
        <span
          className="hidden h-2.5 w-2.5 rounded-full md:inline-block"
          style={{
            backgroundColor: current.dot,
            boxShadow: `0 0 8px ${current.dot}`,
          }}
        />
        <span className="hidden md:inline">{current.label}</span>
      </button>
    </div>
  )
}
