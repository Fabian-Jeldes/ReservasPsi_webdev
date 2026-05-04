# FrontEnd Andi

Repositorio del front-end del proyecto **Andi**: plataforma web orientada a servicios de **psicología clínica y especialización**.

**Stack acordado:** **React**, **TypeScript**, **Vite**, desplegado en **Cloudflare Pages** (carpeta de build: `web/`).

## Características principales

- **Perfil de profesional**: sección inicial con fotografía y presentación.
- **Consentimiento informado**: firma o aceptación (I agree), almacenamiento en base de datos y resumen en PDF.
- **Agenda interactiva**: calendarización bloqueando multas y fines de semana. Integración con la **API de Google Calendar (FreeBusy)** vía **Cloudflare Worker** para que los pacientes puedan **agendar**, con creación automática de eventos usando Service Accounts.
- **Tarjetas de especializaciones**: acercamientos clínicos y tratamientos (cards con geometría y sombras temáticas).
- **Autenticación y KYC (conoce a tu paciente)**: identificación de clientes (nombre, RUT, teléfono, dirección, ciudad, región, código postal) con token de sesión.
- **Blog de psicoeducación**: entradas y artículos (p. ej. educación sobre problemas sexuales y clínicos). Cada artículo tiene su propia página con **diseño editorial orgánico** (sin efecto de cards apiladas — flujo de lectura continuo con dividers temáticos, blockquotes, notas clínicas inline y referencias colapsables).
- **Reseñas / testimonios (+30 reseñas reales)**: carrusel interactivo con transiciones suaves (slide + fade), controles prev/next y dot indicators; orden aleatorio via Fisher-Yates shuffle que recorre todas las reseñas antes de re-barajar; integración prevista con API de **Doctoralia**.
- **Analítica**: telemetría y mapas de calor con **PostHog**.
- **Sistema de temas (dev)**: toggle de 4 variantes visuales diferenciadas no solo en color sino en **geometría, tipografía, sombras y decoraciones**.

## Tecnologías en `web/`

| Paquete / servicio | Rol |
|--------------------|-----|
| **Vite** + **React 19** + **TypeScript** | App y build |
| **Tailwind CSS v4** (`@tailwindcss/vite`) | Estilos base (spacing/layout) |
| **CSS Custom Properties** (`themes.css`) | Sistema de 4 temas visuales dinámicos (~40 variables por tema) |
| **Google Fonts** (Inter + Playfair Display) | Tipografía sans y serif por tema |
| **react-router-dom** | Rutas SPA |
| **@tanstack/react-query** | Datos de APIs (Strapi, backend/worker, Doctoralia, etc.) |
| **zod** | Validación (KYC, formularios) |
| **lucide-react** | Iconos |
| **posthog-js** | Analítica (opcional; ver `web/.env.example`) |
| **Cloudflare Pages** | Hosting del `dist` |
| **Cloudflare Worker** | Integraciones backend seguras (Google Calendar API, Service Accounts) |
| **Strapi** | CMS headless para blog y manejo de usuarios (ver `AGENTS.md`) |
| **WhatsApp Directo** | Redirección manual a WhatsApp para coordinar pago y enlace de sesión |
| **Doctoralia** | Reseñas (según API / políticas) |

Plan de trabajo y despliegue: [`docs/plan-despliegue-8-semanas.md`](docs/plan-despliegue-8-semanas.md).

## Estructura del proyecto

- `web/` — aplicación **Vite + React + TS** (comandos: `cd web` → `npm install` / `npm run dev` / `npm run build`).
- `web/src/themes.css` — sistema de 4 temas visuales con ~40 CSS custom properties cada uno.
- `web/src/data/site.ts` — **fuente única de todos los strings editables** (reseñas, especialidades, blog posts, artículos, KYC).
- `web/src/dev/DevAccentToggle.tsx` — toggle de temas (solo desarrollo).
- `web/.env.example` — variables públicas (`VITE_*`) de ejemplo.
- `worker/` — Cloudflare Worker para integraciones backend seguras (Google Calendar FreeBusy, Service Account OAuth).
- `webdev_try1/app.jsx` — prototipo visual de referencia (Tailwind + Lucide).
- `fotos_articulo/` — capturas de diseño por artículo (artículo 1, 2, 3) usadas como referencia para los temas.
- `how_proyectoAndi.txt` — notas iniciales y requerimientos.
- `docs/plan-despliegue-8-semanas.md` — calendario de 8 semanas hasta producción.

## Sistema de temas (desarrollo)

4 variantes visuales que se aplican globalmente a toda la página, controladas por un toggle visible solo en `DEV`. Cada tema se diferencia en **paleta, tipografía, geometría (radios, sombras), peso de headings y decoraciones**:

| Tema | Paleta | Tipografía | Geometría | Inspiración |
|------|--------|------------|-----------|-------------|
| **Standar** | Dark `#0a0f1d` / rose | Inter (sans), weight 800 | Pill buttons, `2.5rem` radius, neon glow | Diseño actual |
| **Bold Darkness** | Negro `#0a0a0a` / rojo `#c41e2a` | Inter (sans), weight 900, **UPPERCASE** | Esquinas angulares `0.75rem`, hard offset shadow | `fotos_articulo/articulo1/` |
| **Warm Delight** | Crema `#f5eede` / amber `#c47628` | Playfair Display (serif), weight 700 | Sin bordes de card, warm diffused shadow, spacing generoso | `fotos_articulo/articulo2/` |
| **Lavender Light** | Crema `#faf5ef` / lavanda `#9b7bb8` | Playfair Display (serif), weight 400 (ligero) | Borderless zen, sombra casi invisible, `2rem` radius | `fotos_articulo/articulo3/` |

Los temas se definen en `web/src/themes.css` como CSS custom properties y se seleccionan vía `data-theme` en `<html>`. La selección persiste en `localStorage`.

## Configuración y desarrollo

1. Clonar: `git clone <url-del-repo>`
2. `cd web` → `npm install` → `npm run dev` (desarrollo) o `npm run build` (artefacto en `web/dist`).
3. Copiar `web/.env.example` a `web/.env` y rellenar solo lo necesario.
4. **Cloudflare Pages:** conectar el repo y fijar **Root directory** = `web`, **Build command** = `npm run build`, **Output** = `dist`.
5. Contexto para agentes: `AGENTS.md`.

## Ejemplos de cada artículo
- https://gemini.google.com/share/3abf1ec10f51
- https://gemini.google.com/share/4f2617e8d0b4