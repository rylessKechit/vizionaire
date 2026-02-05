'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, MapPin, MessageCircle, Globe, Smartphone, Zap, Target, TrendingUp, BarChart3 } from 'lucide-react'

export function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to learn more about your digital marketing services.')
    window.open(`https://wa.me/971543612610?text=${message}`, '_blank')
  }

  return (
    <footer className="relative bg-gradient-to-b from-black/80 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo.png"
                  alt="VIZIONAIRE Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-2xl font-medium bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">
                VIZIONAIRE
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Transform your business with data-driven digital marketing strategies. 
              We help Dubai companies achieve explosive growth through proven tactics and cutting-edge technology.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+971543612610" className="hover:text-white transition-colors duration-300">
                  +971 54 361 2610
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:contact@vizionaire.ae" className="hover:text-white transition-colors duration-300">
                  contact@vizionaire.ae
                </a>
              </div>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
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
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Blog & Insights
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
          </div>

          {/* Resources & Blog */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  📝 Marketing Blog
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/blog/category/digital-marketing" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Digital Marketing Tips
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/blog/category/seo" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  SEO Strategies
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/blog/category/social-media" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Social Media Insights
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/blog/category/automation" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Automation Guides
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/blog/category/e-commerce" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  E-commerce Success
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link href="/blog/category/innovation" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  Industry Trends
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the Competition
            </h3>
            <p className="text-gray-300 mb-8">
              Get weekly marketing insights, Dubai business tips, and exclusive strategies delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4">
              Join 2,500+ Dubai entrepreneurs. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              YouTube
            </a>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 VIZIONAIRE by I.T.I SERVICES. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Proudly serving businesses across Dubai, UAE, and the MENA region.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              I.T.I SERVICES - F.Z.E | Ajman Free Zone C1 Building, Ajman Free Zone, Ajman, UAE | TRN: 104997078100001
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}