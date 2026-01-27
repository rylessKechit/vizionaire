import type { Metadata } from 'next'
import WebDevelopmentPageClient from './WebDevelopmentPageClient'

export const metadata: Metadata = {
  title: 'Web Development Dubai - Custom Website Design & Development',
  description: 'Professional web development services in Dubai. Custom responsive websites, e-commerce solutions, landing pages. 95+ PageSpeed scores. Starting from 11,000 AED. Free consultation.',
  keywords: [
    'web development dubai',
    'website design uae',
    'custom website dubai',
    'ecommerce development dubai',
    'landing page design uae',
    'responsive web design dubai',
    'wordpress development uae',
    'web developer dubai',
  ],
  openGraph: {
    title: 'Web Development Dubai - Custom Websites That Convert | VIZIONAIRE',
    description: 'Professional web development with 95+ PageSpeed scores. Custom design, e-commerce, mobile-responsive. Starting from 11,000 AED.',
    url: 'https://vizionaire.ae/services/web-development',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE Web Development Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Dubai - VIZIONAIRE',
    description: 'Custom websites that convert. 95+ PageSpeed scores.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/services/web-development',
  },
}

// Web Development Service Schema
const webDevServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development Services',
  provider: {
    '@type': 'Organization',
    name: 'VIZIONAIRE',
    url: 'https://vizionaire.ae',
  },
  description: 'Professional web development services including custom website design, e-commerce solutions, and landing pages for Dubai and UAE businesses.',
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  serviceType: 'Web Development',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Website',
      price: '11000',
      priceCurrency: 'AED',
    },
    {
      '@type': 'Offer',
      name: 'Business Website',
      price: '18500',
      priceCurrency: 'AED',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Website',
      price: '35000',
      priceCurrency: 'AED',
    },
  ],
}

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevServiceSchema) }}
      />
      <WebDevelopmentPageClient />
    </>
  )
}
