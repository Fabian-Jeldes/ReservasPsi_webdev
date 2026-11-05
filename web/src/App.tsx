import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { DevAccentToggle } from './dev/DevAccentToggle'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ArticlePage } from './pages/ArticlePage'
import { ArticlesPage } from './pages/ArticlesPage'
import { SpecializationPage } from './pages/SpecializationPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { BackgroundDecorations } from './components/BackgroundDecorations'
import { getSeo } from './seo/seo'
import { applySeoToDocument } from './seo/head'

// Problemas Sexuales Masculinos
import { DisfuncionErectilPage } from './pages/especialidades/DisfuncionErectilPage'
import { EyaculacionPrecozPage } from './pages/especialidades/EyaculacionPrecozPage'
import { EyaculacionRetardadaPage } from './pages/especialidades/EyaculacionRetardadaPage'
import { BajoDeseoMasculinoPage } from './pages/especialidades/BajoDeseoMasculinoPage'
import { AnsiedadDesempenoPage } from './pages/especialidades/AnsiedadDesempenoPage'
import { AdiccionPornografiaPage } from './pages/especialidades/AdiccionPornografiaPage'

// Problemas Sexuales Femeninos
import { VaginismoDolorPelvicoPage } from './pages/especialidades/VaginismoDolorPelvicoPage'
import { DispareuniaPage } from './pages/especialidades/DispareuniaPage'
import { AnorgasmiaPage } from './pages/especialidades/AnorgasmiaPage'
import { BajoDeseoFemeninoPage } from './pages/especialidades/BajoDeseoFemeninoPage'
import { AversionSexoPage } from './pages/especialidades/AversionSexoPage'

