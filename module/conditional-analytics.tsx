// components/conditional-analytics.tsx
"use client"
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { useEffect, useState } from 'react'

export default function ConditionalAnalytics() {
  const [allowAnalytics, setAllowAnalytics] = useState(false)

  useEffect(() => {
    // Prüfe Cookie-Einstellungen beim Mount
    const cookieConsent = localStorage.getItem('cookie-consent')
    
    if (cookieConsent) {
      const preferences = JSON.parse(cookieConsent)
      setAllowAnalytics(preferences.analytics)
    } else {
      // Keine Einwilligung vorhanden - standardmäßig nicht erlauben
      setAllowAnalytics(false)
    }
  }, [])

  // Nur rendern wenn Analytics erlaubt ist
  return allowAnalytics ? <VercelAnalytics /> : null
}