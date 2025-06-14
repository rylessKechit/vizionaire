'use client'

import { useEffect, useState, ReactNode } from 'react'

interface BackgroundLayoutProps {
  children: ReactNode
  backgroundImage: string
  className?: string
}

export function BackgroundLayout({ children, backgroundImage, className = '' }: BackgroundLayoutProps) {
  const [scrollY, setScrollY] = useState(0)
  const [zoomScale, setZoomScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calcul du zoom progressif
  useEffect(() => {
    const calculateZoom = () => {
      if (typeof window !== 'undefined' && document.documentElement) {
        const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)
        setZoomScale(1 + (scrollProgress * 1)) // Zoom de 0% à 50%
      }
    }

    calculateZoom()
  }, [scrollY])

  return (
    <div className={`min-h-screen relative ${className}`}>
      {/* Background Image avec effet de zoom - COUVRE TOUTE LA PAGE */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
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
        {children}
      </div>
    </div>
  )
}