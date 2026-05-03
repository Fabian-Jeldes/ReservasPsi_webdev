# FrontEnd Andi

Repositorio del front-end del proyecto **Andi**: plataforma web orientada a servicios de **psicolog�a cl�nica y especializaci�n**.

**Stack acordado:** **React**, **TypeScript**, **Vite**, desplegado en **Cloudflare Pages** (carpeta de build: `web/`).

## Características principales

- **Perfil de profesional**: sección inicial con fotografía y presentación.
- **Consentimiento informado**: firma o aceptación (I agree), almacenamiento en base de datos y resumen en PDF.
- **Agenda interactiva**: calendarización con actualización frecuente (referencia: cada ~10 s). Integración con la **API de Google Calendar** para que los pacientes puedan **agendar** previa validación de pago, y el/los eventos queden en el calendario del psicólogo. *OAuth y credenciales: backend o Worker, no en el navegador.*
- **Tarjetas de especializaciones**: acercamientos clínicos y tratamientos (cards).
- **Autenticación y KYC (conoce a tu paciente)**: identificación de clientes (nombre, RUT, teléfono, dirección, ciudad, región, código postal) con token de sesión.
- **Blog de psicoeducación**: entradas y artículos (p. ej. educación sobre problemas sexuales y clínicos).
- **Reseñas / testimonios**: integración con la API de **Doctoralia**; visualización aleatoria con transiciones CSS (p. ej. fading), sin mostrar el total de reseñas.
- **Analítica**: telemetría y mapas de calor con **PostHog**.

## Tecnologías en `web/`

| Paquete / servicio | Rol |
|--------------------|-----|
| **Vite** + **React 19** + **TypeScript** | App y build |
| **Tailwind CSS v4** (`@tailwindcss/vite`) | Estilos (alineados a `webdev_try1/app.jsx`) |
| **react-router-dom** | Rutas SPA |
| **@tanstack/react-query** | Datos de APIs (Strapi, backend/worker, Doctoralia, etc.) |
| **zod** | Validación (KYC, formularios) |
| **lucide-react** | Iconos |
| **posthog-js** | Analítica (opcional; ver `web/.env.example`) |
| **Cloudflare Pages** | Hosting del `dist` |
| **Google Calendar API** | Citas (vía servidor / Worker) |
| **Strapi** | CMS headless para blog y manejo de usuarios (ver `agents.md`) |
| **MercadoPago** | Pasarela de pagos para el cobro de consultas |
| **Doctoralia** | Rese�as (seg�n API / pol�ticas) |

Plan de trabajo y despliegue: [`docs/plan-despliegue-8-semanas.md`](docs/plan-despliegue-8-semanas.md).

## Estructura del proyecto

- `web/` � aplicaci�n **Vite + React + TS** (comandos: `cd web` ? `npm install` / `npm run dev` / `npm run build`).
- `web/.env.example` � variables p�blicas (`VITE_*`) de ejemplo.
- `webdev_try1/app.jsx` � prototipo visual de referencia (Tailwind + Lucide).
- `how_proyectoAndi.txt` � notas iniciales y requerimientos.
- `docs/plan-despliegue-8-semanas.md` � calendario de 8 semanas hasta producci�n.

## Configuraci�n y desarrollo

1. Clonar: `git clone <url-del-repo>`
2. `cd web` ? `npm install` ? `npm run dev` (desarrollo) o `npm run build` (artefacto en `web/dist`).
3. Copiar `web/.env.example` a `web/.env` y rellenar solo lo necesario.
4. **Cloudflare Pages:** conectar el repo y fijar **Root directory** = `web`, **Build command** = `npm run build`, **Output** = `dist`.
5. Contexto para agentes: `agents.md`.



# Ejemplos de cada artículo
## https://gemini.google.com/share/3abf1ec10f51 
## https://gemini.google.com/share/4f2617e8d0b4 