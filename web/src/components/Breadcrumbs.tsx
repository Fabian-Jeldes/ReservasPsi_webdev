import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import {
  BREADCRUMB_LABELS,
  getBlogPostBySlug,
  getSpecializationBySlug,
} from '../data/site'
import { CLINICAL_SPECIALTY_SEO } from '../seo/clinical-specialties-seo'

export type BreadcrumbItem = {
  label: string
  to?: string
}

type Props = {
  items?: BreadcrumbItem[]
  className?: string
  align?: 'left' | 'center'
}

const LEGAL_BREADCRUMBS: Record<string, string> = {
  '/privacidad': 'Privacidad',
  '/practica-digital': 'Práctica Digital',
  '/terminos': 'Términos',
}

function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] {
  const normalized = pathname.replace(/\/+$/, '') || '/'
  if (normalized === '/') return []

  if (normalized === '/sobre-mi') {
    return [
      { label: BREADCRUMB_LABELS.home, to: '/' },
      { label: 'Sobre mí' },
    ]
  }

  if (normalized === '/articulos') {
    return [
      { label: BREADCRUMB_LABELS.home, to: '/' },
      { label: BREADCRUMB_LABELS.articles },
    ]
  }

  if (LEGAL_BREADCRUMBS[normalized]) {
    return [
      { label: BREADCRUMB_LABELS.home, to: '/' },
      { label: LEGAL_BREADCRUMBS[normalized] },
    ]
  }

  const articleMatch = normalized.match(/^\/articulos\/([^/]+)$/)
  if (articleMatch) {
    const post = getBlogPostBySlug(articleMatch[1])
    if (post) {
      return [
        { label: BREADCRUMB_LABELS.home, to: '/' },
        { label: BREADCRUMB_LABELS.articles, to: '/articulos' },
        { label: post.title },
      ]
    }
  }

  const specMatch = normalized.match(/^\/especialidades\/([^/]+)$/)
  if (specMatch) {
    const spec = getSpecializationBySlug(specMatch[1])
    if (spec) {
      return [
        { label: BREADCRUMB_LABELS.home, to: '/' },
        { label: 'Áreas de Atención', to: '/#especialidades' },
        { label: spec.title },
      ]
    }
  }

  const clinicalSeo = CLINICAL_SPECIALTY_SEO[normalized]
  if (clinicalSeo) {
    return [
      { label: BREADCRUMB_LABELS.home, to: '/' },
      { label: 'Áreas de Atención', to: '/#especialidades' },
      { label: clinicalSeo.conditionName },
    ]
  }

  return []
}

export function Breadcrumbs({ items, className = '', align = 'left' }: Props) {
  const { pathname } = useLocation()
  const trail = items ?? getBreadcrumbsForPath(pathname)

  if (trail.length < 2) return null

  return (
    <nav
      aria-label="Ruta de navegación"
      className={`mb-6 ${className}`.trim()}
    >
      <ol
        className={`flex flex-wrap items-center gap-y-1.5 gap-x-1.5 text-xs font-medium tracking-wide sm:text-[13px] ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
        style={{ color: 'var(--text-muted)' }}
      >
        {trail.map((item, idx) => {
          const isLast = idx === trail.length - 1
          return (
            <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight
                  size={13}
                  aria-hidden="true"
                  className="shrink-0 opacity-55"
                  style={{ color: 'var(--accent)' }}
                />
              )}
              {isLast || !item.to ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="transition-colors duration-200 hover:underline underline-offset-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
