"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link"
import { Rocket, Target, BarChart3, MessageCircle, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  const processSteps = [
    {
      step: "01",
      title: "Kennenlernen & Analyse",
      description: "Wir besprechen dein Projekt, Ziele und Potenzial. Kostenlose Erstanalyse deiner Möglichkeiten.",
      icon: <MessageCircle className="w-6 h-6" />,
      duration: "1-2 Tage",
      deliverables: ["Kostenlose Analyse", "Potenzial-Bewertung", "Erste Empfehlungen"]
    },
    {
      step: "02",
      title: "Strategie & Deal-Struktur",
      description: "Entwicklung einer maßgeschneiderten Partnerschafts- oder Akquisitions-Strategie.",
      icon: <Target className="w-6 h-6" />,
      duration: "3-5 Tage", 
      deliverables: ["Partnership-Modell", "Wertschöpfungs-Plan", "Exit-Strategie"]
    },
    {
      step: "03",
      title: "Umsetzung & Value-Add",
      description: "Ich bringe die technische Expertise - du das Domain-Knowhow. Gemeinsam zum Erfolg.",
      icon: <Rocket className="w-6 h-6" />,
      duration: "2-8 Wochen",
      deliverables: ["MVP Entwicklung", "Technische Umsetzung", "Quality Assurance"]
    },
    {
      step: "04", 
      title: "Growth & Scaling",
      description: "Kontinuierliche Optimierung, Skalierung und Wertsteigerung deines digitalen Assets.",
      icon: <BarChart3 className="w-6 h-6" />,
      duration: "Laufend",
      deliverables: ["Performance Tracking", "Skalierungs-Plan", "Exit-Vorbereitung"]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            // Trigger step-by-step animation
            const children = Array.from(entry.target.children)
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-slide-in-right")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (stepsRef.current) {
      observer.observe(stepsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-amber-400 animate-pulse" />
            <span className="text-sm text-amber-400 font-medium">4-Schritte Prozess</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Vom ersten Gespräch zum <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">erfolgreichen Exit</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ein transparenter, erprobter Prozess der sicherstellt dass wir maximale Ergebnisse erzielen - 
            <span className="text-amber-400 font-semibold"> ohne Überraschungen</span>.
          </p>
        </div>

        {/* Process Steps with Connecting Lines */}
        <div ref={stepsRef} className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-amber-500/30">
            <div className="absolute inset-0 bg-amber-500/20 animate-pulse"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative text-center lg:text-left"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step Connector - Mobile */}
                <div className="lg:hidden absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-amber-500/30 -bottom-8">
                  <div className={`absolute inset-0 bg-amber-500 transition-all duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>

                {/* Step Card */}
                <div className={`relative p-6 bg-slate-800/50 border rounded-2xl backdrop-blur-sm transition-all duration-500 h-full flex flex-col items-center lg:items-start group-hover:border-amber-500/50 group-hover:bg-slate-800/80 group-hover:-translate-y-2 ${
                  activeStep === index 
                    ? 'border-amber-500/50 scale-105 shadow-lg shadow-amber-500/20' 
                    : 'border-slate-700'
                }`}>
                  
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center text-amber-400 border border-amber-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      activeStep === index ? 'scale-110 rotate-3' : ''
                    }`}>
                      {step.icon}
                    </div>
                    <div className="text-amber-400 font-black text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 text-center lg:text-left group-hover:text-amber-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4 text-center lg:text-left flex-grow">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-amber-400 text-xs font-semibold">⏱️ {step.duration}</span>
                  </div>

                  {/* Expandable Deliverables */}
                  <div className={`space-y-2 w-full transition-all duration-500 overflow-hidden ${
                    activeStep === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wide text-left">
                      Deliverables:
                    </div>
                    {step.deliverables.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center text-sm text-gray-300 text-left transition-all duration-300 transform hover:translate-x-1"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Hover Indicator */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    activeStep === index ? 'opacity-100 animate-ping' : ''
                  }`}></div>
                </div>

                {/* Step Progress Line - Desktop */}
                <div className="hidden lg:block absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-amber-500/30">
                  <div className={`h-full bg-amber-500 transition-all duration-1000 ${
                    activeStep !== null && activeStep >= index ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center text-gray-400 mb-6">
            <div className="w-8 h-px bg-gray-600 mr-4"></div>
            <span className="text-sm">Bereit für den ersten Schritt?</span>
            <div className="w-8 h-px bg-gray-600 ml-4"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 border-0 text-white hover-glow-amber">
              <Link href="/contact">
                <MessageCircle className="w-4 h-4 mr-2" />
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white">
              <Link href="/portfolio">
                Erfolgsgeschichten ansehen
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ⚡ In 30 Minuten analysieren wir dein Potenzial
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection