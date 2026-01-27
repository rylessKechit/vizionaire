import type { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Dubai | SEO, PPC, Social Media | VIZIONAIRE',
  description: 'VIZIONAIRE is Dubai\'s leading digital marketing agency. We deliver guaranteed ROI with SEO, PPC advertising, social media management, web development & automation. 90-day money-back guarantee. Free consultation.',
  keywords: [
    'digital marketing agency dubai',
    'seo company dubai',
    'social media agency uae',
    'ppc management dubai',
    'web development dubai',
    'marketing agency mena',
    'google ads dubai',
    'facebook marketing uae',
  ],
  openGraph: {
    title: 'VIZIONAIRE - #1 Digital Marketing Agency in Dubai',
    description: 'Transform your business with Dubai\'s leading digital marketing agency. SEO, PPC, Social Media, Web Development. 90-day ROI guarantee. Free consultation.',
    url: 'https://vizionaire.ae',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIZIONAIRE - Digital Marketing Agency Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIZIONAIRE - Digital Marketing Agency Dubai',
    description: 'Transform your business with guaranteed ROI. SEO, PPC, Social Media & Web Development.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizionaire.ae',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
