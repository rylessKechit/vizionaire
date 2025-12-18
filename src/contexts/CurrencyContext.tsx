// src/contexts/CurrencyContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { 
  Currency, 
  detectUserCurrency, 
  isCurrencyCacheValid,
  CURRENCY_INFO 
} from '@/lib/currency'

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  isLoading: boolean
  currencyInfo: typeof CURRENCY_INFO[Currency]
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('USD') // Défaut USD
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Détection automatique au montage du composant
    async function initCurrency() {
      try {
        // Vérifier si le cache est valide
        if (typeof window !== 'undefined' && isCurrencyCacheValid()) {
          const cached = localStorage.getItem('user_currency') as Currency
          if (cached) {
            setCurrencyState(cached)
            setIsLoading(false)
            return
          }
        }

        // Sinon, détecter la nouvelle devise
        const detectedCurrency = await detectUserCurrency()
        setCurrencyState(detectedCurrency)
      } catch (error) {
        console.error('Failed to detect currency:', error)
        // Garder USD par défaut
      } finally {
        setIsLoading(false)
      }
    }

    initCurrency()
  }, [])

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency)
    if (typeof window !== 'undefined') {
      localStorage.setItem('user_currency', newCurrency)
      localStorage.setItem('currency_detected_at', Date.now().toString())
    }
  }

  const value = {
    currency,
    setCurrency,
    isLoading,
    currencyInfo: CURRENCY_INFO[currency]
  }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}