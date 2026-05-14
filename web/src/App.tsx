import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { DevAccentToggle } from './dev/DevAccentToggle'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ArticlePage } from './pages/ArticlePage'
import { ArticlesPage } from './pages/ArticlesPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/articulos" element={<ArticlesPage />} />
        <Route path="/articulos/:slug" element={<ArticlePage />} />
      </Routes>
      <DevAccentToggle />
    </>
  )
}

