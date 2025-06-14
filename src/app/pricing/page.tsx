'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, Star, Zap, TrendingUp, Target, Users, Award, Shield, Clock, CheckCircle, Phone } from 'lucide-react'

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
    color: "from-blue-600 to-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
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
    color: "from-red-600 to-amber-500",
    bgColor: "bg-gradient-to-br from-red-50 to-amber-50",
    borderColor: "border-red-200"
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
      "Custom strategy development & execution",
      "Multi-channel campaigns across all platforms",
      "Advanced automation workflows & CRM setup",
      "Unlimited design requests & revisions",
      "Priority phone support & Slack integration",
      "Bi-weekly strategy reviews & optimizations",
      "Exclusive market insights & trend reports",
      "White-label reporting for your clients",
      "Custom integrations & API development",
      "Quarterly business reviews with C-level",
      "Access to our network of industry partners"
    ],
    popular: false,
    color: "from-purple-600 to-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
]

const features = [
  {
    icon: Shield,
    title: "90-Day Money-Back Guarantee",
    description: "If you don't see measurable results within 90 days, we'll refund your investment completely."
  },
  {
    icon: Clock,
    title: "48-Hour Setup",
    description: "We'll have your campaigns live and generating results within 48 hours of signing up."
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Work directly with experienced strategists who understand your business inside and out."
  },
  {
    icon: Award,
    title: "No Long-Term Contracts",
    description: "Cancel anytime. We earn your business every month with results, not contracts."
  }
]

const faqs = [
  {
    question: "What's included in the setup fee?",
    answer: "Setup includes complete strategy development, account creation, initial content creation, and technical implementation. It's a one-time investment for long-term success."
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect from your next billing cycle with pro-rated adjustments."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes! We create tailored solutions for unique business needs. Contact us for a custom quote based on your specific requirements and goals."
  },
  {
    question: "What's your money-back guarantee?",
    answer: "We offer a 90-day money-back guarantee. If you don't see measurable results within 90 days, we'll refund your investment completely."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most clients see initial improvements within 30 days, with significant results by 90 days. Timeline varies based on industry, competition, and starting point."
  },
  {
    question: "Do you work with businesses outside UAE?",
    answer: "While we specialize in the UAE market, we work with businesses globally. Our strategies are adapted to local markets and cultural preferences."
  }
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

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
      {/* Header avec background transparent */}
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
                <span className="bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
                  Invest in Your
                </span>
                <br />
                <span className="text-white">Success</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                No hidden fees, no long-term contracts. Choose the plan that fits your ambition and watch your business transform.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">90-Day Guarantee</div>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">48h Setup</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Dedicated Team</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">No Contracts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Toggle */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-gradient-to-r from-green-600 to-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-bold border border-green-500/30">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => {
                const IconComponent = plan.icon
                const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
                const savings = plan.monthlyPrice - plan.annualPrice
                
                return (
                  <div 
                    key={index}
                    className={`relative group ${plan.popular ? 'md:scale-105 z-20' : 'z-10'}`}
                    style={{ zIndex: plan.popular ? 20 : 10 }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                        <div className="bg-gradient-to-r from-red-600 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className={`relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/15 ${plan.popular ? 'shadow-xl border-red-500/30' : 'shadow-lg'}`}>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} text-white shadow-lg`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                          <p className="text-sm text-gray-300">{plan.subtitle}</p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-white">{price.toLocaleString()}</span>
                          <span className="text-gray-300">AED/month</span>
                        </div>
                        {isAnnual && (
                          <div className="text-sm text-green-400 font-semibold mt-1">
                            Save {savings.toLocaleString()} AED monthly
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-200 mb-6 text-sm leading-relaxed">{plan.description}</p>
                      
                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-200 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <button
                        onClick={() => handleGetStarted(plan.name)}
                        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg hover:shadow-xl'
                            : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30 shadow-md hover:shadow-lg border border-white/30'
                        }`}
                      >
                        Get Started Today
                      </button>
                      
                      <div className="text-center mt-4">
                        <p className="text-xs text-gray-400">No setup fees • Cancel anytime • 90-day guarantee</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose VIZIONAIRE?
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                We're not just another agency. We're your dedicated partner in digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div 
                    key={index}
                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 text-center">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Large enterprise or unique requirements? We create personalized packages that scale with your ambition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={handleCustomQuote}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => window.open('https://wa.me/971565663377?text=Hi! I would like to see VIZIONAIRE case studies and ROI examples.', '_blank')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-2xl transition-all duration-300 hover:bg-white/30"
                >
                  View Case Studies
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Free consultation included
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Custom strategy development
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Flexible payment terms
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                <span className="text-white">Frequently Asked</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join 500+ successful businesses who chose VIZIONAIRE. Your transformation starts today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={() => handleGetStarted('Professional')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  Start Your Success Story
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-black text-green-400 mb-1">48h</div>
                  <div className="text-xs text-gray-400">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-400 mb-1">90d</div>
                  <div className="text-xs text-gray-400">Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-purple-400 mb-1">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                🇦🇪 Proudly serving UAE businesses • Trusted by 500+ companies
              </p>
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