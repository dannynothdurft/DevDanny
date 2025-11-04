'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Rocket,
  Zap,
  Target,
  Users,
  TrendingUp,
  Code,
  Gem,
  Sparkles,
  MessageCircle,
  Clock,
  MapPin,
  Mail,
  Calendar,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const AboutPage = () => {
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [activeValue, setActiveValue] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)

  const timeline = [
    {
      year: '2021',
      title: 'Career Switch & Ausbildung',
      description:
        'Umschulung zum Webentwickler bei DCI Digital Career Institute',
      milestones: [
        'Full-Stack Web Development Kurs',
        'HTML/CSS/JavaScript Grundlagen',
        'Erste React/Node.js Erfahrungen',
      ],
    },
    {
      year: '22-23',
      title: 'Erste Berufserfahrung @ SugarShape',
      description: 'Frontend Developer bei einem E-Commerce Startup',
      milestones: [
        'Shopify Theme Development',
        'Kundenprojekte Umsetzung',
        'UI/UX Optimierungen',
      ],
    },
    {
      year: '23-24',
      title: 'Professional Growth @ CuraSoft',
      description: 'Full-Stack Entwickler in einem Healthcare Tech Unternehmen',
      milestones: [
        'Next.js & TypeScript Projekte',
        'Backend-APIs Entwicklung',
        'Agile Teamarbeit',
      ],
    },
    {
      year: '21-25',
      title: 'Side Projects & Freelance',
      description: 'Parallele Entwicklung eigener Projekte und Kundenaufträge',
      milestones: [
        'Eigene Web-Projekte',
        'Freelance Development',
        'Continuous Learning',
      ],
    },
    {
      year: '2025',
      title: 'Full Focus: Tech Partnerships',
      description:
        'Vollständiger Fokus auf eigene Projekte, Kooperationen und Acquisitions',
      milestones: [
        'Equity Partnerships',
        'Project Acquisitions',
        'Revenue Share Models',
        'Digital Assets Building',
      ],
    },
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Result-Driven',
      description:
        'Ich messe Erfolg an messbaren Ergebnissen, nicht an aufgewendeten Stunden.',
      principles: [
        'KPI-basiert arbeiten',
        'Transparente Metriken',
        'Kläre Ziele vor Start',
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Efficiency First',
      description:
        'Intelligente Lösungen die skalieren und langfristig wertvoll sind.',
      principles: [
        'Automation über Manpower',
        'Skalierbare Architekturen',
        'Future-Proof Solutions',
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partnership Mindset',
      description:
        'Ich werde Teil deines Erfolgs, nicht nur ein externer Dienstleister.',
      principles: [
        'Langefristige Beziehungen',
        'Gemeinsames Wachstum',
        'Transparente Kommunikation',
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Continuous Growth',
      description:
        'Ständige Verbesserung durch Lernen und Anpassung an neue Technologien.',
      principles: ['Always Learning', 'Adapt to Change', 'Innovation Driven'],
    },
  ]

  const skills = [
    {
      category: 'Frontend Development',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      level: 95,
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: 'Backend & DevOps',
      technologies: ['Node.js', 'MongoDB', 'Vercel', 'AWS', 'Docker'],
      level: 88,
      icon: <Zap className="w-6 h-6" />,
    },
    {
      category: 'Product Strategy',
      technologies: [
        'Product Roadmapping',
        'UX/UI Design',
        'Growth Hacking',
        'Analytics',
      ],
      level: 85,
      icon: <Target className="w-6 h-6" />,
    },
    {
      category: 'Business Development',
      technologies: [
        'Equity Structures',
        'Revenue Models',
        'Exit Strategies',
        'Investor Relations',
      ],
      level: 82,
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ]

  const stats = [
    {
      metric: '30+',
      label: 'Abgeschlossene Partnerschaften',
      color: 'text-cyan-400',
    },
    { metric: '15+', label: 'Gekaufte Projekte', color: 'text-purple-400' },
    {
      metric: '200%',
      label: 'Durchschn. Wertsteigerung',
      color: 'text-amber-400',
    },
    { metric: '5.8x', label: 'Durchschn. ROI', color: 'text-green-400' },
  ]

  const personalInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Remote · Deutschland',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Verfügbarkeit',
      value: 'Neue Partnerships',
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Erreichbar',
      value: 'Mo-Fr, 9:00-18:00',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Antwortzeit',
      value: '< 24 Stunden',
    },
  ]

  const workingStyle = [
    {
      phase: 'Discovery',
      title: 'Tiefgehende Analyse',
      description:
        'Verstehen des Problems, Marktanalyse und Potenzial-Bewertung',
      duration: '1-2 Wochen',
    },
    {
      phase: 'Strategy',
      title: 'Maßgeschneiderter Plan',
      description:
        'Entwicklung einer klaren Strategie mit messbaren Meilensteinen',
      duration: '1 Woche',
    },
    {
      phase: 'Execution',
      title: 'Schnelle Umsetzung',
      description: 'Agile Entwicklung mit regelmäßigen Updates und Anpassungen',
      duration: 'Variabel',
    },
    {
      phase: 'Growth',
      title: 'Skalierung & Optimierung',
      description: 'Kontinuierliche Verbesserung und Wachstums-Strategien',
      duration: 'Laufend',
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

  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">
                  Über mich
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Vom Code zum{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                  Business-Erfolg
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ich bin Danny -{' '}
                <span className="text-purple-400 font-semibold">
                  Tech-Partner, Investor und Digital Asset Builder
                </span>
                . Meine Mission ist es, ambitionierte Gründer dabei zu
                unterstützen, ihre Visionen in profitable digitale Assets zu
                verwandeln.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 text-white hover-glow-purple"
                >
                  <Link href="/contact">
                    <Users className="mr-2 w-5 h-5" />
                    Partnership starten
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                >
                  <Link href="/portfolio">
                    <TrendingUp className="mr-2 w-5 h-5" />
                    Portfolio ansehen
                  </Link>
                </Button>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">
                        {info.label}
                      </div>
                      <div className="text-gray-400 text-sm">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <Image
                      src="/lucy.png"
                      alt="Lucy the Fuchs"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Danny</h3>
                  <p className="text-purple-300 font-semibold">
                    Tech Partner & Investor
                  </p>
                </div>

                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-300 text-sm">
                        {stat.label}
                      </span>
                      <span className={`font-bold ${stat.color}`}>
                        {stat.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                <Code className="w-4 h-4" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 border border-amber-500/30">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Timeline */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Meine <span className="text-cyan-400">Reise</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Vom leidenschaftlichen Coder zum strategischen Tech-Partner -
              meine Entwicklung über die Jahre.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-500/30 transform translate-x-1/2"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start mb-12 group cursor-pointer"
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center z-10 transition-all duration-500 ${
                      activeTimeline === index
                        ? 'bg-cyan-500 scale-110'
                        : 'bg-slate-700 group-hover:bg-cyan-500/50'
                    }`}
                  >
                    <span
                      className={`font-bold text-lg ${
                        activeTimeline === index
                          ? 'text-white'
                          : 'text-cyan-400 group-hover:text-white'
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-8 flex-1 transition-all duration-500 ${
                      activeTimeline === index ? 'scale-105' : ''
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 ${
                        activeTimeline === index
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-slate-700 bg-slate-800/50 group-hover:border-slate-600'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="space-y-2">
                        {item.milestones.map((milestone, i) => (
                          <div
                            key={i}
                            className="flex items-center text-sm text-cyan-300"
                          >
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            {milestone}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Meine <span className="text-purple-400">Werte</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Die Prinzipien die meine Arbeit und Partnerschaften leiten.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Values List */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                    activeValue === index
                      ? 'border-purple-500 bg-purple-500/10 scale-105'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                  onMouseEnter={() => setActiveValue(index)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {value.title}
                      </h3>
                      <p className="text-purple-300 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {value.principles.map((principle, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {principle}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Values */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {values[activeValue]?.title} in Aktion
              </h3>
              <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-400">
                    {values[activeValue]?.icon}
                  </div>
                  <p className="text-purple-300 font-semibold max-w-md">
                    {values[activeValue]?.description}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold mb-3">
                  Konkrete Umsetzung:
                </h4>
                {values[activeValue]?.principles.map((principle, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Meine <span className="text-amber-400">Expertise</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Technische Fähigkeiten kombiniert mit Business-Strategie für
              maximale Ergebnisse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {skill.category}
                    </h3>
                  </div>
                  <span className="text-amber-400 font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Style */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Meine <span className="text-green-400">Arbeitsweise</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ein strukturierter Prozess der sicherstellt dass wir maximale
              Ergebnisse erzielen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workingStyle.map((phase, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full mb-3">
                  <span className="text-green-400 text-xs font-semibold">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {phase.phase}
                </h3>
                <h4 className="text-green-300 text-sm font-semibold mb-3">
                  {phase.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Warum mit mir{' '}
              <span className="text-cyan-400">zusammenarbeiten</span>?
            </h2>

            <div
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              {[
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: 'Schnelle Ergebnisse',
                  description:
                    'Ich liefern nicht nur Code, sondern messbare Business-Ergebnisse',
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: 'Strategische Partnerschaft',
                  description:
                    'Ich investiere in deinen Erfolg und werde Teil deines Teams',
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Technische Excellence',
                  description:
                    'Modernste Technologien kombiniert mit bewährten Best Practices',
                },
                {
                  icon: <Gem className="w-8 h-8" />,
                  title: 'Langfristiger Wert',
                  description:
                    'Wir bauen nachhaltige Assets, nicht nur kurzfristige Lösungen',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="opacity-0 bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white hover-glow-cyan"
            >
              <Link href="/contact">
                <Users className="mr-2 w-5 h-5" />
                Jetzt Partnership starten
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
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
                Bereit für unsere{' '}
                <span className="text-cyan-400">nächste Erfolgsgeschichte</span>
                ?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Lass uns in 30 Minuten über dein Projekt sprechen und
                herausfinden wie wir gemeinsam etwas Großartiges aufbauen
                können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-500 border-0 text-white hover-glow-cyan"
                >
                  <Link href="/contact">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Kostenloses Gespräch
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

export default AboutPage
