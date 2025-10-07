"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Shield, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const ImpressumPage = () => {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "E-Mail",
      value: "info@devdanny.de",
      href: "mailto:info@devdanny.de",
      color: "text-cyan-400"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telefon",
      value: "+49 (0) 155 632 044 47",
      href: "tel:+4915563204447",
      color: "text-purple-400"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Adresse",
      value: "Tribünenweg 32, 22111 Hamburg",
      href: "https://maps.google.com/?q=Tribünenweg+32+22111+Hamburg",
      color: "text-amber-400"
    }
  ]

  const legalSections = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Haftungsausschluss",
      content: [
        {
          subtitle: "Haftung für Inhalte:",
          text: "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen."
        },
        {
          subtitle: "Haftung für Links:",
          text: "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen."
        }
      ]
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Urheberrecht",
      content: [
        {
          text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(56,189,248,0.1)_100%)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_95%,rgba(168,85,247,0.1)_100%)] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Impressum
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Rechtliche Informationen und Kontaktdaten gemäß § 5 TMG
          </p>
        </div>

        <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <CardHeader className="relative z-5 pb-6">
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              Angaben gemäß § 5 TMG
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-5 space-y-8">
            {/* Betreiber Section */}
            <div className="group/section">
              <h3 className="font-semibold mb-4 text-lg text-cyan-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover/section:animate-pulse" />
                Betreiber
              </h3>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed">
                  Danny Nothdurft
                  <br />
                  DevDanny
                  <br />
                  Tribünenweg 32
                  <br />
                  22111 Hamburg
                  <br />
                  Deutschland
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="group/section">
              <h3 className="font-semibold mb-4 text-lg text-purple-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full group-hover/section:animate-pulse" />
                Kontakt
              </h3>
              <div className="grid gap-3">
                {contactItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group/item"
                  >
                    <div className={`p-2 rounded-lg bg-slate-700/50 group-hover/item:scale-110 transition-transform duration-300 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">{item.label}</div>
                      <div className={`font-medium ${item.color}`}>{item.value}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover/item:text-cyan-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Umsatzsteuer */}
            <div className="group/section">
              <h3 className="font-semibold mb-4 text-lg text-amber-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full group-hover/section:animate-pulse" />
                Umsatzsteuer-ID
              </h3>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
                  <br />
                  <span className="text-amber-400 font-medium">Wird nachgereicht</span>
                </p>
              </div>
            </div>

            {/* Verantwortlich */}
            <div className="group/section">
              <h3 className="font-semibold mb-4 text-lg text-cyan-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover/section:animate-pulse" />
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h3>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed">
                  Danny Nothdurft
                  <br />
                  Tribünenweg 32
                  <br />
                  22111 Hamburg
                </p>
              </div>
            </div>

            {/* Legal Sections */}
            {legalSections.map((section, index) => (
              <div key={index} className="group/section">
                <h3 className="font-semibold mb-4 text-lg text-purple-400 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full group-hover/section:animate-pulse" />
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                      {'subtitle' in item && (
                        <h4 className="font-semibold text-amber-400 mb-2 text-sm">{item.subtitle}</h4>
                      )}
                      <p className="text-gray-300 leading-relaxed text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Haben Sie Fragen oder benötigen Sie weitere Informationen?
          </p>
          <Button asChild className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white py-6 px-8 rounded-2xl group transform hover:scale-105 transition-all duration-300">
            <a href="mailto:info@devdanny.de">
              <Mail className="mr-3 w-5 h-5 group-hover:animate-bounce" />
              Kontakt aufnehmen
              <ExternalLink className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ImpressumPage