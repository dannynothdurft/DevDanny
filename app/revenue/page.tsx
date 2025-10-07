'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Calendar,
  DollarSign,
  Rocket,
  Sparkles,
  BarChart3,
  Zap,
  Gem,
  Shield,
  Target,
} from 'lucide-react'
import axios from 'axios'
import { Button } from '@/components/ui/button'

const RevenuePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [activeFeature, setActiveFeature] = useState(0)
  const [formData, setFormData] = useState({
    projectType: '',
    monthlyRevenue: '',
    projectAge: '',
    growthGoals: '',
    email: '',
    challenges: '',
  })
  const statsRef = useRef<HTMLDivElement>(null)

  const revenueFeatures = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Revenue Optimization',
      description: 'Maximiere deine Einnahmen durch bessere Monetarisierung',
      details: [
        'Pricing Strategy',
        'Conversion Optimization',
        'Upsell Opportunities',
        'Revenue Analytics',
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Boost',
      description: 'Technische Optimierung für bessere Performance',
      details: [
        'Speed Optimization',
        'Infrastructure Scaling',
        'Technical Debt Reduction',
        'API Performance',
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Growth Strategy',
      description:
        'Systematisches Wachstum durch datengetriebene Entscheidungen',
      details: [
        'User Acquisition',
        'Retention Strategies',
        'A/B Testing',
        'Growth Metrics',
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Scalable Architecture',
      description: 'Vorbereitung für exponentielles Wachstum',
      details: [
        'Cloud Infrastructure',
        'Database Optimization',
        'Caching Strategies',
        'Load Balancing',
      ],
    },
  ]

  const revenueProcess = [
    {
      step: '01',
      title: 'Revenue Analysis',
      description:
        'Detaillierte Analyse deiner aktuellen Einnahmen und Potenziale',
      duration: '1-2 Wochen',
      deliverables: [
        'Revenue Audit',
        'Growth Opportunities',
        'Technical Assessment',
      ],
    },
    {
      step: '02',
      title: 'Share Agreement',
      description: 'Festlegung der Revenue Share Struktur und Ziele',
      duration: '1 Woche',
      deliverables: [
        'Revenue Share Contract',
        'Performance Metrics',
        'Success Criteria',
      ],
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Umsetzung der Optimierungen und Growth-Strategien',
      duration: '2-8 Wochen',
      deliverables: [
        'Technical Improvements',
        'Growth Initiatives',
        'Performance Boost',
      ],
    },
    {
      step: '04',
      title: 'Growth & Scaling',
      description: 'Kontinuierliche Optimierung und Revenue-Steigerung',
      duration: '3-12 Monate',
      deliverables: [
        'Revenue Growth',
        'Scaled Infrastructure',
        'Optimized Performance',
      ],
    },
  ]

  const successStories = [
    {
      title: 'SaaS Platform',
      description: 'Revenue von 2k auf 15k/Monat in 6 Monaten gesteigert',
      metrics: '25% Revenue Share → 7.5x Growth',
      timeframe: '6 Months',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'E-Commerce Store',
      description: 'Conversion Rate von 1.2% auf 3.8% optimiert',
      metrics: '30% Revenue Share → 3.2x Conversions',
      timeframe: '4 Months',
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: 'Content Website',
      description: 'Monetarisierung von 500€ auf 3.500€/Monat skaliert',
      metrics: '20% Revenue Share → 7x Revenue',
      timeframe: '5 Months',
      icon: <Gem className="w-6 h-6" />,
    },
  ]

  const revenueModels = [
    {
      range: '500€ - 2.000€',
      share: '30-40%',
      description: 'Für Projekte mit niedrigem aber stabilen Revenue',
      bestFor: [
        'Early-stage Projekte',
        'Stabile aber niedrige Einnahmen',
        'Wachstumspotenzial',
      ],
    },
    {
      range: '2.000€ - 5.000€',
      share: '20-30%',
      description: 'Für etablierte Projekte mit Wachstumsambitionen',
      bestFor: [
        'Etablierte Businesses',
        'Skalierungs-Bedarf',
        'Technische Optimierung',
      ],
    },
    {
      range: '5.000€+',
      share: '10-20%',
      description: 'Für erfolgreiche Projekte die weiter wachsen wollen',
      bestFor: [
        'Erfolgreiche Unternehmen',
        'Weiteres Wachstum',
        'Performance-Optimierung',
      ],
    },
  ]

  const idealFor = [
    {
      icon: '📈',
      title: 'Plateau Projects',
      description: 'Dein Projekt wächst nicht mehr wie gewünscht',
    },
    {
      icon: '⚡',
      title: 'Technical Limitations',
      description: 'Technische Einschränkungen hindern dein Wachstum',
    },
    {
      icon: '🎯',
      title: 'Focus Shift',
      description: 'Du möchtest dich auf andere Bereiche konzentrieren',
    },
    {
      icon: '🚀',
      title: 'Rapid Scaling',
      description: 'Du brauchst Expertise für schnelles Wachstum',
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

  const submitRevenueForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await axios.post('/api/revenue', {
        projectType: formData.projectType,
        monthlyRevenue: formData.monthlyRevenue,
        projectAge: formData.projectAge,
        growthGoals: formData.growthGoals,
        email: formData.email,
        challenges: formData.challenges,
        submittedAt: new Date().toISOString(),
      })

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({
          projectType: '',
          monthlyRevenue: '',
          projectAge: '',
          growthGoals: '',
          email: '',
          challenges: '',
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
          Perfekt! Lass uns dein Revenue optimieren
        </span>
      </h2>

      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
        Ich habe deine Revenue-Share Anfrage erhalten und werde mich innerhalb
        der nächsten
        <span className="text-purple-400 font-semibold"> 24 Stunden </span>
        mit einer ersten Analyse bei dir melden.
      </p>

      <div className="bg-slate-700/50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
          Was als nächstes passiert:
        </h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
            <span>Detaillierte Revenue-Analyse</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
            <span>Erste Wachstums-Opportunitäten</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
            <span>Revenue-Share Struktur Vorschlag</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
            <span>Kostenloses Strategie-Gespräch</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="bg-purple-600 hover:bg-purple-500 border-0 text-white"
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
              <DollarSign className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">
                Revenue Share Partnership
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Steigere dein{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Revenue
              </span>{' '}
              mit mir
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Du hast ein laufendes Projekt mit Revenue, aber es wächst nicht
              mehr wie gewünscht? Ich optimiere und skaliere dein Business - du
              behältst die Ownership, ich partizipiere am{' '}
              <span className="text-purple-400 font-semibold">
                zusätzlichen Wachstum
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 text-white hover-glow-purple"
              >
                <Link href="#apply">
                  <Target className="mr-2 w-5 h-5" />
                  Jetzt analysieren
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <Link href="#models">
                  <BarChart3 className="mr-2 w-5 h-5" />
                  Modelle ansehen
                </Link>
              </Button>
            </div>

            {/* Revenue Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                {
                  value: '10-40%',
                  label: 'Revenue Share',
                  color: 'text-purple-400',
                },
                {
                  value: '3-12',
                  label: 'Monate Laufzeit',
                  color: 'text-pink-400',
                },
                {
                  value: '200%+',
                  label: 'Durchschn. Wachstum',
                  color: 'text-green-400',
                },
                { value: '0€', label: 'Vorab-Kosten', color: 'text-blue-400' },
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

      {/* Revenue Models */}
      <section id="models" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Flexible{' '}
              <span className="text-purple-400">Revenue-Share Modelle</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Unterschiedliche Modelle basierend auf deinem aktuellen Revenue
              und Wachstumszielen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {revenueModels.map((model, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {model.range} MRR
                </h3>
                <div className="inline-flex items-center px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
                  <span className="text-purple-400 text-sm font-semibold">
                    {model.share} Revenue Share
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {model.description}
                </p>
                <div className="space-y-2">
                  {model.bestFor.map((item, i) => (
                    <div key={i} className="text-xs text-gray-400">
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Ideal für{' '}
              <span className="text-purple-400">diese Situationen</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Revenue-Share Partnerships sind perfekt wenn du in einer dieser
              Situationen bist:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {idealFor.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group"
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

      {/* Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Was ich für dein <span className="text-purple-400">Revenue</span>{' '}
              tue
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Komplette Revenue-Optimierung von technischen Verbesserungen bis
              zu Wachstumsstrategien.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Features List */}
            <div className="space-y-6">
              {revenueFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                    activeFeature === index
                      ? 'border-purple-500 bg-purple-500/10 scale-105'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-purple-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Features */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {revenueFeatures[activeFeature]?.title} Impact
              </h3>
              <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-400">
                    {revenueFeatures[activeFeature]?.icon}
                  </div>
                  <p className="text-purple-300 font-semibold">
                    {revenueFeatures[activeFeature]?.description}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Typische Impact</span>
                  <span className="text-green-400">20-100% Revenue Boost</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Zeitrahmen</span>
                  <span className="text-purple-400">2-8 Wochen</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Engagement</span>
                  <span className="text-purple-400">Projektbasiert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Unser{' '}
              <span className="text-green-400">Revenue-Share Prozess</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ein transparenter Weg von der Analyse bis zur Revenue-Steigerung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {revenueProcess.map((step, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full mb-3">
                  <span className="text-green-400 text-xs font-semibold">
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
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Revenue <span className="text-green-400">Erfolgsgeschichten</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Echte Projekte, messbare Revenue-Steigerungen durch
              Share-Partnerships.
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
      <section
        id="apply"
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {submitStatus === 'success' ? (
              <SuccessMessage />
            ) : (
              <form
                onSubmit={submitRevenueForm}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                    <span className="text-purple-400">
                      Kostenlose Revenue-Analyse
                    </span>
                  </h2>
                  <p className="text-gray-300">
                    Erhalte in 24 Stunden eine erste Analyse deines
                    Revenue-Potenzials.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Projekt-Typ
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        handleInputChange('projectType', e.target.value)
                      }
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="saas">SaaS Business</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="content">Content Website</option>
                      <option value="mobile">Mobile App</option>
                      <option value="other">Anderes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Aktueller Monatsumsatz (€)
                    </label>
                    <select
                      value={formData.monthlyRevenue}
                      onChange={(e) =>
                        handleInputChange('monthlyRevenue', e.target.value)
                      }
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="0-500">0 - 500€</option>
                      <option value="500-2000">500€ - 2.000€</option>
                      <option value="2000-5000">2.000€ - 5.000€</option>
                      <option value="5000-10000">5.000€ - 10.000€</option>
                      <option value="10000+">10.000€+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Projekt-Alter
                    </label>
                    <select
                      value={formData.projectAge}
                      onChange={(e) =>
                        handleInputChange('projectAge', e.target.value)
                      }
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="0-6">0-6 Monate</option>
                      <option value="6-12">6-12 Monate</option>
                      <option value="1-2">1-2 Jahre</option>
                      <option value="2-5">2-5 Jahre</option>
                      <option value="5+">5+ Jahre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Wachstums-Ziele
                    </label>
                    <select
                      value={formData.growthGoals}
                      onChange={(e) =>
                        handleInputChange('growthGoals', e.target.value)
                      }
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="2x">2x Revenue (Verdopplung)</option>
                      <option value="3x">3x Revenue</option>
                      <option value="5x">5x Revenue</option>
                      <option value="10x">10x+ Revenue</option>
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
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-white mb-2">
                    Aktuelle Herausforderungen
                  </label>
                  <textarea
                    value={formData.challenges}
                    onChange={(e) =>
                      handleInputChange('challenges', e.target.value)
                    }
                    placeholder="Beschreibe deine aktuellen Herausforderungen, was du gerne verbessern würdest, und warum du denkst dass Revenue-Share helfen könnte..."
                    rows={4}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
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
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 text-white hover-glow-purple text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="mr-2 w-5 h-5" />
                      Kostenlose Revenue-Analyse
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
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 border border-purple-500/30 rounded-2xl p-12 text-center relative overflow-hidden glow-purple">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Bereit für <span className="text-purple-400">mehr Revenue</span>
                ?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Egal ob SaaS, E-Commerce oder Content - lass uns über
                Revenue-Share sprechen und dein Business auf das nächste Level
                bringen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-500 border-0 text-white hover-glow-purple"
                >
                  <Link href="#apply">
                    <DollarSign className="mr-2 w-5 h-5" />
                    Jetzt analysieren
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

export default RevenuePage
