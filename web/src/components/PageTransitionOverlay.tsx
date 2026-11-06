import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

/**
 * Contenedor ligero de entrada de vista (el overlay fixed a pantalla completa fue desactivado
 * y reemplazado por la animación CSS directa `.view-enter` en App.tsx).
 */
export function PageTransitionOverlay({ children }: Props) {
  return <div className="view-enter relative z-10">{children}</div>
}
