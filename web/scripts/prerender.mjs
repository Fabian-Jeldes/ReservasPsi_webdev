// Genera un HTML estático por ruta (contenido + <head> SEO), 404.html y sitemap.xml.
// Corre después de `vite build` (cliente) y `vite build --config vite.ssr.config.ts`.
import { existsSync } from 'node:fs'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
// Con @cloudflare/vite-plugin los assets del cliente quedan en dist/client
const CLIENT_DIR = [path.join(ROOT, 'dist/client'), path.join(ROOT, 'dist')].find((d) =>
  existsSync(path.join(d, 'index.html')),
)
if (!CLIENT_DIR) throw new Error('No se encontró el index.html del build del cliente')

const ssr = await import(pathToFileURL(path.join(ROOT, 'dist-ssr/entry-server.js')).href)
const { render, getSeo, renderHeadHtml, getLastModified, PRERENDER_ROUTES } = ssr

const template = await readFile(path.join(CLIENT_DIR, 'index.html'), 'utf-8')
if ((template.match(/<title>/g) ?? []).length !== 1 || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html debe tener exactamente un <title> y <div id="root"></div>')
}

function page(url) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/, renderHeadHtml(getSeo(url)))
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)
}

for (const url of PRERENDER_ROUTES) {
  // /sobre-mi → sobre-mi.html: Cloudflare (html_handling auto-trailing-slash) lo sirve en
  // /sobre-mi sin redirigir, coincidiendo con la URL canónica sin barra final
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`
  const out = path.join(CLIENT_DIR, file)
  await mkdir(path.dirname(out), { recursive: true })
  await writeFile(out, page(url))
  console.log(`prerender ${url} → ${path.relative(ROOT, out)}`)
}

await writeFile(path.join(CLIENT_DIR, '404.html'), page('/404'))
console.log('prerender 404.html')

const siteUrl = getSeo('/').canonical.replace(/\/$/, '')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PRERENDER_ROUTES.map((url) => {
  const lastmod = getLastModified(url)
  return `  <url><loc>${siteUrl}${url === '/' ? '/' : url}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
}).join('\n')}
</urlset>
`
await writeFile(path.join(CLIENT_DIR, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml (${PRERENDER_ROUTES.length} URLs)`)

await rm(path.join(ROOT, 'dist-ssr'), { recursive: true, force: true })
