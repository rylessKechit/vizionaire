'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { Cookie, Settings, Eye, Shield, Clock, AlertTriangle, CheckCircle, Star, Mail, Phone } from 'lucide-react'

const cookieTypes = [
  {
    icon: CheckCircle,
    title: "Essential Cookies",
    description: "Required for basic website functionality and security.",
    color: "from-red-600 to-red-500",
    examples: ["Session management", "Security tokens", "Basic preferences"]
  },
  {
    icon: Eye,
    title: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website.",
    color: "from-amber-500 to-orange-500",
    examples: ["Google Analytics", "Page views", "User behavior"]
  },
  {
    icon: Settings,
    title: "Marketing Cookies",
    description: "Used to deliver relevant advertisements and track campaign effectiveness.",
    color: "from-orange-500 to-red-500",
    examples: ["Facebook Pixel", "Google Ads", "Retargeting"]
  },
  {
    icon: Cookie,
    title: "Preference Cookies",
    description: "Remember your choices and settings to enhance your experience.",
    color: "from-amber-400 to-orange-500",
    examples: ["Language settings", "Theme preferences", "Form data"]
  }
]

export default function CookiesPage() {
  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
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
                <Cookie className="w-4 h-4 text-amber-400" />
                <span className="text-white text-sm font-medium">Cookie Transparency</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="text-white">Cookie</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Learn how we use cookies to enhance your experience and protect your privacy on our website.
              </p>
              
              {/* Last Updated */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 max-w-md mx-auto">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Last Updated:</strong> January 15, 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-6">
            
            {/* What Are Cookies */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">What Are Cookies?</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device (computer, smartphone, or tablet) 
                  when you visit a website. They help websites remember information about your visit, such as 
                  your preferred language and other settings.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  At VIZIONAIRE, we use cookies to improve your browsing experience, analyze site traffic, 
                  and personalize content. This policy explains what cookies we use and why.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Types of Cookies We Use</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {cookieTypes.map((cookie, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cookie.color} flex items-center justify-center text-white`}>
                        <cookie.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{cookie.title}</h3>
                    </div>
                    <p className="text-gray-200 mb-4 text-sm">{cookie.description}</p>
                    <div>
                      <p className="text-xs font-semibold text-gray-300 mb-2">Examples:</p>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {cookie.examples.map((example, i) => (
                          <li key={i} className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">How We Use Cookies</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Website Functionality</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Remember your preferences and settings</li>
                    <li>Maintain your session while browsing</li>
                    <li>Provide security features and fraud prevention</li>
                    <li>Enable essential website functions</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Analytics & Performance</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Understand how visitors use our website</li>
                    <li>Identify popular content and pages</li>
                    <li>Monitor website performance and speed</li>
                    <li>Improve user experience based on data</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Marketing & Advertising</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Deliver relevant advertisements</li>
                    <li>Track campaign effectiveness</li>
                    <li>Retarget visitors with personalized content</li>
                    <li>Measure conversion rates and ROI</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Third-Party Services</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  We use trusted third-party services that may place cookies on your device:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Analytics Services</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                      <li>Google Analytics - Website traffic analysis</li>
                      <li>Hotjar - User behavior tracking</li>
                      <li>Facebook Analytics - Social media insights</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Marketing Platforms</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                      <li>Google Ads - Advertising campaigns</li>
                      <li>Facebook Pixel - Social media advertising</li>
                      <li>LinkedIn Insight Tag - B2B marketing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Managing Your Cookie Preferences</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Browser Settings</h3>
                  <p className="text-gray-200 mb-4">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>View which cookies are stored on your device</li>
                    <li>Delete existing cookies</li>
                    <li>Block all cookies or specific types</li>
                    <li>Set notifications when cookies are placed</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Cookie Consent</h3>
                  <p className="text-gray-200 mb-4">
                    When you first visit our website, we'll ask for your consent to use non-essential cookies. You can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Accept all cookies for the full experience</li>
                    <li>Accept only essential cookies</li>
                    <li>Customize your preferences by cookie type</li>
                    <li>Change your preferences anytime</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                    <h4 className="font-semibold text-orange-300">Important Note</h4>
                  </div>
                  <p className="text-orange-200 text-sm">
                    Disabling certain cookies may impact website functionality and your user experience. 
                    Essential cookies cannot be disabled as they are necessary for basic website operation.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Data Security & Protection</h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  We implement robust security measures to protect cookie data:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
                    <li><strong>Secure Transmission:</strong> Cookies are transmitted over encrypted connections</li>
                    <li><strong>Access Controls:</strong> Limited access to cookie data</li>
                    <li><strong>Regular Audits:</strong> Periodic review of cookie usage</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
                    <li><strong>Data Minimization:</strong> Only necessary data is collected</li>
                    <li><strong>Retention Limits:</strong> Cookies expire automatically</li>
                    <li><strong>Vendor Oversight:</strong> Third parties are security vetted</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Compliance */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Legal Compliance</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">GDPR Compliance</h3>
                  <p className="text-gray-200 mb-4">
                    We comply with the EU General Data Protection Regulation (GDPR) by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Obtaining explicit consent for non-essential cookies</li>
                    <li>Providing clear information about cookie usage</li>
                    <li>Allowing easy withdrawal of consent</li>
                    <li>Implementing data protection by design</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Other Regulations</h3>
                  <p className="text-gray-200 mb-4">We also comply with:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
                      <li><strong>CCPA:</strong> California Consumer Privacy Act</li>
                      <li><strong>ePrivacy:</strong> EU ePrivacy Directive</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
                      <li><strong>UAE Data Protection:</strong> Local privacy laws</li>
                      <li><strong>PIPEDA:</strong> Canadian privacy legislation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Retention */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Cookie Retention Periods</h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  Different types of cookies are retained for different periods:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Session Cookies</h4>
                    <p className="text-sm text-gray-200 mb-4">
                      Deleted when you close your browser
                    </p>
                    
                    <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-200">
                      Up to 1 year for security and functionality
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-200 mb-4">
                      Up to 26 months from last activity
                    </p>
                    
                    <h4 className="font-semibold text-white mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-gray-200">
                      Up to 2 years or until consent withdrawal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Policy Updates</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  We may update this cookie policy from time to time to reflect changes in our practices, 
                  technology, or legal requirements. When we make significant changes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                  <li>We will notify you via website banner or email</li>
                  <li>We will update the "Last Updated" date</li>
                  <li>We may seek renewed consent where required</li>
                  <li>We will provide a summary of key changes</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Contact Us About Cookies</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-6">
                  If you have questions about our use of cookies or want to exercise your rights, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="font-semibold text-white">Privacy Team</p>
                        <p className="text-gray-300">contact@vizionaire.ae</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-amber-400" />
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <p className="text-gray-300">+971 54 361 2610</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <div>
                        <p className="font-semibold text-white">Response Time</p>
                        <p className="text-gray-300">Within 48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights Summary */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6">
                  You have the right to control how cookies are used on your device. You can accept, 
                  reject, or customize your cookie preferences at any time. Your choices will be 
                  respected and remembered for future visits.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Accept</div>
                    <div className="text-xs text-gray-400">All Cookies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Customize</div>
                    <div className="text-xs text-gray-400">Your Preferences</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Reject</div>
                    <div className="text-xs text-gray-400">Non-Essential</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Change</div>
                    <div className="text-xs text-gray-400">Anytime</div>
                  </div>
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