import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { AppProviders } from './providers/AppProviders.tsx'

const app = (
  <StrictMode>
    <AppProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProviders>
  </StrictMode>
)

const root = document.getElementById('root')!

// En producción cada ruta llega prerenderizada (scripts/prerender.mjs): se hidrata.
// En dev (vite) el #root viene vacío: render normal.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
