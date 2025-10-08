'use client'
import { useState, useEffect } from 'react'
import ProjectCard from '@/components/project-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Sparkles,
  Rocket,
  Users,
  Code,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('own')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const ownProjects = [
    {
      title: 'Iconfy',
      description:
        'Der einfachste Weg, perfekte App-Icons zu erstellen. Von Entwicklern für Entwickler.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Clerk'],
      href: 'https://www.iconfy.de',
      image: '/iconfy.png',
      status: 'live',
      metrics: '2.5K+ Users',
    },
    {
      title: 'Startseite',
      description:
        'Willkommen auf der Startseite von DevDanny – entdecke innovative Entwickler-Tools, spannende Projekte und Ressourcen.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'SCSS',
        'Nodemailer',
      ],
      href: 'https://startseite.devdanny.de',
      image: '/startseite-devdanny.png',
      status: 'live',
      metrics: '1.8K Visits/Monat',
    },
  ]

  const clientProjects = [
    {
      title: 'Barbara Rembisz Autoaufbereitung',
      description:
        'Professionelle Autoaufbereitung in Hamburg – Glanz, Sauberkeit und Werterhalt mit Leidenschaft und Präzision.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Nodemailer'],
      href: 'https://www.autoaufbereitung-rembisz.de',
      image: '/autoaufbereitung-rembisz.png',
      status: 'live',
      metrics: '40% Conversion',
    },
  ]

  const partnerships = [
    {
      title: 'Protein Crew',
      description:
        'Kochrezepte der Influencer - Eine erfolgreiche Food-Community mit tausenden aktiven Nutzern.',
      technologies: ['Next.js', 'React', 'MDX', 'Tailwind CSS', 'Node.js'],
      href: '#',
      status: 'partnership',
      metrics: '15K+ Members',
    },
  ]

  const stats = [
    {
      value: '20+',
      label: 'Projekte umgesetzt',
      color: 'text-cyan-400',
      icon: '🚀',
    },
    {
      value: '15K+',
      label: 'Nutzer erreicht',
      color: 'text-purple-400',
      icon: '👥',
    },
    {
      value: '40%',
      label: 'Durchschn. Conversion',
      color: 'text-amber-400',
      icon: '📈',
    },
    { value: '99.9%', label: 'Uptime', color: 'text-green-400', icon: '⚡' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(56,189,248,0.1)_100%)] animate-pulse" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_95%,rgba(168,85,247,0.1)_100%)] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Floating Tech Elements */}
      <div className="floating-element absolute top-20 left-10 animate-float">
        <div className="group relative">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500/30 group-hover:scale-110">
            <Code className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>

      <div
        className="floating-element absolute top-40 right-20 animate-float"
        style={{ animationDelay: '2s' }}
      >
        <div className="group relative">
          <div className="w-16 h-16 bg-purple-500/20 rounded-lg border border-purple-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-purple-500/30 group-hover:scale-110">
            <TrendingUp className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="group inline-flex items-center mb-6 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-cyan-500/20 hover:scale-105">
            <Sparkles className="w-5 h-5 mr-3 text-cyan-400 animate-pulse" />
            <span className="text-lg font-semibold text-cyan-400">
              ✨ Portfolio Highlights
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Meine
            </span>
            <br />
            <span className="text-white">Projekte</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Eine Auswahl meiner{' '}
            <span className="text-cyan-400 font-semibold">
              innovativsten Projekte
            </span>{' '}
            - von eigenen Entwicklungen über Kundenaufträge bis hin zu
            strategischen{' '}
            <span className="text-purple-400 font-semibold">
              Partnerschaften
            </span>
            .
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group p-4 rounded-2xl bg-slate-900/50 border border-slate-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-500/30"
              >
                <div
                  className={`text-2xl font-black ${stat.color} mb-2 transition-all duration-300 group-hover:animate-bounce`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium transition-colors duration-300 group-hover:text-white">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-slate-900/50 border border-slate-700 rounded-2xl p-1 backdrop-blur-sm">
            <TabsTrigger
              value="own"
              className="relative data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:border data-[state=active]:border-cyan-500/30 rounded-xl transition-all duration-300"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Eigene Projekte
            </TabsTrigger>
            <TabsTrigger
              value="clients"
              className="relative data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500/20 data-[state=active]:to-orange-500/20 data-[state=active]:border data-[state=active]:border-amber-500/30 rounded-xl transition-all duration-300"
            >
              <Users className="w-4 h-4 mr-2" />
              Kunden Aufträge
            </TabsTrigger>
            <TabsTrigger
              value="partnerships"
              className="relative data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 data-[state=active]:border data-[state=active]:border-purple-500/30 rounded-xl transition-all duration-300"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Partnerschaften
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents with Enhanced Animations */}
          <TabsContent value="own" className="mt-0 space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                🚀 Innovation & Growth
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Eigene Projekte mit Fokus auf skalierbare Technologien und
                nachhaltiges Wachstum.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ownProjects.map((project, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clients" className="mt-0 space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-amber-400 mb-4">
                💼 Kunden Erfolge
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Maßgeschneiderte Lösungen für Unternehmen - von Konzeption bis
                zur erfolgreichen Umsetzung.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {clientProjects.map((project, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="partnerships" className="mt-0 space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-purple-400 mb-4">
                🤝 Strategische Partnerschaften
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Langfristige Kooperationen mit Fokus auf gemeinsamen Erfolg und
                Wachstum.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partnerships.map((project, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-20 p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 border border-cyan-500/20 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit für dein nächstes Projekt?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Lass uns zusammen etwas Großartiges erschaffen. Ob eigenes Projekt,
            Kundenauftrag oder strategische Partnerschaft - ich helfe dir bei
            der Umsetzung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white py-6 px-8 rounded-2xl group transform hover:scale-105 transition-all duration-300"
            >
              <a href="/contact">
                <Rocket className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                Projekt starten
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white py-6 px-8 rounded-2xl group transform hover:scale-105 transition-all duration-300"
            >
              <a href="/partnerships">
                <TrendingUp className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                Partner werden
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
