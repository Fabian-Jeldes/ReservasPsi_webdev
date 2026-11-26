import { useCallback, useState, useMemo } from 'react'
import {
  BLOG_POSTS,
  REVIEWS_DATA,
  SPECIALIZATIONS,
} from '../data/site'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { TrustBarSection } from '../components/TrustBarSection'
import { SpecializationsSection } from '../components/SpecializationsSection'
import { ReviewsSection } from '../components/ReviewsSection'
import { BlogSection } from '../components/BlogSection'
import { SiteFooter } from '../components/SiteFooter'
import { AppointmentModal } from '../components/AppointmentModal'
import { useReviewRotation } from '../hooks/useReviewRotation'
import { FaqSection } from '../components/FaqSection'
import { HowItWorksSection } from '../components/HowItWorksSection'

export function HomePage() {
  const DISPLAY_REVIEWS = useMemo(() => {
    // Usamos todas las reseñas disponibles para que la rotación las muestre todas eventualmente
    return [...REVIEWS_DATA]
  }, [])
  const { currentIndex: currentReview, fade } = useReviewRotation(DISPLAY_REVIEWS.length)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const openBooking = useCallback(() => {
    setIsAppointmentModalOpen(true)
  }, [])


  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} onAgendarClick={openBooking} />
      <main id="contenido-principal">
      <HeroSection onContactClick={() => {
        const section = document.getElementById('reserva');
        section?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <TrustBarSection />
      <SpecializationsSection items={SPECIALIZATIONS} />
      <ReviewsSection reviews={DISPLAY_REVIEWS} currentIndex={currentReview} fade={fade} />
      <HowItWorksSection />

      {/* CTA Agendamiento Bajo Demanda */}
      <section id="reserva" className="scroll-mt-16 px-4 pt-4 pb-12 text-center sm:px-6 md:scroll-mt-20 md:pt-6 md:pb-16">
        <div 
          className="max-w-4xl mx-auto p-7 sm:p-10 md:p-12 border relative overflow-hidden group transition-all duration-500"
          style={{
            borderRadius: 'var(--radius-card-lg)',
            borderColor: 'var(--accent)',
            borderWidth: '1.5px',
            backgroundColor: 'var(--bg-card)',
            boxShadow: 'var(--cta-card-shadow)',
          }}
        >
          <div 
            className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
            aria-hidden="true"
            style={{ 
              background: 'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)' 
            }}
          />
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-8 relative z-10"
            style={{ 
              color: 'var(--text-primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)'
            }}
          >
            ¿Te gustaría que{' '}
            <span
              className="font-editorial-accent"
              style={{ color: 'var(--accent)' }}
            >
              conversemos
            </span>
            ?
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl mb-7 md:mb-10 relative z-10 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Reserva un espacio seguro para explorar tu bienestar sin juicios ni presiones.
          </p>
          <button
            type="button"
            onClick={openBooking}
            className="relative z-10 px-8 py-4 md:px-10 md:py-5 font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 cursor-pointer"
            style={{
              backgroundColor: 'var(--btn-accent-bg)',
              color: 'var(--btn-accent-text)',
              borderRadius: 'var(--radius-btn)',
              boxShadow: 'var(--shadow-accent)',
            }}
          >
            Ver horas disponibles
          </button>
        </div>
      </section>

      <BlogSection posts={BLOG_POSTS} />
      <FaqSection />
      </main>
      <SiteFooter />

      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </div>
  )
}
