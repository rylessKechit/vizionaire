'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, Star, Zap, TrendingUp, Target, Users, Award, Shield, Clock, CheckCircle, Phone, ChevronDown } from 'lucide-react'

const plans = [
  {
    icon: Zap,
    name: "Starter",
    subtitle: "Perfect for Small Businesses",
    monthlyPrice: 5500,
    annualPrice: 4400,
    description: "Essential digital marketing to launch your online presence and start generating leads consistently.",
    features: [
      "Social media management (2 platforms)",
      "Basic SEO optimization & local listings",
      "Monthly performance reports & insights",
      "Email marketing setup & 2 campaigns",
      "Google My Business optimization",
      "48-hour setup & onboarding",
      "90-day ROI guarantee",
      "WhatsApp & email support"
    ],
    popular: false,
    color: "from-amber-400 via-yellow-500 to-orange-500",
    iconBg: "from-amber-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    name: "Professional",
    subtitle: "Most Popular Choice",
    monthlyPrice: 11000,
    annualPrice: 8800,
    description: "Complete marketing solution for growing businesses ready to dominate their market and scale rapidly.",
    features: [
      "Full social media management (all platforms)",
      "Advanced SEO & monthly content creation",
      "PPC advertising management (Google & Meta)",
      "Marketing automation & email sequences",
      "Weekly strategy calls & optimization",
      "24/7 priority support & dedicated manager",
      "Custom landing pages & conversion optimization",
      "Detailed analytics dashboard & monthly reports",
      "Competitor analysis & market insights",
      "A/B testing for all campaigns"
    ],
    popular: true,
    color: "from-orange-500 via-red-500 to-rose-600",
    iconBg: "from-red-600 to-red-500"
  },
  {
    icon: Target,
    name: "Enterprise",
    subtitle: "For Ambitious Companies",
    monthlyPrice: 22000,
    annualPrice: 17600,
    description: "Premium solution with dedicated team, unlimited everything, and enterprise-level strategies for market leaders.",
    features: [
      "Dedicated marketing team (3+ specialists)",
      "Custom strategy development & implementation",
      "Multi-channel campaigns across all platforms",
      "Advanced automation workflows & CRM setup",
      "Unlimited design requests & revisions",
      "Priority phone support & weekly calls",
      "Monthly strategy reviews & optimization",
      "Exclusive market insights & competitor intelligence",
      "Custom integrations & API development",
      "White-label reporting for your clients"
    ],
    popular: false,
    color: "from-red-600 to-red-500",
    iconBg: "from-red-600 to-amber-500"
  }
]

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
    answer: "Most clients see initial improvements within 30 days, with significant results by 90 days. Timeline varies based on industry, competition, and starting point."
  },
  {
    question: "Do you work with businesses outside UAE?",
    answer: "While we specialize in the UAE market, we work with businesses globally. Our strategies are adapted to local markets and cultural preferences."
  },
  {
    question: "What if I need something custom?",
    answer: "We create custom packages for unique needs. Contact us for a personalized quote tailored to your specific requirements and budget."
  }
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleGetStarted = (planName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${planName} plan. Can we schedule a consultation to discuss my needs?`)
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleCustomQuote = () => {
    const message = encodeURIComponent('Hi! I need a custom pricing solution for my business. Can we schedule a strategy call?')
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
                <span className="text-white text-sm font-medium">Transparent Pricing • No Hidden Fees</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Invest in Your
                </span>
                <br />
                <span className="text-white">Success</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                No hidden fees, no long-term contracts. Choose the plan that fits your ambition and watch your business transform.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className={`text-lg font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                    isAnnual ? 'bg-gradient-to-r from-red-600 to-orange-500' : 'bg-white/20'
                  }`}
                >
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                    isAnnual ? 'translate-x-8' : 'translate-x-1'
                  }`} />
                </button>
                <span className={`text-lg font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                  Annual
                  <span className="ml-2 text-sm bg-gradient-to-r from-red-600 to-orange-500 text-white px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white/10 backdrop-blur-md border rounded-3xl p-8 transition-all duration-500 hover:bg-white/15 hover:scale-105 ${
                    plan.popular 
                      ? 'border-orange-500/50 ring-2 ring-orange-500/30 bg-white/15' 
                      : 'border-white/20 hover:border-white/30'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${plan.iconBg} flex items-center justify-center text-white`}>
                      <plan.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className={`text-lg font-medium bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-black text-white">
                        {isAnnual ? plan.annualPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-lg text-gray-300 ml-2">AED/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-gray-400">
                        <span className="line-through">{plan.monthlyPrice.toLocaleString()} AED</span>
                        <span className="ml-2 text-green-400 font-medium">Save 20%</span>
                      </div>
                    )}
                    <p className="text-gray-200 mt-2 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-200 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleGetStarted(plan.name)}
                    className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-orange-500/25'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {plan.popular ? 'Start Dominating' : 'Get Started'}
                  </button>
                  
                  <div className="text-center mt-3">
                    <span className="text-xs text-gray-400">No setup fees • Cancel anytime</span>
                  </div>
                </div>
              ))}
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
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="font-bold text-white">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Money Back Guarantee */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black mb-4 text-white">
                90-Day Money-Back Guarantee
              </h2>
              <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
                We're so confident in our results, if you don't see measurable improvement in your business within 90 days, we'll refund every penny.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-black bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    No Risk
                  </div>
                  <div className="text-sm text-gray-300">Complete refund if unsatisfied</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                    No Hassle
                  </div>
                  <div className="text-sm text-gray-300">Simple one-click cancellation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    No Questions
                  </div>
                  <div className="text-sm text-gray-300">Your satisfaction guaranteed</div>
                </div>
              </div>
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