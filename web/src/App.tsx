import { Route, Routes } from 'react-router-dom'
import { DevAccentToggle } from './dev/DevAccentToggle'
import { ArticlePage } from './pages/ArticlePage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articulos/:slug" element={<ArticlePage />} />
      </Routes>
      {import.meta.env.DEV ? <DevAccentToggle /> : null}
    </>
  )
}
