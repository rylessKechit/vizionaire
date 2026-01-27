'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Services } from '@/components/sections/Services'
import { Stats } from '@/components/sections/Stats'
import { Pricing } from '@/components/sections/Pricing'
import { TestimonialsMini } from '@/components/sections/TestimonialsMini'
import { CTA } from '@/components/sections/CTA'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function HomePageClient() {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY)
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const zoomScale = useMemo(() => {
    if (typeof window === 'undefined') return 1
    const maxScroll = typeof document !== 'undefined'
      ? document.documentElement.scrollHeight - window.innerHeight
      : 3000
    const scrollProgress = Math.min(scrollY / maxScroll, 1)
    return 1 + (scrollProgress * 1)
  }, [scrollY])

  const overlayOpacity = useMemo(() => {
    return 0.90 - (scrollY / 6000) * 0.30
  }, [scrollY])

  return (
    <div className="min-h-screen relative">
      {/* Optimized Background Image */}
      <div
        className="fixed inset-0 z-0 transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `scale(${zoomScale})`,
          transformOrigin: 'center center',
        }}
      >
        <Image
          src="/background-cityscape.webp"
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-10 transition-opacity duration-300"
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
