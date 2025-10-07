'use client'
import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Users,
  Sparkles,
  Gem,
  Target,
  DollarSign,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const PartnershipSection = () => {
  const partnershipModels = [
    {
      id: 'equity',
      title: 'Tech-Co-Founder',
      description:
        'Ich werde dein technischer Mitgründer und baue dein Produkt von 0 auf. Perfekt für die frühe Phase.',
      bestFor: [
        'Gründer ohne Tech-Hintergrund',
        'Ideen in der Konzeptphase',
        'MVP Entwicklung',
        'First-Hire als CTO',
      ],
      percentage: '20-40% Equity',
      icon: <Users className="w-6 h-6" />,
      timeframe: '6-24 Monate',
      commitment: 'Vollzeit-Engagement',
    },
    {
      id: 'revenue',
      title: 'Revenue Share',
      description:
        'Ich optimiere und skaliere dein bestehendes Business. Du behältst die Ownership, ich partizipiere am Wachstum.',
      bestFor: [
        'Laufende Projekte mit Umsatz',
        'Steigende Betriebskosten',
        'Technische Schulden',
        'Skalierungs-Bedarf',
      ],
      percentage: '10-30% Revenue',
      icon: <DollarSign className="w-6 h-6" />,
      timeframe: '3-12 Monate',
      commitment: 'Projektbasiert',
    },
    {
      id: 'acquisition',
      title: 'Project Acquisition',
      description:
        'Du verkaufst dein Projekt komplett an mich. Fairer Preis, saubere Übergabe, ich führe es weiter.',
      bestFor: [
        'Nebenprojekte',
        'Fehlende Zeit/Ressourcen',
        'Nicht-Kernaktivitäten',
        'Projekte mit Potenzial',
      ],
      percentage: '1-3x Jahresumsatz',
      icon: <Gem className="w-6 h-6" />,
      timeframe: 'Sofortiger Exit',
      commitment: 'Kompletter Verkauf',
    },
  ]

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <Users className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">
              Partnership Options
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Wähle dein{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Partnerschafts-Modell
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Drei Wege zur erfolgreichen Zusammenarbeit - maßgeschneidert für
            deine Bedürfnisse und Projekt-Phase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {partnershipModels.map((model, index) => (
            <div key={model.id} className="group relative">
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-slate-800/60 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-slate-800/80 group-hover:-translate-y-3 h-full flex flex-col">
                {/* Animated Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-cyan-500/30">
                  {model.icon}
                </div>

                {/* Title & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {model.title}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <span className="text-cyan-400 text-sm font-bold">
                      {model.percentage}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
                  {model.description}
                </p>

                {/* Ideal For Section */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-cyan-400 mr-2" />
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                      Ideal für:
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {model.bestFor.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                      >
                        <div
                          className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 transform group-hover:scale-105"
                >
                  <Link href={`/${model.id}`}>
                    Modell wählen
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                </div>
              </div>

              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center border-2 border-slate-900 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white text-sm font-bold">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center text-gray-400 mb-6">
            <div className="w-8 h-px bg-gray-600 mr-4"></div>
            <span className="text-sm">Unsicher welches Modell passt?</span>
            <div className="w-8 h-px bg-gray-600 ml-4"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
            >
              <Link href="/contact">
                <MessageCircle className="w-4 h-4 mr-2" />
                Kostenlose Beratung
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <Link href="/portfolio">
                <Gem className="w-4 h-4 mr-2" />
                Erfolgsgeschichten ansehen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnershipSection
