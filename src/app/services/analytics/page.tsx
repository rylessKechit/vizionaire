import type { Metadata } from 'next'
import AnalyticsPageClient from './AnalyticsPageClient'

export const metadata: Metadata = {
  title: 'Analytics & Reporting Dubai - Google Analytics, Data Insights',
  description: 'Professional analytics services in Dubai. Google Analytics 4 setup, custom dashboards, conversion tracking, ROI reporting. Data-driven decisions with 99.9% accuracy.',
  keywords: [
    'analytics services dubai',
    'google analytics dubai',
    'data analytics uae',
    'marketing analytics dubai',
    'conversion tracking uae',
    'custom dashboards dubai',
    'roi reporting dubai',
    'ga4 setup uae',
  ],
  openGraph: {
    title: 'Analytics & Reporting Dubai - Data-Driven Decisions | VIZIONAIRE',
    description: 'Professional analytics with 99.9% data accuracy. GA4 setup, custom dashboards & ROI reporting.',
    url: 'https://vizionaire.ae/services/analytics',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE Analytics Services Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analytics & Reporting Dubai - VIZIONAIRE',
    description: 'Data-driven decisions with professional analytics.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/services/analytics',
  },
}

// Analytics Service Schema
const analyticsServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Analytics & Reporting Services',
  provider: {
    '@type': 'Organization',
    name: 'VIZIONAIRE',
    url: 'https://vizionaire.ae',
  },
  description: 'Professional analytics services including Google Analytics 4 setup, custom dashboards, conversion tracking, and ROI reporting for Dubai and UAE businesses.',
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  serviceType: 'Marketing Analytics',
  offers: [
    {
      '@type': 'Offer',
      name: 'Analytics Essentials',
      price: '4500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '4500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
    {
      '@type': 'Offer',
      name: 'Analytics Pro',
      price: '8500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '8500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
    {
      '@type': 'Offer',
      name: 'Analytics Enterprise',
      price: '15500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '15500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
  ],
}

export default function AnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(analyticsServiceSchema) }}
      />
      <AnalyticsPageClient />
    </>
  )
}
