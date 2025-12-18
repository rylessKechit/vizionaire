// src/components/sections/Services.tsx - MODIFICATIONS NÉCESSAIRES

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe, Smartphone, Bot } from 'lucide-react'
import { useCurrency } from '@/hooks/useCurrency'  // ← AJOUTER cet import

interface Service {
  icon: JSX.Element
  title: string
  subtitle: string
  features: string[]
  startingPriceAED: number  // ← CHANGÉ: startingPrice → startingPriceAED (number)
  popular?: boolean
  color: string
}

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  // ← AJOUTER le hook de conversion
  const { convertFromAED, formatPrice, isLoading } = useCurrency()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // ← MODIFIER : changer startingPrice vers startingPriceAED et corriger les prix
  const services: Service[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      subtitle: "High-Converting Websites & E-commerce",
      features: [
        "Custom responsive design",
        "E-commerce platforms (Shopify, WooCommerce)",
        "Integrated SEO optimization",
        "Performance & speed optimized",
        "Mobile-first approach",
        "Analytics & CRM integration"
      ],
      startingPriceAED: 11000,  // ← CHANGÉ: "From 11,000 AED" → 11000 (number)
      color: "from-red-600 to-red-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Media",
      subtitle: "Dominate Every Platform",
      features: [
        "Complete content strategy",
        "Instagram, LinkedIn, TikTok, Facebook management",
        "Influencer partnerships",
        "Community management",
        "Social media advertising",
        "Detailed analytics & reporting"
      ],
      startingPriceAED: 5500,  // ← CHANGÉ: "From 5,500 AED AED" → 5500 (et corrigé double AED)
      popular: true,
      color: "from-green-600 to-green-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Marketing Automation",
      subtitle: "Scale Without Limits",
      features: [
        "Automated email sequences",
        "Advanced lead nurturing",
        "CRM integration & setup",
        "Chatbot development",
        "Sales funnel automation",
        "Behavioral campaigns"
      ],
      startingPriceAED: 7350,  // ← CHANGÉ: "From 7,350 AED" → 7350
      color: "from-amber-600 to-amber-500"
    }
  ]

  // ← AJOUTER : Affichage de chargement
  if (isLoading) {
    return (
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-white">Loading services...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - INCHANGÉ */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Take a closer look.
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Premium services designed to dominate the Middle East digital landscape
            </p>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            // ← AJOUTER : Conversion du prix
            const convertedPrice = convertFromAED(service.startingPriceAED)
            
            return (
              <div 
                key={i}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                
                {/* Popular Badge - INCHANGÉ */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card - structure INCHANGÉE */}
                <div className={`relative bg-white/10 backdrop-blur-md rounded-3xl p-8 h-full border border-white/20 shadow-lg transition-all duration-500 overflow-hidden ${
                  hoveredCard === i ? 'transform -translate-y-2 shadow-2xl border-white/30' : ''
                } ${service.popular ? 'ring-2 ring-green-500/30' : ''}`}>
                  
                  {/* Background Gradient - INCHANGÉ */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    
                    {/* Icon - INCHANGÉ */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white transition-transform duration-500 ${
                      hoveredCard === i ? 'scale-110 rotate-3' : ''
                    }`}>
                      {service.icon}
                    </div>
                    
                    {/* Title - INCHANGÉ */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{service.subtitle}</p>
                    
                    {/* Features - INCHANGÉ */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-200 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Pricing & CTA */}
                    <div className="border-t border-white/10 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-400 text-sm">Starting from</span>
                          <div className="text-2xl font-bold text-white">
                            {/* ← MODIFIER : Utiliser formatPrice avec conversion */}
                            {formatPrice(convertedPrice)}
                            <span className="text-sm text-gray-400 font-normal">/month</span>
                          </div>
                        </div>
                        <Link 
                          href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                        >
                          Get Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}