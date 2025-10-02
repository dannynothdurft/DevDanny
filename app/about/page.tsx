"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Palette, Search, TrendingUp, Zap } from "lucide-react"

export default function AboutPage() {
  const skills = [
    { name: "Next.js", icon: <Code className="w-5 h-5" />, level: 95 },
    { name: "React", icon: <Code className="w-5 h-5" />, level: 95 },
    { name: "TypeScript", icon: <Code className="w-5 h-5" />, level: 90 },
    { name: "Node.js", icon: <Database className="w-5 h-5" />, level: 85 },
    { name: "UI/UX Design", icon: <Palette className="w-5 h-5" />, level: 80 },
    { name: "SEO", icon: <Search className="w-5 h-5" />, level: 85 },
    { name: "Marketing", icon: <TrendingUp className="w-5 h-5" />, level: 75 },
    { name: "Performance", icon: <Zap className="w-5 h-5" />, level: 90 },
  ]

  const timeline = [
    {
      year: "2024",
      title: "DevDanny gegründet",
      description: "Start als selbstständiger Webentwickler mit Fokus auf moderne Technologien",
    },
    {
      year: "2023",
      title: "Senior Developer",
      description: "Leitung von Entwicklungsteams und Architektur-Entscheidungen",
    },
    {
      year: "2021",
      title: "Full-Stack Developer",
      description: "Entwicklung komplexer Webanwendungen mit React und Node.js",
    },
    {
      year: "2019",
      title: "Frontend Developer",
      description: "Einstieg in die professionelle Webentwicklung",
    },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Über mich</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hallo! Ich bin Danny Nothdurft, Gründer von DevDanny.
          </p>
        </div>

        {/* About Text */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="border-primary/20 glow-purple">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Als leidenschaftlicher Webentwickler habe ich mich auf moderne, performante Webanwendungen
                spezialisiert. Mit über 5 Jahren Erfahrung in der Branche bringe ich technisches Know-how und kreative
                Lösungsansätze zusammen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Mein Fokus liegt auf der Entwicklung mit <strong className="text-foreground">Next.js</strong>,{" "}
                <strong className="text-foreground">React</strong> und modernen Web-Technologien. Ich lege großen Wert
                auf sauberen Code, beste Performance und herausragende User Experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Neben der reinen Entwicklung berate ich meine Kunden auch in den Bereichen{" "}
                <strong className="text-foreground">SEO</strong>,
                <strong className="text-foreground"> digitales Marketing</strong> und{" "}
                <strong className="text-foreground">Performance-Optimierung</strong>, um ganzheitliche Lösungen zu
                schaffen.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Meine Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-primary">{skill.icon}</div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "PostgreSQL",
              "Supabase",
              "Vercel",
              "Git",
              "Figma",
              "Framer Motion",
              "GSAP",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm px-4 py-2 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Mein Werdegang</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                        {item.year}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
