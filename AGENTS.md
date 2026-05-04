# Agents — Proyecto Andi (FrontEnd)

Documento de contexto para asistentes de código y colaboradores. Deriva de `readme.md` y decisiones de arquitectura acordadas o propuestas.

## Qué es Andi

Plataforma / sitio web orientado a **servicios de psicología clínica y especialización**: presencia profesional, legal (consentimiento informado), agenda, contenido psicoeducativo y confianza social (reseñas).

## Alcance funcional (producto)

- **Perfil de profesional**: fotografía y presentación.
- **Consentimiento informado**: aceptación / firma ("I agree"), persistencia en base de datos y resumen en PDF.
- **Agenda interactiva**: calendarización con actualización frecuente (referencia: ~10 s); integración con **Google Calendar API** para reservas que aparecen en el calendario del profesional y notificaciones según su cuenta Google. *Credenciales y OAuth no van solo en el cliente; usar backend o Cloudflare Worker.*
- **Tarjetas de especializaciones**: enfoques clínicos y tratamientos.
- **Autenticación y KYC ("conoce a tu paciente")**: identificación del cliente (nombre, RUT, teléfono, dirección, ciudad, región, código postal) con token de sesión.
- **Blog de psicoeducación**: artículos y entradas (p. ej. problemas sexuales y clínicos). Cada artículo tiene su propia ruta (`/articulos/:slug`) con diseño editorial orgánico (flujo de lectura continuo, sin efecto de cards apiladas).
- **Reseñas / testimonios (+30 reseñas reales)**: carrusel interactivo con transiciones suaves (slide + fade), controles prev/next y dot indicators; orden aleatorio vía Fisher-Yates shuffle; integración prevista con API de Doctoralia; sin mostrar el total de reseñas.
- **Analítica**: telemetría y mapas de calor con **PostHog** (y privacidad acorde a datos de salud).

## Integraciones previstas

- **Google Calendar API** (agenda: creación de eventos / disponibilidad; avisos al psicólogo vía calendario Google).
- API **Doctoralia** (reseñas).
- **Firma digital** / flujo de consentimiento (según proveedor elegido).
- **PostHog** (eventos, sesiones, heatmaps donde aplique).

## Infraestructura objetivo

| Pieza | Elección | Notas |
|--------|-----------|--------|
| Front-end público | **Cloudflare Pages** | Bajo volumen de tráfico; CDN global, SSL y buen coste fijo/cero en muchos casos. |
| Telemetría | **PostHog** (cloud o self-host según presupuesto y cumplimiento) | Configurar mascarado de datos sensibles y políticas; evitar PII clínica en eventos. |
| CMS / Backend | **Strapi** | Headless CMS para manejar el contenido del blog y también cuentas de usuario/pacientes. |
| Pasarela de Pagos | **WhatsApp Directo** | Redirección manual a WhatsApp para coordinar pago y enlace de sesión. Se descartó MercadoPago. |

## CMS: Strapi y Arquitectura de Reservas

**Strapi** funciona como el núcleo de contenido (blog de psicoeducación) y también puede manejar el registro e inicio de sesión de los pacientes.

El **Flujo de Reserva** queda estructurado de la siguiente forma:
1. **KYC / Autenticación:** El paciente ingresa sus datos y se autentica (idealmente manejado vía Strapi o un proveedor de Auth).
2. **Agendamiento:** El frontend llama al Worker, el cual lee la disponibilidad real usando la **Google FreeBusy API** y genera el evento en el **Google Calendar** del psicólogo mediante Service Account, todo sincronizado en la zona horaria `America/Santiago`.
3. **Pago:** El paciente es redirigido a **WhatsApp** de forma directa para pagar y recibir el enlace de la sesión de Google Meet.

Recomendación práctica: mantener la lógica de validación de pagos y generación de tokens de Google Calendar estrictamente en el **Cloudflare Worker** (`worker/`) para no exponer credenciales.

## Stack front-end (decidido)

