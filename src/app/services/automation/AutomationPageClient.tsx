'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, Zap, Clock, Users, Mail, Target, BarChart3, Settings, GitBranch } from 'lucide-react'

const automations = [
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Welcome sequences, nurture campaigns, and promotional emails that convert',
    examples: ['Welcome series', 'Cart abandonment', 'Re-engagement campaigns']
  },
  {
    icon: Users,
    title: 'Lead Nurturing',
    description: 'Automated workflows that guide prospects through your sales funnel',
    examples: ['Lead scoring', 'Progressive profiling', 'Behavior triggers']
  },
  {
    icon: Target,
    title: 'Customer Journey',
    description: 'Personalized experiences based on customer behavior and preferences',
    examples: ['Onboarding flows', 'Upsell sequences', 'Retention campaigns']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Tracking',
    description: 'Real-time insights into your automation performance and ROI',
    examples: ['Conversion tracking', 'Revenue attribution', 'Performance reports']
  }
]

const packages = [
  {
    name: 'Automation Starter',
    price: '7,500',
    workflows: '5 Workflows',
    contacts: '10,000 Contacts',
    description: 'Essential automation for growing businesses',
    features: [
      'Email marketing automation setup',
      'Lead capture forms and landing pages',
      'Basic CRM integration',
      'Welcome email sequences',
      'Monthly performance reports',
      'Email support included'
    ],
    color: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'Automation Pro',
    price: '12,500',
    workflows: '15 Workflows',
    contacts: '50,000 Contacts',
    description: 'Advanced automation for scaling businesses',
    features: [
      'All Starter features included',
      'Advanced lead nurturing workflows',
      'Behavioral trigger campaigns',
      'A/B testing for all campaigns',
      'CRM and sales tool integrations',
      'SMS marketing automation',
      'Weekly optimization calls'
    ],
    popular: true,
    color: 'from-amber-400 to-orange-500'
  },
  {
    name: 'Automation Enterprise',
    price: '22,500',
    workflows: 'Unlimited',
    contacts: 'Unlimited',
    description: 'Complete automation suite for large businesses',
    features: [
      'All Pro features included',
      'Custom workflow development',
      'Multi-channel automation (Email, SMS, Social)',
      'Advanced personalization and AI',
      'Dedicated automation specialist',
      'Custom integrations and API setup',
      '24/7 priority support'
    ],
    color: 'from-orange-500 to-red-500'
  }
]

const benefits = [
  {
    title: 'Save 20+ Hours Weekly',
    description: 'Automate repetitive marketing tasks',
    icon: Clock
  },
  {
    title: '3x Higher Conversion',
    description: 'Personalized messaging at scale',
    icon: Target
  },
  {
    title: '40% More Revenue',
    description: 'Nurture leads into customers',
    icon: BarChart3
  },
  {
    title: 'Scalable Growth',
    description: 'Systems that grow with your business',
    icon: GitBranch
  }
]

export default function AutomationPageClient() {
  const handleGetQuote = () => {
    const message = encodeURIComponent('Hi! I\'m interested in Marketing Automation services. Can we discuss automating my marketing workflows?')
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-purple-400 font-semibold">Marketing Automation</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                  <span className="text-white">Scale Without</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Limits
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Automated workflows that nurture leads and convert prospects into customers while you focus on growing your business strategically.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Start Automating
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

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div
                      key={index}
                      className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Automation Types */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  What We <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Automate</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Complete automation solutions for every stage of your customer journey
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {automations.map((automation, index) => {
                  const IconComponent = automation.icon
                  return (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="flex items-start gap-6">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3">{automation.title}</h3>
                          <p className="text-gray-300 leading-relaxed mb-4">{automation.description}</p>
                          <div className="space-y-2">
                            {automation.examples.map((example, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                <span className="text-gray-400 text-sm">{example}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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
                  Automation <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Packages</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Choose the automation level that fits your business needs
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-2 ${
                      pkg.popular
                        ? 'border-purple-500 ring-2 ring-purple-500/20'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
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
                        <span>{pkg.workflows}</span>
                        <span>•</span>
                        <span>{pkg.contacts}</span>
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
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
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
                  Ready to <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Automate</span>?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Get a free automation audit and see how we can save you time while increasing revenue.
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
