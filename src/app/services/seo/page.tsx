'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, TrendingUp, Search, Globe, FileText, Link as LinkIcon, BarChart3, Users, Target } from 'lucide-react'

const seoServices = [
  {
    name: 'Technical SEO',
    icon: '⚙️',
    description: 'Website optimization and technical improvements',
    features: ['Site speed optimization', 'Mobile responsiveness', 'Schema markup', 'Core Web Vitals']
  },
  {
    name: 'On-Page SEO',
    icon: '📄',
    description: 'Content and page-level optimization',
    features: ['Keyword optimization', 'Meta tags', 'Content structure', 'Internal linking']
  },
  {
    name: 'Off-Page SEO',
    icon: '🔗',
    description: 'Authority building and link acquisition',
    features: ['Link building', 'Brand mentions', 'Local citations', 'Guest posting']
  },
  {
    name: 'Local SEO',
    icon: '📍',
    description: 'UAE and regional search optimization',
    features: ['Google My Business', 'Local directories', 'Location pages', 'Review management']
  }
]

const services = [
  {
    icon: Search,
    title: 'Keyword Research',
    description: 'Comprehensive keyword analysis to target the right search terms for your business'
  },
  {
    icon: Globe,
    title: 'Technical Audits',
    description: 'In-depth website analysis to identify and fix technical SEO issues'
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'SEO-optimized content planning and creation that ranks and converts'
  },
  {
    icon: LinkIcon,
    title: 'Link Building',
    description: 'High-quality backlink acquisition from authoritative websites'
  },
  {
    icon: Target,
    title: 'Local Optimization',
    description: 'Dominate local search results in Dubai, UAE, and the MENA region'
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Detailed SEO reporting and ranking monitoring'
  }
]

const packages = [
  {
    name: 'SEO Foundation',
    price: '6,500',
    keywords: '20 Keywords',
    pages: '10 Pages',
    description: 'Essential SEO for small businesses and startups',
    features: [
      'Technical SEO audit and fixes',
      'Keyword research and optimization',
      'On-page SEO for 10 pages',
      'Google My Business optimization',
      'Monthly ranking reports',
      'Basic link building'
    ],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'SEO Growth',
    price: '12,500',
    keywords: '50 Keywords',
    pages: '25 Pages',
    description: 'Comprehensive SEO for growing businesses',
    features: [
      'All SEO Foundation features',
      'Content creation (4 articles/month)',
      'Advanced link building strategy',
      'Local SEO optimization',
      'Competitor analysis',
      'Weekly progress updates',
      'Schema markup implementation'
    ],
    popular: true,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    name: 'SEO Domination',
    price: '22,500',
    keywords: '100+ Keywords',
    pages: 'Unlimited',
    description: 'Enterprise SEO for market leaders',
    features: [
      'All SEO Growth features',
      'Content creation (8 articles/month)',
      'Advanced technical SEO',
      'Multi-location SEO',
      'Dedicated SEO specialist',
      'Custom SEO strategy',
      'Priority support and consulting'
    ],
    color: 'from-cyan-500 to-blue-500'
  }
]

const results = [
  {
    metric: 'Organic Traffic',
    value: '+285%',
    description: 'Average increase in 6 months'
  },
  {
    metric: 'Keyword Rankings',
    value: '85%',
    description: 'Keywords in top 10 positions'
  },
  {
    metric: 'Local Visibility',
    value: '+400%',
    description: 'Improvement in local searches'
  },
  {
    metric: 'Conversion Rate',
    value: '12.3%',
    description: 'From organic search traffic'
  }
]

export default function SEOPage() {
  const handleGetQuote = () => {
    const message = encodeURIComponent('Hi! I\'m interested in SEO Optimization services. Can we discuss improving my website\'s search rankings?')
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-blue-400 font-semibold">SEO Optimization</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                  <span className="text-white">Dominate Google</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Rankings
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Comprehensive SEO strategies that improve your visibility on Google and drive organic traffic that converts into customers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Start Ranking
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

              {/* SEO Services Overview */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seoServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="space-y-1">
                      {service.features.map((feature, i) => (
                        <div key={i} className="text-xs text-blue-400">• {feature}</div>
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
                  Our SEO <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Everything you need to dominate search engine rankings
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
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300">
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
                  Expected <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Results</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  What you can expect from our SEO expertise
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
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
                  SEO <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Packages</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Choose the SEO package that fits your ranking goals
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-2 ${
                      pkg.popular 
                        ? 'border-blue-500 ring-2 ring-blue-500/20' 
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold">
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
                        <span>{pkg.keywords}</span>
                        <span>•</span>
                        <span>{pkg.pages}</span>
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
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
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
                  Ready to Rank on <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Google</span>?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Get a free SEO audit and see how we can improve your search rankings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Get Free SEO Audit
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