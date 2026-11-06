import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build SSR solo para el prerender (scripts/prerender.mjs). Sin el plugin de Cloudflare
// ni Tailwind: aquí solo se necesita el HTML, el CSS sale del build del cliente.
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist-ssr',
    emptyOutDir: true,
  },
})
