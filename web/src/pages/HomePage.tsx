import type { ChangeEvent, FormEvent } from 'react'
import { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import {
  BLOG_POSTS,
  EMPTY_KYC,
  generateCalendarDays,
  REVIEWS_DATA,
  SPECIALIZATIONS,
} from '../data/site'
import type { KycFormState, Specialization } from '../types/site'
import { kycSchema } from '../types/site'
import { fetchCalendarBusySlots } from '../lib/googleCalendar'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { SpecializationsSection } from '../components/SpecializationsSection'
import { ReviewsSection } from '../components/ReviewsSection'
import { KycSection } from '../components/KycSection'
import { CalendarSection } from '../components/CalendarSection'
import { BlogSection } from '../components/BlogSection'
import { SiteFooter } from '../components/SiteFooter'
import { SpecializationModal } from '../components/SpecializationModal'
import { BookingModal } from '../components/BookingModal'
import { useCalendarClock } from '../hooks/useCalendarClock'
import { useReviewRotation } from '../hooks/useReviewRotation'

export function HomePage() {
  const DISPLAY_REVIEWS = useMemo(() => {
    const shuffled = [...REVIEWS_DATA].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 15)
  }, [])
  const { currentIndex: currentReview, fade } = useReviewRotation(DISPLAY_REVIEWS.length)
  const calendarUpdate = useCalendarClock(10_000)
  const [consentSigned, setConsentSigned] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [selectedSpec, setSelectedSpec] = useState<Specialization | null>(null)
  const [calendarDays] = useState(() => generateCalendarDays().map(d => ({...d, status: 'Disponible' as const})))
  const [busySlots, setBusySlots] = useState<{ start: string, end: string }[]>([])
  const [kycData, setKycData] = useState<KycFormState>(EMPTY_KYC)
  const [kycErrors, setKycErrors] = useState<Partial<Record<keyof KycFormState, string>>>({})
  const [selectedBookingDay, setSelectedBookingDay] = useState<string | null>(null)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const kycRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      const slots = await fetchCalendarBusySlots()
      if (!cancelled) setBusySlots(slots)
    }

    void load()
    const id = window.setInterval(() => void load(), 10_000)
    return () => {
      cancelled = true
      window.clearInterval(id)
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const scrollToKyc = useCallback(() => {
    kycRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleKycChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof KycFormState
    const { value } = e.target
    setKycData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmitKyc = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (!consentSigned) return

      const result = kycSchema.safeParse(kycData)
      if (!result.success) {
        const fieldErrors: any = {}
        result.error.issues.forEach(issue => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0]] = issue.message
          }
        })
        setKycErrors(fieldErrors)
        return
      }

      setKycErrors({})
      setKycData(result.data) // Update with cleaned RUT
      
      setIsRegistered(true)
      window.setTimeout(() => {
        document.getElementById('calendario-section')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    },
    [consentSigned, kycData],
  )

  const handleConfirmBooking = async (selectedTime: string) => {
    if (!selectedBookingDay) return
    setIsProcessingPayment(true)
    
    try {
      // 1. Crear evento en Google Calendar a través del Worker
      const workerUrl = import.meta.env.DEV ? 'http://localhost:8787/api/calendar/book' : '/api/calendar/book'
      
      const res = await fetch(workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pacienteNombre: kycData.nombre,
          dia: selectedBookingDay,
          hora: selectedTime
        })
      });
      
      if (!res.ok) {
        console.error("Error al agendar en el calendario", await res.text())
        // Continuamos igual al WhatsApp aunque falle el calendario
      }
    } catch (e) {
      console.error("Fetch error", e)
    } finally {
      setIsProcessingPayment(false)
      const formatter = new Intl.DateTimeFormat('es-CL', { month: 'long', timeZone: 'America/Santiago' });
      const currentMonth = formatter.format(new Date());
      const text = `Hola Andi, soy ${kycData.nombre}. Quisiera confirmar mi sesión para el ${selectedBookingDay} de ${currentMonth} a las ${selectedTime} hrs.`
      const waUrl = `https://wa.me/56991997276?text=${encodeURIComponent(text)}`
      window.open(waUrl, '_blank')
      setSelectedBookingDay(null)
    }
  }

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar onLogoClick={scrollToTop} onAgendarClick={scrollToKyc} />
      <HeroSection calendarUpdate={calendarUpdate} onContactClick={scrollToKyc} />
      <SpecializationsSection items={SPECIALIZATIONS} onSelectSpec={setSelectedSpec} />
      <ReviewsSection reviews={DISPLAY_REVIEWS} currentIndex={currentReview} fade={fade} />
      <KycSection
        sectionRef={kycRef}
        kycData={kycData}
        errors={kycErrors}
        onFieldChange={handleKycChange}
        consentSigned={consentSigned}
        onConsentChange={setConsentSigned}
        isRegistered={isRegistered}
        onSubmit={handleSubmitKyc}
      />
      <CalendarSection
        isRegistered={isRegistered}
        calendarDays={calendarDays}
        onGoToKyc={scrollToKyc}
        onDayClick={setSelectedBookingDay}
      />
      <BlogSection posts={BLOG_POSTS} />
      <SiteFooter />

      {selectedSpec ? (
        <SpecializationModal spec={selectedSpec} onClose={() => setSelectedSpec(null)} />
      ) : null}

      {selectedBookingDay ? (
        <BookingModal
          day={selectedBookingDay}
          pacienteNombre={kycData.nombre}
          isProcessing={isProcessingPayment}
          busySlots={busySlots}
          onClose={() => setSelectedBookingDay(null)}
          onConfirm={handleConfirmBooking}
        />
      ) : null}
    </div>
  )
}
