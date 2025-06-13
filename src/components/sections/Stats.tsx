'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Clock, Award, Target, Zap } from 'lucide-react'

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [countUp, setCountUp] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Start count up animation after component is visible
    const timer = setTimeout(() => {
      setCountUp(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Companies Transformed",
      description: "Across MENA region",
      color: "from-red-500 to-red-600",
      delay: 0
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "347%",
      label: "Average ROI Increase",
      description: "Within first 90 days",
      color: "from-green-500 to-green-600",
      delay: 200
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "48h",
      label: "Average Setup Time",
      description: "From start to launch",
      color: "from-amber-500 to-amber-600",
      delay: 400
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on reviews",
      color: "from-blue-500 to-blue-600",
      delay: 600
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "95%",
      label: "ROI Guarantee Success",
      description: "Clients achieving targets",
      color: "from-purple-500 to-purple-600",
      delay: 800
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "24/7",
      label: "Expert Support",
      description: "Always available",
      color: "from-teal-500 to-teal-600",
      delay: 1000
    }
  ]

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Pas de background coloré - juste l'image de fond */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Numbers that matter.
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Real results from real businesses across the Middle East
            </p>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className={`group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-700 transform hover:-translate-y-2 hover:bg-white/15 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110`}>
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 transition-all duration-1000">
                  {stat.number}
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Ready to join the hundreds of companies transforming their digital presence?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black rounded-full font-bold transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                Start Your Transformation
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}