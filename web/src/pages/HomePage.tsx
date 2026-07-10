import { useCallback, useState, useMemo } from 'react'
import {
  BLOG_POSTS,
  REVIEWS_DATA,
  SPECIALIZATIONS,
} from '../data/site'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { SpecializationsSection } from '../components/SpecializationsSection'
import { ReviewsSection } from '../components/ReviewsSection'
import { BlogSection } from '../components/BlogSection'
import { SiteFooter } from '../components/SiteFooter'
import { AppointmentModal } from '../components/AppointmentModal'
import { useReviewRotation } from '../hooks/useReviewRotation'
import { SEO } from '../components/SEO'
import { FaqSection } from '../components/FaqSection'

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

  const homeSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    'name': 'Ps. Andrei Andrusco Fidalgo',
    'image': `${window.location.origin}/portada-andi.png`,
    'description': 'Psicólogo Clínico y Sexólogo especializado en disfunciones sexuales psicógenas y acompañamiento terapéutico individual y de pareja.',
    'medicalSpecialty': ['Psychiatry', 'SexualMedicine'],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Santiago',
      'addressRegion': 'Región Metropolitana',
      'addressCountry': 'CL'
    },
    'url': `${window.location.origin}/`,
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '19:00'
      }
    ]
  }), [])

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <SEO
        title="Ps. Andrei Andrusco | Psicólogo y Sexólogo Clínico en Santiago"
        description="Consulta especializada en sexología clínica y terapia sexual en Santiago de Chile. Tratamiento humano para disfunción eréctil, eyaculación precoz y ansiedad de desempeño."
        keywords="psicólogo clínico Santiago, sexólogo Santiago, terapia sexual Chile, disfunción eréctil psicógena, eyaculación precoz, ansiedad de desempeño, Andrei Andrusco"
        jsonLd={homeSchema}
      />
      <Navbar onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} onAgendarClick={openBooking} />
      <HeroSection onContactClick={() => {
        const section = document.getElementById('reserva');
        section?.scrollIntoView({ behavior: 'smooth' });
      }} />
      <SpecializationsSection items={SPECIALIZATIONS} />
      <ReviewsSection reviews={DISPLAY_REVIEWS} currentIndex={currentReview} fade={fade} />
      
      {/* CTA Agendamiento Bajo Demanda */}
      <section id="reserva" className="py-20 px-6 text-center">
        <div 
          className="max-w-4xl mx-auto p-12 border shadow-2xl relative overflow-hidden group"
          style={{
            borderRadius: 'var(--radius-card-lg)',
            borderColor: 'var(--border-primary)',
            backgroundColor: 'var(--bg-card)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div 
            className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"
            style={{ 
              background: 'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)' 
            }}
          />
          <h2 
            className="text-3xl md:text-4xl mb-8 relative z-10"
            style={{ 
              color: 'var(--text-primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--heading-weight)'
            }}
          >
            ¿Te gustaría que <span style={{ color: 'var(--accent)' }}>conversemos</span>?
          </h2>
          <p 
            className="text-xl mb-10 relative z-10 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Reserva un espacio seguro para explorar tu bienestar sin juicios ni presiones.
          </p>
          <button
            type="button"
            onClick={openBooking}
            className="relative z-10 px-10 py-5 font-bold text-lg transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--text-inverse)',
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
      <SiteFooter />

      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </div>
  )
}
