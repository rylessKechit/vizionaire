// src/components/CurrencySelector.tsx
'use client'

import { useState } from 'react'
import { useCurrency } from '@/hooks/useCurrency'
import { Currency, CURRENCY_INFO } from '@/lib/currency'
import { Globe } from 'lucide-react'

export function CurrencySelector() {
  const { currency, setCurrency, currencyFlag } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)

  const currencies: Currency[] = ['AED', 'EUR', 'USD']

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
      >
        <Globe className="w-4 h-4 text-white" />
        <span className="text-white text-sm font-medium">
          {currencyFlag} {currency}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Overlay pour fermer au clic extérieur */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 overflow-hidden">
            {currencies.map((curr) => {
              const info = CURRENCY_INFO[curr]
              return (
                <button
                  key={curr}
                  onClick={() => {
                    setCurrency(curr)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/20 transition-colors ${
                    currency === curr ? 'bg-white/10' : ''
                  }`}
                >
                  <span className="text-2xl">{info.flag}</span>
                  <div className="flex-1 text-left">
                    <div className="text-white text-sm font-medium">{info.code}</div>
                    <div className="text-gray-300 text-xs">{info.name}</div>
                  </div>
                  {currency === curr && (
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                  )}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}