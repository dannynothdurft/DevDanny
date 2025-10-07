// components/cookie-consent-wrapper.tsx
'use client'
import { useEffect, useState } from 'react'
import CookieConsent, { CookiePreferences } from '@/module/CookieConsent'

export default function CookieConsentWrapper() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleAccept = (preferences: CookiePreferences) => {
    console.log('Cookie preferences accepted:', preferences)

    // Analytics basierend auf Präferenzen initialisieren
    if (preferences.analytics) {
      // Hier würdest du Google Analytics, Vercel Analytics etc. initialisieren
      initializeAnalytics()
    }

    if (preferences.marketing) {
      initializeMarketing()
    }
  }

  const handleReject = () => {
    console.log('Cookies rejected')
    // Alle nicht-notwendigen Cookies entfernen
    removeNonEssentialCookies()
  }

  const initializeAnalytics = () => {
    // Vercel Analytics wird automatisch geladen, aber du könntest hier
    // zusätzliche Analytics-Tools initialisieren
    console.log('Initializing analytics...')
  }

  const initializeMarketing = () => {
    console.log('Initializing marketing tools...')
  }

  const removeNonEssentialCookies = () => {
    // Nicht-notwendige Cookies entfernen
    console.log('Removing non-essential cookies...')
  }

  if (!isClient) return null

  return <CookieConsent onAccept={handleAccept} onReject={handleReject} />
}
