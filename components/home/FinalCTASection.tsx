'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Zap,
  Target,
  Calendar,
  CheckCircle2,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const FinalCTASection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: <Target className="w-4 h-4" />,
      text: 'Kostenlose Potenzial-Analyse',
    },
    { icon: <Zap className="w-4 h-4" />, text: 'Maßgeschneiderte Strategie' },
    { icon: <Rocket className="w-4 h-4" />, text: 'Klare Next Steps' },
    { icon: <Calendar className="w-4 h-4" />, text: 'In 30 Minuten' },
  ]

  return (
    <section
      ref={ctaRef}
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/30 animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          >
            <Star className="w-3 h-3" />
          </div>
        ))}

        {/* Floating Sparks */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-400/40 animate-float"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          >
            <Sparkles className="w-2 h-2" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 text-center backdrop-blur-xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } glow-cyan hover-glow-cyan`}
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-amber-500/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-1000" />

          {/* Corner Accents */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
          <div
            className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute bottom-4 left-4 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute bottom-4 right-4 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{ animationDelay: '3s' }}
          ></div>

          <div className="relative z-10">
            {/* Header Badge */}
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-400 font-semibold">
                Let's Build Something Amazing
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Bereit für deinen nächsten
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                {' '}
                Erfolg?
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Egal ob{' '}
              <span className="text-cyan-400 font-semibold">Partnerschaft</span>
              ,{' '}
              <span className="text-purple-400 font-semibold">
                Projekt-Verkauf
              </span>{' '}
              oder{' '}
              <span className="text-amber-400 font-semibold">Neustart</span> -
              gemeinsam finden wir den besten Weg dein digitales Asset
              aufzubauen.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-2 text-sm text-gray-300 bg-slate-700/50 rounded-lg py-3 px-4 backdrop-blur-sm border border-slate-600 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-700/80 hover:scale-105"
                >
                  <div className="text-cyan-400">{benefit.icon}</div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {/* Primary CTA */}
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white text-lg py-7 px-10 rounded-2xl font-semibold transform transition-all duration-500 hover:scale-105 hover-glow-cyan group overflow-hidden"
                onMouseEnter={() => setHoveredButton('primary')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Link href="/contact">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <Rocket className="mr-3 w-5 h-5 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">
                    🚀 Jetzt Strategie-Gespräch buchen
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white text-lg py-7 px-8 rounded-2xl font-semibold transform transition-all duration-500 hover:scale-105 group overflow-hidden relative"
                onMouseEnter={() => setHoveredButton('secondary')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Link href="/portfolio">
                  {/* Background Slide Effect */}
                  <div className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <Zap className="mr-2 w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">Case Studies entdecken</span>
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm">Kostenlos & unverbindlich</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm">30 Minuten deiner Zeit</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-amber-400" />
                <span className="text-sm">Sofortige Value-Insights</span>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 p-4 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <p className="text-sm text-gray-400">
                <span className="text-cyan-400 font-semibold">
                  ⚡ Schnell & Fokussiert:
                </span>{' '}
                In unserem Gespräch identifizieren wir sofort dein größtes
                Potenzial und entwickeln eine klare Strategie für dein nächstes
                Digital Asset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
