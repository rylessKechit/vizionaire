'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundLayout } from '@/components/BackgroundLayout'
import { Calendar, User, ArrowRight, Search, Tag, Clock, TrendingUp, Eye, MessageCircle } from 'lucide-react'

// Sample articles (you can easily modify these)
const articles = [
  {
    id: 1,
    title: "10 Digital Marketing Trends Dominating Dubai in 2025",
    excerpt: "Discover the strategies that will dominate the UAE market this year and how to implement them in your business for maximum growth.",
    content: `Digital marketing in Dubai is evolving rapidly. In 2025, we're seeing several major trends that are transforming how businesses interact with their customers...`,
    author: "VIZIONAIRE Team",
    date: "January 15, 2025",
    category: "Digital Marketing",
    tags: ["Dubai", "2025 Trends", "Marketing"],
    image: "/api/placeholder/600/300",
    featured: true,
    readTime: "8 min",
    views: "2.1k",
    comments: 15
  },
  {
    id: 2,
    title: "Local SEO Mastery: Dominate Dubai Search Results",
    excerpt: "Complete guide to optimize your local SEO and attract more customers in the United Arab Emirates market.",
    content: `Local SEO is crucial for Dubai businesses. Here's how to optimize your online presence for maximum visibility...`,
    author: "Sarah Al-Mahmoud",
    date: "January 12, 2025",
    category: "SEO",
    tags: ["Local SEO", "Dubai", "Search Rankings"],
    image: "/api/placeholder/600/300",
    featured: false,
    readTime: "6 min",
    views: "1.8k",
    comments: 12
  },
  {
    id: 3,
    title: "Social Media ROI: Measuring Campaign Impact That Matters",
    excerpt: "Learn how to calculate and optimize the return on investment of your social media strategies with data-driven insights.",
    content: `Measuring social media ROI is no longer optional. Here are the essential metrics that actually drive business growth...`,
    author: "Ahmed Hassan",
    date: "January 10, 2025",
    category: "Social Media",
    tags: ["ROI", "Social Media", "Analytics"],
    image: "/api/placeholder/600/300",
    featured: false,
    readTime: "5 min",
    views: "1.5k",
    comments: 8
  },
  {
    id: 4,
    title: "Marketing Automation: Save Time & Scale Revenue",
    excerpt: "Discover how automation can transform your business operations and free up your team to focus on strategic growth.",
    content: `Marketing automation enables Dubai businesses to scale efficiently while maintaining personalized customer experiences...`,
    author: "VIZIONAIRE Team",
    date: "January 8, 2025",
    category: "Automation",
    tags: ["Automation", "Productivity", "Growth"],
    image: "/api/placeholder/600/300",
    featured: false,
    readTime: "7 min",
    views: "1.2k",
    comments: 6
  },
  {
    id: 5,
    title: "E-commerce Success in UAE: Your 2025 Playbook",
    excerpt: "Winning strategies to launch and grow your online store in the Emirates with proven tactics and local insights.",
    content: `The UAE e-commerce market offers unique opportunities for businesses ready to capitalize on digital transformation...`,
    author: "Lisa Chen",
    date: "January 5, 2025",
    category: "E-commerce",
    tags: ["E-commerce", "UAE", "Business"],
    image: "/api/placeholder/600/300",
    featured: false,
    readTime: "9 min",
    views: "2.5k",
    comments: 20
  },
  {
    id: 6,
    title: "AI-Powered Marketing: The Future is Now",
    excerpt: "How to integrate artificial intelligence into your marketing strategies for exceptional results and competitive advantage.",
    content: `AI is revolutionizing digital marketing. Here's how to leverage it effectively for your Dubai business...`,
    author: "Tech Team VIZIONAIRE",
    date: "January 3, 2025",
    category: "Innovation",
    tags: ["AI", "Marketing", "Technology"],
    image: "/api/placeholder/60re0/300",
    featured: false,
    readTime: "6 min",
    views: "1.9k",
    comments: 14
  }
]

const categories = ["All", "Digital Marketing", "SEO", "Social Media", "Automation", "E-commerce", "Innovation"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticle = articles.find(article => article.featured)
  const recentArticles = articles.slice(0, 3)

  if (selectedArticle) {
    return (
      <BackgroundLayout backgroundImage="/background-cityscape.jpg">
        <div className="min-h-screen text-white">
          <Header />
          
          {/* Article View */}
          <main className="pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
              {/* Back Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Blog
              </button>

              {/* Article Header */}
              <article>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-sm font-bold rounded-full">
                      {selectedArticle.category}
                    </span>
                    <span className="text-gray-300 text-sm">{selectedArticle.date}</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                    {selectedArticle.title}
                  </h1>
                  
                  <div className="flex items-center gap-6 text-gray-300 text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {selectedArticle.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {selectedArticle.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {selectedArticle.views} views
                    </div>
                  </div>
                </div>

                {/* Article Image */}
                <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden mb-8">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl text-gray-200 leading-relaxed mb-8">
                    {selectedArticle.excerpt}
                  </p>
                  
                  <div className="text-gray-100 leading-relaxed">
                    {selectedArticle.content}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
                  {selectedArticle.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-4 mt-8">
                  <span className="text-gray-300">Share this article:</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      LinkedIn
                    </button>
                    <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      Twitter
                    </button>
                    <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </article>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-3xl text-center">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-black/80 mb-6">
                  Get a free consultation and discover how VIZIONAIRE can accelerate your growth.
                </p>
                <button className="px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-colors">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </BackgroundLayout>
    )
  }

  return (
    <BackgroundLayout backgroundImage="/background-cityscape.jpg">
      <div className="min-h-screen text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                <span className="text-white">Marketing</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Expert insights, proven strategies, and the latest trends in digital marketing for Dubai businesses.
              </p>
            </div>

            {/* Search & Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === "All" && !searchTerm && (
          <section className="pb-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              <div
                onClick={() => setSelectedArticle(featuredArticle)}
                className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-sm font-bold rounded-full">
                        {featuredArticle.category}
                      </span>
                      <span className="text-gray-300 text-sm">{featuredArticle.date}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <div className="text-gray-300">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-sm font-bold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {article.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {article.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-xl hover:scale-105 transition-transform"
                >
                  Show All Articles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-3xl p-8 lg:p-12 text-center">
              <h3 className="text-3xl lg:text-4xl font-black text-black mb-4">
                Never Miss an Insight
              </h3>
              <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
                Get weekly marketing tips, industry insights, and exclusive strategies delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-black/20 text-black placeholder-black/60 focus:ring-2 focus:ring-black focus:border-black"
                />
                <button className="px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-colors">
                  Subscribe
                </button>
              </div>
              
              <p className="text-black/60 text-sm mt-4">
                Join 2,500+ Dubai business owners getting weekly insights
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </BackgroundLayout>
  )
}