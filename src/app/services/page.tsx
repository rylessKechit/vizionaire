import type { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Digital Marketing Services Dubai',
  description: 'Digital marketing services in Dubai: SEO, PPC, social media, web development, automation & analytics. Get your free strategy consultation today.',
  keywords: [
    'digital marketing services dubai',
    'seo services uae',
    'ppc advertising dubai',
    'social media management dubai',
    'web development services dubai',
    'marketing automation uae',
    'google ads services dubai',
    'facebook advertising uae',
  ],
  openGraph: {
    title: 'Digital Marketing Services - VIZIONAIRE Dubai',
    description: 'Transform your business with our comprehensive digital marketing services. SEO, PPC, Social Media, Web Development & Automation.',
    url: 'https://vizionaire.ae/services',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE Digital Marketing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services Dubai - VIZIONAIRE',
    description: 'SEO, PPC, Social Media, Web Development & Marketing Automation services in Dubai.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/services',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
