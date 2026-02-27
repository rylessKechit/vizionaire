'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, Star, Zap, TrendingUp, Target, Users, Award, Shield, Clock, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const features = [
  {
    category: "Setup & Onboarding",
    items: [
      { name: "Initial consultation & strategy", starter: true, professional: true, enterprise: true },
      { name: "Account setup & configuration", starter: true, professional: true, enterprise: true },
      { name: "Brand guidelines creation", starter: false, professional: true, enterprise: true },
      { name: "Dedicated onboarding specialist", starter: false, professional: false, enterprise: true }
    ]
  },
  {
    category: "Social Media Management",
    items: [
      { name: "Platforms managed", starter: "2", professional: "All", enterprise: "All + Custom" },
      { name: "Posts per month", starter: "20", professional: "60", enterprise: "Unlimited" },
      { name: "Custom content creation", starter: false, professional: true, enterprise: true },
      { name: "Influencer partnerships", starter: false, professional: true, enterprise: true }
    ]
  },
  {
    category: "Advertising & PPC",
    items: [
      { name: "Google Ads management", starter: false, professional: true, enterprise: true },
      { name: "Meta/Facebook advertising", starter: false, professional: true, enterprise: true },
      { name: "LinkedIn advertising", starter: false, professional: false, enterprise: true },
      { name: "Ad spend management", starter: "N/A", professional: "Up to 50k", enterprise: "Unlimited" }
    ]
  },
  {
    category: "Reporting & Analytics",
    items: [
      { name: "Performance reports", starter: "Monthly", professional: "Weekly", enterprise: "Real-time" },
      { name: "Custom dashboards", starter: false, professional: true, enterprise: true },
      { name: "ROI tracking", starter: true, professional: true, enterprise: true },
      { name: "Competitor analysis", starter: false, professional: true, enterprise: true }
    ]
  }
]

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
  },
  {
    question: "What's included in the 90-day guarantee?",
    answer: "If you don't see measurable results within 90 days (increased leads, traffic, or sales), we'll refund your investment completely."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most clients see initial improvements within 2-4 weeks, with significant results typically visible within 30-60 days."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "No! All our plans are month-to-month with no long-term commitments. You can cancel anytime with 30 days notice."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with businesses across all industries, with special expertise in e-commerce, professional services, healthcare, and tech companies."
  }
]

