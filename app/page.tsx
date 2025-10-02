"use client"

import Link from "next/link"
import { ArrowRight, Code, Palette, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) observer.observe(heroRef.current)
    if (skillsRef.current) {
      const children = skillsRef.current.children
      Array.from(children).forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern Development",
      description: "Next.js, React, TypeScript - Moderne Technologien für zukunftssichere Lösungen",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Ansprechende Designs mit Fokus auf Benutzerfreundlichkeit und Ästhetik",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimierte Webseiten für schnelle Ladezeiten und beste User Experience",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "SEO & Marketing",
      description: "Suchmaschinenoptimierung und digitales Marketing für maximale Reichweite",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div ref={heroRef} className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 opacity-0">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm text-primary font-medium">Willkommen bei DevDanny</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-purple-400 bg-clip-text text-transparent">
              Moderne Webentwicklung
            </span>
            <br />
            <span className="text-foreground">für dein Business</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Ich entwickle performante, moderne Webseiten und Anwendungen, die deine Nutzer begeistern und dein Business
            voranbringen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hover-glow-purple group">
              <Link href="/contact">
                Lass uns dein Projekt starten
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">Portfolio ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Was ich biete</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Von der Konzeption bis zum Launch - ich begleite dein Projekt mit modernsten Technologien und Best
              Practices.
            </p>
          </div>

          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="opacity-0 p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover-glow-purple group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 border border-primary/20 rounded-2xl p-12 text-center glow-purple">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bereit für dein nächstes Projekt?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Lass uns gemeinsam etwas Großartiges schaffen. Kontaktiere mich für ein unverbindliches Gespräch.
            </p>
            <Button asChild size="lg" className="hover-glow-purple">
              <Link href="/contact">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
