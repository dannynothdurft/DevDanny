'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Users,
  CheckCircle2,
  Target,
  Rocket,
  Sparkles,
  BarChart3,
  Zap,
  TrendingUp,
  Shield,
} from 'lucide-react'
import axios from 'axios'
import { Button } from '@/components/ui/button'

const EquityPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [activeBenefit, setActiveBenefit] = useState(0)
  const [formData, setFormData] = useState({
    ideaStage: '',
    teamSize: '',
    market: '',
    funding: '',
    email: '',
    projectDescription: '',
  })
  const statsRef = useRef<HTMLDivElement>(null)

  const equityBenefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Technische Expertise',
      description: 'Full-Stack Entwicklung von MVP bis Scale',
      details: [
        'Next.js/React Architecture',
        'Cloud Infrastructure',
        'API Design',
        'Performance Optimization',
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Product Strategy',
      description: 'Von der Idee zum marktfähigen Produkt',
      details: [
        'Product Roadmapping',
        'User Experience Design',
        'Feature Prioritization',
        'Market Fit Analysis',
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth & Scaling',
      description: 'Skalierung und Wachstumsstrategien',
      details: [
        'User Acquisition',
        'Monetization Models',
        'Analytics Setup',
        'Conversion Optimization',
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Technical Leadership',
      description: 'Aufbau und Führung des Tech-Teams',
      details: [
        'Team Building',
        'Code Reviews',
        'Best Practices',
        'Technical Hiring',
      ],
    },
  ]

  const equityProcess = [
    {
      step: '01',
      title: 'Discovery & Fit',
      description: 'Gemeinsame Analyse der Idee und Team-Chemie',
      duration: '1-2 Wochen',
      deliverables: [
        'Ideen-Validation',
        'Marktanalyse',
        'Technische Machbarkeit',
      ],
    },
    {
      step: '02',
      title: 'Equity Structure',
      description: 'Festlegung der Beteiligungen und Verantwortlichkeiten',
      duration: '1 Woche',
      deliverables: [
        'Equity Agreement',
        'Vesting Schedule',
        'Roles & Responsibilities',
      ],
    },
    {
      step: '03',
      title: 'MVP Development',
      description: 'Schnelle Entwicklung des Minimum Viable Product',
      duration: '4-8 Wochen',
      deliverables: ['Working MVP', 'User Testing', 'Initial Metrics'],
    },
    {
      step: '04',
      title: 'Scale & Fundraising',
      description: 'Wachstum und Vorbereitung für Investment',
      duration: '6-12 Monate',
      deliverables: ['Product-Market Fit', 'Growth Strategy', 'Investor Deck'],
    },
  ]

  const successStories = [
    {
      title: 'AI SaaS Platform',
      description: 'From concept to 7-figure acquisition in 24 months',
      metrics: '25% Equity → 7-Figure Exit',
      timeframe: '24 Months',
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: 'E-Commerce Tool',
      description: 'Scaled to 10k+ users and profitable revenue',
      metrics: '30% Equity → 5x ROI',
      timeframe: '18 Months',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'Mobile App Startup',
      description: 'Built and launched with 50k+ downloads',
      metrics: '20% Equity → Funding Ready',
      timeframe: '12 Months',
      icon: <Rocket className="w-6 h-6" />,
    },
  ]

  const idealFor = [
    {
      icon: '🚀',
      title: 'Non-Technical Founders',
      description:
        'Du hast die Vision und das Domain-Knowhow, brauchst aber technische Umsetzung',
    },
    {
      icon: '💡',
      title: 'Idea Stage Startups',
      description:
        'Du bist in der Konzeptphase und brauchst einen Tech-Co-Founder von Anfang an',
    },
    {
      icon: '🔄',
      title: 'Pivot Projects',
      description:
        'Dein bestehendes Projekt braucht neue technische Richtung oder Skalierung',
    },
    {
      icon: '👥',
      title: 'First Technical Hire',
      description:
        'Du suchst deinen ersten CTO/Technischen Leiter als Equity-Partner',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const submitEquityForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await axios.post('/api/equity', {
        ideaStage: formData.ideaStage,
        teamSize: formData.teamSize,
        market: formData.market,
        funding: formData.funding,
        email: formData.email,
        projectDescription: formData.projectDescription,
        submittedAt: new Date().toISOString(),
      })

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({
          ideaStage: '',
          teamSize: '',
          market: '',
          funding: '',
          email: '',
          projectDescription: '',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const SuccessMessage = () => (
    <div className="bg-slate-800/50 border border-green-500/30 rounded-2xl p-12 text-center backdrop-blur-sm animate-fade-in-up">
      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
        <span className="text-green-400">
          Perfekt! Lass uns deine Idee besprechen
        </span>
      </h2>

      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
        Ich habe deine Equity-Partnership Anfrage erhalten und werde mich
        innerhalb der nächsten
        <span className="text-cyan-400 font-semibold"> 24 Stunden </span>
        für ein erstes Kennenlerngespräch bei dir melden.
      </p>

      <div className="bg-slate-700/50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-cyan-400" />
          Was du erwarten kannst:
        </h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span>30-minütiges Strategie-Gespräch</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span>Erste Einschätzung deiner Idee</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span>Diskussion möglicher Equity-Strukturen</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span>Nächste Schritte für dein Projekt</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="bg-cyan-600 hover:bg-cyan-500 border-0 text-white"
        >
          <Link href="/partnerships">
            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
            Zu allen Partnerschaften
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
        >
          <Link href="/portfolio">
            <TrendingUp className="mr-2 w-5 h-5" />
            Erfolgsgeschichten
          </Link>
        </Button>
      </div>
    </div>
  )

  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <Users className="w-4 h-4 mr-2 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">
                Equity Partnership
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tech-Co-Founder
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Du hast eine großartige Idee, aber fehlst die technische
              Expertise? Ich werde dein Equity-Partner und baue dein Produkt von
              0 auf - mit{' '}
              <span className="text-cyan-400 font-semibold">
                20-40% Beteiligung
              </span>{' '}
              am Erfolg.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-0 text-white hover-glow-cyan"
              >
                <Link href="#apply">
                  <Target className="mr-2 w-5 h-5" />
                  Jetzt bewerben
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
              >
                <Link href="#benefits">
                  <BarChart3 className="mr-2 w-5 h-5" />
                  Mehr erfahren
                </Link>
              </Button>
            </div>

            {/* Equity Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                {
                  value: '20-40%',
                  label: 'Equity Beteiligung',
                  color: 'text-cyan-400',
                },
                {
                  value: '6-24',
                  label: 'Monate Engagement',
                  color: 'text-blue-400',
                },
                {
                  value: '30+',
                  label: 'Partnerschaften',
                  color: 'text-purple-400',
                },
                {
                  value: '7-Stellig',
                  label: 'Bester Exit',
                  color: 'text-green-400',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${item.color} mb-1`}>
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Perfekt für{' '}
              <span className="text-cyan-400">ambitionierte Gründer</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Diese Equity-Partnership ist ideal für Gründer in folgenden
              Situationen:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {idealFor.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        id="benefits"
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Was ich als <span className="text-cyan-400">Tech-Partner</span>{' '}
              beitrage
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Mehr als nur Code - eine komplette technische Partnerschaft für
              deinen Erfolg.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits List */}
            <div className="space-y-6">
              {equityBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                    activeBenefit === index
                      ? 'border-cyan-500 bg-cyan-500/10 scale-105'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                  onMouseEnter={() => setActiveBenefit(index)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-cyan-300 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {benefit.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Benefits */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Dein {equityBenefits[activeBenefit]?.title} Partner
              </h3>
              <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-cyan-400">
                    {equityBenefits[activeBenefit]?.icon}
                  </div>
                  <p className="text-cyan-300 font-semibold">
                    {equityBenefits[activeBenefit]?.description}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Engagement</span>
                  <span className="text-cyan-400">Vollzeit-Partnership</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Commitment</span>
                  <span className="text-cyan-400">6-24 Monate</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Equity Range</span>
                  <span className="text-cyan-400">20-40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Unser <span className="text-cyan-400">Partnership-Prozess</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ein transparenter Weg von der ersten Idee bis zum erfolgreichen
              Launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {equityProcess.map((step, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-3">
                  <span className="text-cyan-400 text-xs font-semibold">
                    {step.duration}
                  </span>
                </div>
                <div className="space-y-2">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="text-xs text-gray-400">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Equity <span className="text-green-400">Erfolgsgeschichten</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Echte Projekte, messbare Ergebnisse durch Equity-Partnerships.
            </p>
          </div>

          <div
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {successStories.map((story, index) => (
              <div
                key={index}
                className="opacity-0 bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform">
                  {story.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {story.description}
                </p>
                <div className="space-y-2">
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                    <span className="text-green-400 text-sm font-semibold">
                      {story.metrics}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Zeitraum: {story.timeframe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {submitStatus === 'success' ? (
              <SuccessMessage />
            ) : (
              <form
                onSubmit={submitEquityForm}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                    <span className="text-cyan-400">
                      Bewirb dich für Equity-Partnership
                    </span>
                  </h2>
                  <p className="text-gray-300">
                    Erzähl mir von deiner Idee und lass uns herausfinden ob wir
                    zusammenpassen.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      In welcher Phase ist deine Idee?
                    </label>
                    <select
                      value={formData.ideaStage}
                      onChange={(e) =>
                        handleInputChange('ideaStage', e.target.value)
                      }
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="concept">Konzept/Idee</option>
                      <option value="prototype">Prototype/MVP</option>
                      <option value="early-users">Frühe Nutzer</option>
                      <option value="revenue">Bereits Umsatz</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Team-Größe
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) =>
                        handleInputChange('teamSize', e.target.value)
                      }
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="solo">Alleiniger Gründer</option>
                      <option value="2">2 Gründer</option>
                      <option value="3">3+ Gründer</option>
                      <option value="team">Bestehendes Team</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Zielmarkt/Industrie
                    </label>
                    <input
                      type="text"
                      value={formData.market}
                      onChange={(e) =>
                        handleInputChange('market', e.target.value)
                      }
                      placeholder="z.B. SaaS, E-Commerce, Healthcare..."
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Funding Status
                    </label>
                    <select
                      value={formData.funding}
                      onChange={(e) =>
                        handleInputChange('funding', e.target.value)
                      }
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="bootstrapped">Bootstrapped</option>
                      <option value="pre-seed">Pre-Seed</option>
                      <option value="seed">Seed Funding</option>
                      <option value="series-a">Series A+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-white mb-2">
                    Deine Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="deine@email.com"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-white mb-2">
                    Beschreibe deine Idee/Projekt
                  </label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) =>
                      handleInputChange('projectDescription', e.target.value)
                    }
                    placeholder="Erzähl mir alles über deine Vision, das Problem das du lösen willst, und warum du denkst dass wir gut zusammenpassen..."
                    rows={5}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <div className="flex items-center space-x-2 text-red-400">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">Fehler beim Senden</span>
                    </div>
                    <p className="text-red-300 text-sm mt-1">
                      Bitte versuche es erneut oder kontaktiere uns direkt.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-0 text-white hover-glow-cyan text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Users className="mr-2 w-5 h-5" />
                      Für Equity-Partnership bewerben
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-gray-400 text-sm mt-4">
                  ⚡ Antwort innerhalb von 24 Stunden - Kostenlos &
                  unverbindlich
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center relative overflow-hidden glow-cyan">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Bereit für deinen{' '}
                <span className="text-cyan-400">nächsten Tech-Partner</span>?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Egal ob Idee, Prototype oder scaling-phase - lass uns über
                Equity-Partnership sprechen und gemeinsam etwas Großartiges
                aufbauen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-500 border-0 text-white hover-glow-cyan"
                >
                  <Link href="#apply">
                    <Target className="mr-2 w-5 h-5" />
                    Jetzt bewerben
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <Link href="/partnerships">
                    <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                    Andere Modelle
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EquityPage
