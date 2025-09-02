'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Check, Smartphone, Users, Heart, TrendingUp, Camera, MessageSquare, Calendar, BarChart3 } from 'lucide-react'

const platforms = [
  {
    name: 'Instagram',
    icon: '📸',
    description: 'Stories, posts, reels, and IGTV content',
    features: ['Visual storytelling', 'Hashtag strategy', 'Influencer collaborations']
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    description: 'B2B networking and professional content',
    features: ['Thought leadership', 'Company updates', 'Lead generation']
  },
  {
    name: 'TikTok',
    icon: '🎵',
    description: 'Viral short-form video content',
    features: ['Trending content', 'Creative videos', 'Youth engagement']
  },
  {
    name: 'Facebook',
    icon: '👥',
    description: 'Community building and advertising',
    features: ['Community management', 'Event promotion', 'Local targeting']
  }
]

const services = [
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'Professional photography, videography, and graphic design for all your social media needs'
  },
  {
    icon: Calendar,
    title: 'Strategic Scheduling',
    description: 'Optimal posting times and content calendar management for maximum engagement'
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Active engagement with your audience, responding to comments and building relationships'
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Data-driven strategies to grow your followers and increase brand awareness'
  },
  {
    icon: MessageSquare,
    title: 'Influencer Partnerships',
    description: 'Connect with relevant influencers to expand your reach and credibility'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Detailed performance reports and insights to track your social media ROI'
  }
]

const packages = [
  {
    name: 'Social Starter',
    price: '5,500 AED',
    platforms: '2 Platforms',
    posts: '20 posts/month',
    description: 'Perfect for small businesses starting their social media journey',
    features: [
      'Content creation (graphics + captions)',
      'Instagram + Facebook management',
      'Basic community management',
      'Monthly performance report',
      'Hashtag research and strategy',
      'Content calendar planning'
    ],
    color: 'from-red-600 to-orange-500'
  },
  {
    name: 'Social Growth',
    price: '9,500',
    platforms: '3 Platforms',
    posts: '40 posts/month',
    description: 'Comprehensive social media management for growing businesses',
    features: [
      'All Social Starter features',
      'LinkedIn management included',
      'Stories and reels creation',
      'Advanced community management',
      'Influencer outreach (1 collaboration/month)',
      'Paid social media advertising',
      'Weekly performance reports'
    ],
    popular: true,
    color: 'from-amber-400 to-orange-500'
  },
  {
    name: 'Social Domination',
    price: '16,500',
    platforms: '4+ Platforms',
    posts: '60 posts/month',
    description: 'Full-scale social media domination for ambitious brands',
    features: [
      'All Social Growth features',
      'TikTok management included',
      'Professional video production',
      'Advanced influencer partnerships',
      'Social media advertising campaigns',
      'Crisis management support',
      'Real-time monitoring and engagement',
      'Custom social media strategy'
    ],
    color: 'from-orange-500 to-red-500'
  }
]

const results = [
  {
    metric: 'Follower Growth',
    value: '5x Average',
    description: 'Organic growth through strategic content'
  },
  {
    metric: 'Engagement Rate',
    value: '8.5%',
    description: 'Well above industry average of 1-3%'
  },
  {
    metric: 'Lead Generation',
    value: '40+ Leads',
    description: 'Monthly qualified leads through social'
  },
  {
    metric: 'Brand Awareness',
    value: '200% Increase',
    description: 'Measurable brand recognition growth'
  }
]

const testimonials = [
  {
    name: 'Layla Al-Zahra',
    company: 'Beauty & Wellness Spa',
    text: 'Our Instagram following grew from 500 to 15,000 in just 6 months. The content quality is exceptional and our bookings have tripled.',
    avatar: '💄'
  },
  {
    name: 'Omar Al-Rashid',
    company: 'Restaurant Chain',
    text: 'VIZIONAIRE transformed our social media presence. Our TikTok videos consistently go viral and our delivery orders have increased by 250%.',
    avatar: '🍽️'
  }
]

export default function SocialMediaPage() {
  const handleGetQuote = () => {
    const message = encodeURIComponent('Hi! I\'m interested in Social Media Management services. Can we discuss my brand\'s social media strategy?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-12 lg:pt-32 lg:pb-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-orange-400 font-semibold">Social Media Management</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                  <span className="text-white">Dominate Every</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Platform
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Complete social media strategy and management to build your brand and engage your audience across all platforms with viral content.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Get Free Strategy
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    href="#packages"
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                  >
                    View Packages
                  </Link>
                </div>
              </div>

              {/* Platform Coverage */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{platform.description}</p>
                    <div className="space-y-1">
                      {platform.features.map((feature, i) => (
                        <div key={i} className="text-xs text-amber-400">• {feature}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Our Social Media <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Everything you need to build a powerful social media presence
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Expected <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Results</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  What you can expect when working with our social media experts
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                      {result.value}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{result.metric}</h3>
                    <p className="text-gray-300 text-sm">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Packages Section */}
          <section id="packages" className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Social Media <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Packages</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Choose the perfect package for your social media goals
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-2 ${
                      pkg.popular 
                        ? 'border-orange-500 ring-2 ring-orange-500/20' 
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-gray-300 mb-4">{pkg.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-black text-white">AED {pkg.price}</span>
                        <span className="text-gray-400 text-sm ml-2">/month</span>
                      </div>
                      <div className="flex justify-center gap-4 text-sm text-gray-400 mb-4">
                        <span>{pkg.platforms}</span>
                        <span>•</span>
                        <span>{pkg.posts}</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleGetQuote}
                      className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Client <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Success</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 leading-relaxed">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Ready to Go <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Viral</span>?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Get a free social media audit and strategy session. Let's grow your brand together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetQuote}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Get Free Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                  >
                    View All Services
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