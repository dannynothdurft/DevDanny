'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Mail,
  Phone,
  Shield,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Server,
  GlassesIcon,
  AlertTriangle,
  TrendingUp,
  Search,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const DatenschutzPage = () => {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'E-Mail',
      value: 'info@devdanny.de',
      href: 'mailto:info@devdanny.de',
      color: 'text-cyan-400',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Telefon',
      value: '+49 (0) 155 632 044 47',
      href: 'tel:+4915563204447',
      color: 'text-purple-400',
    },
  ]

  const dataProcessingSections = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Kontaktformular',
      description:
        'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
      legalBasis: 'Art. 6 Abs. 1 lit. b DSGVO',
      retention: '6 Monate nach Abschluss der Anfrage',
      purpose: 'Bearbeitung Ihrer Anfrage und Kommunikation',
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: 'Server-Log-Dateien',
      description:
        'Unser Hosting-Provider erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Diese Daten sind für den technischen Betrieb der Website erforderlich.',
      dataPoints: [
        'Browsertyp und Browserversion',
        'Verwendetes Betriebssystem',
        'Referrer URL (die zuvor besuchte Seite)',
        'Hostname des zugreifenden Rechners',
        'Uhrzeit der Serveranfrage',
        'IP-Adresse (anonymisiert)',
      ],
      legalBasis: 'Art. 6 Abs. 1 lit. f DSGVO',
      retention: '7 Tage',
      purpose: 'Gewährleistung eines sicheren und stabilen Betriebs',
    },
    {
      icon: <GlassesIcon className="w-5 h-5" />,
      title: 'Vercel Analytics',
      description:
        'Diese Website nutzt Vercel Analytics zur Analyse des Nutzerverhaltens. Das Tool arbeitet vollständig anonymisiert und erfasst keine personenbezogenen Daten.',
      features: [
        'Vollständig anonymisierte Datenverarbeitung',
        'Keine Cookies erforderlich',
        'DSGVO-konform ohne Einwilligung',
        'Keine Erfassung personenbezogener Daten',
        'Datenverarbeitung innerhalb der EU',
      ],
      legalBasis: 'Art. 6 Abs. 1 lit. f DSGVO',
      purpose: 'Analyse und Verbesserung der Website-Performance',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Google Analytics 4',
      description:
        'Wir verwenden Google Analytics 4 mit erweiterter Datenschutzkonfiguration zur Analyse der Website-Nutzung. Die Daten werden pseudonymisiert und eine vollständige Anonymisierung ist aktiviert.',
      features: [
        'IP-Anonymisierung aktiviert',
        'Cookielose Tracking-Alternativen',
        'Datennutzungseinschränkungen aktiv',
        'Kürzere Aufbewahrungsfristen',
        'Keine Datenweitergabe an Google',
        'Signatur-freie Messung',
      ],
      dataPoints: [
        'Anonymisierte Nutzerkennung',
        'Seitenaufrufe und Verweildauer',
        'Gerätetyp und Bildschirmauflösung',
        'Geografische Region (Stadt/Ebene)',
        'Verhalten auf der Website',
        'Akquisitionsquellen',
      ],
      legalBasis: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
      retention: '14 Monate',
      purpose: 'Verständnis der Nutzerinteraktion zur Website-Optimierung',
      optOut:
        'Sie können die Erfassung durch Google Analytics verhindern, indem Sie das Cookie-Consent-Tool deaktivieren oder das Browser-Add-on zur Deaktivierung von Google Analytics installieren.',
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: 'Google Search Console',
      description:
        'Wir nutzen Google Search Console zur Überwachung der technischen Performance unserer Website in den Google-Suchergebnissen. Dies dient der Verbesserung unserer Sichtbarkeit und der Identifikation technischer Probleme.',
      features: [
        'Erfassung von Suchanfragen und Klickraten',
        'Identifikation von Indexierungsproblemen',
        'Mobile Usability-Analyse',
        'Core Web Vitals Monitoring',
        'Sicherheitsproblem-Erkennung',
      ],
      dataPoints: [
        'Suchanfragen, die zur Website führen',
        'Klickrate in den Suchergebnissen',
        'Durchschnittliche Position in den Rankings',
        'Indexierungsstatus der Seiten',
        'Mobile Usability-Probleme',
        'Ladezeiten-Metriken',
      ],
      legalBasis: 'Art. 6 Abs. 1 lit. f DSGVO',
      retention: '16 Monate',
      purpose:
        'Verbesserung der Suchmaschinenoptimierung und technischen Website-Qualität',
      privacyNote:
        'Die Daten in Google Search Console sind aggregiert und nicht auf individuelle Nutzer zurückführbar.',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Cookie-Consent-Management',
      description:
        'Wir verwenden ein Cookie-Consent-Tool zur Verwaltung Ihrer Einwilligungen für datenschutzrelevante Funktionen. Ihre Präferenzen werden gespeichert, um bei jedem Besuch konsistent angewendet zu werden.',
      features: [
        'Granulare Einwilligungsverwaltung',
        'Protokollierung der Einwilligungen',
        'Opt-in für Marketing-Cookies',
        'Einfache Widerrufsmöglichkeit',
        'DSGVO-konforme Dokumentation',
      ],
      legalBasis: 'Art. 6 Abs. 1 lit. c DSGVO',
      retention: '12 Monate',
      purpose: 'Rechtssichere Einwilligungsverwaltung und Dokumentation',
    },
  ]

  const userRights = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: 'Auskunftsrecht',
      description:
        'Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Berichtigungsrecht',
      description: 'Recht auf Berichtigung unrichtiger personenbezogener Daten',
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: 'Löschungsrecht',
      description:
        'Recht auf Löschung Ihrer personenbezogenen Daten („Recht auf Vergessenwerden“)',
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: 'Einschränkungsrecht',
      description:
        'Recht auf Einschränkung der Verarbeitung Ihrer personenbezogenen Daten',
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: 'Datenübertragbarkeit',
      description:
        'Recht auf Übertragbarkeit Ihrer Daten in einem strukturierten, gängigen Format',
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: 'Widerspruchsrecht',
      description:
        'Recht auf Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten',
    },
  ]

  const securityFeatures = [
    {
      icon: <Lock className="w-5 h-5" />,
      title: 'SSL/TLS-Verschlüsselung',
      description:
        "Diese Seite nutzt aus Sicherheitsgründen eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an 'https://' und dem Schloss-Symbol.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Datenschutz durch Design',
      description:
        'Privacy by Design und Privacy by Default sind Grundprinzipien unserer Datenverarbeitung.',
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: 'Sichere Hosting-Infrastruktur',
      description:
        'Unsere Server befinden sich in sicheren Rechenzentren innerhalb der EU mit höchsten Sicherheitsstandards.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(56,189,248,0.1)_100%)] animate-pulse" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_95%,rgba(168,85,247,0.1)_100%)] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Datenschutz
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transparente Informationen zum Umgang mit Ihren personenbezogenen
            Daten gemäß DSGVO
          </p>
        </div>

        <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden mb-12">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardHeader className="relative z-5 pb-6">
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              Datenschutz auf einen Blick
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-5">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-cyan-400">Allgemeine Hinweise:</strong>
                <br />
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Verantwortliche Stelle */}
        <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden mb-12">
          <CardHeader className="relative z-5 pb-6">
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <UserCheck className="w-6 h-6 text-purple-400" />
              </div>
              Verantwortliche Stelle
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-5 space-y-6">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <div className="text-gray-300 space-y-2">
                <p>Danny Nothdurft</p>
                <p>DevDanny</p>
                <p>Tribünenweg 32</p>
                <p>22111 Hamburg</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div className="grid gap-3">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group/item"
                >
                  <div
                    className={`p-2 rounded-lg bg-slate-700/50 group-hover/item:scale-110 transition-transform duration-300 ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className={`font-medium ${item.color}`}>
                      {item.value}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover/item:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Datenerfassung */}
        <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 group relative overflow-hidden mb-12">
          <CardHeader className="relative z-5 pb-6">
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <GlassesIcon className="w-6 h-6 text-amber-400" />
              </div>
              Datenerfassung auf dieser Website
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-5 space-y-6">
            {dataProcessingSections.map((section, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    {section.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-2">
                      {section.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>

                {section.dataPoints && (
                  <div className="ml-12 mb-3">
                    <h5 className="font-medium text-cyan-400 text-sm mb-2">
                      Erhobene Daten:
                    </h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {section.dataPoints.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.features && (
                  <div className="ml-12 mb-3">
                    <h5 className="font-medium text-purple-400 text-sm mb-2">
                      Features:
                    </h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-purple-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="ml-12 flex flex-wrap gap-4 text-xs">
                  <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
                    Rechtsgrundlage: {section.legalBasis}
                  </div>
                  {section.retention && (
                    <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30">
                      Aufbewahrung: {section.retention}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ihre Rechte */}
        <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden mb-12">
          <CardHeader className="relative z-5 pb-6">
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              Ihre Rechte gemäß DSGVO
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-5">
            <div className="grid md:grid-cols-2 gap-4">
              {userRights.map((right, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group/item"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                      {right.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        {right.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {right.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sicherheit */}
        <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden mb-12">
          <CardHeader className="relative z-5 pb-6">
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              Sicherheitsmaßnahmen
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-5">
            <div className="grid gap-4">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300 group/item"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-500/20 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Widerspruchsrecht */}
        <Card className="border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 group relative overflow-hidden">
          <CardHeader className="relative z-5 pb-6">
            <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
              </div>
              Widerspruchsrecht
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-5">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                Kontaktdaten zur Übersendung von nicht ausdrücklich
                angeforderter Werbung und Informationsmaterialien wird hiermit
                widersprochen. Die Betreiber der Seiten behalten sich
                ausdrücklich rechtliche Schritte im Falle der unverlangten
                Zusendung von Werbeinformationen vor.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Haben Sie Fragen zu Ihren Datenschutzrechten oder zur
            Datenverarbeitung?
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white py-6 px-8 rounded-2xl group transform hover:scale-105 transition-all duration-300"
          >
            <a href="mailto:info@devdanny.de">
              <Mail className="mr-3 w-5 h-5 group-hover:animate-bounce" />
              Datenschutz-Anfrage stellen
              <ExternalLink className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DatenschutzPage
