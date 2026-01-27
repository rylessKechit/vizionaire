import type { Metadata } from 'next'
import CookiesPageClient from './CookiesPageClient'

export const metadata: Metadata = {
  title: 'Cookie Policy - VIZIONAIRE Digital Marketing Agency',
  description: 'Learn about VIZIONAIRE\'s cookie policy. Understand how we use cookies to enhance your experience. Manage your cookie preferences. Dubai, UAE.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cookie Policy | VIZIONAIRE',
    description: 'Learn how VIZIONAIRE uses cookies on our website.',
    url: 'https://vizionaire.ae/cookies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vizionaire.ae/cookies',
  },
}

export default function CookiesPage() {
  return <CookiesPageClient />
}
