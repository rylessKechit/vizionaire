'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Target, Zap } from 'lucide-react'

export function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: TrendingUp,
      title: "AI Analytics",
      description: "Advanced AI-powered analytics that predict trends and optimize campaigns in real-time for maximum ROI.",
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep understanding of Middle East markets, culture, and consumer behavior patterns for targeted success.",
      color: "bg-gradient-to-br from-amber-500 to-amber-600"
    },
    {
      icon: Target,
      title: "ROI Guarantee",
      description: "We guarantee measurable results within 90 days or we'll work for free until you see them.",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Ultra-Fast Setup",
      description: "From initial consultation to campaign launch in just 48 hours with our streamlined process.",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Get the highlights.
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              A unique approach that combines <span className="font-semibold text-amber-400">local expertise</span> and 
              <span className="font-semibold text-red-400"> technological innovation</span> for exceptional results
            </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div 
                key={i}
                className={`group cursor-pointer transition-all duration-700 transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-sm hover:shadow-xl border border-white/20 transition-all duration-500 h-full hover:bg-white/15">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-white">500+</div>
                  <div className="text-gray-300 font-medium">Companies Transformed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-white">347%</div>
                  <div className="text-gray-300 font-medium">Average ROI Increase</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-white">48h</div>
                  <div className="text-gray-300 font-medium">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}