'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { FileText, Scale, AlertTriangle, CheckCircle, Star, Shield, Clock, Mail, Phone } from 'lucide-react'

const termsSections = [
  {
    icon: FileText,
    title: "Services Agreement",
    content: [
      "VIZIONAIRE provides digital marketing services including but not limited to SEO, social media management, paid advertising, web development, and marketing automation.",
      "All services are provided on a project or retainer basis as agreed in individual service contracts.",
      "Service scope, deliverables, and timelines will be outlined in separate statements of work (SOW).",
      "We reserve the right to modify our service offerings with reasonable notice to clients."
    ]
  },
  {
    icon: Scale,
    title: "Payment Terms",
    content: [
      "Payment terms are Net 15 from invoice date unless otherwise agreed in writing.",
      "A deposit of 50% is required for new projects before work commences.",
      "Monthly retainer fees are billed at the beginning of each service period.",
      "Late payments may incur a 2% monthly interest charge after 30 days overdue.",
      "All prices are quoted in AED unless otherwise specified."
    ]
  },
  {
    icon: Shield,
    title: "Our Guarantees",
    content: [
      "90-day money-back guarantee on agreed performance metrics.",
      "Transparent reporting with weekly progress updates.",
      "Dedicated account manager for all client communications.",
      "No long-term contracts required for most services.",
      "24/7 support availability for urgent matters."
    ]
  },
  {
    icon: AlertTriangle,
    title: "Limitations of Liability",
    content: [
      "VIZIONAIRE is not liable for results beyond our direct control, including algorithm changes by platforms.",
      "We are not responsible for any pre-existing issues with client websites or accounts.",
      "Maximum liability is limited to the total fees paid for services in the preceding 3 months.",
      "We are not liable for any indirect, consequential, or incidental damages."
    ]
  },
  {
    icon: CheckCircle,
    title: "Client Responsibilities",
    content: [
      "Provide timely access to necessary accounts, assets, and information.",
      "Respond to requests for approval within agreed timeframes.",
      "Ensure all provided content and materials do not infringe third-party rights.",
      "Maintain accurate billing and contact information.",
      "Comply with all applicable laws and platform terms of service."
    ]
  }
]

export default function TermsPageClient() {
  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
      <div className="min-h-screen">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-12 lg:pt-32 lg:pb-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Clear & Fair Terms</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="text-white">Terms of</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before engaging our services. By working with VIZIONAIRE, you agree to these terms.
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Last updated: January 2025</span>
              </div>
            </div>
          </section>

          {/* Terms Sections */}
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="space-y-8">
                {termsSections.map((section, index) => {
                  const IconComponent = section.icon
                  return (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                      </div>
                      <ul className="space-y-3">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-200">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              {/* Intellectual Property */}
              <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
                <div className="space-y-4 text-gray-200">
                  <p>
                    All materials, strategies, and creative work developed by VIZIONAIRE remain our intellectual property until full payment is received.
                  </p>
                  <p>
                    Upon full payment, clients receive a perpetual license to use deliverables for their intended purpose. Source files and proprietary methodologies remain VIZIONAIRE property unless explicitly transferred in writing.
                  </p>
                  <p>
                    Client-provided materials remain the property of the client. VIZIONAIRE may showcase completed work in our portfolio unless otherwise agreed.
                  </p>
                </div>
              </div>

              {/* Termination */}
              <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
                <div className="space-y-4 text-gray-200">
                  <p>
                    Either party may terminate services with 30 days written notice for retainer agreements.
                  </p>
                  <p>
                    Project-based work may be terminated with payment for all work completed to date plus any non-refundable expenses incurred.
                  </p>
                  <p>
                    VIZIONAIRE reserves the right to terminate services immediately for non-payment, breach of terms, or illegal activities.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
                <p className="text-gray-200 mb-6">
                  These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved through the courts of Dubai, UAE, unless both parties agree to alternative dispute resolution.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-200">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <span>contact@vizionaire.ae</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span>+971 54 478 5454</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">Related Policies</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/privacy"
                    className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/cookies"
                    className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    Cookie Policy
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
