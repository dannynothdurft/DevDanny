"use client"

import { useState } from "react"
import ProjectCard from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("own")

  const ownProjects = [
    {
      title: "DevDanny Portfolio",
      description: "Moderne Portfolio-Webseite mit Next.js und animierten Effekten",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Task Manager Pro",
      description: "Vollständige Task-Management-Anwendung mit Echtzeit-Updates",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "E-Commerce Platform",
      description: "Skalierbare E-Commerce-Lösung mit Stripe-Integration",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    },
  ]

  const clientProjects = [
    {
      title: "Restaurant Website",
      description: "Moderne Restaurant-Webseite mit Online-Reservierungssystem",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Fitness Studio App",
      description: "Mitgliederverwaltung und Kursbuchungssystem",
      technologies: ["Next.js", "Supabase", "TypeScript", "Stripe"],
    },
    {
      title: "Corporate Website",
      description: "Unternehmenswebseite mit CMS und Blog-Funktionalität",
      technologies: ["Next.js", "Sanity CMS", "React", "Tailwind CSS"],
    },
  ]

  const partnerships = [
    {
      title: "Marketing Agency Collaboration",
      description: "Entwicklung von Landing Pages für verschiedene Kampagnen",
      technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    },
    {
      title: "Design Studio Partnership",
      description: "Umsetzung von Design-Konzepten in funktionale Webseiten",
      technologies: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS"],
    },
    {
      title: "Tech Startup Collaboration",
      description: "MVP-Entwicklung und technische Beratung",
      technologies: ["Next.js", "Supabase", "TypeScript", "Vercel"],
    },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Eine Auswahl meiner Projekte - von eigenen Entwicklungen über Kundenaufträge bis hin zu Partnerschaften.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="own">Eigene Projekte</TabsTrigger>
            <TabsTrigger value="clients">Kunden Aufträge</TabsTrigger>
            <TabsTrigger value="partnerships">Partnerschaften</TabsTrigger>
          </TabsList>

          <TabsContent value="own" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ownProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clients" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="partnerships" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerships.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
