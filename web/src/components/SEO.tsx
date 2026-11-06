import { useEffect } from 'react'

type SEOProps = {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  jsonLd?: Record<string, unknown>
}

export function SEO({
  title,
  description,
  keywords,
  ogImage = '/portada-andi.jpg',
  ogType = 'website',
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // 1. Actualizar el título de la pestaña
    document.title = title

    // Helper para crear o actualizar etiquetas <meta>
    const setMetaTag = (
      attrName: 'name' | 'property',
      attrValue: string,
      content: string
    ) => {
      if (!content) return
      let element = document.querySelector(
        `meta[${attrName}="${attrValue}"]`
      ) as HTMLMetaElement | null

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attrName, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const currentUrl = window.location.href
    const fullImageUrl = ogImage.startsWith('http')
      ? ogImage
      : `${window.location.origin}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`

    // 2. Meta tags estándar
    setMetaTag('name', 'description', description)
    if (keywords) {
      setMetaTag('name', 'keywords', keywords)
    }

    // 3. Open Graph (Facebook, WhatsApp, LinkedIn)
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:url', currentUrl)
    setMetaTag('property', 'og:image', fullImageUrl)
    setMetaTag('property', 'og:site_name', 'Ps. Andrei Andrusco - Sexología y Psicología Clínica')
    setMetaTag('property', 'og:locale', 'es_CL')

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', fullImageUrl)

    // 5. Canonical Link
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl.split('#')[0])

    // 6. JSON-LD (Datos estructurados para Google)
    const scriptId = 'dynamic-json-ld-schema'
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null

    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script')
        scriptEl.id = scriptId
        scriptEl.type = 'application/ld+json'
        document.head.appendChild(scriptEl)
      }
      scriptEl.textContent = JSON.stringify(jsonLd)
    } else if (scriptEl) {
      scriptEl.remove()
    }
  }, [title, description, keywords, ogImage, ogType, jsonLd])

  return null
}

