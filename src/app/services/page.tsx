'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, Star, TrendingUp, Zap, Globe, Users, Target, BarChart3, Smartphone } from 'lucide-react'

const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Website Development',
    subtitle: 'High-Converting Websites & Landing Pages',
    description: 'Custom websites designed to convert visitors into customers with stunning design and optimized performance that drives real business results.',
    features: [
      'Custom responsive design with Apple-inspired aesthetics',
      'E-commerce platforms (Shopify, WooCommerce, Magento)',
      'Landing page optimization with A/B testing',
      'Speed & SEO optimization (95+ PageSpeed scores)',
      'Mobile-first approach with perfect responsiveness',
      'Analytics & CRM integration for data-driven insights'
    ],
    results: [
      '300% increase in conversions',
      '50% faster loading speeds',
      '95+ PageSpeed scores',
      '40% reduction in bounce rate'
    ],
    startingPrice: '11,000',
    color: 'from-red-600 to-red-500',
    iconBg: 'from-red-600 to-red-500'
  },
  {
    id: 'social-media',
    icon: Smartphone,
    title: 'Social Media Management',
    subtitle: 'Dominate Every Platform',
    description: 'Complete social media strategy and management to build your brand and engage your audience across all platforms with viral content.',
    features: [
      'Content creation & strategic scheduling',
      'Instagram, LinkedIn, TikTok, Facebook management',
      'Influencer partnerships and collaborations',
      'Community management and engagement',
      'Social media advertising campaigns',
      'Performance analytics & detailed reporting'
    ],
    results: [
      '500% increase in engagement',
      '10x follower growth',
      '200% boost in reach',
      '150% more qualified leads'
    ],
    startingPrice: '5,500',
    color: 'from-amber-400 via-orange-500 to-red-500',
    iconBg: 'from-amber-500 to-orange-500'
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Marketing Automation',
    subtitle: 'Scale Without Limits',
    description: 'Automated workflows that nurture leads and convert prospects into customers while you focus on growing your business strategically.',
    features: [
      'Email marketing sequences and drip campaigns',
      'Lead nurturing workflows with smart triggers',
      'CRM integration & complete setup',
      'Chatbot development for 24/7 support',
      'Sales funnel automation and optimization',
      'Behavioral trigger campaigns for personalization'
    ],
    results: [
      '400% increase in qualified leads',
      '80% reduction in manual work',
      '250% boost in sales efficiency',
      '60% improvement in lead quality'
    ],
    startingPrice: '7,350',
    color: 'from-orange-500 via-red-500 to-rose-600',
    iconBg: 'from-orange-500 to-red-500'
  },
  {
    id: 'seo',
    icon: Target,
    title: 'SEO & Content Marketing',
    subtitle: 'Rank #1 on Google',
    description: 'Comprehensive SEO strategy and content marketing to increase your organic visibility and drive qualified traffic that converts.',
    features: [
      'Complete technical SEO audits and fixes',
      'Keyword research and competitive analysis',
      'Content strategy and creation',
      'Link building with high-authority sites',
      'Local SEO for UAE market dominance',
      'Monthly reporting and strategy adjustments'
    ],
    results: [
      '400% increase in organic traffic',
      'Top 3 rankings for target keywords',
      '200% more qualified leads',
      '150% improvement in domain authority'
    ],
    startingPrice: '6,500',
    color: 'from-amber-400 via-yellow-500 to-orange-500',
    iconBg: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'paid-ads',
    icon: BarChart3,
    title: 'Paid Advertising',
    subtitle: 'Maximize Your ROI',
    description: 'Strategic paid advertising campaigns across Google, Meta, and LinkedIn that deliver measurable results and exceptional ROI.',
    features: [
      'Google Ads campaigns and optimization',
      'Facebook & Instagram advertising',
      'LinkedIn B2B campaign management',
      'Advanced audience targeting and retargeting',
      'Creative development and A/B testing',
      'Real-time optimization and reporting'
    ],
    results: [
      '300% ROAS on average',
      '50% lower cost per acquisition',
      '200% increase in qualified leads',
      '90% improvement in conversion rates'
    ],
    startingPrice: '8,500',
    color: 'from-red-600 to-red-500',
    iconBg: 'from-red-600 to-amber-500'
  },
  {
    id: 'consulting',
    icon: Users,
    title: 'Strategic Consulting',
    subtitle: 'Expert Guidance & Strategy',
    description: 'High-level strategic consulting to optimize your entire digital marketing ecosystem and scale your business effectively.',
    features: [
      'Complete digital marketing audits',
      'Strategic planning and roadmap creation',
      'Team training and workshops',
      'Performance optimization consulting',
      'Technology stack recommendations',
      'Ongoing strategic support and guidance'
    ],
    results: [
      '250% improvement in overall performance',
      '40% reduction in marketing costs',
      '300% increase in team efficiency',
      '200% better strategic alignment'
    ],
    startingPrice: '12,500',
    color: 'from-amber-400 via-orange-500 to-red-500',
    iconBg: 'from-amber-500 to-orange-500'
  }
]

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    company: "Dubai Tech Startup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "VIZIONAIRE transformed our digital presence completely. Our website now converts 5x better and our social media engagement is through the roof.",
    rating: 5,
    result: "500% increase in conversions"
  },
  {
    name: "Sarah Al-Mansoori",
    company: "Luxury Real Estate",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b108?w=100&h=100&fit=crop&crop=face",
    text: "The automation workflows they built save us 20 hours per week while generating more qualified leads than we've ever had.",
    rating: 5,
    result: "20 hours saved weekly"
  },
  {
    name: "Omar Al-Zaabi",
    company: "E-commerce Fashion",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "ROI increased 400% in just 3 months. Their paid advertising strategies are absolutely game-changing for our business.",
    rating: 5,
    result: "400% ROI increase"
  }
]

