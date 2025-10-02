"use client";

import { useState } from "react";
import ProjectCard from "@/components/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("own");

  const ownProjects = [
    {
      title: "Iconfy",
      description:
        "Der einfachste Weg, perfekte App-Icons zu erstellen. Von Entwicklern für Entwickler.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Clerk"],
    },
  ];

  const clientProjects = [
    {
      title: "Barbara Rembisz Autoaufbereitung | Hamburg",
      description:
        "Professionelle Autoaufbereitung in Hamburg – Glanz, Sauberkeit und Werterhalt mit Leidenschaft und Präzision.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Nodemailer"],
    },
  ];

  const partnerships = [
    {
      title: "Protein Crew",
      description: "Kochrezepte der Influencer",
      technologies: ["Next.js", "React", "MDX", "Tailwind CSS", "Node.js"],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Eine Auswahl meiner Projekte - von eigenen Entwicklungen über
            Kundenaufträge bis hin zu Partnerschaften.
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
  );
}
