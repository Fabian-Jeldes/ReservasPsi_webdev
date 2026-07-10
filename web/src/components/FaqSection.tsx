import { useState, useMemo } from 'react'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { FAQ_DATA } from '../data/site'
import type { FaqCategory, FaqItem } from '../types/site'

export function FaqSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('general')
  const [openItemIdx, setOpenItemIdx] = useState<number | null>(null)

  const activeCategory = useMemo(() => {
    return FAQ_DATA.find((cat: FaqCategory) => cat.id === activeCategoryId) || FAQ_DATA[0]
  }, [activeCategoryId])

  const toggleItem = (idx: number) => {
    setOpenItemIdx(openItemIdx === idx ? null : idx)
  }

  const handleCategoryChange = (id: string) => {
    setActiveCategoryId(id)
    setOpenItemIdx(null) // Reset collapsibles when switching categories
  }

  return (
    <section 
      id="faq" 
      className="py-32 px-6"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            <MessageCircleQuestion size={22} />
          </div>
          <h2 
            className="text-3xl md:text-5xl mb-4"
            style={{ 
              color: 'var(--text-primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)',
              textTransform: 'var(--heading-transform)' as any,
              letterSpacing: 'var(--heading-spacing)'
            }}
          >
            Preguntas <span style={{ color: 'var(--accent)' }}>Frecuentes</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Respuestas directas y profesionales organizadas por temas para aclarar tus dudas antes de iniciar tu proceso de terapia.
          </p>
        </div>

        {/* Categories / Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FAQ_DATA.map((cat: FaqCategory) => {
            const isActive = cat.id === activeCategoryId
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className="px-5 py-2.5 font-semibold text-sm border transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: isActive ? 'var(--accent-soft)' : 'var(--bg-card)',
                  borderColor: isActive ? 'var(--accent)' : 'var(--border-primary)',
                  color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-btn)',
                  boxShadow: isActive ? 'var(--shadow-accent)' : 'none',
                }}
              >
                {cat.title}
              </button>
            )
          })}
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {activeCategory.items.map((item: FaqItem, idx: number) => {
            const isOpen = openItemIdx === idx
            return (
              <div 
                key={idx}
                className="border transition-all duration-300 overflow-hidden"
                style={{
                  borderRadius: 'var(--radius-card)',
                  borderColor: isOpen ? 'var(--border-accent)' : 'var(--border-primary)',
                  backgroundColor: 'var(--bg-card)',
                  boxShadow: isOpen ? 'var(--shadow-accent)' : 'var(--shadow-card)',
                }}
              >
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left font-bold text-lg md:text-xl transition-colors gap-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span>{item.question}</span>
                  <span 
                    className="transition-transform duration-300 shrink-0"
                    style={{ 
                      color: isOpen ? 'var(--accent)' : 'var(--text-muted)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <ChevronDown size={22} />
                  </span>
                </button>

                {/* Answer Content */}
                <div 
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div 
                    className="p-6 md:p-8 pt-0 text-base md:text-lg leading-relaxed border-t"
                    style={{ 
                      color: 'var(--text-secondary)',
                      borderColor: 'var(--border-primary)',
                    }}
                  >
                    {item.answer}
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
