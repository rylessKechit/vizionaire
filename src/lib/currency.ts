// src/lib/currency.ts

export type Currency = 'AED' | 'EUR' | 'USD'

export interface CurrencyInfo {
  code: Currency
  symbol: string
  name: string
  flag: string
}

// Taux de conversion (base: AED)
export const CONVERSION_RATES: Record<Currency, number> = {
  AED: 1,
  EUR: 0.25,    // 1 AED = 0.25 EUR
  USD: 0.27     // 1 AED = 0.27 USD
}

// Informations sur les devises
export const CURRENCY_INFO: Record<Currency, CurrencyInfo> = {
  AED: {
    code: 'AED',
    symbol: 'AED',
    name: 'UAE Dirham',
    flag: '🇦🇪'
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    flag: '🇪🇺'
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    flag: '🇺🇸'
  }
}

// Liste des codes de pays européens utilisant l'Euro
export const EU_COUNTRIES = [
  'AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 
  'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES'
]

/**
 * Convertit un prix d'AED vers une autre devise
 */
export function convertPrice(priceInAED: number, targetCurrency: Currency): number {
  const rate = CONVERSION_RATES[targetCurrency]
  return Math.round(priceInAED * rate)
}

/**
 * Formate un prix avec le symbole de devise approprié
 */
export function formatPrice(price: number, currency: Currency): string {
  const info = CURRENCY_INFO[currency]
  
  // Formatage spécial pour EUR avec symbole après
  if (currency === 'EUR') {
    return `${price.toLocaleString('fr-FR')} ${info.symbol}`
  }
  
  // Pour AED et USD, symbole avant ou après selon le standard
  if (currency === 'AED') {
    return `${price.toLocaleString('en-AE')} ${info.symbol}`
  }
  
  return `${info.symbol}${price.toLocaleString('en-US')}`
}

/**
 * Détecte la devise appropriée en fonction du code pays
 */
export function getCurrencyFromCountry(countryCode: string): Currency {
  // Émirats Arabes Unis
  if (countryCode === 'AE') {
    return 'AED'
  }
  
  // Pays de la zone Euro
  if (EU_COUNTRIES.includes(countryCode)) {
    return 'EUR'
  }
  
  // Tout le reste → USD
  return 'USD'
}

/**
 * Détecte la localisation de l'utilisateur via l'API ipapi.co
 */
export async function detectUserCurrency(): Promise<Currency> {
  // Vérifier si on a déjà une devise en cache
  const cached = localStorage.getItem('user_currency')
  if (cached && ['AED', 'EUR', 'USD'].includes(cached)) {
    return cached as Currency
  }

  try {
    // Utiliser ipapi.co (gratuit, pas de clé nécessaire)
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (!response.ok) {
      throw new Error('Geolocation API failed')
    }
    
    const data = await response.json()
    const countryCode = data.country_code
    const currency = getCurrencyFromCountry(countryCode)
    
    // Mettre en cache pour 24h
    localStorage.setItem('user_currency', currency)
    localStorage.setItem('currency_detected_at', Date.now().toString())
    
    return currency
  } catch (error) {
    console.warn('Failed to detect location, defaulting to USD:', error)
    // Fallback: USD par défaut
    return 'USD'
  }
}

/**
 * Vérifie si le cache de devise est encore valide (24h)
 */
export function isCurrencyCacheValid(): boolean {
  const cachedTime = localStorage.getItem('currency_detected_at')
  if (!cachedTime) return false
  
  const twentyFourHours = 24 * 60 * 60 * 1000
  return Date.now() - parseInt(cachedTime) < twentyFourHours
}