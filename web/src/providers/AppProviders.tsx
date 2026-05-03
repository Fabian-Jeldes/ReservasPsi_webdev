import { QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createAppQueryClient } from '../lib/query-client'
import { initPosthog } from '../lib/posthog'

const queryClient = createAppQueryClient()

type Props = { children: ReactNode }

export function AppProviders({ children }: Props) {
  useEffect(() => {
    initPosthog()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  )
}
