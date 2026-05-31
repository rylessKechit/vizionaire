import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About Us - Digital Marketing Agency Dubai',
  description: 'Meet VIZIONAIRE, Dubai\'s digital marketing agency. Our expert team helps UAE businesses grow with proven strategies. 90-day ROI guarantee. Get in touch.',
  keywords: [
    'about vizionaire',
    'digital marketing team dubai',
    'marketing agency uae',
    'dubai marketing experts',
    'mena digital agency',
    'marketing consultants dubai',
  ],
  openGraph: {
    title: 'About VIZIONAIRE - Digital Marketing Agency Dubai',
    description: 'Meet the team behind our Dubai digital marketing agency. Fresh perspectives, proven strategies, guaranteed results.',
    url: 'https://vizionaire.ae/about',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE Team - Digital Marketing Agency Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About VIZIONAIRE - Digital Marketing Agency Dubai',
    description: 'Meet the team behind our Dubai digital marketing agency.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
