'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Zap, Calendar, Users, Target, Star } from 'lucide-react'

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
    value: "+971 56 566 3377",
    action: "https://wa.me/971565663377?text=Hi! I'm interested in VIZIONAIRE services. Can we discuss my project?",
    color: "from-green-600 to-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Phone,
    title: "Direct Call",
    subtitle: "Available 24/7",
    value: "+971 56 566 3377",
    action: "tel:+971565663377",
    color: "from-blue-600 to-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Mail,
    title: "Email",
    subtitle: "Detailed Proposals",
    value: "hello@vizionaire.com",
    action: "mailto:hello@vizionaire.com?subject=Project Inquiry&body=Hi! I'm interested in discussing my digital marketing needs with VIZIONAIRE.",
    color: "from-purple-600 to-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    subtitle: "Book a Strategy Session",
    value: "Free Consultation",
    action: "https://wa.me/971565663377?text=Hi! I'd like to schedule a free strategy consultation. When is your next available slot?",
    color: "from-red-600 to-red-500",
    bgColor: "bg-red-50"
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
    answer: "Absolutely! We seamlessly integrate with your internal teams, existing agencies, and current workflows. Collaboration and knowledge transfer are part of our process."
  }
]

export default function ContactPage() {
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Send WhatsApp message with form data
      const message = encodeURIComponent(
        `Hi! I'm interested in VIZIONAIRE services.\n\n` +
        `Name: ${formData.name}\n` +
        `Company: ${formData.company}\n` +
        `Service: ${formData.service}\n` +
        `Budget: ${formData.budget}\n` +
        `Timeline: ${formData.timeline}\n` +
        `Message: ${formData.message}\n\n` +
        `Please contact me to discuss my project.`
      )
      window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
    }, 1000)
  }

  const handleContactMethod = (action: string) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank')
    } else {
      window.location.href = action
    }
  }

  const handleScheduleCall = () => {
    const message = encodeURIComponent('Hi! I would like to schedule a free strategy consultation with VIZIONAIRE. When is your next available slot?')
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
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">Let's Build Something Amazing Together</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
                  Ready to Dominate
                </span>
                <br />
                <span className="text-white">Your Market?</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Your transformation starts with a conversation. Get a free strategy consultation and discover how we can 10x your business growth.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-black text-green-400 mb-1">2h</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-400 mb-1">48h</div>
                  <div className="text-xs text-gray-400">Project Start</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-amber-400 mb-1">90d</div>
                  <div className="text-xs text-gray-400">ROI Guarantee</div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleScheduleCall}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-2xl transition-all duration-300 hover:bg-white/20"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Choose your preferred way to connect. We're here to help you succeed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <div 
                    key={index}
                    className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15"
                    onClick={() => handleContactMethod(method.action)}
                  >
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{method.subtitle}</p>
                      <div className={`text-lg font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                        {method.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Emergency Contact */}
            <div className="text-center">
              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20 max-w-md mx-auto">
                <Zap className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Urgent Project?</h3>
                <p className="text-gray-300 text-sm mb-4">Need immediate assistance? Call our priority line.</p>
                <button
                  onClick={() => window.location.href = 'tel:+971565663377'}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Call Now: +971 56 566 3377
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
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
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
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
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
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
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
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="+971 50 123 4567"
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
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-gray-800">{service}</option>
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
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-gray-800">{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Project Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="e.g., ASAP, 1-3 months, 3-6 months"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                      placeholder="Tell us about your business goals, target audience, current challenges, and what success looks like for you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message & Get Free Quote
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-sm text-gray-400 mt-4">
                      We'll respond within 24 hours with a custom strategy plan
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-green-500/10 rounded-3xl p-8 lg:p-12 border border-green-500/20 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-lg text-gray-200 mb-6">
                  Thank you for contacting VIZIONAIRE. We've received your message and will get back to you within 24 hours with a customized strategy plan.
                </p>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
                  <h4 className="text-white font-bold mb-3">What's Next?</h4>
                  <div className="space-y-2 text-sm text-gray-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Free strategy consultation call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Custom growth roadmap</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Project timeline & pricing</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
            
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-4">Still have questions?</p>
              <button
                onClick={handleScheduleCall}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
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
                Ready to 10x Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Every day you wait is potential revenue lost. Start your transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleScheduleCall}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mt-8 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-black text-green-400 mb-1">Free</div>
                  <div className="text-xs text-gray-400">Consultation</div>
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