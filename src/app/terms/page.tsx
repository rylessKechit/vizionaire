'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { FileText, Scale, AlertTriangle, CheckCircle, Star, Shield, Clock, Mail, Phone } from 'lucide-react'

export default function TermsPage() {
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
                <Scale className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm font-medium">Legal Terms & Conditions</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Terms of
                </span>
                <br />
                <span className="text-white">Service</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Please read these terms carefully before using our services. By using VIZIONAIRE, you agree to these terms.
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
            
            {/* Acceptance */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Acceptance of Terms</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 leading-relaxed">
                  By accessing and using VIZIONAIRE's services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not 
                  use this service.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Services Description</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">What We Provide</h3>
                  <p className="text-gray-200 mb-4">VIZIONAIRE offers comprehensive digital marketing services including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                    <li>Digital marketing strategy and consulting</li>
                    <li>Social media management and advertising</li>
                    <li>Website development and optimization</li>
                    <li>Search engine optimization (SEO)</li>
                    <li>Pay-per-click (PPC) advertising management</li>
                    <li>Marketing automation and CRM setup</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Service Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                    <li>Services are delivered according to agreed-upon timelines</li>
                    <li>Client collaboration and feedback are required for optimal results</li>
                    <li>Regular reporting and communication are provided</li>
                    <li>Adjustments and optimizations are made based on performance data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Client Responsibilities</h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">Clients agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                  <li>Provide accurate and complete information about their business</li>
                  <li>Grant necessary access to platforms and accounts</li>
                  <li>Respond to requests for feedback and approval in a timely manner</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights of all parties</li>
                  <li>Pay invoices according to agreed terms</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Payment Terms</h2>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Billing & Payment</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Monthly services are billed in advance</li>
                    <li>Payment is due within 15 days of invoice date</li>
                    <li>Late payments may incur additional fees</li>
                    <li>Services may be suspended for non-payment</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Refund Policy</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>90-day money-back guarantee for new clients</li>
                    <li>Refunds calculated on unused portion of services</li>
                    <li>No refunds for completed work or campaigns</li>
                    <li>Refund requests must be submitted in writing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Guarantees */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Performance & Results</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Our Commitment</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Professional execution of agreed services</li>
                    <li>Industry best practices and proven methodologies</li>
                    <li>Regular monitoring and optimization</li>
                    <li>Transparent reporting and communication</li>
                    <li>Dedicated support and strategic guidance</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">External Factors</h3>
                  <p className="text-gray-200 mb-4">Results may be influenced by factors beyond our control:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Market conditions and competition</li>
                    <li>Platform algorithm changes</li>
                    <li>Seasonal trends and economic factors</li>
                    <li>Client industry and target audience behavior</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Intellectual Property</h2>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Client Ownership</h3>
                  <p className="text-gray-200">
                    Clients retain ownership of their brand, content, and materials provided to VIZIONAIRE. 
                    All custom creative work, including designs, copy, and campaigns created specifically 
                    for the client, becomes client property upon full payment.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">VIZIONAIRE Property</h3>
                  <p className="text-gray-200">
                    VIZIONAIRE retains ownership of its proprietary methodologies, tools, templates, 
                    and general knowledge. This includes analytics insights, market research, and 
                    strategic frameworks developed through our experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white">Confidentiality</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Mutual Protection</h3>
                  <p className="text-gray-200 mb-4">Both parties agree to protect confidential information including:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>Business strategies and proprietary information</li>
                    <li>Customer data and analytics</li>
                    <li>Financial information and pricing</li>
                    <li>Technical processes and methodologies</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-orange-500/20 rounded-2xl p-4">
                  <p className="text-orange-300">
                    Confidentiality obligations survive termination of services for a period of 3 years.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Termination</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">By Client</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>30 days written notice for monthly services</li>
                    <li>Immediate termination with cause</li>
                    <li>Payment due for work completed</li>
                    <li>Data export assistance provided</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">By VIZIONAIRE</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    <li>30 days notice for convenience</li>
                    <li>Immediate termination for breach of terms</li>
                    <li>Refund of unused prepaid fees</li>
                    <li>Transfer of work product and data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Limitation of Liability</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  VIZIONAIRE's liability is limited to the amount paid for services in the 12 months 
                  preceding the claim. We are not liable for indirect, incidental, or consequential 
                  damages including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-200">
                  <li>Lost profits or business opportunities</li>
                  <li>Platform suspension or account issues</li>
                  <li>Third-party actions or changes</li>
                  <li>Force majeure events</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Governing Law</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the 
                  United Arab Emirates. Any disputes shall be resolved through:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-200">
                  <li>Good faith negotiation between parties</li>
                  <li>Mediation by an agreed neutral third party</li>
                  <li>Arbitration under UAE arbitration rules</li>
                  <li>Courts of Dubai as final resort</li>
                </ol>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Contact Information</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-gray-200 mb-6">
                  For questions about these terms of service, contact our legal department:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-red-400" />
                      <div>
                        <p className="font-semibold text-white">Legal Department</p>
                        <p className="text-gray-300">legal@vizionaire.com</p>
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
                        <p className="font-semibold text-white">Business Hours</p>
                        <p className="text-gray-300">Sunday - Thursday, 9AM - 6PM GST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Acknowledgment</h2>
                <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  By using VIZIONAIRE's services, you acknowledge that you have read, understood, 
                  and agree to be bound by these terms of service. These terms constitute a legally 
                  binding agreement between you and VIZIONAIRE.
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