- Código en **`web/`**: **React + TypeScript + Vite**, **Tailwind CSS v4**, **lucide-react**, **React Router**, **TanStack Query**, **Zod**, **posthog-js** (opcional). Build estático (`web/dist`) en **Cloudflare Pages** (root del proyecto en Pages = `web`).
- Blog y Usuarios: contenido vía **Strapi API** u otro headless; Markdown en repo si el alcance es mínimo.

Integraciones que requieren secreto (p. ej. OAuth de Google Calendar): **backend dedicado** o **Cloudflare Worker**, no solo el bundle del navegador.

## Sistema de temas (desarrollo)

El proyecto cuenta con un **sistema de 4 temas visuales** controlados por ~40 CSS custom properties cada uno y un toggle visible solo en modo desarrollo. Los temas se definen en `web/src/themes.css` y se aplican globalmente a todos los componentes vía el atributo `data-theme` en `<html>`.

Los temas se diferencian no solo en **paleta de colores** sino también en **geometría** (radios, sombras, bordes), **tipografía** (peso, transformación, espaciado) y **decoraciones** (dividers, backdrop, card borders):

| Tema | Paleta | Tipografía | Geometría | Fuente visual |
|------|--------|------------|-----------|---------------|
| **Standar** | Dark `#0a0f1d` / rose | Inter (sans), w800 | Pills `2.5rem`, neon glow, bordes visibles | Diseño actual (no tocar) |
| **Bold Darkness** | Negro `#0a0a0a` / rojo `#c41e2a` | Inter (sans), w900, **UPPERCASE**, spacing 0.04em | Angular `0.75rem`, hard offset shadow, bordes visibles | `fotos_articulo/articulo1/` |
| **Warm Delight** | Crema `#f5eede` / amber `#c47628` | Playfair Display (serif), w700, spacing -0.03em | Suave `1.25rem`, warm diffused shadow, **sin bordes** de card | `fotos_articulo/articulo2/` |
| **Lavender Light** | Crema `#faf5ef` / lavanda `#9b7bb8` | Playfair Display (serif), w400 (ligero) | Zen `2rem`, sombra casi invisible, **sin bordes** de card | `fotos_articulo/articulo3/` |

**Archivos clave del sistema de temas:**
- `web/src/themes.css` — Definición de ~40 CSS custom properties por tema (colores, tipografía, bordes, sombras, radios, heading weight/transform, card shadows, divider styles, article sizing).
- `web/src/dev/DevAccentToggle.tsx` — Toggle expandible con selector de 4 temas + persistencia en `localStorage`.
- `web/index.html` — Google Fonts (Inter + Playfair Display) y `data-theme="standard"` por defecto.

**Convención para componentes:** Los colores, bordes, tipografías, radios, sombras y heading styles se leen de CSS variables (`var(--accent)`, `var(--heading-weight)`, `var(--shadow-card)`, etc.) en vez de clases Tailwind hardcodeadas. El spacing/layout sigue usando Tailwind.

## Contenido editable

**Todos los strings del sitio están centralizados en un solo archivo:** `web/src/data/site.ts`

- `REVIEWS_DATA` — +30 reseñas reales de pacientes (Fisher-Yates shuffle en rotación)
- `SPECIALIZATIONS` — 6 tarjetas de especialización
- `BLOG_POSTS` — 3 posts del blog (título, fecha, categoría, resumen)
- `ARTICLE_PAGES` — 3 artículos completos (hero, secciones, notas clínicas, referencias, CTA)
- `PROFILE_IMAGE_URL` — URL de la foto de perfil
- `generateCalendarDays()` — generador de disponibilidad del calendario

## Artículos (diseño editorial orgánico)

Los artículos (`/articulos/:slug`) se renderizan como contenido editorial fluido, no como cards apiladas. Estructura:

