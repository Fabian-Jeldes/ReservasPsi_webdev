// Convierte las imágenes fuente de assets-src/ a WebP en public/ y genera imágenes Open Graph (1200×630 JPG).
// Uso: node scripts/optimize-images.mjs  — idempotente; mantiene los originales fuera de public/.
import sharp from 'sharp'
import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'assets-src')
const PUBLIC = path.join(ROOT, 'public')
const OG_DIR = path.join(PUBLIC, 'og')

/** [archivo fuente relativo a assets-src, ancho máximo] */
const sources = [
  ['portada-andi.png', 1200],
  ['sobre-mi-andi.jpg', 1200],
]
for (const dir of await readdir(path.join(SRC, 'fotos_articulo'))) {
  const full = path.join(SRC, 'fotos_articulo', dir)
  if (!(await stat(full)).isDirectory()) continue
  for (const f of await readdir(full)) {
    if (f.endsWith('.png')) sources.push([`fotos_articulo/${dir}/${f}`, 1600])
  }
}

/** [fuente relativa a assets-src, nombre OG] */
const ogImages = [
  ['portada-andi.png', 'home.jpg'],
  ...['articulo1', 'articulo2', 'articulo3', 'articulo4'].map((a) => [
    `fotos_articulo/${a}/portada.png`,
    `${a}.jpg`,
  ]),
]

await mkdir(OG_DIR, { recursive: true })

for (const [rel, maxWidth] of sources) {
  const input = path.join(SRC, rel)
  const output = path.join(PUBLIC, rel.replace(/\.(png|jpe?g)$/i, '.webp'))
  await mkdir(path.dirname(output), { recursive: true })
  const info = await sharp(input)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(output)
  console.log(`${rel} → ${path.relative(PUBLIC, output)} ${info.width}×${info.height} ${(info.size / 1024).toFixed(0)} KB`)
}

for (const [rel, name] of ogImages) {
  const info = await sharp(path.join(SRC, rel))
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OG_DIR, name))
  console.log(`og/${name} ${(info.size / 1024).toFixed(0)} KB`)
}