export default function PricingPageClient() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Plans de la homepage EXACTS
  const homepagePlans = [
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Starter",
      subtitle: "Perfect for small businesses",
      price: "5500",
      period: "/month",
      description: "Essential digital marketing to get you started with guaranteed results.",
      features: [
        "Social media management (2 platforms)",
        "Basic SEO optimization",
        "Monthly performance reports",
        "Email marketing setup",
        "48h setup time",
        "90-day ROI guarantee"
      ],
      popular: false,
      color: "from-blue-600 to-blue-500",
      buttonText: "Get Started"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      name: "Professional",
      subtitle: "Most popular choice",
      price: "11000",
      period: "/month",
      description: "Complete marketing solution for growing businesses ready to dominate.",
      features: [
        "Full social media management (all platforms)",
        "Advanced SEO & content creation",
        "PPC advertising management",
        "Marketing automation setup",
        "Weekly strategy calls",
        "24/7 priority support",
        "Custom landing pages",
        "Detailed analytics dashboard"
      ],
      popular: true,
      color: "from-red-600 to-amber-500",
      buttonText: "Start Dominating"
    },
    {
      icon: <Target className="w-6 h-6" />,
      name: "Enterprise",
      subtitle: "For ambitious companies",
      price: "22000",
      period: "/month",
      description: "Premium solution with dedicated team and unlimited everything.",
      features: [
        "Dedicated marketing team",
        "Custom strategy development",
        "Multi-channel campaigns",
        "Advanced automation workflows",
        "Unlimited design requests",
        "Priority phone support",
        "Monthly strategy reviews",
        "Exclusive market insights"
      ],
      popular: false,
      color: "from-purple-600 to-purple-500",
      buttonText: "Scale Big"
    }
  ]

  const handleCallClick = () => {
    const message = encodeURIComponent('Hi! I would like to discuss VIZIONAIRE pricing plans and find the best solution for my business.')
    window.open(`https://wa.me/971544785454?text=${message}`, '_blank')
  }

  const handleGetStarted = (planName: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in the ${planName} plan. Can we schedule a consultation to get started?`)
    window.open(`https://wa.me/971544785454?text=${message}`, '_blank')
  }

  const handleCustomQuote = () => {
    const message = encodeURIComponent('Hi! I need a custom solution for my business. Can we discuss my specific requirements?')
    window.open(`https://wa.me/971544785454?text=${message}`, '_blank')
  }

  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="text-center py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
                <Star className="w-4 h-4 text-amber-400" />
                <span className="text-white text-sm font-medium">Transparent Pricing, Guaranteed Results</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                No hidden fees, no long-term contracts.{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Choose the plan
                </span>
                {" "}that fits your ambition.
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light">
                Every plan includes our signature 90-day ROI guarantee and dedicated support to ensure your success.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Toggle */}
        <section className="px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1">
                <div className="flex">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      !isAnnual
                        ? 'bg-white text-black shadow-lg'
                        : 'text-white hover:text-gray-300'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      isAnnual
                        ? 'bg-white text-black shadow-lg'
                        : 'text-white hover:text-gray-300'
                    }`}
                  >
                    Annual
                    <span className="ml-2 bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Pricing - Code EXACT du composant homepage */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {homepagePlans.map((plan, i) => (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  } ${plan.popular ? 'scale-105 lg:scale-110' : ''}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 hover:border-white/30 hover:bg-white/15`}>

                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110`}>
                        {plan.icon}
                      </div>

                      {/* Plan Info */}
                      <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{plan.subtitle}</p>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-white">
                            {isAnnual
                              ? (Math.round(parseInt(plan.price) * 0.8) * 12).toLocaleString()
                              : parseInt(plan.price).toLocaleString()} AED
                          </span>
                          <span className="text-base text-gray-300">
                            {isAnnual ? "/year" : plan.period}
                          </span>
                        </div>
                        {isAnnual && (
                          <div className="text-xs text-green-400 font-medium mt-1">
                            Save {parseInt(plan.price) * 12 * 0.2} AED annually
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 mb-6 text-sm">{plan.description}</p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {plan.features.slice(0, 6).map((feature, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-200 text-xs leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <button
                        onClick={handleCallClick}
                        className={`w-full py-3 px-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg hover:shadow-xl'
                            : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30 shadow-md hover:shadow-lg border border-white/30'
                        }`}
                      >
                        {plan.buttonText}
                      </button>

                      <div className="text-center mt-3">
                        <p className="text-xs text-gray-400">No setup fees • Cancel anytime</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enterprise CTA */}
            <div className="text-center">
              <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg border border-white/20 max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Need a Custom Solution?
                  </h3>
                  <p className="text-lg text-gray-200 mb-6 max-w-xl mx-auto leading-relaxed">
                    We create personalized packages for unique business needs.
                    Contact us for a custom quote and tailored strategy.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <button
                      onClick={handleCallClick}
                      className="px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      Get Custom Quote
                    </button>
                    <Link
                      href="/demo"
                      className="px-6 py-3 border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm"
                    >
                      View Results
                    </Link>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-300">
                    <div className="flex items-center justify-center gap-1">
                      <Check className="w-3 h-3 text-green-400" />
                      Free consultation included
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Check className="w-3 h-3 text-green-400" />
                      Custom strategy
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Check className="w-3 h-3 text-green-400" />
                      No long-term contracts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Why Choose <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">VIZIONAIRE?</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  We're so confident in our results that we guarantee your success with every plan.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">90-Day ROI Guarantee</h3>
                  <p className="text-gray-300">See measurable results within 90 days or get your money back.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Priority Support</h3>
                  <p className="text-gray-300">Direct access to our team whenever you need assistance.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-300">500+ successful campaigns across the UAE and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Compare All Features
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                See exactly what's included in each plan
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 text-white font-bold">Features</th>
                      <th className="text-center py-4 text-white font-bold">Starter</th>
                      <th className="text-center py-4 text-white font-bold">Professional</th>
                      <th className="text-center py-4 text-white font-bold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((category, categoryIndex) => (
                      <>
                        <tr key={`category-${categoryIndex}`}>
                          <td colSpan={4} className="py-4">
                            <h4 className="font-bold text-white bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                              {category.category}
                            </h4>
                          </td>
                        </tr>
                        {category.items.map((item, itemIndex) => (
                          <tr key={`item-${categoryIndex}-${itemIndex}`} className="border-b border-white/10">
                            <td className="py-3 text-gray-200">{item.name}</td>
                            <td className="py-3 text-center">
                              {typeof item.starter === 'boolean' ? (
                                item.starter ? (
                                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                                ) : (
                                  <span className="text-gray-500">—</span>
                                )
                              ) : (
                                <span className="text-white font-medium">{item.starter}</span>
                              )}
                            </td>
                            <td className="py-3 text-center">
                              {typeof item.professional === 'boolean' ? (
                                item.professional ? (
                                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                                ) : (
                                  <span className="text-gray-500">—</span>
                                )
                              ) : (
                                <span className="text-white font-medium">{item.professional}</span>
                              )}
                            </td>
                            <td className="py-3 text-center">
                              {typeof item.enterprise === 'boolean' ? (
                                item.enterprise ? (
                                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                                ) : (
                                  <span className="text-gray-500">—</span>
                                )
                              ) : (
                                <span className="text-white font-medium">{item.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-200">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
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
                Ready to <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses across the UAE who chose VIZIONAIRE to accelerate their growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleCustomQuote}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                >
                  <Phone className="w-5 h-5" />
                  Get Your Free Strategy Session
                </button>
                <button
                  onClick={() => handleGetStarted('Professional')}
                  className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Start with Professional
                </button>
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
