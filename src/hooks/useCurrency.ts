// src/hooks/useCurrency.ts
'use client'

import { useCurrency as useCurrencyContext } from '@/contexts/CurrencyContext'
import { convertPrice, formatPrice, Currency } from '@/lib/currency'

interface UseCurrencyReturn {
  currency: Currency
  setCurrency: (currency: Currency) => void
  isLoading: boolean
  convertFromAED: (priceInAED: number) => number
  formatPrice: (price: number) => string
  currencySymbol: string
  currencyCode: Currency
  currencyFlag: string
}

/**
 * Hook personnalisé pour gérer les conversions de devises
 * Convertit automatiquement depuis les prix en AED (base)
 */
export function useCurrency(): UseCurrencyReturn {
  const { currency, setCurrency, isLoading, currencyInfo } = useCurrencyContext()

  /**
   * Convertit un prix depuis AED vers la devise actuelle
   */
  const convertFromAED = (priceInAED: number): number => {
    return convertPrice(priceInAED, currency)
  }

  /**
   * Formate un prix avec la devise actuelle
   */
  const formatPriceWithCurrency = (price: number): string => {
    return formatPrice(price, currency)
  }

  return {
    currency,
    setCurrency,
    isLoading,
    convertFromAED,
    formatPrice: formatPriceWithCurrency,
    currencySymbol: currencyInfo.symbol,
    currencyCode: currency,
    currencyFlag: currencyInfo.flag
  }
}