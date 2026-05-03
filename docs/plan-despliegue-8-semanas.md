# Plan de proyecto — 8 semanas (React + TypeScript + Vite → Cloudflare Pages)

Objetivo: en la **semana 8** el sitio está **desplegado en producción** (dominio, HTTPS, build estable), con las piezas grandes integradas o al menos con **contratos claros** donde falte backend (p. ej. OAuth de Google Calendar).

Principio pedagógico: **desplegar pronto y a menudo**. Cada semana deberías poder ver un build nuevo en Cloudflare, aunque sea con contenido parcial.

---

## Visión rápida por semana

| Semana | Enfoque | Resultado visible en Cloudflare |
|--------|---------|----------------------------------|
| 1 | Tooling + primer pipeline de despliegue | Página “Hola Andi” en una URL `*.pages.dev` |
| 2 | Arquitectura de carpetas, rutas, layout base | Navegación y shell del sitio |
| 3 | Perfil, especializaciones, UI responsive | Contenido estático principal |
| 4 | Consentimiento informado (UI + flujo) | Formulario y estados (persistencia según backend) |
| 5 | KYC / datos del paciente + PostHog (entorno dev/staging) | Eventos básicos sin datos clínicos |
| 6 | Agenda: modelo de datos + **Google Calendar** (API / flujo OAuth en backend o Worker) | Reserva que crea evento o slot bloqueado (según diseño) |
| 7 | Doctoralia, blog (CMS/API), reseñas, pulido UX | Integraciones externas conectadas o con mocks |
| 8 | Dominio propio, variables de producción, revisión legal/privacidad, **release** | Sitio en tu dominio, listo para usuarios reales |

---

## Semana 1 — Proyecto local y primer despliegue (lo más importante para aprender)

**Aprendizajes:** crear el proyecto, entender `npm run build`, conectar Git con Cloudflare Pages.

**Tareas:**

