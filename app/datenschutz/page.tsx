import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DatenschutzPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Datenschutzerklärung
          </span>
        </h1>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Datenschutz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">1. Datenschutz auf einen Blick</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Allgemeine Hinweise:</strong>
                <br />
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Verantwortliche Stelle</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                <br />
                <br />
                Danny Nothdurft
                <br />
                DevDanny
                <br />
                Tribünenweg 32
                <br />
                22111 Hamburg
                <br />
                Deutschland
                <br />
                <br />
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
              <h3 className="font-semibold mb-2">3. Datenerfassung auf dieser Website</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Kontaktformular:</strong>
                <br />
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Server-Log-Dateien:</strong>
                <br />
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und
                Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit
                der Serveranfrage und IP-Adresse.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4. Analyse-Tools und Tools von Drittanbietern</h3>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website nutzt Vercel Analytics zur Analyse des Nutzerverhaltens. Die Datenverarbeitung erfolgt auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
                Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">5. Ihre Rechte</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung
                oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie
                sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">6. SSL- bzw. TLS-Verschlüsselung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">7. Widerspruch gegen Werbe-Mails</h3>
              <p className="text-muted-foreground leading-relaxed">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
                ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber
                der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
                Werbeinformationen vor.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
