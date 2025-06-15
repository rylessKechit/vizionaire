'use client'

import { useEffect, useState } from 'react'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { Pricing } from '@/components/sections/Pricing'
import { TestimonialsMini } from '@/components/sections/TestimonialsMini'
import { CTA } from '@/components/sections/CTA'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calcul du zoom progressif (de 1.0 à 1.2 sur toute la page)
  const [zoomScale, setZoomScale] = useState(1)

  useEffect(() => {
    const calculateZoom = () => {
      if (typeof window !== 'undefined' && document.documentElement) {
        const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)
        setZoomScale(1 + (scrollProgress * 1)) // Zoom de 0% à 50% (2x plus fort pour mobile)
      }
    }

    calculateZoom()
  }, [scrollY])

  return (
    <div className="min-h-screen relative">
      {/* Background Image avec effet de zoom - COUVRE TOUTE LA PAGE */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{
          backgroundImage: 'url(/background-cityscape.jpg)',
          transform: `scale(${zoomScale})`,
          transformOrigin: 'center center',
          width: '100vw',
          height: '100vh'
        }}
      />
      
      {/* Overlay qui s'éclaircit progressivement - Effet "Vision qui se révèle" */}
      <div 
        className="fixed inset-0 z-10 transition-all duration-300"
        style={{
          background: `rgba(0, 0, 0, ${0.90 - (scrollY / 6000) * 0.30})`
        }}
      />
      
      {/* Contenu de la page */}
      <div className="relative z-20">
        {/* Header avec background transparent */}
        <div className="relative z-30">
          <Header />
        </div>
        
        {/* Main Content avec espacements optimisés mobile */}
        <main className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Hero Section - Padding réduit sur mobile */}
          <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 lg:pb-16">
            <Hero />
          </section>
          
          {/* Features Section - Espacement minimal mobile */}
          <section className="py-6 sm:py-8 lg:py-12">
            <Features />
          </section>
          
          {/* Services Section - Espacement compact */}
          <section className="py-6 sm:py-10 lg:py-16">
            <Services />
          </section>
          
          {/* Stats Section - Très compact sur mobile */}
          <section className="py-4 sm:py-6 lg:py-12">
            <Stats />
          </section>
          
          {/* Pricing Section */}
          <section className="py-6 sm:py-10 lg:py-16">
            <Pricing />
          </section>
          
          {/* Testimonials Section - Compact */}
          <section className="py-4 sm:py-8 lg:py-12">
            <TestimonialsMini />
          </section>
          
          {/* CTA Section - Padding réduit */}
          <section className="py-6 sm:py-10 lg:py-16">
            <CTA />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}