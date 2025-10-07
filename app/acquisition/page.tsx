'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  Gem,
  CheckCircle2,
  DollarSign,
  Shield,
  Zap,
  Rocket,
  BarChart3,
  Users,
  Target,
} from 'lucide-react'
import axios from 'axios'
import { Button } from '@/components/ui/button'

const AcquirePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    projectType: '',
    monthlyRevenue: '',
    projectAge: '',
    techStack: '',
    reasonForSelling: '',
    email: '',
  })
  const statsRef = useRef<HTMLDivElement>(null)

  const acquisitionSteps = [
    {
      step: '01',
      title: 'Projekt-Bewertung',
      description: 'Kostenlose Analyse deines Projekts und faire Bewertung',
      icon: <BarChart3 className="w-6 h-6" />,
      details: ['Technische Due Diligence', 'Marktanalyse', 'Wertschätzung'],
    },
    {
      step: '02',
      title: 'Angebot & Deal-Struktur',
      description: 'Transparentes Angebot mit flexiblen Zahlungsoptionen',
      icon: <DollarSign className="w-6 h-6" />,
      details: [
        'Faires Preisangebot',
        'Flexible Zahlungsmodalitäten',
        'Klare Vertragsgestaltung',
      ],
    },
    {
      step: '03',
      title: 'Reibungslose Übergabe',
      description: 'Sorgfältiger Transfer aller Assets und Knowledge',
      icon: <Shield className="w-6 h-6" />,
      details: ['Asset-Transfer', 'Knowledge Sharing', 'Support-Phase'],
    },
    {
      step: '04',
      title: 'Value-Add & Scaling',
      description: 'Ich optimiere und skaliere dein Projekt weiter',
      icon: <TrendingUp className="w-6 h-6" />,
      details: [
        'Technische Optimierung',
        'Growth Strategies',
        'Monetarisierung',
      ],
    },
  ]

  const projectTypes = [
    {
      type: 'saas',
      title: 'SaaS Business',
      description: 'Subscription-basierte Software',
      icon: <TrendingUp className="w-6 h-6" />,
      priceRange: '2-4x Jahresumsatz',
    },
    {
      type: 'content',
      title: 'Content Website',
      description: 'Blogs, News, Informationsseiten',
      icon: <Gem className="w-6 h-6" />,
      priceRange: '20-40x Monatsumsatz',
    },
    {
      type: 'ecommerce',
      title: 'E-Commerce',
      description: 'Online Shops & Marketplaces',
      icon: <DollarSign className="w-6 h-6" />,
      priceRange: '2.5-3.5x Jahresumsatz',
    },
    {
      type: 'mobile',
      title: 'Mobile App',
      description: 'iOS & Android Applications',
      icon: <Zap className="w-6 h-6" />,
      priceRange: '3-5x Jahresumsatz',
    },
  ]

  const successMetrics = [
    { metric: '15+', label: 'Projekte erworben', color: 'text-cyan-400' },
    {
      metric: '200%',
      label: 'Durchschn. Wertsteigerung',
      color: 'text-purple-400',
    },
    { metric: '24-48h', label: 'Erstantwort', color: 'text-amber-400' },
    { metric: '100%', label: 'Transparente Prozesse', color: 'text-green-400' },
  ]

  const reasonsToSell = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Fehlende Zeit',
      description: 'Du hast kein Zeit mehr für das Projekt',
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Fokus-Änderung',
      description: 'Du konzentrierst dich auf andere Projekte',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Skalierungs-Bedarf',
      description: 'Das Projekt braucht mehr Ressourcen',
    },
    {
      icon: <Gem className="w-5 h-5" />,
      title: 'Sofortige Liquidität',
      description: 'Du brauchst Kapital für neue Projekte',
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

  const submitAcquisitionForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await axios.post('/api/acquire', {
        projectType: formData.projectType,
        monthlyRevenue: formData.monthlyRevenue,
        projectAge: formData.projectAge,
        techStack: formData.techStack,
        reasonForSelling: formData.reasonForSelling,
        email: formData.email,
        submittedAt: new Date().toISOString(),
      })

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({
          projectType: '',
          monthlyRevenue: '',
          projectAge: '',
          techStack: '',
          reasonForSelling: '',
          email: '',
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <Gem className="w-4 h-4 mr-2 text-amber-400" />
              <span className="text-sm text-amber-400 font-medium">
                Project Acquisition
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Verkaufe dein Projekt an{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                mich
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Du hast ein laufendes Web-Projekt, aber keine Zeit oder Ressourcen
              es weiterzuführen? Ich kaufe digitale Assets zu fairen Preisen und
              führe sie erfolgreich weiter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 border-0 text-white hover-glow-amber"
              >
                <Link href="#valuation">
                  <DollarSign className="mr-2 w-5 h-5" />
                  Kostenlose Bewertung
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white"
              >
                <Link href="#process">
                  <TrendingUp className="mr-2 w-5 h-5" />
                  Prozess ansehen
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {successMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${item.color} mb-1`}>
                    {item.metric}
                  </div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Welche <span className="text-amber-400">Projekt-Typen</span> kaufe
              ich?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ich erwerbe verschiedene digitale Assets - von SaaS bis Content
              Websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {projectTypes.map((project, index) => (
              <div
                key={project.type}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
                  <span className="text-amber-400 text-sm font-semibold">
                    {project.priceRange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Process */}
      <section
        id="process"
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              So funktioniert der{' '}
              <span className="text-green-400">Verkaufsprozess</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ein transparenter, reibungsloser Prozess von der ersten Bewertung
              bis zur Auszahlung.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Steps */}
            <div className="space-y-8">
              {acquisitionSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 group cursor-pointer"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform border border-green-500/30">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-green-400 font-bold text-lg mb-1">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-3">{step.description}</p>
                    <div className="space-y-2">
                      {step.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Process */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Timeline
              </h3>
              <div className="space-y-6">
                {acquisitionSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all duration-500 ${
                      activeStep === index
                        ? 'border-green-500 bg-green-500/10 scale-105'
                        : 'border-slate-600 bg-slate-700/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`font-semibold ${
                          activeStep === index ? 'text-green-400' : 'text-white'
                        }`}
                      >
                        {step.title}
                      </span>
                      <span className="text-sm text-gray-400">
                        ~
                        {index === 0
                          ? '2-3'
                          : index === 1
                            ? '3-5'
                            : index === 2
                              ? '7-14'
                              : 'Laufend'}{' '}
                        Tage
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Sell */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Gute Gründe für einen{' '}
              <span className="text-amber-400">Verkauf</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Du bist nicht alleine - viele erfolgreiche Gründer verkaufen ihre
              Projekte aus folgenden Gründen:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {reasonsToSell.map((reason, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-amber-400 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation Form Section */}
      <section
        id="valuation"
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {submitStatus === 'success' ? (
              <SuccessMessage />
            ) : (
              <form
                onSubmit={submitAcquisitionForm}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                    <span className="text-amber-400">
                      Kostenlose Projekt-Bewertung
                    </span>
                  </h2>
                  <p className="text-gray-300">
                    Erhalte in 24 Stunden eine erste, unverbindliche Bewertung
                    deines Projekts.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Projekt-Typ
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        handleInputChange('projectType', e.target.value)
                      }
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="saas">SaaS Business</option>
                      <option value="content">Content Website</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="mobile">Mobile App</option>
                      <option value="other">Anderes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Monatlicher Umsatz (€)
                    </label>
                    <select
                      value={formData.monthlyRevenue}
                      onChange={(e) =>
                        handleInputChange('monthlyRevenue', e.target.value)
                      }
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
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
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
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
                      Tech Stack
                    </label>
                    <input
                      type="text"
                      value={formData.techStack}
                      onChange={(e) =>
                        handleInputChange('techStack', e.target.value)
                      }
                      placeholder="z.B. Next.js, React, Node.js..."
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-white mb-2">
                    Deine Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="deine@email.com"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-white mb-2">
                    Grund für den Verkauf
                  </label>
                  <textarea
                    value={formData.reasonForSelling}
                    onChange={(e) =>
                      handleInputChange('reasonForSelling', e.target.value)
                    }
                    placeholder="Erzähl mir mehr über dein Projekt und warum du verkaufen möchtest..."
                    rows={4}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <div className="flex items-center space-x-2 text-red-400">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">Fehler beim Senden</span>
                    </div>
                    <p className="text-red-300 text-sm mt-1">
                      Bitte versuche es erneut oder kontaktiere uns direkt unter{' '}
                      <a href="mailto:info@devdanny.de" className="underline">
                        info@devdanny.de
                      </a>
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 border-0 text-white hover-glow-amber text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Rocket className="mr-2 w-5 h-5" />
                      Kostenlose Bewertung anfordern
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-gray-400 text-sm mt-4">
                  ⚡ Garantierte Antwort innerhalb von 24 Stunden
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border border-amber-500/30 rounded-2xl p-12 text-center relative overflow-hidden glow-amber">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5 animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Bereit für den{' '}
                <span className="text-amber-400">nächsten Schritt</span>?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Egal ob SaaS, Content Website oder E-Commerce - lass uns über
                dein Projekt sprechen und einen fairen Deal finden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-500 border-0 text-white hover-glow-amber"
                >
                  <Link href="#valuation">
                    <DollarSign className="mr-2 w-5 h-5" />
                    Jetzt bewerten lassen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <Link href="/portfolio">
                    <TrendingUp className="mr-2 w-5 h-5" />
                    Erfolgsgeschichten
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

// Erfolgs-Nachricht Komponente
const SuccessMessage = () => (
  <div className="bg-slate-800/50 border border-green-500/30 rounded-2xl p-12 text-center backdrop-blur-sm animate-fade-in-up">
    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
      <CheckCircle2 className="w-10 h-10" />
    </div>

    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
      <span className="text-green-400">Vielen Dank für deine Anfrage!</span>
    </h2>

    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
      Ich habe deine Acquisition-Anfrage erhalten und werde mich innerhalb der
      nächsten
      <span className="text-amber-400 font-semibold"> 24 Stunden </span>
      mit einer ersten Bewertung bei dir melden.
    </p>

    <div className="bg-slate-700/50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Zap className="w-5 h-5 mr-2 text-amber-400" />
        Was passiert jetzt?
      </h3>
      <div className="space-y-3 text-sm text-gray-300">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
          <span>Analyse deiner Projekt-Daten</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
          <span>Markt- und Wettbewerbsanalyse</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
          <span>Erstellung eines fairen Angebots</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
          <span>Persönliche Kontaktaufnahme per Email</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        asChild
        size="lg"
        className="bg-green-600 hover:bg-green-500 border-0 text-white"
      >
        <Link href="/">
          <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
          Zurück zur Startseite
        </Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
      >
        <Link href="/portfolio">
          <TrendingUp className="mr-2 w-5 h-5" />
          Weitere Case Studies
        </Link>
      </Button>
    </div>

    <p className="text-gray-400 text-sm mt-6">
      💡 <strong>Tipp:</strong> Schau schonmal in dein Email-Postfach - ich
      melde mich schnellstmöglich!
    </p>
  </div>
)

export default AcquirePage
