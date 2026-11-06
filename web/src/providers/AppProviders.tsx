import { QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useEffect, useState } from 'react'
import { createAppQueryClient } from '../lib/query-client'
import { initPosthog } from '../lib/posthog'

type Props = { children: ReactNode }

/** Providers compartidos por cliente y prerender; el router lo pone cada entrada (Browser/Static). */
export function AppProviders({ children }: Props) {
  // Un QueryClient por árbol: en el prerender cada ruta tiene su propia instancia
  const [queryClient] = useState(createAppQueryClient)

  useEffect(() => {
    initPosthog()
  }, [])

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
