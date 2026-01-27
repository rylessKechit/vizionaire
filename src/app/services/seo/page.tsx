import type { Metadata } from 'next'
import SEOPageClient from './SEOPageClient'

export const metadata: Metadata = {
  title: 'SEO Services Dubai - Search Engine Optimization Agency',
  description: 'Expert SEO services in Dubai. Dominate Google rankings with our technical SEO, on-page optimization, link building & local SEO. 285% average traffic increase. Free SEO audit.',
  keywords: [
    'seo services dubai',
    'seo agency uae',
    'search engine optimization dubai',
    'google ranking dubai',
    'local seo uae',
    'technical seo dubai',
    'link building uae',
    'seo consultant dubai',
  ],
  openGraph: {
    title: 'SEO Services Dubai - Dominate Google Rankings | VIZIONAIRE',
    description: 'Expert SEO services that deliver 285% average traffic increase. Technical SEO, local SEO, link building & more.',
    url: 'https://vizionaire.ae/services/seo',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE SEO Services Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services Dubai - VIZIONAIRE',
    description: 'Dominate Google rankings with expert SEO services.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/services/seo',
  },
}

// SEO Service Schema
const seoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services',
  provider: {
    '@type': 'Organization',
    name: 'VIZIONAIRE',
    url: 'https://vizionaire.ae',
  },
  description: 'Comprehensive SEO services including technical SEO, on-page optimization, link building, and local SEO for Dubai and UAE businesses.',
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  serviceType: 'Search Engine Optimization',
  offers: [
    {
      '@type': 'Offer',
      name: 'SEO Foundation',
      price: '6500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '6500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
    {
      '@type': 'Offer',
      name: 'SEO Growth',
      price: '12500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '12500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
    {
      '@type': 'Offer',
      name: 'SEO Domination',
      price: '22500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '22500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
  ],
}

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }}
      />
      <SEOPageClient />
    </>
  )
}
