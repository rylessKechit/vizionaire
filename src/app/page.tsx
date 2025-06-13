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
        setZoomScale(1 + (scrollProgress * 0.3)) // Zoom de 0% à 30% (1.5x plus fort)
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
      
      {/* Overlay sombre simple - comme le Hero */}
      <div 
        className="fixed inset-0 z-10 transition-all duration-300"
        style={{
          background: `rgba(0, 0, 0, ${0.6 + (scrollY / 3000) * 0.2})`
        }}
      />
      
      {/* Contenu de la page */}
      <div className="relative z-20">
        {/* Header avec background transparent */}
        <div className="relative z-30">
          <Header />
        </div>
        
        {/* Main Content */}
        <main>
          {/* Hero Section - Transparent pour voir l'image */}
          <Hero />
          
          {/* Features Section - TRANSPARENT pour voir l'image */}
          <div className="py-20 lg:py-28">
            <Features />
          </div>
          
          {/* Services Section - TRANSPARENT pour voir l'image */}
          <div className="py-20 lg:py-28">
            <Services />
          </div>
          
          {/* Stats Section - garde son gradient coloré mais avec transparence */}
          <div className="py-20 lg:py-28">
            <Stats />
          </div>
          
          {/* Testimonials Section - TRANSPARENT pour voir l'image */}
          <div className="py-20 lg:py-28">
            <TestimonialsMini />
          </div>
          
          {/* Pricing Section - TRANSPARENT pour voir l'image */}
          <div className="py-20 lg:py-28">
            <Pricing />
          </div>
          
          {/* Final CTA - Plus transparent pour l'effet final de "vision atteinte" */}
          <CTA />
        </main>
        
        {/* Footer */}
        <div className="bg-black/85 backdrop-blur-sm border-t border-white/10">
          <Footer />
        </div>
      </div>
    </div>
  )
}