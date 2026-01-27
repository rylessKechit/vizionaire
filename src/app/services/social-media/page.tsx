import type { Metadata } from 'next'
import SocialMediaPageClient from './SocialMediaPageClient'

export const metadata: Metadata = {
  title: 'Social Media Management Dubai - Instagram, LinkedIn, TikTok',
  description: 'Professional social media management in Dubai. Instagram, LinkedIn, TikTok & Facebook marketing. 5x follower growth, 8.5% engagement rate. Content creation & influencer partnerships.',
  keywords: [
    'social media management dubai',
    'instagram marketing uae',
    'linkedin marketing dubai',
    'tiktok agency dubai',
    'facebook advertising uae',
    'social media agency dubai',
    'influencer marketing uae',
    'content creation dubai',
  ],
  openGraph: {
    title: 'Social Media Management Dubai - Go Viral | VIZIONAIRE',
    description: 'Professional social media management with 5x follower growth. Instagram, LinkedIn, TikTok & Facebook.',
    url: 'https://vizionaire.ae/services/social-media',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE Social Media Management Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Dubai - VIZIONAIRE',
    description: 'Go viral with professional social media management.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/services/social-media',
  },
}

// Social Media Service Schema
const socialMediaServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media Management',
  provider: {
    '@type': 'Organization',
    name: 'VIZIONAIRE',
    url: 'https://vizionaire.ae',
  },
  description: 'Complete social media management including content creation, community management, and influencer partnerships across Instagram, LinkedIn, TikTok, and Facebook.',
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  serviceType: 'Social Media Marketing',
  offers: [
    {
      '@type': 'Offer',
      name: 'Social Starter',
      price: '5500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '5500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
    {
      '@type': 'Offer',
      name: 'Social Growth',
      price: '9500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '9500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
    {
      '@type': 'Offer',
      name: 'Social Domination',
      price: '16500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '16500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
  ],
}

export default function SocialMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialMediaServiceSchema) }}
      />
      <SocialMediaPageClient />
    </>
  )
}
