"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link"
import { ArrowRight, Users, TrendingUp, Gem, Sparkles, CheckCircle2, Target, Rocket, BarChart3, Zap, Shield, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const PartnershipsPage = () => {
  const [activeModel, setActiveModel] = useState("equity")
  const statsRef = useRef<HTMLDivElement>(null)

  const partnershipModels = [
    {
      id: "equity",
      title: "Equity Partnership",
      description: "Ich werde dein Tech-Co-Founder und baue dein Produkt von 0 auf 1. Perfekt für die frühe Phase.",
      bestFor: ["Gründer ohne Tech-Hintergrund", "Ideen in der Konzeptphase", "MVP Entwicklung", "First-Hire als CTO"],
      percentage: "20-40% Equity",
      icon: <Users className="w-8 h-8" />,
      timeframe: "6-24 Monate",
      commitment: "Vollzeit-Engagement",
      color: "cyan",
      features: [
        "Technische Strategie & Architektur",
        "Full-Stack Entwicklung",
        "Product Management",
        "Team Building & Leadership",
        "Investor Pitches"
      ],
      process: [
        "Strategie-Workshop & Due Diligence",
        "Equity-Struktur & Agreement",
        "MVP Development & Launch",
        "Growth & Scaling Phase",
        "Exit-Vorbereitung"
      ]
    },
    {
      id: "revenue",
      title: "Revenue Share", 
      description: "Ich optimiere und skaliere dein bestehendes Business. Du behältst die Ownership, ich partizipiere am Wachstum.",
      bestFor: ["Laufende Projekte mit Umsatz", "Steigende Betriebskosten", "Technische Schulden", "Skalierungs-Bedarf"],
      percentage: "10-30% Revenue",
      icon: <TrendingUp className="w-8 h-8" />,
      timeframe: "3-12 Monate", 
      commitment: "Projektbasiert",
      color: "purple",
      features: [
        "Performance Optimization",
        "Monetarisierungs-Strategie",
        "Technical Debt Reduction",
        "Automation & Scaling",
        "Conversion Rate Optimization"
      ],
      process: [
        "Current State Analysis",
        "Revenue Share Agreement",
        "Optimization Implementation",
        "Growth Monitoring",
        "Revenue Sharing & Reporting"
      ]
    },
    {
      id: "acquisition",
      title: "Project Acquisition",
      description: "Du verkaufst dein Projekt komplett an mich. Fairer Preis, saubere Übergabe, ich führe es weiter.",
      bestFor: ["Nebenprojekte", "Fehlende Zeit/Ressourcen", "Nicht-Kernaktivitäten", "Projekte mit Potenzial"],
      percentage: "1-3x Jahresumsatz",
      icon: <Gem className="w-8 h-8" />,
      timeframe: "Sofortiger Exit",
      commitment: "Kompletter Verkauf",
      color: "amber",
      features: [
        "Fair Market Valuation",
        "Sofortige Auszahlung",
        "Reibungslose Übergabe",
        "Nachhaltige Weiterentwicklung",
        "Optional: Revenue Share Back"
      ],
      process: [
        "Projekt-Bewertung & Due Diligence",
        "Kaufangebot & Verhandlung",
        "Vertragsabschluss",
        "Übergabe & Knowledge Transfer",
        "Weiterentwicklung & Value-Add"
      ]
    }
  ]

  const successStories = [
    {
      model: "equity",
      title: "From Idea to 7-Figure Exit",
      description: "24-monatige Equity Partnership mit Exit nach 2 Jahren",
      metrics: "40% Equity → 7-stelliger Exit",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      model: "revenue", 
      title: "SaaS Scaling Success",
      description: "Revenue Share Partnership mit 300% Wachstum",
      metrics: "25% Revenue Share → 3x MRR",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      model: "acquisition",
      title: "Side Project Turnaround", 
      description: "Acquisition & Relaunch mit 500% Wertsteigerung",
      metrics: "2x Acquisition → 5x Value Increase",
      icon: <Gem className="w-6 h-6" />
    }
  ]

  const activeModelData = partnershipModels.find(model => model.id === activeModel)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      const children = statsRef.current.children
      Array.from(children).forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Strategic Partnerships</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Dein <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">Tech-Partner</span> für nachhaltigen Erfolg
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Drei bewährte Modelle für unterschiedliche Phasen und Bedürfnisse. 
              Gemeinsam bauen wir nicht nur Produkte, sondern <span className="text-amber-400 font-semibold">wertvolle digitale Assets</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white hover-glow-cyan">
                <Link href="/contact">
                  <Target className="mr-2 w-5 h-5" />
                  Kostenlose Beratung
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                <Link href="#models">
                  <Users className="mr-2 w-5 h-5" />
                  Modelle vergleichen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Model Selection Tabs */}
      <section id="models" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Wähle dein <span className="text-cyan-400">Partnerschafts-Modell</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Flexibel, transparent und auf deine Bedürfnisse zugeschnitten.
            </p>
          </div>

          {/* Model Tabs */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {partnershipModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setActiveModel(model.id)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-500 group ${
                      activeModel === model.id
                        ? model.color === 'cyan' 
                          ? 'border-cyan-500 bg-cyan-500/10 scale-105' 
                          : model.color === 'purple'
                          ? 'border-purple-500 bg-purple-500/10 scale-105'
                          : 'border-amber-500 bg-amber-500/10 scale-105'
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        model.color === 'cyan' 
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : model.color === 'purple'
                          ? 'bg-purple-500/20 text-purple-400'
                          : 'bg-amber-500/20 text-amber-400'
                      } group-hover:scale-110 transition-transform`}>
                        {model.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold ${
                          activeModel === model.id 
                            ? model.color === 'cyan' ? 'text-cyan-400' 
                            : model.color === 'purple' ? 'text-purple-400'
                            : 'text-amber-400'
                            : 'text-white'
                        }`}>
                          {model.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {model.percentage}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Model Content */}
            <div className="lg:w-2/3">
              {activeModelData && (
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {activeModelData.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {activeModelData.description}
                      </p>
                    </div>
                    <div className={`px-4 py-2 rounded-full border ${
                      activeModelData.color === 'cyan' 
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                        : activeModelData.color === 'purple'
                        ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                    }`}>
                      <span className="font-bold">{activeModelData.percentage}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                        Was ich beitrage
                      </h4>
                      <div className="space-y-3">
                        {activeModelData.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-green-400 mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-purple-400" />
                        Ideal für
                      </h4>
                      <div className="space-y-3">
                        {activeModelData.bestFor.map((item, index) => (
                          <div key={index} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Process & Timeline */}
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-amber-400" />
                      Prozess & Timeline
                    </h4>
                    <div className="space-y-4">
                      {activeModelData.process.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 text-sm font-bold mt-1">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium">{step}</p>
                            <p className="text-gray-400 text-sm mt-1">
                              {activeModelData.timeframe} • {activeModelData.commitment}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className={`${
                      activeModelData.color === 'cyan' 
                        ? 'bg-cyan-600 hover:bg-cyan-500' 
                        : activeModelData.color === 'purple'
                        ? 'bg-purple-600 hover:bg-purple-500'
                        : 'bg-amber-600 hover:bg-amber-500'
                    } border-0 text-white`}>
                      <Link href={`/${activeModelData.id}`}>
                        <ArrowRight className="mr-2 w-4 h-4" />
                        Mehr erfahren
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                      <Link href="/contact">
                        <Target className="mr-2 w-4 h-4" />
                        Kostenlose Beratung
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Bewährte <span className="text-green-400">Erfolgsgeschichten</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Echte Projekte, messbare Ergebnisse.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="opacity-0 bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                  {story.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{story.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{story.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                  <span className="text-green-400 text-sm font-semibold">{story.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center relative overflow-hidden glow-cyan">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Bereit für deine <span className="text-cyan-400">nächste Partnerschaft</span>?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Lass uns in 30 Minuten analysieren, welches Modell am besten zu deinem Projekt passt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 border-0 text-white hover-glow-cyan">
                  <Link href="/contact">
                    <Sparkles className="mr-2 w-5 h-5" />
                    Kostenloses Strategie-Gespräch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Link href="/portfolio">Case Studies ansehen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnershipsPage