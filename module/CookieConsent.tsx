"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { X, Cookie, Settings, Shield, AlertCircle, Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface CookieConsentProps {
  onAccept?: (preferences: CookiePreferences) => void
  onReject?: () => void
}

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export default function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  })

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent')
    if (!hasConsent) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    setIsVisible(false)
    onAccept?.(allAccepted)
      initializeCookies(allAccepted)
      window.location.reload()
  }

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setIsVisible(false)
    onAccept?.(preferences)
      initializeCookies(preferences)
       window.location.reload()
  }

  const handleRejectAll = () => {
    const rejected = {
      necessary: true, // Notwendige Cookies können nicht abgelehnt werden
      analytics: false,
      marketing: false,
      preferences: false
    }
    localStorage.setItem('cookie-consent', JSON.stringify(rejected))
    setIsVisible(false)
      onReject?.()
       window.location.reload()
  }

  const initializeCookies = (prefs: CookiePreferences) => {
    // Hier werden die Cookies basierend auf den Präferenzen initialisiert
    if (prefs.analytics) {
      // Google Analytics, Vercel Analytics etc. initialisieren
      console.log('Analytics Cookies aktiviert')
    }
    if (prefs.marketing) {
      // Marketing Cookies initialisieren
      console.log('Marketing Cookies aktiviert')
    }
    if (prefs.preferences) {
      // Preference Cookies initialisieren
      console.log('Preference Cookies aktiviert')
    }
  }

  const cookieCategories = [
    {
      id: 'necessary' as const,
      title: 'Notwendige Cookies',
      description: 'Essenziell für die Funktionalität der Website. Können nicht deaktiviert werden.',
      required: true,
      color: 'text-cyan-400'
    },
    {
      id: 'analytics' as const,
      title: 'Analytics Cookies',
      description: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
      required: false,
      color: 'text-purple-400'
    },
    {
      id: 'marketing' as const,
      title: 'Marketing Cookies',
      description: 'Werden für personalisierte Werbung und Kampagnen-Tracking verwendet.',
      required: false,
      color: 'text-amber-400'
    },
    {
      id: 'preferences' as const,
      title: 'Präferenz Cookies',
      description: 'Speichern Ihre Einstellungen für einen personalisierten Besuch.',
      required: false,
      color: 'text-green-400'
    }
  ]

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Cookie Banner */}
      <Card className="relative w-full max-w-2xl border-slate-700 bg-slate-900/90 backdrop-blur-xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
        {/* Header */}
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                <Cookie className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <CardTitle className="text-white text-xl">Cookie-Einstellungen 🍪</CardTitle>
                <CardDescription className="text-gray-400">
                  Wir verwenden Cookies für ein optimales Erlebnis
                </CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white hover:bg-slate-800/50"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Einführungstext */}
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wir respektieren Ihre Privatsphäre. Wählen Sie aus, welche Arten von Cookies Sie zulassen möchten. 
                  Notwendige Cookies sind immer aktiv, da sie für die grundlegende Funktionalität unserer Website erforderlich sind.
                </p>
              </div>
            </div>
          </div>

          {/* Erweiterte Einstellungen Toggle */}
          <Button
            variant="ghost"
            onClick={() => setShowDetails(!showDetails)}
            className="w-full justify-between text-gray-400 hover:text-white hover:bg-slate-800/50"
          >
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Erweiterte Einstellungen
            </div>
            <ChevronDown className={cn(
              "w-4 h-4 transition-transform duration-300",
              showDetails && "rotate-180"
            )} />
          </Button>

          {/* Detaillierte Cookie-Einstellungen */}
          {showDetails && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {cookieCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-start justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className={cn("font-semibold text-sm", category.color)}>
                        {category.title}
                      </h4>
                      {category.required && (
                        <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                          Erforderlich
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <Switch
                    checked={preferences[category.id]}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, [category.id]: checked }))
                    }
                    disabled={category.required}
                    className={cn(
                      "data-[state=checked]:bg-cyan-500 data-[state=unchecked]:bg-slate-700",
                    )}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Aktions-Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-800 hover:text-white hover:border-amber-400/30 transition-all duration-300"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Nur notwendige
            </Button>
            
            {showDetails ? (
              <Button
                onClick={handleAcceptSelected}
                className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white transition-all duration-300 group"
              >
                <Check className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Auswahl bestätigen
              </Button>
            ) : (
              <Button
                onClick={handleAcceptAll}
                className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white transition-all duration-300 group"
              >
                <Cookie className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Alle akzeptieren
              </Button>
            )}
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-4 justify-center pt-2 border-t border-slate-700/50">
            <a
              href="/datenschutz"
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              Datenschutzerklärung
            </a>
            <a
              href="/impressum"
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              Impressum
            </a>
            <button
              onClick={() => setIsVisible(true)}
              className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-300"
            >
              Einstellungen jederzeit ändern
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}