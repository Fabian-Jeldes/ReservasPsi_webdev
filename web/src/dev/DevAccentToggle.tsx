import { useEffect, useState } from 'react'

/**
 * Solo en desarrollo: alterna un rojo más profundo (prueba de diseño).
 * No debe mostrarse en producción (`import.meta.env.PROD`).
 */
export function DevAccentToggle() {
  const [deep, setDeep] = useState(false)

  useEffect(() => {
    if (!import.meta.env.DEV) return
    document.documentElement.dataset.devAccent = deep ? 'deep' : 'default'
    return () => {
      delete document.documentElement.dataset.devAccent
    }
  }, [deep])

  if (!import.meta.env.DEV) return null

  return (
    <button
      type="button"
      className="fixed bottom-4 left-4 z-[200] rounded-full border border-slate-600 bg-slate-900/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-200 shadow-lg backdrop-blur-sm hover:border-rose-500/50 hover:text-white"
      onClick={() => setDeep((d) => !d)}
      title="Prueba de color (solo dev): acento rojo más profundo"
    >
      {deep ? 'Acento: profundo' : 'Acento: estándar'}
    </button>
  )
}
