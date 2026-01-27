import type { Metadata } from 'next'
import PricingPageClient from './PricingPageClient'

export const metadata: Metadata = {
  title: 'Pricing Plans - Digital Marketing Agency Dubai',
  description: 'Transparent pricing for digital marketing services in Dubai. Starter from 5,500 AED/month, Professional 11,000 AED/month, Enterprise 22,000 AED/month. 90-day ROI guarantee. No hidden fees.',
  keywords: [
    'digital marketing pricing dubai',
    'marketing agency prices uae',
    'seo pricing dubai',
    'social media management cost',
    'ppc management fees dubai',
    'affordable marketing dubai',
  ],
  openGraph: {
    title: 'Pricing - VIZIONAIRE Digital Marketing Agency Dubai',
    description: 'Transparent pricing with 90-day ROI guarantee. Starter from 5,500 AED/month. No hidden fees, no long-term contracts.',
    url: 'https://vizionaire.ae/pricing',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans - VIZIONAIRE Dubai',
    description: 'Digital marketing pricing with 90-day ROI guarantee. Starting from 5,500 AED/month.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/pricing',
  },
}

// FAQ Schema for pricing page
const pricingFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I switch plans anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any billing differences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s included in the 90-day guarantee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you don\'t see measurable results within 90 days (increased leads, traffic, or sales), we\'ll refund your investment completely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you require long-term contracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! All our plans are month-to-month with no long-term commitments. You can cancel anytime with 30 days notice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will I see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see initial improvements within 2-4 weeks, with significant results typically visible within 30-60 days.',
      },
    },
  ],
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      <PricingPageClient />
    </>
  )
}
