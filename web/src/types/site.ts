export type Review = {
  id: number
  author: string
  content: string
  rating: number
}

export type Specialization = {
  id: number
  title: string
  subtitle: string
  /** Texto en la card */
  description: string
  /** Texto extra en el modal (enfoque clínico, detalle) */
  moreContent: string
  /** Contenido detallado para el modal extendido */
  detailedContent?: string[]
}

export type BlogPost = {
  id: number
  /** URL amigable: /articulos/:slug */
  slug: string
  title: string
  date: string
  category: string
  content: string
  imageUrl?: string
  /** Fecha de publicación ISO (YYYY-MM-DD) — schema.org y sitemap */
  datePublished: string
  /** Fecha de última modificación ISO; por defecto = datePublished */
  dateModified?: string
  /** <title> del artículo (sin el sufijo del sitio) */
  seoTitle: string
  /** Meta description (~150–160 caracteres) */
  seoDescription: string
  /** Imagen Open Graph 1200×630 */
  ogImage: string
}

/** Título y descripción de una página estática */
export type PageSeo = {
  title: string
  description: string
}

export type ArticleSection = {
  title?: string
  paragraphs: string[]
  lists?: {
    title?: string
    items: string[]
  }[]
  images?: {
    url: string
    caption?: string
    width?: number
    height?: number
  }[]
  clinicalNote?: {
    title: string
    content: string
  }
}

export type ArticlePageData = {
  slug: string
  heroEyebrow: string
  heroTitle: string
  heroAccent: string
  heroSummary: string
  heroImage?: string
  introKicker: string
  introTitle: string
  introQuote: string
  introParagraph: string
  sections: ArticleSection[]
  boxedReflection?: {
    title: string
    content: string
  }
  closingMessage: string
  references: string[]
  ctaTitle: string
  ctaSummary: string
  ctaLabel: string
}

export type CalendarDayStatus = 'Disponible' | 'Ocupado'

export type CalendarDay = {
  day: number
  available: boolean
  status: CalendarDayStatus
}

import { z } from 'zod'

export const kycSchema = z.object({
  nombre: z.string().min(2, "El nombre completo es obligatorio"),
  correo: z.string().email("Correo electrónico inválido"),
  telefono: z.string().min(8, "Teléfono inválido"),
})

export type KycFormState = z.infer<typeof kycSchema>

export type AboutWorkplace = {
  name: string
  modality: string
  since: string
  description: string
}

export type AboutPageData = {
  /** Intro — primer párrafo de saludo */
  intro: string
  /** Imagen hero de la página */
  imageUrl: string
  /** Sección "Mi enfoque" */
  enfoque: {
    title: string
    paragraphs: string[]
  }
  /** Sección "La ciencia detrás de la sesión" */
  formacion: {
    title: string
    paragraphs: string[]
  }
  /** Sección "¿Dónde me encuentras?" */
  donde: {
    title: string
    intro: string
    workplaces: AboutWorkplace[]
  }
  /** Sección "¿Qué te ofrezco?" */
  ofrezco: {
    title: string
    paragraphs: string[]
  }
  /** Cierre motivacional */
  cierre: string[]
}
