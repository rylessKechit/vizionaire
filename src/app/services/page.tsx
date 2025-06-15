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
    benefits: [
      'Professional online presence',
      'Faster loading speeds',
      'Better search rankings',
      'Mobile-optimized experience'
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
    benefits: [
      'Consistent brand presence',
      'Engaged community growth',
      'Increased brand awareness',
      'Quality lead generation'
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
      'Email marketing automation sequences',
      'Lead nurturing workflows and funnels',
      'CRM integration and management',
      'Customer journey optimization',
      'Behavioral triggers and personalization',
      'Performance tracking and optimization'
    ],
    benefits: [
      'Save time on repetitive tasks',
      'Better lead nurturing',
      'Improved conversion rates',
      'Scalable growth systems'
    ],
    startingPrice: '7,500',
    color: 'from-purple-600 to-indigo-600',
    iconBg: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'paid-advertising',
    icon: Target,
    title: 'Paid Advertising',
    subtitle: 'Maximum ROI, Minimum Waste',
    description: 'Strategic paid advertising campaigns across Google, Facebook, Instagram, and LinkedIn that deliver qualified leads and measurable ROI.',
    features: [
      'Google Ads (Search, Display, Shopping)',
      'Facebook & Instagram advertising',
      'LinkedIn B2B advertising campaigns',
      'Retargeting and lookalike audiences',
      'Landing page optimization',
      'Conversion tracking and attribution'
    ],
    benefits: [
      'Immediate traffic and leads',
      'Precise audience targeting',
      'Measurable ROI tracking',
      'Budget optimization'
    ],
    startingPrice: '8,500',
    color: 'from-green-600 to-emerald-600',
    iconBg: 'from-green-600 to-emerald-600'
  },
  {
    id: 'seo',
    icon: TrendingUp,
    title: 'Search Engine Optimization',
    subtitle: 'Dominate Google Rankings',
    description: 'Comprehensive SEO strategies that improve your visibility on Google and drive organic traffic that converts into customers.',
    features: [
      'Technical SEO audits and optimization',
      'Keyword research and content strategy',
      'On-page and off-page optimization',
      'Local SEO for UAE businesses',
      'Content creation and link building',
      'Monthly reporting and analysis'
    ],
    benefits: [
      'Higher search rankings',
      'Increased organic traffic',
      'Better local visibility',
      'Long-term growth'
    ],
    startingPrice: '6,500',
    color: 'from-blue-600 to-cyan-600',
    iconBg: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & Reporting',
    subtitle: 'Data-Driven Decisions',
    description: 'Comprehensive analytics setup and reporting that gives you clear insights into your marketing performance and ROI.',
    features: [
      'Google Analytics 4 setup and configuration',
      'Custom dashboard creation',
      'Conversion tracking implementation',
      'Monthly performance reports',
      'ROI analysis and recommendations',
      'Marketing attribution modeling'
    ],
    benefits: [
      'Clear performance insights',
      'Better decision making',
      'ROI optimization',
      'Growth opportunities identification'
    ],
    startingPrice: '4,500',
    color: 'from-orange-600 to-red-600',
    iconBg: 'from-orange-600 to-red-600'
  }
]

export default function ServicesPage() {
  const handleGetQuote = () => {
    const message = encodeURIComponent('Hi! I\'m interested in VIZIONAIRE services and would like to get a free strategy consultation.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-12 lg:pt-32 lg:pb-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-white">Your Business</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Fresh expertise meets proven strategies. 
                We deliver innovative digital marketing solutions designed to scale your business in the UAE market.
              </p>
              
              {/* Our Commitments */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2">48H</div>
                  <div className="text-sm text-gray-400">Quick Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-gray-400">ROI Guarantee</div>
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

              {/* Services Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div
                      key={service.id}
                      className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                    >
                      {/* Service Header */}
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-lg text-gray-300 mb-4">{service.subtitle}</p>
                          <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-4">What's Included:</h4>
                        <div className="grid gap-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-4">Key Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.map((benefit, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 text-gray-200 text-sm rounded-full border border-white/20"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div>
                          <span className="text-gray-400 text-sm">Starting from</span>
                          <div className="text-2xl font-bold text-white">
                            AED {service.startingPrice}
                            <span className="text-sm text-gray-400 font-normal">/month</span>
                          </div>
                        </div>
                        <button
                          onClick={handleGetQuote}
                          className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                        >
                          Get Quote
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-16">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Get Started</span>?
                  </h3>
                  <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Let's discuss your goals and create a custom strategy that drives real results for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleGetQuote}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                    >
                      Free Strategy Session
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                    >
                      Contact Us
                    </Link>
                  </div>
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