'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, Clock, Star } from 'lucide-react'

const privacySections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Personal identification information (name, email, phone number)",
      "Business information (company name, website, industry)",
      "Technical data (IP address, browser type, device information)",
      "Usage data (pages visited, time spent, interactions)",
      "Marketing preferences and communication history"
    ]
  },
  {
    icon: FileText,
    title: "How We Use Your Information",
    content: [
      "To provide and improve our digital marketing services",
      "To communicate with you about your projects and inquiries",
      "To send relevant marketing updates (with your consent)",
      "To analyze and improve our website and services",
      "To comply with legal obligations and protect our rights"
    ]
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: [
      "Industry-standard SSL encryption for all data transmissions",
      "Secure servers with restricted access controls",
      "Regular security audits and vulnerability assessments",
      "Employee training on data protection best practices",
      "Compliance with UAE data protection regulations"
    ]
  },
  {
    icon: Shield,
    title: "Your Rights",
    content: [
      "Access your personal data we hold about you",
      "Request correction of inaccurate information",
      "Request deletion of your personal data",
      "Opt-out of marketing communications at any time",
      "Lodge a complaint with relevant data protection authorities"
    ]
  }
]

export default function PrivacyPageClient() {
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
                <span className="text-white text-sm font-medium">Your Privacy Matters</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="text-white">Privacy</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                At VIZIONAIRE, we are committed to protecting your privacy and ensuring the security of your personal information.
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Last updated: January 2025</span>
              </div>
            </div>
          </section>

          {/* Privacy Sections */}
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="space-y-8">
                {privacySections.map((section, index) => {
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

              {/* Additional Information */}
              <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Third-Party Services</h2>
                <p className="text-gray-200 leading-relaxed mb-4">
                  We may use third-party services for analytics, marketing automation, and communication. These services have their own privacy policies, and we encourage you to review them:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>- Google Analytics for website traffic analysis</li>
                  <li>- Meta Pixel for advertising optimization</li>
                  <li>- WhatsApp Business for customer communication</li>
                  <li>- Email marketing platforms for newsletters</li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Us About Privacy</h2>
                <p className="text-gray-200 mb-6">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us:
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
                  <div className="flex items-center gap-3 text-gray-200">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span>DIFC, Dubai, United Arab Emirates</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">Related Policies</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/terms"
                    className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    Terms of Service
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
