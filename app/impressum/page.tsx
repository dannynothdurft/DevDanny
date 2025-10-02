import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ImpressumPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Impressum</span>
        </h1>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Angaben gemäß § 5 TMG</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Betreiber</h3>
              <p className="text-muted-foreground leading-relaxed">
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

            <div>
              <h3 className="font-semibold mb-2">Kontakt</h3>
              <p className="text-muted-foreground leading-relaxed">
                E-Mail:{" "}
                <a href="mailto:info@devdanny.de" className="text-primary hover:underline">
                  info@devdanny.de
                </a>
                <br />
                Telefon:{" "}
                <a href="tel:+4915563204447" className="text-primary hover:underline">
                  +49 (0) 155 632 044 47
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Umsatzsteuer-ID</h3>
              <p className="text-muted-foreground leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
                <br />
                [Ihre USt-IdNr. hier einfügen]
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p className="text-muted-foreground leading-relaxed">
                Danny Nothdurft
                <br />
                Tribünenweg 32
                <br />
                22111 Hamburg
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Haftungsausschluss</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Haftung für Inhalte:</strong>
                <br />
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Haftung für Links:</strong>
                <br />
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Urheberrecht</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
