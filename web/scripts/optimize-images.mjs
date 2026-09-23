// Convierte las imágenes pesadas de public/ a WebP (web) y genera imágenes Open Graph (1200×630 JPG).
// Uso: node scripts/optimize-images.mjs  — idempotente; no borra los originales.
import sharp from 'sharp'
import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PUBLIC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public')
const OG_DIR = path.join(PUBLIC, 'og')

/** [archivo fuente relativo a public, ancho máximo] */
const sources = [
  ['portada-andi.png', 1200],
  ['sobre-mi-andi.jpg', 1200],
]
for (const dir of await readdir(path.join(PUBLIC, 'fotos_articulo'))) {
  const full = path.join(PUBLIC, 'fotos_articulo', dir)
  if (!(await stat(full)).isDirectory()) continue
  for (const f of await readdir(full)) {
    if (f.endsWith('.png')) sources.push([`fotos_articulo/${dir}/${f}`, 1600])
  }
}

/** [fuente, nombre OG] */
const ogImages = [
  ['portada-andi.png', 'home.jpg'],
  ...['articulo1', 'articulo2', 'articulo3', 'articulo4'].map((a) => [
    `fotos_articulo/${a}/portada.png`,
    `${a}.jpg`,
  ]),
]

await mkdir(OG_DIR, { recursive: true })

for (const [rel, maxWidth] of sources) {
  const input = path.join(PUBLIC, rel)
  const output = input.replace(/\.(png|jpe?g)$/i, '.webp')
  const info = await sharp(input)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(output)
  console.log(`${rel} → ${path.basename(output)} ${info.width}×${info.height} ${(info.size / 1024).toFixed(0)} KB`)
}

for (const [rel, name] of ogImages) {
  const info = await sharp(path.join(PUBLIC, rel))
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OG_DIR, name))
  console.log(`og/${name} ${(info.size / 1024).toFixed(0)} KB`)
}
