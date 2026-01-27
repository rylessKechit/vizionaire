'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Hero } from '@/components/sections/Hero'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// Lazy load below-fold components for better performance
const Features = dynamic(() => import('@/components/sections/Features').then(mod => ({ default: mod.Features })), {
  loading: () => <div className="min-h-[400px]" />
})
const Services = dynamic(() => import('@/components/sections/Services').then(mod => ({ default: mod.Services })), {
  loading: () => <div className="min-h-[400px]" />
})
const Stats = dynamic(() => import('@/components/sections/Stats').then(mod => ({ default: mod.Stats })), {
  loading: () => <div className="min-h-[200px]" />
})
const Pricing = dynamic(() => import('@/components/sections/Pricing').then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="min-h-[400px]" />
})
const TestimonialsMini = dynamic(() => import('@/components/sections/TestimonialsMini').then(mod => ({ default: mod.TestimonialsMini })), {
  loading: () => <div className="min-h-[200px]" />
})
const CTA = dynamic(() => import('@/components/sections/CTA').then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="min-h-[200px]" />
})

export default function HomePageClient() {
  const [scrollY, setScrollY] = useState(0)

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      setScrollY(window.scrollY)
    })
  }, [])

  useEffect(() => {
    // Passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Memoize zoom calculation to prevent unnecessary recalculations
  const zoomScale = useMemo(() => {
    if (typeof window === 'undefined') return 1
    const maxScroll = typeof document !== 'undefined'
      ? document.documentElement.scrollHeight - window.innerHeight
      : 3000
    const scrollProgress = Math.min(scrollY / maxScroll, 1)
    return 1 + (scrollProgress * 1)
  }, [scrollY])

  // Memoize overlay opacity
  const overlayOpacity = useMemo(() => {
    return 0.90 - (scrollY / 6000) * 0.30
  }, [scrollY])

  return (
    <div className="min-h-screen relative">
      {/* Optimized Background Image with next/image */}
      <div
        className="fixed inset-0 z-0 transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `scale(${zoomScale})`,
          transformOrigin: 'center center',
        }}
      >
        <picture>
          <source
            srcSet="/background-cityscape-mobile.webp"
            media="(max-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet="/background-cityscape.webp"
            type="image/webp"
          />
          <Image
            src="/background-cityscape-optimized.jpg"
            alt=""
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
        </picture>
      </div>

      {/* Overlay with CSS custom property for smooth transitions */}
      <div
        className="fixed inset-0 z-10 transition-opacity duration-300 will-change-opacity"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`
        }}
        aria-hidden="true"
      />

      {/* Page content */}
      <div className="relative z-20">
        <div className="relative z-30">
          <Header />
        </div>

        <main className="space-y-8 sm:space-y-12 lg:space-y-16">
          <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 lg:pb-16">
            <Hero />
          </section>

          <section className="py-6 sm:py-8 lg:py-12">
            <Features />
          </section>

          <section className="py-6 sm:py-10 lg:py-16">
            <Services />
          </section>

          <section className="py-4 sm:py-6 lg:py-12">
            <Stats />
          </section>

          <section className="py-6 sm:py-10 lg:py-16">
            <Pricing />
          </section>

          <section className="py-4 sm:py-8 lg:py-12">
            <TestimonialsMini />
          </section>

          <section className="py-6 sm:py-10 lg:py-16">
            <CTA />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
