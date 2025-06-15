'use client'

import { useState, useEffect } from 'react'
import { Clock, Award, Target, Zap, Shield, Users } from 'lucide-react'

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
      icon: <Clock className="w-8 h-8" />,
      number: "48h",
      label: "Setup Time",
      description: "From consultation to launch",
      color: "from-amber-500 to-amber-600",
      delay: 0
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "24/7",
      label: "Expert Support",
      description: "Always available for you",
      color: "from-teal-500 to-teal-600",
      delay: 200
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "ROI Guarantee",
      description: "Or your money back",
      color: "from-green-500 to-green-600",
      delay: 400
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "UAE",
      label: "Market Experts",
      description: "Deep local knowledge",
      color: "from-red-500 to-red-600",
      delay: 600
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "90 Days",
      label: "Results Timeline",
      description: "See measurable growth",
      color: "from-purple-500 to-purple-600",
      delay: 800
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "Personal",
      label: "Dedicated Team",
      description: "Your success partners",
      color: "from-blue-500 to-blue-600",
      delay: 1000
    }
  ]

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Fresh perspective, proven strategies, and unwavering dedication to your success
            </p>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className={`group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-700 transform hover:-translate-y-2 hover:bg-white/15 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className={`text-4xl lg:text-5xl font-black text-white transition-all duration-1000 ${
                  countUp ? 'scale-100' : 'scale-75'
                }`}>
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Message */}
        <div className="text-center mt-12">
          <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              We're a fresh team with big ambitions and proven expertise. 
              <span className="text-white font-semibold"> Your success is our first priority.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}