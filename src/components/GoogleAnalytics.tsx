'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// Event tracking helper functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag && GA_MEASUREMENT_ID) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Conversion tracking
export const trackConversion = (conversionLabel: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: conversionLabel,
      value: value,
      currency: 'AED',
    })
  }
}

// Custom events for VIZIONAIRE
export const trackContactForm = () => trackEvent('submit', 'Contact', 'Contact Form Submission')
export const trackWhatsAppClick = () => trackEvent('click', 'Contact', 'WhatsApp Button')
export const trackPhoneClick = () => trackEvent('click', 'Contact', 'Phone Button')
export const trackConsultationRequest = () => trackEvent('click', 'Conversion', 'Free Consultation Request')
export const trackPricingView = (plan: string) => trackEvent('view_item', 'Pricing', plan)
export const trackServiceView = (service: string) => trackEvent('view_item', 'Service', service)
export const trackBlogRead = (title: string) => trackEvent('read', 'Blog', title)
