import type { Metadata } from 'next'
import PrivacyPageClient from './PrivacyPageClient'

export const metadata: Metadata = {
  title: 'Privacy Policy - VIZIONAIRE Digital Marketing Agency',
  description: 'Read VIZIONAIRE\'s privacy policy. Learn how we collect, use, and protect your personal data. GDPR compliant. Dubai, UAE digital marketing agency.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | VIZIONAIRE',
    description: 'Learn how VIZIONAIRE protects your personal data.',
    url: 'https://vizionaire.ae/privacy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vizionaire.ae/privacy',
  },
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
