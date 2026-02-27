'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Zap, Calendar, Users, Target, Star, ChevronDown } from 'lucide-react'

const services = [
  'Website Development & E-commerce',
  'Social Media Management',
  'Marketing Automation',
  'SEO & Content Marketing',
  'Paid Advertising (Google/Meta/LinkedIn)',
  'Strategic Consulting',
  'Branding & Design',
  'Other (Please specify)'
]

const budgetRanges = [
  'Under 10,000 AED',
  '10,000 - 25,000 AED',
  '25,000 - 50,000 AED',
  '50,000 - 100,000 AED',
  '100,000+ AED',
  'Custom Budget (Let\'s discuss)'
]

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Instant Response",
    value: "+971 54 478 5454",
    action: "https://wa.me/971544785454?text=Hi! I'm interested in VIZIONAIRE services. Can we discuss my project?",
    color: "from-amber-400 via-orange-500 to-red-500",
    iconBg: "from-amber-500 to-orange-500"
  },
  {
    icon: Phone,
    title: "Direct Call",
    subtitle: "Available 24/7",
    value: "+971 54 478 5454",
    action: "tel:+971544785454",
    color: "from-orange-500 via-red-500 to-rose-600",
    iconBg: "from-red-600 to-red-500"
  },
  {
    icon: Mail,
    title: "Email",
    subtitle: "Detailed Proposals",
    value: "contact@vizionaire.ae",
    action: "mailto:contact@vizionaire.ae?subject=Project Inquiry&body=Hi! I'm interested in discussing my digital marketing needs with VIZIONAIRE.",
    color: "from-red-600 to-red-500",
    iconBg: "from-red-600 to-amber-500"
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    subtitle: "Book a Strategy Session",
    value: "Free Consultation",
    action: "https://wa.me/971544785454?text=Hi! I'd like to schedule a free strategy consultation. When is your next available slot?",
    color: "from-amber-400 via-yellow-500 to-orange-500",
    iconBg: "from-amber-500 to-yellow-500"
  }
]

const faqs = [
  {
    question: "How quickly can you start my project?",
    answer: "We can typically begin your project within 48-72 hours after our initial consultation and agreement signing. For urgent projects, we offer same-day start options."
  },
  {
    question: "Do you provide a free consultation?",
    answer: "Yes! We offer a complimentary 30-minute strategy consultation where we analyze your current situation and provide actionable recommendations. This includes business analysis, competitor research, and a custom growth roadmap."
  },
  {
    question: "What makes VIZIONAIRE different?",
    answer: "We combine UAE market expertise with global best practices, offer guaranteed results with our 90-day money-back promise, and provide dedicated account management for all clients."
  },
  {
    question: "Can you work with my existing team?",
    answer: "Absolutely! We seamlessly integrate with your internal teams, existing agencies, and current workflows. We become an extension of your team, not a replacement."
  },
  {
    question: "What's your typical ROI timeline?",
    answer: "Most clients see initial improvements within 30 days, significant results by 90 days, and full ROI within 6 months. We provide weekly progress reports to track your success."
  }
]

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)

    // WhatsApp integration with form data
    const message = encodeURIComponent(`
Hi! I've submitted a contact form with the following details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interest: ${formData.service}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}
Message: ${formData.message}

I'd like to schedule a consultation to discuss my project.`)

    setTimeout(() => {
      window.open(`https://wa.me/971544785454?text=${message}`, '_blank')
    }, 1000)
  }

  const handleScheduleCall = () => {
    const message = encodeURIComponent('Hi! I\'d like to schedule a free strategy consultation. When is your next available slot?')
    window.open(`https://wa.me/971544785454?text=${message}`, '_blank')
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
                <span className="text-white text-sm font-medium">Free Consultation • 24/7 Support</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="text-white">Let's Make Your</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Vision Reality
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Ready to transform your business? We're here to help. Get your free strategy session and see how we can accelerate your growth.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black mb-4 text-white">
                Get In Touch Today
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Choose your preferred way to connect. We respond within minutes, not hours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:scale-105"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.iconBg} flex items-center justify-center text-white`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-3`}>
                    {method.subtitle}
                  </p>
                  <p className="text-white font-medium mb-4 text-sm">{method.value}</p>
                  <button
                    onClick={() => window.open(method.action, '_blank')}
                    className={`w-full py-2 px-4 bg-gradient-to-r ${method.color} text-white rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105`}
                  >
                    Contact Now
                  </button>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white mb-2">🚨 Urgent Project?</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Need immediate assistance? Call our priority line.
                </p>
                <button
                  onClick={() => window.location.href = 'tel:+971544785454'}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Call Now: +971 54 478 5454
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-white">Tell Us About</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Your Project
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Share your vision with us and get a customized strategy plan within 24 hours.
              </p>
            </div>

            {!isSubmitted ? (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                        placeholder="Ahmed Al-Rashid"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                        placeholder="ahmed@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                        placeholder="+971 54 478 5454"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">
                        Service Interest *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      >
                        <option value="" className="text-black">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="text-black">{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      >
                        <option value="" className="text-black">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range} className="text-black">{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    >
                      <option value="" className="text-black">When do you need to start?</option>
                      <option value="ASAP" className="text-black">ASAP - Within 1 week</option>
                      <option value="1-2 weeks" className="text-black">Within 1-2 weeks</option>
                      <option value="1 month" className="text-black">Within 1 month</option>
                      <option value="2-3 months" className="text-black">In 2-3 months</option>
                      <option value="Just exploring" className="text-black">Just exploring options</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                      placeholder="Describe your goals, challenges, and what you hope to achieve with VIZIONAIRE..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send My Project Details
                  </button>

                  <p className="text-center text-sm text-gray-400">
                    We'll respond within 2 hours with a customized strategy plan
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-200 mb-6">
                  Your message has been sent successfully. We're redirecting you to WhatsApp to continue the conversation.
                </p>
                <div className="text-sm text-gray-400">
                  If WhatsApp doesn't open automatically, you can call us at +971 54 478 5454
                </div>
              </div>
            )}
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
                Everything you need to know about working with VIZIONAIRE
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

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-4">Still have questions?</p>
              <button
                onClick={handleScheduleCall}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Schedule a Call
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Ready to <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">10x</span> Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Every day you wait is potential revenue lost. Start your transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleScheduleCall}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                >
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5" />
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
