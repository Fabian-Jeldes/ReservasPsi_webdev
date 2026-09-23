import posthog from 'posthog-js'

/**
 * Solo inicializa si hay clave pública (VITE_* se expone al cliente).
 * Los eventos pasan por el proxy /ingest del Worker del sitio (web/worker/index.ts),
 * así no los cortan los bloqueadores y el navegador no habla directo con posthog.com.
 * No enviar datos clínicos ni PII en eventos: los formularios con datos del paciente
 * llevan la clase `ph-no-capture`.
 */
export function initPosthog() {
  const key = import.meta.env.VITE_POSTHOG_KEY
  if (!key || posthog.__loaded) return

  posthog.init(key, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    person_profiles: 'identified_only',
    // SPA: registra $pageview también en cada navegación de React Router
    capture_pageview: 'history_change',
    capture_pageleave: true,
    session_recording: { maskAllInputs: true },
  })
}

/** Evento sin PII; no hace nada si PostHog no está inicializado */
export function track(event: string, properties?: Record<string, string | number | boolean>) {
  if (posthog.__loaded) posthog.capture(event, properties)
}

export { posthog }
