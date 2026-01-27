import type { Metadata } from 'next'
import TermsPageClient from './TermsPageClient'

export const metadata: Metadata = {
  title: 'Terms of Service - VIZIONAIRE Digital Marketing Agency',
  description: 'Read VIZIONAIRE\'s terms of service. Understand our service agreement, payment terms, and policies. Dubai, UAE digital marketing agency.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | VIZIONAIRE',
    description: 'VIZIONAIRE terms of service and agreement.',
    url: 'https://vizionaire.ae/terms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vizionaire.ae/terms',
  },
}

export default function TermsPage() {
  return <TermsPageClient />
}
