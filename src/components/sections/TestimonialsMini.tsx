'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Star, Quote, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: "Ahmed K.",
    company: "Tech Startup Founder",
    avatar: "👨‍💼",
    rating: 5,
    text: "VIZIONAIRE's fresh approach and UAE market expertise is exactly what we needed. Professional team with innovative strategies.",
    result: "Great user experience"
  },
  {
    name: "Sarah M.", 
    company: "E-commerce Owner",
    avatar: "👩‍💼",
    rating: 5,
    text: "Finally a team that truly understands the Middle East market. Their 90-day guarantee shows real confidence in their work.",
    result: "Excellent service"
  },
  {
    name: "Omar H.",
    company: "Restaurant Chain Manager",
    avatar: "👨‍💻",
    rating: 5,
    text: "The setup was incredibly fast and the team is always available. I love the no long-term contract approach.",
    result: "Professional support"
  }
]

export function TestimonialsMini() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              What Our <span className="text-red-400">Clients</span> Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Building trust one partnership at a time
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg transition-all duration-700 transform hover:-translate-y-1 border border-white/20 hover:border-white/30 hover:bg-white/15 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-red-400/30 absolute -top-2 -left-1" />
                <p className="text-gray-200 leading-relaxed pl-6 text-sm">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Client Info & Result */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <div className="text-xs text-green-400 font-medium">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section with Our Commitments */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Our Promise to You
              </h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                We're building something special - a new kind of digital marketing agency focused on real partnerships and genuine results.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold transition-colors duration-300 text-sm"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-white/20">
                <div className="text-2xl font-bold text-red-400 mb-1">48H</div>
                <div className="text-gray-300 text-xs font-medium">Quick Setup</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-white/20">
                <div className="text-2xl font-bold text-amber-400 mb-1">100%</div>
                <div className="text-gray-300 text-xs font-medium">ROI Guarantee</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-gray-300 text-xs font-medium">Support</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-white/20">
                <div className="text-2xl font-bold text-blue-400 mb-1">2025</div>
                <div className="text-gray-300 text-xs font-medium">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}