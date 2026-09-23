import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { DevAccentToggle } from './dev/DevAccentToggle'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ArticlePage } from './pages/ArticlePage'
import { ArticlesPage } from './pages/ArticlesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { getSeo } from './seo/seo'
import { applySeoToDocument } from './seo/head'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

/** Actualiza <title>, meta y JSON-LD al navegar (la carga inicial ya viene prerenderizada) */
function SeoSync() {
  const { pathname } = useLocation()
  const isFirst = useRef(true)
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      // En dev no hay prerender: aplicar también en la primera carga
      if (!import.meta.env.DEV) return
    }
    applySeoToDocument(getSeo(pathname))
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SeoSync />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/articulos" element={<ArticlesPage />} />
        <Route path="/articulos/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {import.meta.env.DEV ? <DevAccentToggle /> : null}
    </>
  )
}
