import { useEffect, useState, useSyncExternalStore } from 'react'
import { Moon, Sun } from 'lucide-react'

const THEMES = [
  { id: 'standard', label: 'Oscuro', dot: '#FF6B5B' },
  { id: 'light', label: 'Claro', dot: '#FF6B5B' },
] as const

type ThemeId = (typeof THEMES)[number]['id']

const STORAGE_KEY = 'andi-dev-theme'
const themeListeners = new Set<() => void>()

function resolveStoredTheme(stored: string | null): number {
  if (!stored) return 0
  if (stored === 'light' || stored === 'warm-editorial' || stored === 'lavender') {
    return 1
  }
  const idx = THEMES.findIndex((t) => t.id === stored)
  return idx >= 0 ? idx : 0
}

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback)
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback()
  }
  window.addEventListener('storage', onStorage)
  return () => {
    themeListeners.delete(callback)
    window.removeEventListener('storage', onStorage)
  }
}

function getClientThemeIndex(): number {
  try {
    return resolveStoredTheme(localStorage.getItem(STORAGE_KEY))
  } catch {
    return 0
  }
}

function getServerThemeIndex(): number {
  return 0
}

function persistTheme(id: ThemeId) {
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    // Ignore storage quota or private-mode restrictions
  }
  themeListeners.forEach((listener) => listener())
}

type DevAccentToggleProps = {
  /** Cuando es true, se renderiza en flujo normal (ej. footer del menú móvil) sin position: fixed */
  inline?: boolean
}

/**
 * Selector entre el tema oscuro original (`standard`) y el tema claro (`light`).
 * Persiste en localStorage para mantener la elección al recargar, usando
 * useSyncExternalStore para evitar discrepancias de hidratación con el SSR.
 */
export function DevAccentToggle({ inline = false }: DevAccentToggleProps) {
  const themeIndex = useSyncExternalStore(
    subscribeTheme,
    getClientThemeIndex,
    getServerThemeIndex,
  )

  const [expanded, setExpanded] = useState(false)

  const current = THEMES[themeIndex]

  useEffect(() => {
    if (inline) return
    document.documentElement.dataset.theme = current.id

    if (current.id !== 'standard') {
      delete document.documentElement.dataset.devAccent
    }

    return () => {
      document.documentElement.dataset.theme = 'standard'
    }
  }, [current.id, inline])

  const selectTheme = (idx: number) => {
    const nextTheme = THEMES[idx]
    if (nextTheme) {
      persistTheme(nextTheme.id)
    }
    setExpanded(false)
  }

  const renderIcon = (id: ThemeId, active: boolean) => {
    const color = active ? 'var(--accent)' : 'var(--text-muted)'
    return id === 'light' ? (
      <Sun size={15} aria-hidden="true" style={{ color }} />
    ) : (
      <Moon size={15} aria-hidden="true" style={{ color }} />
    )
  }

  if (inline) {
    return (
      <div className="relative inline-flex flex-col items-center">
        {expanded && (
          <div
            className="absolute bottom-full left-1/2 z-50 mb-2 flex -translate-x-1/2 flex-col gap-1 rounded-2xl border p-2 shadow-2xl backdrop-blur-xl"
            style={{
              backgroundColor: 'var(--bg-card-solid)',
              borderColor: 'var(--border-accent)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {THEMES.map((theme, idx) => {
              const isSelected = idx === themeIndex
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => selectTheme(idx)}
                  className="flex cursor-pointer items-center gap-3 whitespace-nowrap rounded-xl px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide transition-all hover:scale-[1.02]"
                  style={{
                    color: isSelected
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)',
                    backgroundColor: isSelected
                      ? 'var(--accent-soft)'
                      : 'transparent',
                  }}
                >
                  {renderIcon(theme.id, isSelected)}
                  <span>{theme.label}</span>
                  {isSelected && (
                    <span
                      className="ml-auto text-[11px] font-black"
                      style={{ color: 'var(--accent-text)' }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        )}

        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="group inline-flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0"
          title="Cambiar entre modo oscuro y claro"
          aria-label={`Cambiar tema: ${current.label}`}
          aria-expanded={expanded}
        >
          <span
            className="theme-orb-btn relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition-transform duration-200 group-hover:scale-105"
            style={{
              backgroundColor: 'var(--bg-card-solid)',
              borderColor: 'var(--border-accent)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {renderIcon(current.id, true)}
          </span>
          <span className="theme-label">Cambiar tema</span>
        </button>
      </div>
    )
  }

  return (
    <div className="global-theme-toggle fixed bottom-3 left-3 z-[200] flex flex-col items-start gap-2 md:bottom-4 md:left-4">
      {/* Panel expandido (2 opciones: Oscuro y Claro) */}
      {expanded && (
        <div
          className="flex flex-col gap-1 rounded-2xl border p-2 shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: 'var(--bg-card-solid)',
            borderColor: 'var(--border-accent)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {THEMES.map((theme, idx) => {
            const isSelected = idx === themeIndex
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => selectTheme(idx)}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide transition-all hover:scale-[1.02]"
                style={{
                  color: isSelected
                    ? 'var(--text-primary)'
                    : 'var(--text-secondary)',
                  backgroundColor: isSelected
                    ? 'var(--accent-soft)'
                    : 'transparent',
                }}
              >
                {renderIcon(theme.id, isSelected)}
                <span>{theme.label}</span>
                {isSelected && (
                  <span
                    className="ml-auto text-[11px] font-black"
                    style={{ color: 'var(--accent-text)' }}
                  >
                    ✓
                  </span>
                )}
              </button>
            )
          })}
        </div>
      )}

      {/* Botón circular con destello orbital 360° + etiqueta descriptiva */}
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="group flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0"
        title="Cambiar entre modo oscuro y claro"
        aria-label={`Cambiar tema: ${current.label}`}
        aria-expanded={expanded}
      >
        <span
          className="theme-orb-btn relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition-transform duration-200 group-hover:scale-105"
          style={{
            backgroundColor: 'var(--bg-card-solid)',
            borderColor: 'var(--border-accent)',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {renderIcon(current.id, true)}
        </span>
        <span className="theme-label">Cambiar tema</span>
      </button>
    </div>
  )
}
