'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, Target, Search, Users, BarChart3, Zap, TrendingUp, DollarSign, MousePointer } from 'lucide-react'

const platforms = [
  {
    name: 'Google Ads',
    icon: '🔍',
    description: 'Search, Display, Shopping, and YouTube ads',
    features: ['Search ads', 'Shopping campaigns', 'Display network', 'YouTube advertising']
  },
  {
    name: 'Facebook & Instagram',
    icon: '📱',
    description: 'Social media advertising across Meta platforms',
    features: ['Feed ads', 'Story ads', 'Reels advertising', 'Carousel campaigns']
  },
  {
    name: 'LinkedIn Ads',
    icon: '💼',
    description: 'B2B advertising and professional targeting',
    features: ['Sponsored content', 'Lead generation', 'Professional targeting', 'InMail campaigns']
  },
  {
    name: 'TikTok Ads',
    icon: '🎵',
    description: 'Video advertising for younger demographics',
    features: ['In-feed ads', 'Branded effects', 'TopView campaigns', 'Spark ads']
  }
]

const services = [
  {
    icon: Search,
    title: 'Campaign Strategy',
    description: 'Data-driven advertising strategies tailored to your business goals and target audience'
  },
  {
    icon: Target,
    title: 'Precise Targeting',
    description: 'Advanced audience targeting using demographics, interests, behaviors, and custom audiences'
  },
  {
    icon: MousePointer,
    title: 'Ad Creation',
    description: 'Compelling ad copy and creative design that drives clicks and conversions'
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Real-time monitoring and optimization to maximize your advertising ROI'
  },
  {
    icon: TrendingUp,
    title: 'Landing Page Optimization',
    description: 'Optimized landing pages that convert ad traffic into customers'
  },
  {
    icon: DollarSign,
    title: 'Budget Management',
    description: 'Strategic budget allocation and bid management for maximum efficiency'
  }
]

const packages = [
  {
    name: 'Ad Starter',
    price: '8,500',
    adSpend: '5,000 AED/month',
    platforms: '2 Platforms',
    description: 'Essential paid advertising for growing businesses',
    features: [
      'Google Ads + Facebook advertising',
      'Campaign setup and optimization',
      'Basic audience targeting',
      'Ad copy and creative development',
      'Monthly performance reports',
      'Conversion tracking setup'
    ],
    color: 'from-green-600 to-emerald-600'
  },
  {
    name: 'Ad Growth',
    price: '15,500',
    adSpend: '15,000 AED/month',
    platforms: '3 Platforms',
    description: 'Comprehensive advertising across multiple channels',
    features: [
      'All Ad Starter features',
      'LinkedIn Ads included',
      'Advanced audience targeting',
      'A/B testing for all campaigns',
      'Landing page optimization',
      'Weekly performance reviews',
      'Retargeting campaigns'
    ],
    popular: true,
    color: 'from-green-400 to-emerald-500'
  },
  {
    name: 'Ad Domination',
    price: '28,500',
    adSpend: '50,000+ AED/month',
    platforms: '4+ Platforms',
    description: 'Enterprise-level advertising domination',
    features: [
      'All Ad Growth features',
      'TikTok Ads included',
      'Custom audience development',
      'Advanced attribution modeling',
      'Dedicated advertising specialist',
      'Real-time optimization',
      'Competitor analysis and insights'
    ],
    color: 'from-emerald-500 to-green-500'
  }
]

const results = [
  {
    metric: 'Average ROAS',
    value: '4.2x',
    description: 'Return on advertising spend'
  },
  {
    metric: 'Cost Per Lead',
    value: '-45%',
    description: 'Reduction in acquisition costs'
  },
  {
    metric: 'Conversion Rate',
    value: '8.5%',
    description: 'Average landing page conversion'
  },
  {
    metric: 'Click-Through Rate',
    value: '3.8%',
    description: 'Above industry average'
  }
]

export default function PaidAdvertisingPage() {
  const handleGetQuote = () => {
    const message = encodeURIComponent('Hi! I\'m interested in Paid Advertising services. Can we discuss my advertising strategy and budget?')
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-400 font-semibold">Paid Advertising</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                  <span className="text-white">Maximum ROI</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                    Minimum Waste
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Strategic paid advertising campaigns across Google, Facebook, Instagram, and LinkedIn that deliver qualified leads and measurable ROI.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Start Advertising
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

              {/* Platform Coverage */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{platform.description}</p>
                    <div className="space-y-1">
                      {platform.features.map((feature, i) => (
                        <div key={i} className="text-xs text-green-400">• {feature}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Our Advertising <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Everything you need to dominate paid advertising channels
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Expected <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">Results</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  What you can expect from our advertising expertise
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent mb-4">
                      {result.value}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{result.metric}</h3>
                    <p className="text-gray-300 text-sm">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Packages Section */}
          <section id="packages" className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Advertising <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">Packages</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Choose the advertising package that fits your budget and goals
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-2 ${
                      pkg.popular 
                        ? 'border-green-500 ring-2 ring-green-500/20' 
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-gray-300 mb-4">{pkg.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-black text-white">AED {pkg.price}</span>
                        <span className="text-gray-400 text-sm ml-2">/month</span>
                      </div>
                      <div className="flex justify-center gap-4 text-sm text-gray-400 mb-4">
                        <span>{pkg.platforms}</span>
                        <span>•</span>
                        <span>{pkg.adSpend} ad spend</span>
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
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
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

          {/* CTA Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Ready to Scale Your <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">Advertising</span>?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Get a free advertising audit and strategy session. Let's maximize your ROI together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Get Free Audit
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