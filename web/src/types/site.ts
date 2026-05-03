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
}

export type BlogPost = {
  id: number
  /** URL amigable: /articulos/:slug */
  slug: string
  title: string
  date: string
  category: string
  content: string
}

export type ArticleSection = {
  title: string
  paragraphs: string[]
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

// Validar y limpiar el RUT. 
// Aceptamos cualquier formato, pero al parsear eliminamos puntos y el guión.
const rutCleaner = z.string().transform(val => val.replace(/[\.\-]/g, '').toUpperCase())

export const kycSchema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  rut: z.string().min(8, "RUT inválido. Ej: 12345678-9").transform(val => val.replace(/[\.\-]/g, '').toUpperCase()),
  correo: z.string().email("Correo electrónico inválido"),
  telefono: z.string().min(8, "Teléfono inválido"),
  direccion: z.string().min(5, "Dirección es obligatoria"),
  ciudad: z.string().min(2, "Ciudad es obligatoria"),
  region: z.string().min(2, "Región es obligatoria"),
})

export type KycFormState = z.infer<typeof kycSchema>
