import { useEffect } from 'react'
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '../data/site'

type SEOProps = {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  canonicalUrl?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function SEO({
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonicalUrl,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    if (typeof document === 'undefined') return

    document.title = title

    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      if (!content) return
      let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attrName, attrValue)
        element.setAttribute('data-seo', '')
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const currentUrl =
      canonicalUrl ||
      (typeof window !== 'undefined' ? `${SITE_URL}${window.location.pathname}` : SITE_URL)

    const resolvedOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`

    setMetaTag('name', 'description', description)
    if (keywords) {
      setMetaTag('name', 'keywords', keywords)
    }
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:url', currentUrl)
    setMetaTag('property', 'og:image', resolvedOgImage)
    setMetaTag('property', 'og:site_name', SITE_NAME)
    setMetaTag('property', 'og:locale', 'es_CL')
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', resolvedOgImage)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      canonical.setAttribute('data-seo', '')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl.split('#')[0])

    if (jsonLd) {
      const existingScripts = document.head.querySelectorAll('script[type="application/ld+json"][data-seo-custom]')
      existingScripts.forEach((s) => s.remove())

      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      for (const item of items) {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seo', '')
        script.setAttribute('data-seo-custom', 'true')
        script.textContent = JSON.stringify(item)
        document.head.appendChild(script)
      }
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, jsonLd])

  return null
}
