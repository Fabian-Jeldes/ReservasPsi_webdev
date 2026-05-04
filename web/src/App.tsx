import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { DevAccentToggle } from './dev/DevAccentToggle'
import { HomePage } from './pages/HomePage'
import { Article1 } from './pages/articles/Article1'
import { Article2 } from './pages/articles/Article2'
import { Article3 } from './pages/articles/Article3'

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
        <Route path="/articulos/mito-rendimiento-masculino" element={<Article1 />} />
        <Route path="/articulos/ansiedad-y-deseo" element={<Article2 />} />
        <Route path="/articulos/hablar-de-sexo-con-tu-pareja" element={<Article3 />} />
      </Routes>
      {import.meta.env.DEV ? <DevAccentToggle /> : null}
    </>
  )
}
