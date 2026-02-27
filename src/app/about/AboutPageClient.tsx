'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { ArrowRight, Target, Users, Zap, Award, Heart, Globe, TrendingUp, Star, CheckCircle, Calendar, Shield } from 'lucide-react'

const commitments = [
  {
    number: "48H",
    label: "Quick Setup",
    color: "bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent"
  },
  {
    number: "100%",
    label: "ROI Guarantee",
    color: "bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
  },
  {
    number: "90 Days",
    label: "Results Timeline",
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
    bio: "Digital marketing strategist with expertise in scaling businesses across the MENA region.",
    expertise: ["Strategy", "Leadership", "Growth"],
    color: "from-red-600 to-amber-600",
    iconBg: "from-red-600 to-orange-500"
  },
  {
    name: "Sarah Al-Mansoori",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b108?w=300&h=300&fit=crop&crop=face",
    bio: "Creative designer passionate about creating visually stunning and conversion-focused experiences.",
    expertise: ["Design", "UX/UI", "Branding"],
    color: "from-amber-400 to-orange-500",
    iconBg: "from-amber-500 to-orange-500"
  },
  {
    name: "Omar Al-Zaabi",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack developer specializing in high-performance websites and marketing automation systems.",
    expertise: ["Development", "Automation", "Analytics"],
    color: "from-orange-500 to-red-500",
    iconBg: "from-orange-500 to-red-500"
  }
]

const milestones = [
  {
    year: "2025",
    title: "VIZIONAIRE Founded",
    description: "Launched with a mission to bring fresh expertise and innovative strategies to UAE businesses.",
    icon: <Star className="w-6 h-6" />,
    color: "from-red-600 to-orange-500"
  },
  {
    year: "Q1 2025",
    title: "Team Assembly",
    description: "Assembled a talented team of digital marketing experts, designers, and developers.",
    icon: <Users className="w-6 h-6" />,
    color: "from-amber-400 to-orange-500"
  },
  {
    year: "Q2 2025",
    title: "First Clients",
    description: "Currently onboarding our inaugural clients and building lasting partnerships.",
    icon: <Heart className="w-6 h-6" />,
    color: "from-orange-500 to-red-500"
  },
  {
    year: "2025+",
    title: "Growth & Innovation",
    description: "Focused on delivering exceptional results and expanding our impact across the MENA region.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-amber-400 via-orange-500 to-red-500"
  }
]

export default function AboutPageClient() {
  const handleGetStarted = () => {
    const message = encodeURIComponent('Hi! I would like to learn more about VIZIONAIRE and discuss how you can help grow my business.')
    window.open(`https://wa.me/971544785454?text=${message}`, '_blank')
  }

  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
      <div className="min-h-screen">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-12 lg:pt-32 lg:pb-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="text-white">Building the</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Future of Marketing
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                We're a fresh team of digital marketing experts on a mission to transform how businesses grow in the UAE.
                With innovative strategies and unwavering dedication to results.
              </p>

              {/* Our Commitments */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                {commitments.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className={`text-3xl lg:text-4xl font-black mb-2 ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetStarted}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                    Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Story</span>
                  </h2>
                  <div className="space-y-6 text-gray-200 leading-relaxed">
                    <p className="text-lg">
                      VIZIONAIRE was born from a simple belief: every business deserves access to world-class digital marketing,
                      regardless of size or budget. We saw too many companies struggling with outdated strategies and agencies
                      that over-promise and under-deliver.
                    </p>
                    <p>
                      As a new agency, we bring fresh perspectives, cutting-edge tools, and an unwavering commitment to
                      your success. We're not here to just manage your marketing – we're here to transform your business.
                    </p>
                    <p>
                      Our team combines deep UAE market knowledge with global best practices, ensuring your campaigns
                      resonate with local audiences while leveraging international expertise.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">Why Choose VIZIONAIRE?</h3>
                    <div className="space-y-4">
                      {[
                        "Fresh perspective on digital marketing",
                        "No long-term contracts required",
                        "90-day money-back guarantee",
                        "Dedicated account management",
                        "Transparent reporting and communication",
                        "UAE market specialists"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Our <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Values</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                    >
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Meet Our <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Team</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Passionate experts dedicated to your success
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center"
                  >
                    <div className="relative mb-6 w-24 h-24 mx-auto">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
                        sizes="96px"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className={`text-lg font-semibold mb-4 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 text-gray-200 text-xs rounded-full border border-white/20"
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
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Our <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Journey</span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Building something special from day one
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center"
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${milestone.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {milestone.icon}
                      </div>
                    </div>
                    <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                  Ready to <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Grow Together</span>?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Join us on this exciting journey. Let's build something amazing for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleGetStarted}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:bg-gray-200"
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                  >
                    Contact Us
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
