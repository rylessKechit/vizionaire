// EXEMPLE D'UTILISATION - src/components/sections/PricingWithCurrency.tsx
'use client'

import { useState, useEffect } from 'react'
import { useCurrency } from '@/hooks/useCurrency'
import { Check, Star, Zap, TrendingUp, Target } from 'lucide-react'

export function PricingWithCurrency() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)
  
  // Utiliser le hook de conversion
  const { convertFromAED, formatPrice, isLoading } = useCurrency()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCallClick = () => {
    const message = encodeURIComponent('Hi! I would like to discuss VIZIONAIRE pricing plans and find the best solution for my business.')
    window.open(`https://wa.me/971544785454?text=${message}`, '_blank')
  }

  // Prix de base en AED
  const plans = [
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Starter",
      subtitle: "Perfect for small businesses",
      priceAED: 5500, // Prix de base en AED
      period: "/month",
      description: "Essential digital marketing to get you started with guaranteed results.",
      features: [
        "Social media management (2 platforms)",
        "Basic SEO optimization",
        "Monthly performance reports",
        "Email marketing setup",
        "48h setup time",
        "90-day ROI guarantee"
      ],
      popular: false,
      color: "from-blue-600 to-blue-500",
      buttonText: "Get Started"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      name: "Professional",
      subtitle: "Most popular choice",
      priceAED: 11000,
      period: "/month",
      description: "Complete marketing solution for growing businesses ready to dominate.",
      features: [
        "Full social media management (all platforms)",
        "Advanced SEO & content creation",
        "PPC advertising management",
        "Marketing automation setup",
        "Weekly strategy calls",
        "24/7 priority support",
        "Custom landing pages",
        "Detailed analytics dashboard"
      ],
      popular: true,
      color: "from-red-600 to-amber-500",
      buttonText: "Start Dominating"
    },
    {
      icon: <Target className="w-6 h-6" />,
      name: "Enterprise",
      subtitle: "For ambitious companies",
      priceAED: 22000,
      period: "/month",
      description: "Premium solution with dedicated team and unlimited everything.",
      features: [
        "Dedicated marketing team",
        "Custom strategy development",
        "Multi-channel campaigns",
        "Advanced automation workflows",
        "Unlimited design requests",
        "Priority phone support",
        "Monthly strategy reviews",
        "Exclusive market insights"
      ],
      popular: false,
      color: "from-purple-600 to-purple-500",
      buttonText: "Scale Big"
    }
  ]

  // Afficher un loader pendant la détection
  if (isLoading) {
    return (
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-white">Loading pricing...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Simple, transparent pricing.
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              No hidden fees, no long-term contracts. Choose the plan that fits your ambition.
            </p>
          </div>
          
          {/* Annual Toggle */}
          <div className={`flex items-center justify-center gap-4 mt-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-gradient-to-r from-red-600 to-amber-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full font-bold border border-green-500/30">
                Save 20%
              </span>
            )}
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, i) => {
            // Convertir le prix AED vers la devise de l'utilisateur
            const convertedPrice = convertFromAED(plan.priceAED)
            const displayPrice = isAnnual 
              ? Math.round(convertedPrice * 0.8 * 12) 
              : convertedPrice
            
            return (
              <div 
                key={i}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } ${plan.popular ? 'scale-105 lg:scale-110' : ''}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 hover:border-white/30 hover:bg-white/15`}>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110`}>
                      {plan.icon}
                    </div>
                    
                    {/* Plan Info */}
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{plan.subtitle}</p>
                    
                    {/* Pricing - AVEC CONVERSION AUTOMATIQUE */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-white">
                          {formatPrice(displayPrice)}
                        </span>
                        <span className="text-base text-gray-300">
                          {isAnnual ? "/year" : plan.period}
                        </span>
                      </div>
                      {isAnnual && (
                        <div className="text-xs text-green-400 font-medium mt-1">
                          Save {formatPrice(Math.round(convertedPrice * 12 * 0.2))} annually
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-sm">{plan.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {plan.features.slice(0, 6).map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200 text-xs leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <button
                      onClick={handleCallClick}
                      className={`w-full py-3 px-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg hover:shadow-xl'
                          : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30 shadow-md hover:shadow-lg border border-white/30'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                    
                    <div className="text-center mt-3">
                      <p className="text-xs text-gray-400">No setup fees • Cancel anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg border border-white/20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-gray-200 mb-6 max-w-xl mx-auto leading-relaxed">
                We create personalized packages for unique business needs. 
                Contact us for a custom quote and tailored strategy.
              </p>
              <button
                onClick={handleCallClick}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}