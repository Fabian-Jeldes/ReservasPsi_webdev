/* eslint-disable react-refresh/only-export-components -- entrada de build, no participa en HMR */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { AppProviders } from './providers/AppProviders'

export { getSeo, getLastModified, PRERENDER_ROUTES } from './seo/seo'
export { renderHeadHtml } from './seo/head'

/** HTML del #root para una ruta (usado solo en build por scripts/prerender.mjs) */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <AppProviders>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </AppProviders>
    </StrictMode>,
  )
}
