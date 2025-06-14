'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { Play, ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Star } from 'lucide-react'

const caseStudies = [
  {
    title: "E-commerce Fashion Brand",
    industry: "Fashion & Retail",
    challenge: "New brand struggling with online visibility and sales",
    solution: "Complete digital transformation with social media, influencer partnerships, and paid ads",
    results: [
      { metric: "Revenue Growth", value: "450%", period: "6 months" },
      { metric: "Instagram Followers", value: "0 → 85K", period: "8 months" },
      { metric: "Return on Ad Spend", value: "6.2x", period: "Average" }
    ],
    testimonial: "VIZIONAIRE transformed our unknown brand into a regional sensation. We went from zero to hero in less than a year!",
    client: "Layla Mohammed, Founder",
    image: "👗",
    color: "from-red-600 to-red-500"
  },
  {
    title: "Tech Startup Dubai",
    industry: "Technology",
    challenge: "B2B lead generation and brand awareness in competitive market",
    solution: "LinkedIn strategy, content marketing, and targeted B2B campaigns",
    results: [
      { metric: "Qualified Leads", value: "300%", period: "3 months" },
      { metric: "LinkedIn Engagement", value: "500%", period: "4 months" },
      { metric: "Demo Bookings", value: "250%", period: "Monthly" }
    ],
    testimonial: "Our pipeline went from empty to overflowing. The quality of leads is exceptional and our sales team can't keep up!",
    client: "Ahmed Al-Mansouri, CEO",
    image: "💻",
    color: "from-amber-400 via-orange-500 to-red-500"
  },
  {
    title: "Restaurant Chain",
    industry: "Food & Beverage",
    challenge: "Increase online orders and foot traffic across 5 locations",
    solution: "Local SEO, social media content, delivery app optimization, and geo-targeted ads",
    results: [
      { metric: "Online Orders", value: "320%", period: "4 months" },
      { metric: "Foot Traffic", value: "180%", period: "6 months" },
      { metric: "Social Engagement", value: "400%", period: "Monthly" }
    ],
    testimonial: "Every location is now profitable and we're expanding to 3 more cities. VIZIONAIRE made the impossible possible!",
    client: "Khalid Bin Rashid, Owner",
    image: "🍔",
    color: "from-orange-500 via-red-500 to-rose-600"
  },
  {
    title: "Real Estate Agency",
    industry: "Real Estate",
    challenge: "Generate high-quality leads for luxury properties",
    solution: "Facebook & Google Ads, landing page optimization, and CRM automation",
    results: [
      { metric: "Property Sales", value: "200%", period: "5 months" },
      { metric: "Cost per Lead", value: "-60%", period: "Reduction" },
      { metric: "Conversion Rate", value: "8.5%", period: "Industry: 2%" }
    ],
    testimonial: "We've never seen such high-quality leads. Our closing rate doubled and our marketing costs went down significantly.",
    client: "Omar Khalil, Marketing Director",
    image: "🏠",
    color: "from-amber-400 via-yellow-500 to-orange-500"
  }
]

const portfolioItems = [
  {
    title: "Luxury Wellness Spa",
    type: "Website + Social Media",
    image: "🧘‍♀️",
    results: "400% increase in bookings",
    color: "from-red-600 to-red-500"
  },
  {
    title: "Educational Platform",
    type: "Lead Generation",
    image: "📚",
    results: "180% more enrollments",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Fitness Center Chain",
    type: "Local SEO + Ads",
    image: "💪",
    results: "250% membership growth",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Luxury Car Dealership",
    type: "Digital Transformation",
    image: "🚗",
    results: "300% increase in test drives",
    color: "from-red-600 to-orange-500"
  },
  {
    title: "Beauty & Cosmetics",
    type: "Influencer + Paid Ads",
    image: "💄",
    results: "500% Instagram growth",
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Home Services",
    type: "Google Ads + SEO",
    image: "🔧",
    results: "350% more inquiries",
    color: "from-orange-500 via-red-500 to-rose-600"
  }
]

export default function DemoPage() {
  const handleGetResults = () => {
    const message = encodeURIComponent('Hi! I saw the VIZIONAIRE case studies and would like to discuss how you can achieve similar results for my business.')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

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
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Real Results • Proven Success</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Success Stories
                </span>
                <br />
                <span className="text-white">That Inspire</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Real businesses. Real results. See how we've helped companies across MENA achieve explosive growth with our proven strategies.
              </p>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetResults}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                >
                  Get Similar Results
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                  <Play className="w-5 h-5" />
                  Watch Video Cases
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Detailed Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Dive deep into our most successful campaigns and learn how we achieved these results
              </p>
            </div>
            
            <div className="space-y-12">
              {caseStudies.map((study, i) => (
                <div 
                  key={i}
                  className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/15 hover:border-white/30"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Case Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl">{study.image}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{study.title}</h3>
                          <p className="text-gray-400">{study.industry}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Challenge</h4>
                          <p className="text-gray-200">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Solution</h4>
                          <p className="text-gray-200">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <p className="text-gray-200 italic mb-4">"{study.testimonial}"</p>
                        <p className="text-sm font-semibold bg-gradient-to-r ${study.color} bg-clip-text text-transparent">
                          — {study.client}
                        </p>
                      </div>
                    </div>
                    
                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Key Results</h4>
                      <div className="space-y-4">
                        {study.results.map((result, j) => (
                          <div key={j} className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <div className={`text-2xl font-black bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-1`}>
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-300 mb-1">{result.metric}</div>
                            <div className="text-xs text-gray-400">{result.period}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Our Portfolio
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                A snapshot of successful projects across various industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, i) => (
                <div 
                  key={i}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:bg-white/15 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-4">{item.image}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{item.type}</p>
                  <div className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.results}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-black mb-4 text-white">
                  Average Client Results
                </h2>
                <p className="text-lg text-gray-200">
                  Based on 500+ successful campaigns across MENA region
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    300%
                  </div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    90 Days
                  </div>
                  <div className="text-sm text-gray-300">To See Results</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                    250%
                  </div>
                  <div className="text-sm text-gray-300">Lead Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                    95%
                  </div>
                  <div className="text-sm text-gray-300">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Ready to Be Our Next <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Success Story</span>?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join 500+ successful businesses who chose VIZIONAIRE. Your transformation starts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetResults}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                >
                  Start Your Success Story
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Schedule Free Consultation
                </Link>
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