'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, BarChart3, PieChart, TrendingUp, Target, Users, DollarSign, Eye, MousePointer } from 'lucide-react'

const analyticsTypes = [
  {
    name: 'Website Analytics',
    icon: '📊',
    description: 'Comprehensive website performance tracking',
    features: ['Traffic analysis', 'User behavior', 'Conversion tracking', 'Page performance']
  },
  {
    name: 'Marketing Analytics',
    icon: '📈',
    description: 'Campaign performance and ROI measurement',
    features: ['Campaign tracking', 'Attribution modeling', 'ROI analysis', 'Lead quality scoring']
  },
  {
    name: 'Social Media Analytics',
    icon: '📱',
    description: 'Social media performance and engagement',
    features: ['Engagement metrics', 'Reach analysis', 'Content performance', 'Audience insights']
  },
  {
    name: 'E-commerce Analytics',
    icon: '🛒',
    description: 'Sales and revenue optimization insights',
    features: ['Sales tracking', 'Product performance', 'Customer journey', 'Revenue attribution']
  }
]

const services = [
  {
    icon: BarChart3,
    title: 'Data Setup & Configuration',
    description: 'Complete analytics setup including Google Analytics 4, conversion tracking, and custom dashboards'
  },
  {
    icon: PieChart,
    title: 'Custom Dashboards',
    description: 'Beautiful, easy-to-understand dashboards that show your key metrics at a glance'
  },
  {
    icon: Target,
    title: 'Goal & Conversion Tracking',
    description: 'Track what matters most to your business with custom conversion and goal setups'
  },
  {
    icon: TrendingUp,
    title: 'Performance Reports',
    description: 'Regular detailed reports showing your progress and actionable insights'
  },
  {
    icon: Users,
    title: 'Audience Analysis',
    description: 'Deep insights into your audience demographics, behavior, and preferences'
  },
  {
    icon: DollarSign,
    title: 'ROI Attribution',
    description: 'Clear understanding of which marketing channels drive the most revenue'
  }
]

const packages = [
  {
    name: 'Analytics Essentials',
    price: '4,500',
    platforms: '5 Data Sources',
    reports: 'Monthly Reports',
    description: 'Essential analytics for growing businesses',
    features: [
      'Google Analytics 4 setup',
      'Conversion tracking setup',
      'Basic custom dashboard',
      'Monthly performance reports',
      'Goal tracking configuration',
      'Email support included'
    ],
    color: 'from-orange-600 to-red-600'
  },
  {
    name: 'Analytics Pro',
    price: '8,500',
    platforms: '10 Data Sources',
    reports: 'Weekly Reports',
    description: 'Advanced analytics for data-driven businesses',
    features: [
      'All Analytics Essentials features',
      'Advanced custom dashboards',
      'Multi-channel attribution',
      'Weekly performance reviews',
      'Audience segmentation analysis',
      'CRM and marketing tool integration',
      'Custom report creation'
    ],
    popular: true,
    color: 'from-orange-400 to-red-500'
  },
  {
    name: 'Analytics Enterprise',
    price: '15,500',
    platforms: 'Unlimited Sources',
    reports: 'Real-time Monitoring',
    description: 'Enterprise analytics for large organizations',
    features: [
      'All Analytics Pro features',
      'Real-time monitoring setup',
      'Advanced attribution modeling',
      'Predictive analytics insights',
      'Dedicated analytics specialist',
      'Custom integrations and APIs',
      '24/7 monitoring and alerts'
    ],
    color: 'from-red-500 to-orange-500'
  }
]

const insights = [
  {
    metric: 'Data Accuracy',
    value: '99.9%',
    description: 'Precise tracking and reporting'
  },
  {
    metric: 'Reporting Speed',
    value: '24H',
    description: 'Fresh data every day'
  },
  {
    metric: 'Decision Impact',
    value: '65%',
    description: 'Faster strategic decisions'
  },
  {
    metric: 'ROI Clarity',
    value: '100%',
    description: 'Complete attribution visibility'
  }
]

export default function AnalyticsPage() {
  const handleGetQuote = () => {
    const message = encodeURIComponent('Hi! I\'m interested in Analytics & Reporting services. Can we discuss setting up proper tracking for my business?')
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-orange-400 font-semibold">Analytics & Reporting</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                  <span className="text-white">Data-Driven</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
                    Decisions
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Comprehensive analytics setup and reporting that gives you clear insights into your marketing performance and ROI.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Start Tracking
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

              {/* Analytics Types */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {analyticsTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{type.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div className="space-y-1">
                      {type.features.map((feature, i) => (
                        <div key={i} className="text-xs text-orange-400">• {feature}</div>
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
                  Our Analytics <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Everything you need to make data-driven business decisions
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
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
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

          {/* Insights Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Analytics <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">Benefits</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  What you gain with proper analytics and reporting
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent mb-4">
                      {insight.value}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{insight.metric}</h3>
                    <p className="text-gray-300 text-sm">{insight.description}</p>
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
                  Analytics <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">Packages</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Choose the analytics package that fits your data needs
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
                        <span className="text-gray-400 text-sm ml-2">/month</span>
                      </div>
                      <div className="flex justify-center gap-4 text-sm text-gray-400 mb-4">
                        <span>{pkg.platforms}</span>
                        <span>•</span>
                        <span>{pkg.reports}</span>
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

          {/* Benefits Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Why Analytics <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Matter</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Transform Your Business with Data</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">See What's Working</h4>
                        <p className="text-gray-300 text-sm">Identify your best-performing marketing channels and campaigns</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <MousePointer className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Optimize User Experience</h4>
                        <p className="text-gray-300 text-sm">Understand how users interact with your website and improve their journey</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Maximize ROI</h4>
                        <p className="text-gray-300 text-sm">Make informed decisions about where to invest your marketing budget</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-6">What You'll Get</h4>
                  <div className="space-y-4">
                    {[
                      'Custom analytics dashboard',
                      'Monthly performance reports',
                      'Conversion tracking setup',
                      'ROI analysis and insights',
                      'Audience behavior analysis',
                      'Actionable recommendations'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Ready to Track Your <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">Success</span>?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Get a free analytics audit and see what insights you're missing about your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Get Free Analytics Audit
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