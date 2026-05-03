/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POSTHOG_KEY?: string
  readonly VITE_POSTHOG_HOST?: string
  readonly VITE_GHOST_CONTENT_API_URL?: string
  readonly VITE_GHOST_CONTENT_API_KEY?: string
  readonly VITE_API_BASE_URL?: string
  /** Backend que expone GET /availability (JSON { days }) usando Google Calendar en servidor */
  readonly VITE_CALENDAR_API_BASE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
