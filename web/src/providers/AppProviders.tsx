import { type ReactNode, useEffect } from 'react'
import { initPosthog } from '../lib/posthog'

type Props = { children: ReactNode }

/** Providers compartidos por cliente y prerender; el router lo pone cada entrada (Browser/Static). */
export function AppProviders({ children }: Props) {
  useEffect(() => {
    initPosthog()
  }, [])

  return <>{children}</>
}
