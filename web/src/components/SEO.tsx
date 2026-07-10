import { useEffect } from 'react'

export interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
  ogType?: string
  canonicalUrl?: string
  jsonLd?: Record<string, any>
}

export function SEO({
  title,
  description,
  keywords,
  ogImage = '/portada-andi.png',
  ogUrl,
  ogType = 'website',
  canonicalUrl,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // 1. Obtener URL y origen actual
    const origin = window.location.origin
    const currentUrl = window.location.href
    const resolvedOgUrl = ogUrl || currentUrl
    const resolvedCanonical = canonicalUrl || currentUrl
    const resolvedOgImage = ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`

    // 2. Título de la pestaña
    document.title = title

    // 3. Descripción principal (resumen para Google)
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', description)

    // 4. Palabras clave (Keywords)
    if (keywords) {
      let metaKey = document.querySelector('meta[name="keywords"]')
      if (!metaKey) {
        metaKey = document.createElement('meta')
        metaKey.setAttribute('name', 'keywords')
        document.head.appendChild(metaKey)
      }
      metaKey.setAttribute('content', keywords)
    }

    // 5. Etiquetas Open Graph (cómo se ve en WhatsApp, Facebook, LinkedIn)
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:image': resolvedOgImage,
      'og:url': resolvedOgUrl,
      'og:type': ogType,
      'og:site_name': 'Ps. Andrei Andrusco',
    }

    Object.entries(ogTags).forEach(([prop, content]) => {
      let element = document.querySelector(`meta[property="${prop}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', prop)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    })

    // 6. Tarjetas de Twitter/X
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': resolvedOgImage,
    }

    Object.entries(twitterTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    })

    // 7. Enlace Canónico (evita contenido duplicado en Google)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', resolvedCanonical)

    // 8. Ficha Digital JSON-LD (Datos estructurados para Google)
    let scriptJsonLd = document.getElementById('jsonld-seo') as HTMLScriptElement | null
    if (jsonLd) {
      if (!scriptJsonLd) {
        scriptJsonLd = document.createElement('script')
        scriptJsonLd.id = 'jsonld-seo'
        scriptJsonLd.type = 'application/ld+json'
        document.head.appendChild(scriptJsonLd)
      }
      scriptJsonLd.textContent = JSON.stringify(jsonLd)
    } else {
      if (scriptJsonLd) {
        scriptJsonLd.remove()
      }
    }

    // Limpieza al desmontar el componente (opcional, para evitar residuos en navegación rápida)
    return () => {
      // Dejamos los metadatos básicos pero removemos el script JSON-LD específico al salir
      const scriptToRemove = document.getElementById('jsonld-seo')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [title, description, keywords, ogImage, ogUrl, ogType, canonicalUrl, jsonLd])

  return null
}
