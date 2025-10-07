"use client"
import React, {useEffect, useRef, useState} from 'react'
import Link from "next/link"
import { ArrowRight, TrendingUp, Users, Zap, Gem, Sparkles, Target, Rocket, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const PropositionsSection = () => {
  const statsRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const valueProps = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description: "Ich werde dein Tech-Co-Founder. Nicht nur Code, sondern strategische Partnerschaft mit Equity oder Revenue Share.",
      cta: "Partner werden",
      href: "/partnerships",
      features: ["Equity Beteiligung", "Technische Leitung", "Strategische Beratung", "Langfristiges Engagement"],
      gradient: "from-cyan-500/20 to-blue-500/20",
      color: "cyan"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "App Acquisition", 
      description: "Verkaufe dein Web-Projekt an mich. Ich optimiere, skaliere und führe es weiter - fairer Deal, reibungsloser Übergang.",
      cta: "Projekt verkaufen",
      href: "/acquire",
      features: ["Sofortige Auszahlung", "Fairer Bewertungsprozess", "Reibungslose Übergabe", "Nachhaltige Weiterentwicklung"],
      gradient: "from-purple-500/20 to-pink-500/20",
      color: "purple"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Boost",
      description: "Dein Projekt läuft, aber nicht optimal? Ich mache es schneller, stabiler und profitabler.",
      cta: "Optimieren lassen",
      href: "/contact",
      features: ["Performance Audit", "Technische Optimierung", "Monetarisierungs-Strategie", "Skalierungsplan"],
      gradient: "from-amber-500/20 to-orange-500/20",
      color: "amber"
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Asset Development",
      description: "Gemeinsam bauen wir nicht nur eine Webseite, sondern ein wertvolles digitales Asset für Exit oder Passive Income.",
      cta: "Mehr erfahren",
      href: "/portfolio",
      features: ["Wertsteigerungs-Plan", "Exit-Strategie", "Passive Income Setup", "Asset-Valuation"],
      gradient: "from-emerald-500/20 to-teal-500/20",
      color: "emerald"
    }
  ]

  const colorStyles = {
    cyan: { text: "text-cyan-400", border: "border-cyan-500/50", glow: "hover-glow-cyan", bg: "bg-cyan-500/20" },
    purple: { text: "text-purple-400", border: "border-purple-500/50", glow: "hover-glow-purple", bg: "bg-purple-500/20" },
    amber: { text: "text-amber-400", border: "border-amber-500/50", glow: "hover-glow-amber", bg: "bg-amber-500/20" },
    emerald: { text: "text-emerald-400", border: "border-emerald-500/50", glow: "hover-glow-emerald", bg: "bg-emerald-500/20" }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      const children = statsRef.current.children
      Array.from(children).forEach((child) => observer.observe(child))
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-400 font-medium">Vier Wege zum Erfolg</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Vom Code zum <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">Business-Erfolg</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technische Expertise meets Business-Mindset. Wir erschaffen nicht nur Software, 
            sondern <span className="text-amber-400 font-semibold">wertvolle digitale Assets</span> mit klarer Exit-Strategie.
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {valueProps.map((prop, index) => {
            const colors = colorStyles[prop.color as keyof typeof colorStyles]
            
            return (
              <div
                key={index}
                className="group relative opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${prop.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colors.glow}`} />
                
                {/* Main Card */}
                <div className={`relative p-8 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm transition-all duration-500 group-hover:${colors.border} group-hover:bg-slate-800/80 group-hover:-translate-y-3 h-full flex flex-col ${hoveredCard === index ? 'scale-105' : ''}`}>
                  
                  {/* Animated Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${prop.gradient} rounded-2xl flex items-center justify-center mb-6 ${colors.text} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border ${colors.border}`}>
                    {prop.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                    {prop.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {prop.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-center text-sm text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3 animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    asChild 
                    variant="ghost" 
                    className={`mt-auto ${colors.text} hover:${colors.bg} hover:text-white p-0 h-auto font-semibold group self-start transition-all duration-300 transform hover:scale-105`}
                  >
                    <Link href={prop.href}>
                      {prop.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-2 h-2 ${colors.bg} rounded-full animate-ping`} />
                  </div>
                </div>

                {/* Floating Number */}
                <div className={`absolute -top-3 -left-3 w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center border-2 border-slate-900 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 ${colors.text} font-bold text-sm`}>
                  {index + 1}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center text-gray-400 mb-6">
            <div className="w-8 h-px bg-gray-600 mr-4"></div>
            <span className="text-sm">Nicht sicher welcher Weg der richtige ist?</span>
            <div className="w-8 h-px bg-gray-600 ml-4"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white hover-glow-cyan">
              <Link href="/contact">
                <Target className="w-4 h-4 mr-2" />
                Kostenlose Strategie-Beratung
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-gray-500">
              <Link href="/portfolio">
                <BarChart3 className="w-4 h-4 mr-2" />
                Erfolgs-Cases ansehen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropositionsSection