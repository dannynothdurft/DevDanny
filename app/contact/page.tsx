"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2, Shield, Zap, Rocket, Users, TrendingUp, Gem, MessageCircle, Star } from "lucide-react"
import axios from 'axios'
import { Button } from "@/components/ui/button"

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [activeTopic, setActiveTopic] = useState('partnership')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'partnership',
    budget: '',
    timeline: '',
    message: ''
  })
  const statsRef = useRef<HTMLDivElement>(null)

  const contactTopics = [
    {
      id: 'partnership',
      title: '🚀 Partnerships',
      description: 'Equity, Revenue Share oder Acquisition',
      color: 'from-cyan-500 to-blue-500',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'project',
      title: '💼 Projekt-Anfrage', 
      description: 'Spezifisches Web-Projekt entwickeln',
      color: 'from-purple-500 to-pink-500',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 'consulting',
      title: '🎯 Consulting',
      description: 'Technische Beratung & Strategy',
      color: 'from-amber-500 to-orange-500',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'other',
      title: '💬 Sonstiges',
      description: 'Alles andere was du besprechen möchtest',
      color: 'from-green-500 to-emerald-500',
      icon: <MessageCircle className="w-5 h-5" />
    }
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'info@devdanny.de',
      description: 'Antwort innerhalb von 24h',
      link: 'mailto:info@devdanny.de'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon', 
      value: '+49 (0) 155 632 044 47',
      description: 'Mo-Fr 9:00-18:00',
      link: 'tel:+4915563204447'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Standort',
      value: 'Remote · Deutschland',
      description: 'Weltweit verfügbar',
      link: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      value: '< 24 Stunden',
      description: 'Garantierte Antwort',
      link: '#'
    }
  ]

  const successMetrics = [
    { metric: "< 24h", label: "Durchschn. Antwortzeit", color: "text-cyan-400" },
    { metric: "100%", label: "Response Rate", color: "text-purple-400" },
    { metric: "30min", label: "Kostenloses Gespräch", color: "text-amber-400" },
    { metric: "0€", label: "Erstberatung", color: "text-green-400" }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Kontakt aufnehmen",
      description: "Sende uns deine Anfrage mit allen Details",
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      step: "02",
      title: "Kostenloses Gespräch", 
      description: "30-minütiges Kennenlerngespräch vereinbaren",
      icon: <Phone className="w-5 h-5" />
    },
    {
      step: "03",
      title: "Angebot & Strategie",
      description: "Maßgeschneidertes Angebot erhalten",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      step: "04",
      title: "Start & Umsetzung",
      description: "Gemeinsam zum Erfolg starten",
      icon: <Rocket className="w-5 h-5" />
    }
  ]

  const testimonials = [
    {
      name: "Markus Schneider",
      company: "SaaS Startup Founder",
      text: "Danny's Expertise hat unser Projekt gerettet. Innerhalb von 2 Wochen hatten wir ein funktionierendes MVP!",
      rating: 5
    },
    {
      name: "Sarah Weber", 
      company: "E-Commerce Business",
      text: "Die Revenue-Share Partnership hat unseren Umsatz in 3 Monaten verdoppelt. Absolute Empfehlung!",
      rating: 5
    },
    {
      name: "Thomas Müller",
      company: "Tech Entrepreneur",
      text: "Schnelle, professionelle Kommunikation und herausragende technische Lösungen. Perfekter Partner!",
      rating: 5
    }
  ]

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleTopicChange = (topicId: string) => {
    setActiveTopic(topicId)
    handleInputChange('topic', topicId)
  }

  const submitContactForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await axios.post('/api/contact', {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        topic: formData.topic,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        submittedAt: new Date().toISOString()
      })

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          topic: 'partnership',
          budget: '',
          timeline: '',
          message: ''
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
        <span className="text-green-400">Perfekt! Deine Nachricht ist unterwegs</span>
      </h2>
      
      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
        Ich habe deine Nachricht erhalten und werde mich innerhalb der nächsten 
        <span className="text-cyan-400 font-semibold"> 24 Stunden </span> 
        bei dir melden.
      </p>

      <div className="bg-slate-700/50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-cyan-400" />
          Was passiert als nächstes:
        </h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span>Persönliche Antwort per Email</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span>Option für kostenloses 30-minütiges Gespräch</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span>Maßgeschneidertes Angebot basierend auf deinen Needs</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
            <span>Start der Zusammenarbeit</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 border-0 text-white">
          <Link href="/">
            <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
            Zur Startseite
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
          <Link href="/portfolio">
            <TrendingUp className="mr-2 w-5 h-5" />
            Portfolio ansehen
          </Link>
        </Button>
      </div>

      <p className="text-gray-400 text-sm mt-6">
        💡 <strong>Tipp:</strong> Schau schonmal in dein Email-Postfach - ich melde mich schnellstmöglich!
      </p>
    </div>
  )

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} 
      />
    ))
  }

  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <MessageCircle className="w-4 h-4 mr-2 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Kontakt & Beratung</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Lass uns <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">zusammenarbeiten</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Bereit für dein nächstes Projekt? Egal ob Equity-Partnership, Revenue-Share oder spezifische Entwicklung - 
              lass uns in 30 Minuten deine Möglichkeiten besprechen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white hover-glow-cyan">
                <Link href="#contact-form">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                <Link href="tel:+4915563204447">
                  <Phone className="mr-2 w-5 h-5" />
                  Direkt anrufen
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {successMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.metric}</div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Topics */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Wobei kann ich <span className="text-cyan-400">dir helfen</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Wähle dein Anliegen und wir finden die beste Lösung für dich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleTopicChange(topic.id)}
                className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 group ${
                  activeTopic === topic.id
                    ? `border-cyan-500 bg-gradient-to-br ${topic.color}/10 scale-105`
                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:scale-102'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  activeTopic === topic.id 
                    ? `bg-gradient-to-br ${topic.color} text-white` 
                    : 'bg-slate-700 text-gray-400 group-hover:text-white'
                }`}>
                  {topic.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{topic.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Sende mir eine <span className="text-cyan-400">Nachricht</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Erzähl mir von deinem Projekt, deinen Zielen und Herausforderungen. 
                Ich melde mich innerhalb von 24 Stunden mit einer ersten Einschätzung bei dir.
              </p>

              {submitStatus === 'success' ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={submitContactForm} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Dein Name *</label>
                      <input 
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Max Mustermann"
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="deine@email.com"
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Unternehmen</label>
                    <input 
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Dein Unternehmen (optional)"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Budget</label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="">Bitte auswählen</option>
                        <option value="0-5k">0 - 5.000€</option>
                        <option value="5k-15k">5.000€ - 15.000€</option>
                        <option value="15k-50k">15.000€ - 50.000€</option>
                        <option value="50k+">50.000€+</option>
                        <option value="equity">Equity Partnership</option>
                        <option value="revenue">Revenue Share</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Zeitrahmen</label>
                      <select 
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="">Bitte auswählen</option>
                        <option value="asap">So schnell wie möglich</option>
                        <option value="1-3">1-3 Monate</option>
                        <option value="3-6">3-6 Monate</option>
                        <option value="6+">6+ Monate</option>
                        <option value="flexible">Flexibel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Deine Nachricht *</label>
                    <textarea 
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Erzähl mir alles über dein Projekt, deine Ziele und wie ich dir helfen kann..."
                      rows={6}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
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
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white hover-glow-cyan text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Rocket className="mr-2 w-5 h-5" />
                        Nachricht senden
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-gray-400 text-sm">
                    🔒 Deine Daten sind sicher. Wir behandeln sie vertraulich.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div id="info">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Direkt <span className="text-cyan-400">Kontakt</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Du erreichst mich auf verschiedenen Wegen. Wähle was für dich am bequemsten ist.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                      <p className="text-cyan-300 font-semibold mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Process Steps */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Unser Prozess</h3>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-cyan-400 font-bold text-sm mb-1">{step.step}</div>
                        <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Was <span className="text-amber-400">Kunden sagen</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Erfahre warum Kunden die Zusammenarbeit mit mir schätzen.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="opacity-0 bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center relative overflow-hidden glow-cyan">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Bereit für dein <span className="text-cyan-400">nächstes Projekt</span>?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Lass uns in 30 Minuten über deine Idee sprechen und herausfinden wie wir zusammenarbeiten können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 border-0 text-white hover-glow-cyan">
                  <Link href="#contact-form">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Jetzt starten
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Link href="tel:+4915563204447">
                    <Phone className="mr-2 w-5 h-5" />
                    Direkt anrufen
                  </Link>
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                ⚡ Kostenloses 30-minütiges Beratungsgespräch
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage