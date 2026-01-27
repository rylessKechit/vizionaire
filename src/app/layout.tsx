import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const baseUrl = 'https://vizionaire.ae'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'VIZIONAIRE - Digital Marketing Agency Dubai | SEO, PPC, Social Media',
    template: '%s | VIZIONAIRE Dubai'
  },
  description: 'Leading digital marketing agency in Dubai offering SEO, social media management, PPC advertising, web development & marketing automation. 90-day ROI guarantee. Get your free consultation today.',
  keywords: [
    'digital marketing agency dubai',
    'seo services dubai',
    'social media marketing uae',
    'ppc agency dubai',
    'web development dubai',
    'marketing automation dubai',
    'google ads agency dubai',
    'facebook advertising dubai',
    'linkedin marketing uae',
    'digital marketing mena',
    'roi guaranteed marketing',
    'dubai marketing services',
  ],
  authors: [{ name: 'VIZIONAIRE', url: baseUrl }],
  creator: 'VIZIONAIRE',
  publisher: 'VIZIONAIRE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: baseUrl,
    siteName: 'VIZIONAIRE',
    title: 'VIZIONAIRE - Premium Digital Marketing Agency Dubai',
    description: 'Transform your business with Dubai\'s leading digital marketing agency. SEO, PPC, Social Media, Web Development. 90-day ROI guarantee.',
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
    description: 'Transform your business with Dubai\'s leading digital marketing agency. 90-day ROI guarantee.',
    images: ['/og-image.jpg'],
    creator: '@vizionaire_ae',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: 'Cp5q-mBYZNNiLDi-KlvKJQUKqCe_ALDBXwZme6YsgzM',
  },
  category: 'Digital Marketing',
}

// Schema.org structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'VIZIONAIRE',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 200,
        height: 60,
      },
      description: 'Premium digital marketing agency in Dubai specializing in SEO, PPC, social media, and web development with guaranteed ROI.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'DIFC',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        postalCode: '00000',
        addressCountry: 'AE',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+971-54-361-2610',
          contactType: 'sales',
          availableLanguage: ['English', 'Arabic'],
          areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+971-54-361-2610',
          contactType: 'customer service',
          availableLanguage: ['English', 'Arabic'],
        },
      ],
      email: 'contact@vizionaire.ae',
      sameAs: [
        'https://www.linkedin.com/company/vizionaire',
        'https://www.instagram.com/vizionaire.ae',
        'https://www.facebook.com/vizionaire.ae',
        'https://twitter.com/vizionaire_ae',
      ],
      foundingDate: '2025',
      founders: [
        {
          '@type': 'Person',
          name: 'Rylesskecht',
        },
      ],
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 5,
        maxValue: 20,
      },
      slogan: 'Transform Your Digital Presence',
      knowsAbout: [
        'Digital Marketing',
        'Search Engine Optimization',
        'Pay Per Click Advertising',
        'Social Media Marketing',
        'Web Development',
        'Marketing Automation',
        'Content Marketing',
        'Email Marketing',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#localbusiness`,
      name: 'VIZIONAIRE - Digital Marketing Agency',
      image: `${baseUrl}/logo.png`,
      url: baseUrl,
      telephone: '+971-54-361-2610',
      email: 'contact@vizionaire.ae',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'DIFC',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        postalCode: '00000',
        addressCountry: 'AE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.2048,
        longitude: 55.2708,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '10:00',
          closes: '16:00',
        },
      ],
      priceRange: 'AED 5,500 - AED 22,000+',
      currenciesAccepted: 'AED',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 25.2048,
          longitude: 55.2708,
        },
        geoRadius: '500 km',
      },
      serviceArea: [
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Kuwait' },
        { '@type': 'Country', name: 'Bahrain' },
        { '@type': 'Country', name: 'Oman' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'VIZIONAIRE',
      description: 'Digital Marketing Agency Dubai',
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-AE',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href={baseUrl} />
        <meta name="theme-color" content="#000000" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black font-sans antialiased text-white">
        <GoogleAnalytics />
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  )
}
