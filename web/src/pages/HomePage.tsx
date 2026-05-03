import type { ChangeEvent, FormEvent } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  BLOG_POSTS,
  EMPTY_KYC,
  generateCalendarDays,
  REVIEWS_DATA,
  SPECIALIZATIONS,
} from '../data/site'
import type { KycFormState, Specialization } from '../types/site'
import { kycSchema } from '../types/site'
import { fetchCalendarAvailability } from '../lib/googleCalendar'
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
  const { currentIndex: currentReview, fade } = useReviewRotation(REVIEWS_DATA.length)
  const calendarUpdate = useCalendarClock(10_000)
  const [consentSigned, setConsentSigned] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [selectedSpec, setSelectedSpec] = useState<Specialization | null>(null)
  const [calendarDays, setCalendarDays] = useState(() => generateCalendarDays())
  const [kycData, setKycData] = useState<KycFormState>(EMPTY_KYC)
  const [kycErrors, setKycErrors] = useState<Partial<Record<keyof KycFormState, string>>>({})
  const [selectedBookingDay, setSelectedBookingDay] = useState<string | null>(null)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const kycRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      const days = await fetchCalendarAvailability()
      if (!cancelled) setCalendarDays(days)
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

  const handlePayment = async (selectedTime: string) => {
    if (!selectedBookingDay) return
    setIsProcessingPayment(true)
    try {
      const res = await fetch("http://localhost:8787/api/payments/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paciente: kycData,
          dia: selectedBookingDay,
          hora: selectedTime,
          precio: 35000
        })
      })
      const data = await res.json()
      if (data.init_point) {
        window.location.href = data.init_point
      } else {
        console.error("Detalles del error MP:", data)
        const errorMsg = data.details?.message || "Error desconocido"
        const causes = data.details?.cause?.map((c: any) => c.description).join(", ") || ""
        alert(`Error de MercadoPago: ${errorMsg}\n\n${causes}\n\n(Revisa que el correo y RUT del KYC tengan un formato válido)`)
        setIsProcessingPayment(false)
      }
    } catch (e) {
      console.error(e)
      alert("Error de conexión. ¿Está corriendo el Worker (npm run dev en carpeta worker)?")
      setIsProcessingPayment(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0f1d] font-sans text-slate-200 selection:bg-rose-500/30">
      <Navbar onLogoClick={scrollToTop} onAgendarClick={scrollToKyc} />
      <HeroSection calendarUpdate={calendarUpdate} onContactClick={scrollToKyc} />
      <SpecializationsSection items={SPECIALIZATIONS} onSelectSpec={setSelectedSpec} />
      <ReviewsSection reviews={REVIEWS_DATA} currentIndex={currentReview} fade={fade} />
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
          onClose={() => setSelectedBookingDay(null)}
          onConfirm={handlePayment}
        />
      ) : null}
    </div>
  )
}
