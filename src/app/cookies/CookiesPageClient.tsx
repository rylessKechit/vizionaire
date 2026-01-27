'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { Cookie, Settings, Eye, Shield, Clock, AlertTriangle, CheckCircle, Star, Mail, Phone } from 'lucide-react'

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description: "Required for the website to function properly. Cannot be disabled.",
    examples: ["Session management", "Security tokens", "Load balancing"],
    required: true
  },
  {
    icon: Eye,
    title: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website.",
    examples: ["Google Analytics", "Page view tracking", "User journey analysis"],
    required: false
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    description: "Enable enhanced functionality and personalization.",
    examples: ["Language preferences", "Form auto-fill", "Chat widget settings"],
    required: false
  },
  {
    icon: Cookie,
    title: "Marketing Cookies",
    description: "Used to track visitors across websites for advertising purposes.",
    examples: ["Meta Pixel", "Google Ads", "LinkedIn Insight Tag"],
    required: false
  }
]

export default function CookiesPageClient() {
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
                <span className="text-white text-sm font-medium">Transparency First</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="text-white">Cookie</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                We use cookies to enhance your experience on our website. Learn about the types of cookies we use and how to manage them.
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Last updated: January 2025</span>
              </div>
            </div>
          </section>

          {/* What Are Cookies */}
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and provide a more personalized experience. Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (remain on your device for a set period).
                </p>
              </div>

              {/* Cookie Types */}
              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => {
                  const IconComponent = cookie.icon
                  return (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{cookie.title}</h3>
                        </div>
                        {cookie.required ? (
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30">
                            Required
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-gray-200 mb-4">{cookie.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Managing Cookies */}
              <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
                </div>
                <div className="space-y-4 text-gray-200">
                  <p>
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings menu.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Cookie Banner:</strong> Use our cookie consent banner to manage your preferences when you first visit.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Third-Party Tools:</strong> Use opt-out tools provided by advertising networks (Google, Meta, etc.).</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-4">
                    Note: Disabling certain cookies may affect your experience on our website and limit some functionality.
                  </p>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
                <p className="text-gray-200 mb-4">
                  We use services from third parties that may set their own cookies. These include:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>- Google Analytics (analytics.google.com)</li>
                  <li>- Meta/Facebook (facebook.com)</li>
                  <li>- LinkedIn (linkedin.com)</li>
                  <li>- Google Ads (google.com)</li>
                </ul>
                <p className="text-gray-400 mt-4 text-sm">
                  Each of these services has their own privacy policy governing the use of cookies.
                </p>
              </div>

              {/* Contact */}
              <div className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Questions About Cookies?</h2>
                <p className="text-gray-200 mb-6">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-200">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <span>contact@vizionaire.ae</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span>+971 54 361 2610</span>
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
                    href="/terms"
                    className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    Terms of Service
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
