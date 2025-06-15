'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to learn more about your digital marketing services.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  const handleCallClick = () => {
    const message = encodeURIComponent('Hello! I would like to schedule a free consultation to discuss my digital marketing needs.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <footer className="relative bg-black/95 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <img 
                  src="/logo.png" 
                  alt="VIZIONAIRE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-2xl font-medium bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">
                VIZIONAIRE
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Transforming businesses across the UAE with innovative digital marketing strategies. 
              Fresh expertise, proven results, guaranteed ROI.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>DIFC, Dubai, UAE 🇦🇪</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+971 56 566 3377</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>hello@vizionaire.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </button>
              <button
                onClick={handleCallClick}
                className="flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white rounded-lg font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Schedule Call
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Website Development
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Social Media Management
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Marketing Automation
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services/paid-advertising" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Paid Advertising
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  SEO Optimization
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services/analytics" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Analytics & Reporting
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  About Us
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Our Services
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Pricing
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Contact
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Connect</h3>
            
            {/* Social Media */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://instagram.com/vizionaire.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/vizionaire-ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/vizionaire_ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Links */}
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Privacy Policy
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Terms of Service
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">Get marketing tips & updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 VIZIONAIRE. All rights reserved. Built with 💜 in Dubai, UAE.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🇦🇪 Proudly UAE Based</span>
              <span>•</span>
              <span>100% ROI Guarantee</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}