import type { Metadata } from 'next'
import AutomationPageClient from './AutomationPageClient'

export const metadata: Metadata = {
  title: 'Marketing Automation Dubai - Email Marketing & Lead Nurturing',
  description: 'Marketing automation services in Dubai. Email marketing, lead nurturing, CRM integration. Save 20+ hours weekly, 3x higher conversion. Automated workflows that scale your business.',
  keywords: [
    'marketing automation dubai',
    'email marketing uae',
    'lead nurturing dubai',
    'crm integration dubai',
    'automated marketing uae',
    'email automation dubai',
    'marketing workflows uae',
    'hubspot dubai',
  ],
  openGraph: {
    title: 'Marketing Automation Dubai - Scale Without Limits | VIZIONAIRE',
    description: 'Marketing automation that saves 20+ hours weekly. Email marketing, lead nurturing & CRM integration.',
    url: 'https://vizionaire.ae/services/automation',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE Marketing Automation Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Automation Dubai - VIZIONAIRE',
    description: 'Scale without limits with marketing automation.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/services/automation',
  },
}

// Automation Service Schema
const automationServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Marketing Automation Services',
  provider: {
    '@type': 'Organization',
    name: 'VIZIONAIRE',
    url: 'https://vizionaire.ae',
  },
  description: 'Comprehensive marketing automation services including email marketing, lead nurturing, CRM integration, and automated workflows for Dubai and UAE businesses.',
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  serviceType: 'Marketing Automation',
  offers: [
    {
      '@type': 'Offer',
      name: 'Automation Starter',
      price: '7500',
      priceCurrency: 'AED',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '7500',
        priceCurrency: 'AED',
        unitText: 'month',
      },
    },
    {
      '@type': 'Offer',
      name: 'Automation Pro',
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
      name: 'Automation Enterprise',
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

export default function AutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(automationServiceSchema) }}
      />
      <AutomationPageClient />
    </>
  )
}
