import { useState, useMemo } from 'react'
import { ChevronDown, MessageCircleQuestion, Sparkles } from 'lucide-react'
import { FAQ_DATA } from '../data/site'
import type { FaqCategory, FaqItem } from '../types/site'

export function FaqSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all')
  const [openItemKey, setOpenItemKey] = useState<string | null>('0')

  const allItems = useMemo<FaqItem[]>(() => {
    return FAQ_DATA.flatMap((cat: FaqCategory) => cat.items)
  }, [])

  const visibleItems = useMemo<FaqItem[]>(() => {
    if (activeCategoryId === 'all') return allItems
    const found = FAQ_DATA.find((cat: FaqCategory) => cat.id === activeCategoryId)
    return found ? found.items : allItems
  }, [activeCategoryId, allItems])

  const toggleItem = (key: string) => {
    setOpenItemKey((prev) => (prev === key ? null : key))
  }

  const handleCategoryChange = (id: string) => {
    setActiveCategoryId(id)
    setOpenItemKey('0')
  }

  const filterTabs = useMemo(
    () => [
      { id: 'all', title: 'Todas las preguntas' },
      ...FAQ_DATA.map((cat) => ({ id: cat.id, title: cat.title })),
    ],
    [],
  )

  return (
    <section id="faq" className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Encabezado cercano y transparente */}
        <div className="mb-14 text-center">
          <div
            className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border"
            style={{
              backgroundColor: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderColor: 'var(--border-accent)',
              boxShadow: '0 0 20px rgba(255, 77, 77, 0.15)',
            }}
          >
            <MessageCircleQuestion size={22} />
          </div>
          <h2
            className="mb-4 text-3xl md:text-5xl"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              textTransform: 'var(--heading-transform)' as any,
              letterSpacing: 'var(--heading-spacing)',
            }}
          >
            Preguntas{' '}
            <span
              className="font-editorial-accent"
              style={{ color: 'var(--accent)' }}
            >
              Frecuentes
            </span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Respuestas claras, cercanas y sin letra chica sobre cómo trabajamos
            en consulta, cómo es tu primera sesión y cuáles son los valores.
          </p>
        </div>

        {/* Filtros suaves por tema (con "Todas las preguntas" activo por defecto) */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filterTabs.map((tab) => {
            const isActive = tab.id === activeCategoryId
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleCategoryChange(tab.id)}
                className="cursor-pointer border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: isActive
                    ? 'var(--accent-soft)'
                    : 'var(--bg-card)',
                  borderColor: isActive
                    ? 'var(--accent)'
                    : 'color-mix(in srgb, var(--accent) 42%, transparent)',
                  borderWidth: isActive ? '1.5px' : '1px',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-btn)',
                  boxShadow: isActive
                    ? '0 8px 25px -4px rgba(255, 77, 77, 0.35), 0 0 14px rgba(255, 77, 77, 0.2)'
                    : 'none',
                }}
              >
                {tab.title}
              </button>
            )
          })}
        </div>

        {/* Acordeón moderno con Fraunces SemiBold, viñeta interactiva y transición grid 0fr->1fr */}
        <div className="space-y-4">
          {visibleItems.map((item: FaqItem, idx: number) => {
            const itemKey = String(idx)
            const isOpen = openItemKey === itemKey

            return (
              <div
                key={item.question}
                className="bullet-reveal-card group overflow-hidden border transition-all duration-300"
                style={{
                  borderRadius: 'var(--radius-card)',
                  borderColor: isOpen
                    ? 'var(--accent)'
                    : 'color-mix(in srgb, var(--accent) 50%, transparent)',
                  borderWidth: isOpen ? '1.5px' : '1px',
                  backgroundColor: 'var(--bg-card)',
                  boxShadow: isOpen
                    ? '0 16px 42px -10px rgba(255, 77, 77, 0.3), 0 0 20px rgba(255, 77, 77, 0.15)'
                    : '0 10px 30px -12px rgba(255, 77, 77, 0.12), var(--shadow-card)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isOpen
                    ? 'var(--accent)'
                    : 'color-mix(in srgb, var(--accent) 50%, transparent)'
                }}
              >
                {/* Cabecera de la pregunta */}
                <button
                  type="button"
                  onClick={() => toggleItem(itemKey)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left transition-colors md:p-8"
                >
                  <div className="min-w-0 flex-1">
                    {item.badge && (
                      <span
                        className="mb-2.5 inline-block rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest"
                        style={{
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--accent-text)',
                          border:
                            '1px solid color-mix(in srgb, var(--accent) 35%, transparent)',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                    <h3
                      className="bullet-reveal-title font-editorial text-xl leading-snug md:text-2xl"
                      style={{
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                      }}
                    >
                      <span className="bullet-reveal-dot" aria-hidden />
                      <span className="bullet-reveal-text">
                        {item.question}
                      </span>
                    </h3>
                  </div>

                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      borderColor: isOpen
                        ? 'var(--accent)'
                        : 'color-mix(in srgb, var(--accent) 35%, transparent)',
                      backgroundColor: isOpen
                        ? 'var(--accent-soft)'
                        : 'color-mix(in srgb, var(--accent) 8%, transparent)',
                      color: 'var(--accent)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={20} />
                  </span>
                </button>

                {/* Cuerpo desplegable fluido sin saltos bruscos (grid-template-rows: 0fr -> 1fr) */}
                <div
                  className="grid"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                    transition:
                      'grid-template-rows 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 340ms ease',
                  }}
                >
                  <div className="overflow-hidden">
                    <div
                      className="space-y-4 border-t px-6 pt-5 pb-7 text-base leading-[1.8] md:px-8 md:pb-8 md:text-lg"
                      style={{
                        color: 'var(--text-secondary)',
                        borderColor: 'var(--border-primary)',
                      }}
                    >
                      {item.paragraphs && item.paragraphs.length > 0 ? (
                        item.paragraphs.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className="max-w-none"
                            dangerouslySetInnerHTML={{ __html: p }}
                          />
                        ))
                      ) : (
                        <p className="max-w-none">{item.answer}</p>
                      )}

                      {/* Tarjetas de Valores y Pack cuando la pregunta incluye highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="mt-5 grid gap-4 pt-2 sm:grid-cols-3">
                          {item.highlights.map((hl) => (
                            <div
                              key={hl.label}
                              className="relative flex flex-col justify-between rounded-2xl border p-5 transition-transform duration-300 hover:-translate-y-0.5"
                              style={{
                                borderColor: hl.featured
                                  ? 'var(--accent)'
                                  : 'color-mix(in srgb, var(--accent) 40%, transparent)',
                                borderWidth: hl.featured ? '1.5px' : '1px',
                                background: hl.featured
                                  ? 'linear-gradient(145deg, rgba(255, 77, 77, 0.14) 0%, rgba(15, 23, 42, 0.85) 100%)'
                                  : 'var(--bg-primary)',
                                boxShadow: hl.featured
                                  ? '0 12px 30px -10px rgba(255, 77, 77, 0.28)'
                                  : 'none',
                              }}
                            >
                              <div>
                                <div className="mb-2 flex items-center justify-between gap-2">
                                  <span
                                    className="text-xs font-bold uppercase tracking-wider"
                                    style={{
                                      color: hl.featured
                                        ? 'var(--accent-text)'
                                        : 'var(--text-muted)',
                                    }}
                                  >
                                    {hl.label}
                                  </span>
                                  {hl.featured && (
                                    <Sparkles
                                      size={15}
                                      style={{ color: 'var(--accent)' }}
                                    />
                                  )}
                                </div>
                                <div
                                  className="font-editorial my-1 text-3xl font-semibold"
                                  style={{
                                    color: hl.featured
                                      ? 'var(--accent)'
                                      : 'var(--text-primary)',
                                  }}
                                >
                                  {hl.value}
                                </div>
                              </div>
                              {hl.note && (
                                <p
                                  className="mt-2 text-xs leading-snug"
                                  style={{ color: 'var(--text-secondary)' }}
                                >
                                  {hl.note}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
