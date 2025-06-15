'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, Globe, Zap, Shield, Clock, Star, Users, Target, Smartphone, Search, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Custom Responsive Design',
    description: 'Apple-inspired aesthetics that work perfectly on all devices'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: '95+ PageSpeed scores with optimized loading times'
  },
  {
    icon: Shield,
    title: 'Security & Reliability',
    description: 'SSL certificates, regular backups, and enterprise security'
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built for search engines from day one'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Approach',
    description: 'Perfect experience on phones, tablets, and desktops'
  },
  {
    icon: BarChart3,
    title: 'Analytics Integration',
    description: 'Track performance with Google Analytics and CRM integration'
  }
]

const packages = [
  {
    name: 'Starter Website',
    price: '11,000',
    duration: '2-3 weeks',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 pages (Home, About, Services, Contact, etc.)',
      'Mobile-responsive design',
      'Basic SEO optimization',
      'Contact forms and Google Maps',
      'Social media integration',
      'SSL certificate included',
      '3 months free maintenance'
    ],
    color: 'from-red-600 to-orange-500'
  },
  {
    name: 'Business Website',
    price: '18,500',
    duration: '3-4 weeks',
    description: 'Comprehensive solution for growing businesses',
    features: [
      'Up to 10 pages with custom design',
      'Advanced SEO optimization',
      'Blog/News section setup',
      'E-commerce integration (up to 50 products)',
      'Google Analytics & CRM integration',
      'Live chat integration',
      'Social media feed integration',
      '6 months free maintenance'
    ],
    popular: true,
    color: 'from-amber-400 to-orange-500'
  },
  {
    name: 'Enterprise Website',
    price: '35,000',
    duration: '4-6 weeks',
    description: 'Advanced solution for large businesses',
    features: [
      'Unlimited pages with premium design',
      'Advanced e-commerce (unlimited products)',
      'Multi-language support',
      'Advanced analytics and reporting',
      'Custom CRM integration',
      'Marketing automation integration',
      'Advanced security features',
      '12 months free maintenance'
    ],
    color: 'from-orange-500 to-red-500'
  }
]

const process = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your business, competitors, and target audience to create the perfect strategy.',
    duration: '2-3 days'
  },
  {
    step: '02',
    title: 'Design & Wireframes',
    description: 'Custom designs that reflect your brand and convert visitors into customers.',
    duration: '5-7 days'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Clean code, fast performance, and thorough testing across all devices.',
    duration: '7-14 days'
  },
  {
    step: '04',
    title: 'Launch & Optimization',
    description: 'Go live with confidence and continuous optimization for better results.',
    duration: '2-3 days'
  }
]

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    company: 'Dubai Tech Solutions',
    text: 'VIZIONAIRE delivered exactly what we needed - a fast, beautiful website that actually converts visitors into customers.',
    avatar: '👨‍💼'
  },
  {
    name: 'Sarah Al-Mansoori',
    company: 'Luxury Real Estate Dubai',
    text: 'The team understood our luxury brand perfectly. Our new website has significantly improved our online presence.',
    avatar: '👩‍💼'
  }
]

export default function WebDevelopmentPage() {
  const handleGetQuote = () => {
    const message = encodeURIComponent('Hi! I\'m interested in Website Development services. Can we discuss my project requirements?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-12 lg:pt-32 lg:pb-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-red-400 font-semibold">Website Development</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                  <span className="text-white">Websites That</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                    Convert
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Custom websites designed to turn visitors into customers. Fast, beautiful, and optimized for results in the UAE market.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    href="#packages"
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                  >
                    View Packages
                  </Link>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-white mb-2">48H</div>
                  <div className="text-sm text-gray-300">Quick Setup</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-3xl font-black bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-2">95+</div>
                  <div className="text-sm text-gray-300">PageSpeed Score</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-3xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-gray-300">Mobile Optimized</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Why Choose Our <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Websites</span>?
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  We build websites that don't just look good - they drive real business results
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Packages Section */}
          <section id="packages" className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Website <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Packages</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Choose the perfect package for your business needs
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-2 ${
                      pkg.popular 
                        ? 'border-orange-500 ring-2 ring-orange-500/20' 
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-gray-300 mb-4">{pkg.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-black text-white">AED {pkg.price}</span>
                        <span className="text-gray-400 text-sm ml-2">one-time</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Delivery: {pkg.duration}
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleGetQuote}
                      className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Our <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Process</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  From concept to launch in 4 simple steps
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <div
                    key={index}
                    className="relative text-center"
                  >
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      {index < process.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red-600 to-red-500 transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                    <span className="text-red-400 text-xs font-medium">{step.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Client <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Success</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 leading-relaxed">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Ready to Launch Your <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Website</span>?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Get a free consultation and quote for your website project. No obligations, just expert advice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </BackgroundLayout>
  )
}