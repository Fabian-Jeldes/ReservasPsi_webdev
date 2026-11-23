import type { PostHog } from 'posthog-js'

type EventProperties = Record<string, string | number | boolean>
type PendingEvent = { event: string; properties?: EventProperties }

let client: PostHog | null = null
let loadPromise: Promise<PostHog | null> | null = null
let scheduled = false
const pendingEvents: PendingEvent[] = []

function loadAndInitPosthog(): Promise<PostHog | null> {
  if (client) return Promise.resolve(client)
  if (loadPromise) return loadPromise

  const key = import.meta.env.VITE_POSTHOG_KEY
  if (!key || typeof window === 'undefined') return Promise.resolve(null)

  loadPromise = import('posthog-js')
    .then(({ default: posthog }) => {
      if (!posthog.__loaded) {
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
      client = posthog

      // Enviar eventos registrados antes de que terminara de cargar el SDK
      while (pendingEvents.length > 0) {
        const next = pendingEvents.shift()
        if (next) posthog.capture(next.event, next.properties)
      }
      return posthog
    })
    .catch(() => {
      loadPromise = null
      return null
    })

  return loadPromise
}

/**
 * Carga e inicializa PostHog de forma diferida tras hidratar (en tiempo inactivo del navegador)
 * para no engordar ni bloquear el bundle inicial.
 * Los eventos pasan por el proxy /ingest del Worker del sitio (web/worker/index.ts).
 * No enviar datos clínicos ni PII en eventos: los formularios llevan `ph-no-capture`.
 */
export function initPosthog() {
  const key = import.meta.env.VITE_POSTHOG_KEY
  if (!key || typeof window === 'undefined' || scheduled || client) return
  scheduled = true

  const start = () => {
    void loadAndInitPosthog()
  }

  const win = window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
  }
  if (typeof win.requestIdleCallback === 'function') {
    win.requestIdleCallback(start, { timeout: 2500 })
  } else {
    window.setTimeout(start, 1200)
  }
}

/** Evento sin PII; encola y dispara la carga diferida si aún no terminó de inicializarse */
export function track(event: string, properties?: EventProperties) {
  if (client?.__loaded) {
    client.capture(event, properties)
    return
  }
  const key = import.meta.env.VITE_POSTHOG_KEY
  if (!key || typeof window === 'undefined') return

  pendingEvents.push({ event, properties })
  void loadAndInitPosthog()
}
