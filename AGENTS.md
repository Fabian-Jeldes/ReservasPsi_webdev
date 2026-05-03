# Agents — Proyecto Andi (FrontEnd)

Documento de contexto para asistentes de código y colaboradores. Deriva de `readme.md` y decisiones de arquitectura acordadas o propuestas.

## Qué es Andi

Plataforma / sitio web orientado a **servicios de psicología clínica y especialización**: presencia profesional, legal (consentimiento informado), agenda, contenido psicoeducativo y confianza social (reseñas).

## Alcance funcional (producto)

- **Perfil de profesional**: fotografía y presentación.
- **Consentimiento informado**: aceptación / firma (“I agree”), persistencia en base de datos y resumen en PDF.
- **Agenda interactiva**: calendarización con actualización frecuente (referencia: ~10 s); integración con **Google Calendar API** para reservas que aparecen en el calendario del profesional y notificaciones según su cuenta Google. *Credenciales y OAuth no van solo en el cliente; usar backend o Cloudflare Worker.*
- **Tarjetas de especializaciones**: enfoques clínicos y tratamientos.
- **Autenticación y KYC (“conoce a tu paciente”)**: identificación del cliente (nombre, RUT, teléfono, dirección, ciudad, región, código postal) con token de sesión.
- **Blog de psicoeducación**: artículos y entradas (p. ej. problemas sexuales y clínicos).
- **Reseñas / testimonios**: integración con API de Doctoralia; visualización aleatoria con transiciones (p. ej. fading), sin mostrar el total de reseñas.
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
| Pasarela de Pagos | **MercadoPago** | Cobro mandatorio de las sesiones antes de poder agendar en el Google Calendar del psicólogo. |

## CMS: Strapi y Arquitectura de Reservas

**Strapi** funciona como el núcleo de contenido (blog de psicoeducación) y también puede manejar el registro e inicio de sesión de los pacientes.

El **Flujo de Reserva** queda estructurado de la siguiente forma:
1. **KYC / Autenticación:** El paciente ingresa sus datos y se autentica (idealmente manejado vía Strapi o un proveedor de Auth).
2. **Pago:** El paciente es redirigido a **MercadoPago** para pagar la sesión por adelantado.
3. **Agendamiento:** Una vez que MercadoPago confirma el pago (vía webhook), nuestro backend intermedio (**Cloudflare Worker**) usa una *Service Account* de Google Cloud para insertar el evento en el **Google Calendar** del psicólogo.

Recomendación práctica: mantener la lógica de validación de pagos y generación de tokens de Google Calendar estrictamente en el **Cloudflare Worker** (`worker/`) para no exponer credenciales.

## Stack front-end (decidido)

- Código en **`web/`**: **React + TypeScript + Vite**, **Tailwind CSS v4**, **lucide-react**, **React Router**, **TanStack Query**, **Zod**, **posthog-js** (opcional). Build estático (`web/dist`) en **Cloudflare Pages** (root del proyecto en Pages = `web`).
- Blog y Usuarios: contenido vía **Strapi API** u otro headless; Markdown en repo si el alcance es mínimo.

Integraciones que requieren secreto (p. ej. OAuth de Google Calendar): **backend dedicado** o **Cloudflare Worker**, no solo el bundle del navegador.

## Diseño de referencia (obligatorio para UI)

El prototipo en **`webdev_try1/app.jsx`** es la **fuente de verdad visual y de interacción** para el producto en Vite: hay que **mantener este modelo** (estilo, color, jerarquía, densidad) al pasar a TypeScript y componentes modulares.

- **Tecnología del archivo:** **React** con **JSX** (JavaScript), no TypeScript. Montaje con `createRoot` de `react-dom/client`.
- **Estilos:** [**Tailwind CSS**](https://tailwindcss.com/) vía clases utilitarias (`className`), sin CSS suelto predominante. Paleta base: fondo oscuro `#0a0f1d`, textos **slate**, acentos **rose** (p. ej. `rose-400` / `rose-500`), bordes suaves y **esquinas muy redondeadas** (`rounded-[2.5rem]`, `rounded-[3rem]`).
- **Iconos:** [**lucide-react**](https://lucide.dev/).
- **Contenido cubierto en el prototipo:** hero, navbar fija con blur, cards de especialidades, reseñas con fade, KYC + consentimiento, calendario mock (actualización de reloj ~10 s), blog con modal, footer.

Al implementar el app definitivo: replicar tokens (colores, tipografía sans, sombras/glows rosas) y patrones; migrar JSX → **TSX** y trocear en componentes sin “limpiar” el look hacia un tema genérico.

## Backend y datos (fuera de este repo, pero acoplados)

- **Agenda en “tiempo real”**: definir si es **polling** desde el front a tu API o **WebSockets** / **SSE**; Cloudflare Workers + Durable Objects es opción si todo vive en el ecosistema Cloudflare; si el estado vive en **DO**, un **servicio Node/Bun** en el droplet es suficiente para volúmenes modestos.
- **Consentimiento y PDF**: generación en servidor o servicio firmado; no exponer lógica sensible solo en el cliente.

## Convenciones para agentes de código

- Mantener alineación con este documento al proponer dependencias o despliegue.
- Priorizar **privacidad** (datos de salud): no enviar a PostHog identificadores clínicos; revisar consentimiento cookies si aplica (UE/Chile según audiencia).
- Idioma de UI y contenido editorial: acordar con el producto (español por defecto en este proyecto).
- Estructura existente del repo: `webdev_try1/app.jsx` (**referencia de diseño**), `how_proyectoAndi.txt` (notas).

## Estado

App en **`web/`**: **React + TS + Vite + Tailwind + Cloudflare Pages**. Roadmap: `docs/plan-despliegue-8-semanas.md`. Variables: `web/.env.example`.
