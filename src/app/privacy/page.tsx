'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, Clock, Star } from 'lucide-react'

export default function PrivacyPage() {
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
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">Your Privacy Matters</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="text-white">Privacy</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                We are committed to protecting your privacy and ensuring the security of your personal information.
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
            
            {/* Overview */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Overview</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 leading-relaxed">
                  At VIZIONAIRE, we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you 
                  visit our website or use our services.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Personal Information</h3>
                  <p className="text-gray-200 mb-4">When you contact us or use our services, we may collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Company information and business details</li>
                    <li>Marketing preferences and communication history</li>
                    <li>Payment information for billing purposes</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Technical Information</h3>
                  <p className="text-gray-200 mb-4">We automatically collect certain technical information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Service Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                    <li>Provide and improve our marketing services</li>
                    <li>Communicate about projects and campaigns</li>
                    <li>Process payments and manage accounts</li>
                    <li>Offer customer support and assistance</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Business Operations</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                    <li>Analyze website usage and improve user experience</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Protect against fraud and security threats</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Data Protection & Security</h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technical Measures</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security updates</li>
                      <li>Access controls and monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Organizational Measures</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                      <li>Staff training on data protection</li>
                      <li>Limited access on need-to-know basis</li>
                      <li>Regular privacy impact assessments</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Your Rights</h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">Under applicable data protection laws, you have the right to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
                    <li>Restrict processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent anytime</li>
                    <li>Lodge a complaint with authorities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookies Policy */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Cookies & Tracking</h2>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">What Are Cookies</h3>
                  <p className="text-gray-200">
                    Cookies are small text files stored on your device that help us improve your experience, 
                    analyze site usage, and provide personalized content.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Types of Cookies We Use</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-200">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                      <p>Required for basic website functionality and security.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                      <p>Help us understand how visitors interact with our website.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Marketing Cookies</h4>
                      <p>Used to deliver relevant advertisements and track campaign effectiveness.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Preference Cookies</h4>
                      <p>Remember your choices and settings to enhance your experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Data Retention</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  We retain your personal data only as long as necessary for the purposes outlined in this policy:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                  <li>Client data: For the duration of our business relationship plus 7 years for legal compliance</li>
                  <li>Marketing data: Until you withdraw consent or request deletion</li>
                  <li>Website analytics: Up to 26 months from collection</li>
                  <li>Legal obligations: As required by applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Third-Party Services</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  We may share your information with trusted third-party service providers who assist us in:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Website hosting and maintenance</li>
                    <li>Email marketing and communication</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Payment processing</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Customer relationship management</li>
                    <li>Legal and accounting services</li>
                    <li>Cloud storage and backup</li>
                    <li>Marketing platform integrations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* International Transfers */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">International Data Transfers</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  As a UAE-based company, your data is primarily processed within the UAE. When we transfer 
                  data internationally, we ensure appropriate safeguards are in place:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                  <li>Standard contractual clauses approved by data protection authorities</li>
                  <li>Adequacy decisions for transfers to approved countries</li>
                  <li>Binding corporate rules for multinational service providers</li>
                  <li>Your explicit consent for specific transfers when required</li>
                </ul>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Policy Updates</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  We may update this privacy policy from time to time to reflect changes in our practices, 
                  technology, legal requirements, or other factors. When we make material changes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                  <li>We will notify you via email or prominent website notice</li>
                  <li>We will update the "Last Updated" date at the top of this policy</li>
                  <li>We will provide a summary of key changes</li>
                  <li>We may seek your renewed consent where required by law</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Contact Us</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-6">
                  If you have questions about this privacy policy, want to exercise your rights, or have 
                  concerns about how we handle your data, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="font-semibold text-white">Email</p>
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
                      <MapPin className="w-5 h-5 text-orange-400" />
                      <div>
                        <p className="font-semibold text-white">Address</p>
                        <p className="text-gray-300">DIFC, Dubai, UAE</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="font-semibold text-white">Response Time</p>
                        <p className="text-gray-300">Within 2 - 3 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitment Statement */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
                <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  At VIZIONAIRE, protecting your privacy isn't just a legal requirement—it's fundamental to 
                  building trust and maintaining the high standards our clients expect. We are committed to 
                  transparency, security, and giving you control over your personal information.
                </p>
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