1. **Hero full-width** con gradiente ambient y glow decorativo
2. **Intro** con kicker, título h2 y blockquote
3. **Secciones de contenido** separadas por `<hr class="theme-divider">` (estilo del divider varía por tema)
4. **Notas clínicas** como aside inline (borde izquierdo accent + fondo soft)
5. **Reflexión** como pull-quote centrado
6. **CTA** con fondo accent-soft y botón temático
7. **Referencias** colapsables (`<details>`)
8. **Autor** + categoría + fecha

Archivos: `web/src/pages/ArticlePage.tsx` (layout) + `web/src/components/ArticleContent.tsx` (contenido).

## Diseño de referencia (obligatorio para UI)

El prototipo en **`webdev_try1/app.jsx`** es la **fuente de verdad visual y de interacción** para el producto en Vite: hay que **mantener este modelo** (estilo, color, jerarquía, densidad) al pasar a TypeScript y componentes modulares.

- **Tecnología del archivo:** **React** con **JSX** (JavaScript), no TypeScript. Montaje con `createRoot` de `react-dom/client`.
- **Estilos:** [**Tailwind CSS**](https://tailwindcss.com/) vía clases utilitarias (`className`), ahora complementado por **CSS custom properties** en `themes.css`. Paleta base (tema estándar): fondo oscuro `#0a0f1d`, textos **slate**, acentos **rose** (p. ej. `rose-400` / `rose-500`), bordes suaves y **esquinas muy redondeadas** (`rounded-[2.5rem]`, `rounded-[3rem]`).
- **Iconos:** [**lucide-react**](https://lucide.dev/).
- **Contenido cubierto en el prototipo:** hero, navbar fija con blur, cards de especialidades, reseñas con carrusel (slide + fade), KYC + consentimiento, calendario mock (actualización de reloj ~10 s), blog con páginas independientes, footer.

Al implementar el app definitivo: replicar tokens (colores, tipografía sans, sombras/glows rosas) y patrones; migrar JSX → **TSX** y trocear en componentes sin "limpiar" el look hacia un tema genérico.

## Backend y datos (fuera de este repo, pero acoplados)

- **Agenda en "tiempo real"**: definir si es **polling** desde el front a tu API o **WebSockets** / **SSE**; Cloudflare Workers + Durable Objects es opción si todo vive en el ecosistema Cloudflare; si el estado vive en **DO**, un **servicio Node/Bun** en el droplet es suficiente para volúmenes modestos.
- **Consentimiento y PDF**: generación en servidor o servicio firmado; no exponer lógica sensible solo en el cliente.

## Convenciones para agentes de código

- Mantener alineación con este documento al proponer dependencias o despliegue.
- **Sistema de temas:** Al modificar componentes, usar CSS custom properties para **todos** los aspectos visuales — colores (`var(--accent)`), tipografía (`var(--heading-weight)`, `var(--heading-transform)`), geometría (`var(--radius-card)`, `var(--shadow-card)`, `var(--card-border-width)`) — no hardcodear clases Tailwind de color ni font-weight. El spacing y layout sí pueden usar Tailwind.
- **Contenido editable:** Todos los strings van en `web/src/data/site.ts`, no hardcodeados en componentes.
- Priorizar **privacidad** (datos de salud): no enviar a PostHog identificadores clínicos; revisar consentimiento cookies si aplica (UE/Chile según audiencia).
- Idioma de UI y contenido editorial: acordar con el producto (español por defecto en este proyecto).
- Estructura existente del repo: `webdev_try1/app.jsx` (**referencia de diseño**), `fotos_articulo/` (**referencia visual de temas**), `how_proyectoAndi.txt` (notas).

## Estado

App en **`web/`**: **React + TS + Vite + Tailwind + CSS Custom Properties + Cloudflare Pages**. Sistema de 4 temas visuales con diferenciación geométrica. +30 reseñas reales. Artículos con diseño orgánico y fotografías simbólicas/humanísticas. Integración de FreeBusy y creación de eventos activa en Cloudflare Workers (`worker/`). Roadmap: `docs/plan-despliegue-8-semanas.md`.