1. Instalar Node LTS (recomendado: la versión LTS actual).
2. La app vive en **`web/`** (ya creada): template **React** + **TypeScript** (`npm create vite@latest web -- --template react-ts`).
3. Probar en local: `cd web` → `npm install`, `npm run dev`, `npm run build`, `npm run preview`.
4. Subir el repo a GitHub/GitLab/Bitbucket (el que uses con Cloudflare).
5. **Primer despliegue** siguiendo el apéndice [Desplegar Vite en Cloudflare Pages](#apéndice-desplegar-react--vite-en-cloudflare-pages-paso-a-paso) (sección A: Git integration).

**Criterio de “hecho”:** URL pública tipo `https://<proyecto>.pages.dev` muestra tu app.

---

## Semana 2 — Rutas, layout y entorno

**Tareas:**

1. Añadir enrutador (**React Router** u otro acordado).
2. Definir rutas mínimas: `/`, `/consentimiento`, `/agenda`, `/blog` (aunque estén vacías).
3. Layout común: cabecera, pie, contenedor.
4. En Cloudflare Pages: configurar **variables de entorno** de *preview* vs *producción* (aunque sean placeholders).
5. Opcional: **preview deployments** por PR (activar en el panel de Pages).

**Criterio de “hecho”:** navegación real entre páginas en la URL de Pages.

---

## Semana 3 — Contenido principal (perfil y especializaciones)

**Tareas:**

1. Sección de perfil profesional (foto, texto, CTA a agenda).
2. Tarjetas de especializaciones (componentes reutilizables).
3. Responsive (móvil primero si puedes).
4. Accesibilidad básica (contraste, `alt`, foco).

**Criterio de “hecho”:** el “core” del sitio se entiende sin depender de integraciones.

---

## Semana 4 — Consentimiento informado

**Tareas:**

1. Flujo “leer → aceptar” con fecha/versión del documento.
2. Preparar payload que enviará al backend (cuando exista): usuario, versión, timestamp, firma si aplica.
3. PDF en cliente o delegado a backend (decisión explícita; datos sensibles suelen ir al servidor).

**Criterio de “hecho”:** UX completa; contrato de API documentado aunque el guardado sea mock.

---

## Semana 5 — KYC y PostHog

**Tareas:**

1. Formulario KYC (validación con **Zod** o similar).
2. Integrar **PostHog** solo con eventos agregados (p. ej. `page_view`, `cta_agenda_click`) — **sin** datos clínicos ni RUT en propiedades.
3. Política de cookies / aviso mínimo si aplica a tu jurisdicción.

**Criterio de “hecho”:** eventos visibles en el panel PostHog (proyecto de staging).

---

## Semana 6 — Agenda y Google Calendar

**Contexto técnico (imprescindible):** la **API de Google Calendar** no debe usarse con credenciales secretas solo desde el navegador. Lo habitual es:

- Un **backend** o **Cloudflare Worker** con OAuth (cuenta del psicólogo o “service account” según el modelo), que crea el evento cuando el paciente confirma; o
- Flujos oficiales de “reserva” que encajen con tu proveedor (a veces se combina con enlaces de Google Appointment).

**Tareas:**

1. Definir modelo: duración de sesión, zona horaria (Chile), buffers, cancelaciones.
2. Implementar UI de selección de hueco (o integración con widget si se elige atajo).
3. Conectar con tu capa servidor que llama a **Calendar API** (`events.insert`, etc.) para que el evento aparezca en el calendario del profesional y las notificaciones las maneje Google según su cuenta.
4. Actualización en tiempo real en la web: polling cada X segundos o refresco tras acción (alineado al requisito de “~10 s” si aplica).

**Criterio de “hecho”:** de extremo a extremo en *staging* (reserva de prueba → evento visible en Google Calendar del profesional).

---

## Semana 7 — Doctoralia, blog, reseñas

**Tareas:**

1. Cliente HTTP para Doctoralia (según su API o método permitido); caché y rate limits.
2. Blog: consumo desde **Ghost** u otro CMS (Content API) o Markdown en repo si aún no hay CMS.
3. Reseñas: rotación aleatoria, animación CSS, sin mostrar total.

**Criterio de “hecho”:** página de testimonios y listado de blog en producción o staging.

---

## Semana 8 — Producción: dominio, seguridad y cierre

**Tareas:**

1. Dominio en Cloudflare (o DNS apuntando a Pages): `www` / apex según decisión.
2. Revisar **variables de entorno** de producción (PostHog key, URLs de API).
3. HTTPS forzado, headers razonables (CSP cuando el equipo esté listo).
4. Prueba de humo: agenda, consentimiento, analítica, enlaces rotos.
5. **Tag / release** en Git (`v1.0.0` o similar) y documentar en el readme qué incluye.

**Criterio de “hecho”:** URL definitiva, estable, con lo esencial funcionando; deuda técnica listada para post-lanzamiento.

---

## Apéndice: desplegar React + Vite en Cloudflare (paso a paso)

### A) Desde Git (recomendado para aprender el flujo “push → build → publicar”)

1. Crea el repositorio en GitHub (u otro) y sube tu proyecto Vite (sin `node_modules` en Git: usa `.gitignore` por defecto de Vite).
2. Entra en [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Autoriza a Cloudflare a leer el repo.
4. Selecciona el repositorio y la rama (p. ej. `main`).
5. **Build settings:**
   - **Framework preset:** Vite (o “None” si no aparece; funciona igual).
   - **Build command:** `npm run build`
   - **Build output directory:** `dist` (Vite escribe ahí por defecto).
6. **Root directory:** `web` (en este repo el front está en la carpeta `web/`, no en la raíz).
7. **Environment variables:** añade cuando las necesites (p. ej. `VITE_*` para variables públicas en Vite; recuerda que lo que empiece por `VITE_` se expone al cliente).
8. Pulsa **Save and Deploy**. Espera el log de build: si falla, léelo (TypeScript, dependencias, comando incorrecto).
9. Abre la URL `*.pages.dev` que te asigna Cloudflare. Cada `git push` a la rama conectada genera un nuevo deploy.

**Qué estás aprendiendo aquí:** Cloudflare clona tu repo, ejecuta el build en su infraestructura y sirve los archivos estáticos de `dist` por HTTPS en CDN global.

### B) Desde la CLI (`wrangler`) — útil para depurar o equipos que prefieren terminal

1. Instala Wrangler: `npm install -g wrangler` o úsalo vía `npx wrangler`.
2. Autenticación: `wrangler login`.
3. Desde `web/`, tras `npm run build`, el directorio a subir es `web/dist` (o ejecuta el deploy con cwd en `web`). **Direct Upload** de Pages: `wrangler pages deploy dist --project-name=<nombre>` (consulta `wrangler pages deploy --help` por flags actuales).

**Cuándo usar B:** cuando quieres subir un build local sin pasar por Git, o en pipelines personalizados.

### C) Errores típicos

- **Build output vacío o ruta mal puesta:** el directorio debe ser `dist`, no `build` (salvo que cambies `outDir` en `vite.config.ts`).
- **Variables en el cliente:** en Vite solo las prefijadas `VITE_` se inyectan; nunca pongas secretos ahí.
- **Rutas SPA:** si usas React Router en modo history, en Pages suele hacer falta configurar **redirects** para que todas las rutas sirvan `index.html` (Cloudflare permite un archivo `_redirects` o ajustes en el panel según la doc vigente).

---

## Nota sobre tiempo (¿8 semanas o menos?)

Ocho semanas dan margen para **aprender el despliegue**, **iterar diseño** y **encajar OAuth / Calendar** sin apagar incendios cada día. Si ya dominas React y CI, puedes comprimir fases 1–3; la **semana 6 (Calendar + servidor)** suele ser el cuello de botella real, no el front estático.

---

## Referencias en este repo

- `readme.md` — visión del producto y stack.
- `agents.md` — contexto para desarrollo y límites (CMS, privacidad, integraciones).
