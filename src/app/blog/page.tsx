import type { Metadata } from 'next'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog - Digital Marketing Insights Dubai',
  description: 'Expert insights on digital marketing, SEO, social media, PPC advertising, and business growth strategies for Dubai and UAE businesses. Stay ahead with the latest trends and tips.',
  keywords: [
    'digital marketing blog dubai',
    'seo tips uae',
    'social media marketing insights',
    'ppc advertising guides',
    'marketing trends mena',
    'business growth dubai',
    'marketing strategy articles',
  ],
  openGraph: {
    title: 'Marketing Insights Blog - VIZIONAIRE Dubai',
    description: 'Expert digital marketing insights, tips, and strategies for Dubai businesses. SEO, Social Media, PPC & Growth Hacking.',
    url: 'https://vizionaire.ae/blog',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE Marketing Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Insights - VIZIONAIRE Blog',
    description: 'Expert digital marketing insights for Dubai businesses.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/blog',
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
