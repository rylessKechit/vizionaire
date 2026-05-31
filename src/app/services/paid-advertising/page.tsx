import type { Metadata } from 'next'
import PaidAdvertisingPageClient from './PaidAdvertisingPageClient'

export const metadata: Metadata = {
  title: 'PPC & Google Ads Dubai – Maximize ROI',
  description: 'Expert PPC management in Dubai: Google, Facebook & LinkedIn Ads. 4.2x average ROAS and lower cost per lead. Maximize your ROI with a free audit.',
  keywords: [
    'ppc advertising dubai',
    'google ads agency dubai',
    'facebook ads dubai',
    'linkedin advertising uae',
    'pay per click dubai',
    'digital advertising uae',
    'sem agency dubai',
    'paid media dubai',
  ],
  openGraph: {
    title: 'PPC Advertising Dubai - Maximum ROI | VIZIONAIRE',
    description: 'Expert PPC management with 4.2x average ROAS. Google Ads, Facebook & LinkedIn advertising.',
    url: 'https://vizionaire.ae/services/paid-advertising',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE PPC Advertising Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC Advertising Dubai - VIZIONAIRE',
    description: 'Maximum ROI with expert PPC advertising.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/services/paid-advertising',
  },
}

// PPC Service Schema
const ppcServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'PPC Advertising Services',
  provider: {
    '@type': 'Organization',
    name: 'VIZIONAIRE',
    url: 'https://vizionaire.ae',
  },
  description: 'Strategic paid advertising services including Google Ads, Facebook Ads, LinkedIn Ads, and TikTok advertising for Dubai and UAE businesses.',
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  serviceType: 'Pay Per Click Advertising',
  offers: [
    {
      '@type': 'Offer',
      name: 'Ad Starter',
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
      name: 'Ad Growth',
      price: '15500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '15500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
    {
      '@type': 'Offer',
      name: 'Ad Domination',
      price: '28500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '28500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
  ],
}

export default function PaidAdvertisingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ppcServiceSchema) }}
      />
      <PaidAdvertisingPageClient />
    </>
  )
}