// Problemáticas del Ánimo y Ansiedad
import { TrastornosAnsiedadPage } from './pages/especialidades/TrastornosAnsiedadPage'
import { CuadrosDepresivosPage } from './pages/especialidades/CuadrosDepresivosPage'
import { EstresCronicoBurnoutPage } from './pages/especialidades/EstresCronicoBurnoutPage'
import { RegulacionEmocionalAutoestimaPage } from './pages/especialidades/RegulacionEmocionalAutoestimaPage'

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
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <SeoSync />
      <BackgroundDecorations />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/articulos" element={<ArticlesPage />} />
          <Route path="/articulos/:slug" element={<ArticlePage />} />
          <Route path="/reserva-de-horas" element={<Navigate to="/#reserva" replace />} />

          {/* Anexos SEO: Problemas Sexuales Masculinos */}
          <Route
            path="/sexualidad-masculina/disfuncion-erectil-psicogena"
            element={<DisfuncionErectilPage />}
          />
          <Route
            path="/especialidades/disfuncion-erectil"
            element={<Navigate to="/sexualidad-masculina/disfuncion-erectil-psicogena" replace />}
          />
          <Route
            path="/especialidades/disfuncion-erectil-psicogena"
            element={<Navigate to="/sexualidad-masculina/disfuncion-erectil-psicogena" replace />}
          />
          <Route
            path="/sexualidad-masculina/eyaculacion-precoz"
            element={<EyaculacionPrecozPage />}
          />
          <Route
            path="/especialidades/eyaculacion-precoz"
            element={<Navigate to="/sexualidad-masculina/eyaculacion-precoz" replace />}
          />
          <Route
            path="/sexualidad-masculina/eyaculacion-retardada"
            element={<EyaculacionRetardadaPage />}
          />
          <Route
            path="/especialidades/eyaculacion-retardada"
            element={<Navigate to="/sexualidad-masculina/eyaculacion-retardada" replace />}
          />
          <Route
            path="/sexualidad-masculina/bajo-deseo-sexual-masculino"
            element={<BajoDeseoMasculinoPage />}
          />
          <Route
            path="/especialidades/bajo-deseo-sexual-masculino"
            element={<Navigate to="/sexualidad-masculina/bajo-deseo-sexual-masculino" replace />}
          />
          <Route
            path="/sexualidad-masculina/ansiedad-de-desempeno"
            element={<AnsiedadDesempenoPage />}
          />
          <Route
            path="/especialidades/ansiedad-desempeno-sexual"
            element={<Navigate to="/sexualidad-masculina/ansiedad-de-desempeno" replace />}
          />
          <Route
            path="/sexualidad-masculina/uso-problematico-de-pornografia"
            element={<AdiccionPornografiaPage />}
          />
          <Route
            path="/especialidades/adiccion-pornografia"
            element={<Navigate to="/sexualidad-masculina/uso-problematico-de-pornografia" replace />}
          />

          {/* Anexos SEO: Problemas Sexuales Femeninos */}
          <Route
            path="/sexualidad-femenina/vaginismo-dolor-genitopelvico"
            element={<VaginismoDolorPelvicoPage />}
          />
          <Route
            path="/especialidades/vaginismo-dolor-pelvico"
            element={<Navigate to="/sexualidad-femenina/vaginismo-dolor-genitopelvico" replace />}
          />
          <Route
            path="/sexualidad-femenina/dispareunia-dolor-relaciones"
            element={<DispareuniaPage />}
          />
          <Route
            path="/especialidades/dispareunia"
            element={<Navigate to="/sexualidad-femenina/dispareunia-dolor-relaciones" replace />}
          />
          <Route
            path="/sexualidad-femenina/anorgasmia-dificultad-orgasmo"
            element={<AnorgasmiaPage />}
          />
          <Route
            path="/especialidades/anorgasmia"
            element={<Navigate to="/sexualidad-femenina/anorgasmia-dificultad-orgasmo" replace />}
          />
          <Route
            path="/sexualidad-femenina/deseo-sexual-hipoactivo-femenino"
            element={<BajoDeseoFemeninoPage />}
          />
          <Route
            path="/especialidades/bajo-deseo-sexual-femenino"
            element={<Navigate to="/sexualidad-femenina/deseo-sexual-hipoactivo-femenino" replace />}
          />
          <Route
            path="/sexualidad-femenina/aversion-al-sexo"
            element={<AversionSexoPage />}
          />
          <Route
            path="/especialidades/aversion-al-sexo"
            element={<Navigate to="/sexualidad-femenina/aversion-al-sexo" replace />}
          />

          {/* Anexos SEO: Problemáticas del Ánimo y Ansiedad */}
          <Route
            path="/salud-emocional/trastornos-ansiedad-panico"
            element={<TrastornosAnsiedadPage />}
          />
          <Route
            path="/especialidades/trastornos-de-ansiedad"
            element={<Navigate to="/salud-emocional/trastornos-ansiedad-panico" replace />}
          />
          <Route
            path="/salud-emocional/cuadros-depresivos-alteraciones-animo"
            element={<CuadrosDepresivosPage />}
          />
          <Route
            path="/especialidades/cuadros-depresivos"
            element={<Navigate to="/salud-emocional/cuadros-depresivos-alteraciones-animo" replace />}
          />
          <Route
            path="/salud-emocional/estres-cronico-burnout"
            element={<EstresCronicoBurnoutPage />}
          />
          <Route
            path="/especialidades/estres-cronico-burnout"
            element={<Navigate to="/salud-emocional/estres-cronico-burnout" replace />}
          />
          <Route
            path="/salud-emocional/regulacion-emocional-autoestima"
            element={<RegulacionEmocionalAutoestimaPage />}
          />
          <Route
            path="/especialidades/regulacion-emocional-autoestima"
            element={<Navigate to="/salud-emocional/regulacion-emocional-autoestima" replace />}
          />

          {/* Ruta dinámica de respaldo */}
          <Route path="/especialidades/:slug" element={<SpecializationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <DevAccentToggle />
    </div>
  )
}
