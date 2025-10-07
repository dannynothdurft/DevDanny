'use client'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import {
  TrendingUp,
  Users,
  Gem,
  Clock,
  Target,
  Award,
  Sparkles,
  BarChart3,
} from 'lucide-react'

const SuccessMetricsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [countedMetrics, setCountedMetrics] = useState<number[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const successMetrics = useMemo(
    () => [
      {
        metric: 200,
        label: 'Durchschnittliche Wertsteigerung',
        suffix: '%',
        icon: <TrendingUp className="w-6 h-6" />,
        color: 'from-green-400 to-emerald-400',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/30',
      },
      {
        metric: 30,
        label: 'Abgeschlossene Partnerschaften',
        suffix: '+',
        icon: <Users className="w-6 h-6" />,
        color: 'from-blue-400 to-cyan-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/30',
      },
      {
        metric: 15,
        label: 'Gekaufte & optimierte Projekte',
        suffix: '+',
        icon: <Gem className="w-6 h-6" />,
        color: 'from-purple-400 to-pink-400',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/30',
      },
      {
        metric: 18,
        label: 'Durchschnittliche Haltezeit',
        suffix: ' Monate',
        icon: <Clock className="w-6 h-6" />,
        color: 'from-amber-400 to-orange-400',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/30',
      },
      {
        metric: 5.8,
        label: 'Durchschnittlicher ROI',
        suffix: 'x',
        icon: <Target className="w-6 h-6" />,
        color: 'from-red-400 to-rose-400',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/30',
      },
      {
        metric: 100,
        label: 'Fokus auf langfristigen Erfolg',
        suffix: '%',
        icon: <Award className="w-6 h-6" />,
        color: 'from-cyan-400 to-sky-400',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/30',
      },
    ],
    [],
  )

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Start counting animation
          successMetrics.forEach((item, index) => {
            setTimeout(() => {
              setCountedMetrics((prev) => {
                const newCounts = [...prev]
                newCounts[index] = 0
                return newCounts
              })

              const duration = 2000
              const steps = 60
              const increment = item.metric / steps
              let current = 0

              const timer = setInterval(() => {
                current += increment
                if (current >= item.metric) {
                  current = item.metric
                  clearInterval(timer)
                }
                setCountedMetrics((prev) => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.round(current * 10) / 10
                  return newCounts
                })
              }, duration / steps)
            }, index * 300)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [successMetrics])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Floating Particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-green-400 animate-pulse" />
            <span className="text-sm text-green-400 font-medium">
              Bewährte Track Record
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Zahlen, die{' '}
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              überzeugen
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transparente Metriken aus realen Projekten. Jede Zahl erzählt eine
            Erfolgsgeschichte.
          </p>
        </div>

        {/* Animated Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {successMetrics.map((item, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div
                className={`relative p-6 ${item.bgColor} border ${item.borderColor} rounded-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full flex flex-col items-center text-center`}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                >
                  {item.icon}
                </div>

                <div
                  className={`text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2 transition-all duration-300 min-h-[2.5rem] flex items-center justify-center`}
                >
                  {isVisible ? countedMetrics[index] || 0 : 0}
                  {item.suffix}
                </div>

                <div className="text-sm text-gray-300 leading-tight group-hover:text-white transition-colors duration-300">
                  {item.label}
                </div>

                {isVisible && countedMetrics[index] < item.metric && (
                  <div className="w-full bg-gray-700 rounded-full h-1 mt-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-100`}
                      style={{
                        width: `${(countedMetrics[index] / item.metric) * 100}%`,
                      }}
                    />
                  </div>
                )}

                {isVisible && countedMetrics[index] >= item.metric && (
                  <div className="absolute -top-2 -right-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-slate-900">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                )}
              </div>

              {index < successMetrics.length - 1 && (
                <>
                  <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-600 to-transparent">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 delay-500 ${
                        isVisible && countedMetrics[index] >= item.metric
                          ? 'w-full'
                          : 'w-0'
                      }`}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats Summary */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-sm">6 Erfolgsmetriken</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm">100% Transparent</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-amber-400" />
              <span className="text-sm">Bewährte Ergebnisse</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            Diese Zahlen basieren auf realen Projekten und Partnerschaften.
          </p>
          <button
            onClick={() => window.open('/portfolio', '_self')}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
          >
            <span className="font-semibold">
              Erfolgsgeschichten im Detail ansehen
            </span>
            <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SuccessMetricsSection
