import posthog from 'posthog-js'

/**
 * Solo inicializa si hay clave pública (VITE_* se expone al cliente).
 * No enviar datos clínicos ni PII en eventos.
 */
export function initPosthog() {
  const key = import.meta.env.VITE_POSTHOG_KEY
  const host = import.meta.env.VITE_POSTHOG_HOST ?? 'https://app.posthog.com'
  if (!key) return

  posthog.init(key, {
    api_host: host,
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
  })
}

export { posthog }
