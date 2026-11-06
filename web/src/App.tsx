import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import { DevAccentToggle } from './dev/DevAccentToggle'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ArticlePage } from './pages/ArticlePage'
import { ArticlesPage } from './pages/ArticlesPage'
import { SpecializationPage } from './pages/SpecializationPage'
import { BackgroundDecorations } from './components/BackgroundDecorations'
import { IntroCurtainReveal } from './components/IntroCurtainReveal'
import { CustomCursor } from './components/CustomCursor'

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

type ViewTransitionDoc = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> }
}

export default function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const prevPathRef = useRef(location.pathname)
  const prevHashRef = useRef(location.hash)

  useEffect(() => {
    const pathChanged = location.pathname !== prevPathRef.current
    const hashChanged = location.hash !== prevHashRef.current
    prevPathRef.current = location.pathname
    prevHashRef.current = location.hash

    const scrollToTargetHash = (behavior: ScrollBehavior) => {
      if (!location.hash) return false
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const navOffset = 80
        const top =
          el.getBoundingClientRect().top + window.scrollY - navOffset
        window.scrollTo({ top: Math.max(0, top), behavior })
        return true
      }
      return false
    }

    // Caso 1: Mismo pathname, solo cambió el hash (ej. clic en #especialidades estando en Home)
    if (!pathChanged && hashChanged) {
      setDisplayLocation(location)
      requestAnimationFrame(() => {
        scrollToTargetHash('smooth')
      })
      return
    }

    if (!pathChanged) return

    // Caso 2: Cambio de página/ruta — usamos document.startViewTransition si está disponible
    const applyRouteChange = () => {
      flushSync(() => {
        setDisplayLocation(location)
      })
      if (location.hash) {
        // Si venimos de otra página hacia un ancla (#especialidades, #reviews),
        // posicionamos el inicio arriba y deslizamos suavemente una sola vez tras el montaje
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToTargetHash('smooth')
          })
        })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      }
    }

    const doc = document as ViewTransitionDoc
    if (typeof doc.startViewTransition === 'function') {
      try {
        doc.startViewTransition(() => {
          applyRouteChange()
        })
      } catch {
        applyRouteChange()
      }
    } else {
      applyRouteChange()
    }
  }, [location])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <IntroCurtainReveal />
      <CustomCursor />
      <BackgroundDecorations />
      <div key={displayLocation.pathname} className="view-enter relative z-10">
        <Routes location={displayLocation}>
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
        </Routes>
      </div>
      <DevAccentToggle />
    </div>
  )
}