export default function ServicesPage() {
  const handleGetQuote = () => {
    const message = encodeURIComponent('Hi! I am interested in VIZIONAIRE services. Can we schedule a consultation to discuss my digital marketing needs?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleGetService = (serviceName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${serviceName}. Can we schedule a consultation to discuss my needs?`)
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
      {/* Header */}
      <div className="relative z-30">
        <Header />
      </div>
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Trusted by 500+ UAE Businesses</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Complete Digital
                </span>
                <br />
                <span className="text-white">Marketing Solutions</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                From stunning websites to viral social media campaigns. We deliver measurable results that scale your business in the UAE market.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">500+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">300%</div>
                  <div className="text-sm text-gray-400">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetQuote}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                >
                  Get Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                End-to-end digital marketing solutions designed to scale your business in the competitive UAE market.
              </p>
            </div>
            
            {/* Services Grid - Cartes plus élégantes */}
            <div className="grid lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.iconBg} flex items-center justify-center text-white flex-shrink-0`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{service.title}</h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features - Seulement les 4 premiers */}
                  <div className="mb-4">
                    <p className="text-white font-semibold mb-2 text-sm">What's Included:</p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results - Format compact */}
                  <div className="mb-4">
                    <p className="text-white font-semibold mb-2 text-sm">Proven Results:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {service.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="text-center bg-white/5 rounded-lg p-2 border border-white/10">
                          <div className={`text-xs font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                            {result}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div>
                      <div className="text-lg font-black text-white">
                        {service.startingPrice} AED
                      </div>
                      <div className="text-xs text-gray-400">Starting price</div>
                    </div>
                    <button
                      onClick={() => handleGetService(service.title)}
                      className={`px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105`}
                    >
                      Get Started
                    </button>
                  </div>
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
                Success Stories
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Real results from real businesses across the UAE
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-200 mb-4 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  <div className={`text-sm font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent`}>
                    {testimonial.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Ready to <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Dominate</span> Your Market?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Every day you wait is potential revenue lost. Start your transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetQuote}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                >
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mt-8 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-black bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-1">Free</div>
                  <div className="text-xs text-gray-400">Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1">90d</div>
                  <div className="text-xs text-gray-400">Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <div className="bg-black/85 backdrop-blur-sm border-t border-white/10">
        <Footer />
      </div>
    </BackgroundLayout>
  )
}