'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Target, Users, Zap, Award, Heart, Globe, TrendingUp, Star, CheckCircle, Calendar, Shield } from 'lucide-react'

const stats = [
  {
    number: "500+",
    label: "Projects Delivered",
    color: "bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent"
  },
  {
    number: "300%",
    label: "Average ROI",
    color: "bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
  },
  {
    number: "95%",
    label: "Client Retention",
    color: "bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
  },
  {
    number: "24/7",
    label: "Support Available",
    color: "bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
  }
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is built around measurable outcomes. We don't just create campaigns; we deliver growth that impacts your bottom line.",
    color: "from-red-600 to-red-500",
    iconBg: "from-red-600 to-red-500"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We become an extension of your team, understanding your business inside and out.",
    color: "from-orange-500 via-red-500 to-rose-600",
    iconBg: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of digital trends and leverage cutting-edge technologies to give you a competitive advantage.",
    color: "from-amber-400 via-orange-500 to-red-500",
    iconBg: "from-amber-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "No black boxes or hidden tactics. We provide clear reporting and honest communication throughout our partnership.",
    color: "from-amber-400 via-yellow-500 to-orange-500",
    iconBg: "from-amber-500 to-yellow-500"
  }
]

const team = [
  {
    name: "Rylesskecht",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Digital marketing strategist with 10+ years of experience scaling businesses across the MENA region.",
    expertise: ["Strategy", "Leadership", "Growth"],
    color: "from-red-600 to-amber-600",
    iconBg: "from-red-600 to-orange-500"
  },
  {
    name: "Sarah Al-Mansoori",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b108?w=300&h=300&fit=crop&crop=face",
    bio: "Award-winning designer passionate about creating visually stunning and conversion-focused experiences.",
    expertise: ["Design", "Branding", "UX/UI"],
    color: "from-amber-400 via-orange-500 to-red-500",
    iconBg: "from-amber-500 to-orange-500"
  },
  {
    name: "Omar Al-Zaabi",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack developer and automation expert who turns complex ideas into seamless digital solutions.",
    expertise: ["Development", "Automation", "Analytics"],
    color: "from-orange-500 via-red-500 to-rose-600",
    iconBg: "from-orange-500 to-red-500"
  }
]

const timeline = [
  {
    year: "2020",
    title: "Foundation",
    description: "VIZIONAIRE was founded with a mission to democratize digital marketing for UAE businesses."
  },
  {
    year: "2021",
    title: "Growth Phase",
    description: "Expanded our team and services, helping 100+ businesses achieve digital transformation."
  },
  {
    year: "2022",
    title: "Innovation Hub",
    description: "Launched our automation platform and became the go-to agency for marketing technology."
  },
  {
    year: "2023",
    title: "Market Leadership",
    description: "Recognized as one of the top digital agencies in the UAE with 95% client retention rate."
  },
  {
    year: "2024",
    title: "Regional Expansion",
    description: "Extended our services across the GCC region, serving 500+ satisfied clients."
  }
]

const certifications = [
  {
    name: "Google Premier Partner",
    logo: "🎯",
    description: "Top 3% of Google Ads agencies worldwide"
  },
  {
    name: "Meta Business Partner",
    logo: "📱",
    description: "Certified for advanced Facebook & Instagram advertising"
  },
  {
    name: "HubSpot Diamond Partner",
    logo: "💎",
    description: "Elite level inbound marketing certification"
  },
  {
    name: "Shopify Plus Partner",
    logo: "🛍️",
    description: "Specialized in enterprise e-commerce solutions"
  }
]

export default function AboutPage() {
  const handleGetStarted = () => {
    const message = encodeURIComponent('Hi! I learned about VIZIONAIRE and would like to discuss how you can help grow my business. Can we schedule a consultation?')
    window.open(`https://wa.me/971565663377?text=${message}`, '_blank')
  }

  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
      {/* Header */}
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
                <span className="text-white text-sm font-medium">🇦🇪 Leading Digital Agency in MENA</span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="text-white">We Turn Your</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Vision Into Victory
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                We're your strategic partner in digital transformation, combining local market expertise with global best practices.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl lg:text-4xl font-black ${stat.color} mb-2`}>{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetStarted}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#our-story"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Learn Our Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="our-story" className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Mission */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-orange-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                  <Target className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm font-semibold">Our Mission</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-white">
                  Democratizing Digital Success
                </h2>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  We believe every business deserves access to world-class digital marketing, regardless of size or budget. Our mission is to level the playing field by providing enterprise-level strategies to businesses of all scales.
                </p>
                <div className="space-y-4">
                  {['ROI-focused strategies', 'Transparent communication', 'Local market expertise', 'Cutting-edge technology'].map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-200">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Vision */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                  <Globe className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-400 text-sm font-semibold">Our Vision</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Leading the Digital Revolution</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  To become the most trusted digital marketing partner in the MENA region by 2025, known for delivering exceptional results and fostering long-term business growth.
                </p>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h4 className="text-lg font-bold text-white mb-4">By 2025, we aim to:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-1">1,000+</div>
                      <div className="text-gray-300">Clients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-1">10+</div>
                      <div className="text-gray-300">Regional Markets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-white">Our Core</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do and drive our commitment to your success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.iconBg} flex items-center justify-center text-white`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-white">Meet Our</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Expert Team
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Passionate professionals dedicated to transforming your digital presence and driving exceptional results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${member.iconBg} flex items-center justify-center`}>
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                    {member.role}
                  </p>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-white">Our</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                From a small startup to a leading digital agency - here's how we've grown alongside our clients.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-amber-500 to-orange-500 opacity-30"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="text-2xl font-black bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-200 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-red-500 to-amber-500 rounded-full border-4 border-white/20"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-white">Trusted</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Our expertise is validated by the world's leading marketing platforms and technologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="text-4xl mb-4">{cert.logo}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Ready to Write Your <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Success Story</span>?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses who trusted VIZIONAIRE to transform their digital presence and achieve extraordinary growth.
              </p>
              <button
                onClick={handleGetStarted}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </button>
              
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