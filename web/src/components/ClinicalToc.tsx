import { useEffect, useState, type MouseEvent } from 'react'
import { List } from 'lucide-react'

export type ClinicalTocItem = {
  id: string
  label: string
}

const DEFAULT_TOC_ITEMS: readonly ClinicalTocItem[] = [
  { id: 'definicion', label: 'Definición' },
  { id: 'mecanismos', label: 'Mecanismos' },
  { id: 'tratamiento', label: 'Tratamiento' },
  { id: 'preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { id: 'referencias', label: 'Referencias' },
]

type Props = {
  items?: readonly ClinicalTocItem[]
}

/**
 * Índice rápido compacto para las páginas clínicas extensas.
 * Render determinista en SSR (sin estado activo inicial) y seguimiento suave en cliente.
 */
export function ClinicalToc({ items = DEFAULT_TOC_ITEMS }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-96px 0px -65% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    event.preventDefault()

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
    setActiveId(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav
      aria-label="Índice de la guía clínica"
      className="mx-auto max-w-4xl px-6 pt-8 pb-2"
    >
      <div
        className="flex flex-col gap-3 rounded-2xl border px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4 sm:px-5"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-card)',
        }}
      >
        <div
          className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-widest"
          style={{ color: 'var(--text-muted)' }}
        >
          <List size={14} style={{ color: 'var(--accent)' }} aria-hidden="true" />
          <span>En esta guía</span>
        </div>

        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  aria-current={isActive ? 'location' : undefined}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-200 sm:text-[13px]"
                  style={{
                    backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
                    borderColor: isActive ? 'var(--border-accent)' : 'var(--border-primary)',
                    color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)',
                  }}
                >
                  <span
                    className="text-[11px] font-bold opacity-70"
                    style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}
                    aria-hidden="true"
                  >
                    {index + 1}.
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
