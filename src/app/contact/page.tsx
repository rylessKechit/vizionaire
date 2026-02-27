import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us - Digital Marketing Agency Dubai',
  description: 'Contact VIZIONAIRE for a free digital marketing consultation. Call +971 54 478 5454, email contact@vizionaire.ae, or fill out our form. 24/7 support available. Dubai, UAE.',
  keywords: [
    'contact digital marketing agency dubai',
    'marketing consultation dubai',
    'vizionaire contact',
    'free marketing consultation uae',
    'digital agency dubai phone',
  ],
  openGraph: {
    title: 'Contact VIZIONAIRE - Free Marketing Consultation Dubai',
    description: 'Get your free strategy consultation. Call +971 54 478 5454 or fill out our form. 24/7 support available.',
    url: 'https://vizionaire.ae/contact',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact VIZIONAIRE Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact VIZIONAIRE Dubai',
    description: 'Get your free strategy consultation. 24/7 support available.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/contact',
  },
}

// Contact page schema
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact VIZIONAIRE',
  description: 'Contact page for VIZIONAIRE digital marketing agency in Dubai',
  url: 'https://vizionaire.ae/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'VIZIONAIRE',
    telephone: '+971-54-361-2610',
    email: 'contact@vizionaire.ae',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'DIFC',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPageClient />
    </>
  )
}
