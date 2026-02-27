'use client'

import { useState, useEffect } from 'react'
import { Rocket, CheckCircle, Phone, ArrowRight, Sparkles } from 'lucide-react'

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCallClick = () => {
    const message = encodeURIComponent('Hello! I am ready to dominate my market with VIZIONAIRE. When can we schedule our strategy session?')
    window.open(`https://wa.me/971544785454?text=${message}`, '_blank')
  }

  const handleDemoClick = () => {
    const message = encodeURIComponent('Hi! I would like to see VIZIONAIRE case studies and results. Can you share some examples?')
    window.open(`https://wa.me/971544785454?text=${message}`, '_blank')
  }

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Pas de background coloré - juste l'image de fond pour l'effet final */}
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-amber-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-green-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
            <Rocket className="w-4 h-4 text-amber-400" />
            <span className="text-white text-sm font-medium">Your Vision is Now Reality</span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              dominate
            </span>
            {" "}your market?
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Join the 500+ companies that chose excellence. Your transformation starts with a single conversation.
          </p>
        </div>

        {/* Guarantees */}
        <div className={`grid md:grid-cols-3 gap-4 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-300 font-medium">48h Setup</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-300 font-medium">90-Day ROI Guarantee</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-300 font-medium">No Long-term Contracts</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={handleCallClick}
            className="group px-7 py-3 bg-white text-black rounded-full font-bold text-base hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 group-hover:animate-pulse" />
            Start Your Transformation
          </button>
          <button 
            onClick={handleDemoClick}
            className="px-7 py-3 border-2 border-white/30 text-white rounded-full font-bold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            View Case Studies
          </button>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-red-400 mb-1">48h</div>
            <div className="text-gray-300 font-medium">Setup Time</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-1">500+</div>
            <div className="text-gray-300 font-medium">Success Stories</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-amber-400 mb-1">24/7</div>
            <div className="text-gray-300 font-medium">Expert Support</div>
          </div>
        </div>

        {/* Final Message */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 text-sm">
            🇦🇪 Proudly serving the Middle East • Trusted by industry leaders
          </p>
        </div>
      </div>
    </section>
  )
}