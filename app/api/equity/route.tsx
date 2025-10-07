import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validiere required fields
    if (!body.ideaStage || !body.email || !body.projectDescription) {
      return NextResponse.json(
        {
          error: 'Idee-Phase, Email und Projekt-Beschreibung sind erforderlich',
        },
        { status: 400 },
      )
    }

    // Nodemailer Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email HTML Template für Equity Requests
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 25px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f8fafc; padding: 25px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 16px; padding: 12px; background: white; border-radius: 8px; border-left: 4px solid #06b6d4; }
            .label { font-weight: bold; color: #1e293b; margin-bottom: 4px; }
            .value { color: #475569; }
            .urgent { background: #cffafe; padding: 15px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px; }
            .stage-badge { display: inline-block; padding: 4px 12px; background: #06b6d4; color: white; border-radius: 20px; font-size: 12px; font-weight: bold; }
            .metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0; }
            .metric { background: white; padding: 10px; border-radius: 6px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Neue Equity-Partnership Anfrage</h1>
              <p>DevDanny - Tech-Co-Founder Opportunity</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <strong>⚡ Hochwertige Lead - Bitte innerhalb von 12h antworten!</strong>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Equity-Partnership mit 20-40% Beteiligung</p>
              </div>
              
              <div class="metrics">
                <div class="metric">
                  <div style="font-size: 12px; color: #64748b;">Idee-Phase</div>
                  <div style="font-weight: bold; color: #06b6d4;">${body.ideaStage}</div>
                </div>
                <div class="metric">
                  <div style="font-size: 12px; color: #64748b;">Team Size</div>
                  <div style="font-weight: bold; color: #3b82f6;">${body.teamSize || 'Nicht angegeben'}</div>
                </div>
              </div>
              
              <div class="field">
                <div class="label">📧 Kontakt Email</div>
                <div class="value">
                  <a href="mailto:${body.email}" style="color: #06b6d4; text-decoration: none; font-weight: bold;">
                    ${body.email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">🎯 Zielmarkt/Industrie</div>
                <div class="value">${body.market || 'Nicht angegeben'}</div>
              </div>
              
              <div class="field">
                <div class="label">💰 Funding Status</div>
                <div class="value">${body.funding || 'Nicht angegeben'}</div>
              </div>
              
              <div class="field" style="background: #f0f9ff;">
                <div class="label">💡 Projekt-Beschreibung</div>
                <div class="value" style="white-space: pre-wrap; line-height: 1.5;">${body.projectDescription}</div>
              </div>
              
              <div class="field">
                <div class="label">📅 Eingereicht am</div>
                <div class="value">${new Date(body.submittedAt).toLocaleString('de-DE')}</div>
              </div>
              
              <hr style="margin: 25px 0; border: none; border-top: 2px solid #e2e8f0;">
              
              <div style="text-align: center;">
                <h3 style="color: #1e293b; margin-bottom: 15px;">🚀 Schnelle Antwort empfohlen</h3>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                  <a href="mailto:${body.email}?subject=Equity-Partnership%20Anfrage%20bei%20DevDanny&body=Hallo,%20ich%20habe%20deine%20Equity-Partnership%20Anfrage%20erhalten%20und%20würde%20gerne%20mehr%20erfahren!" 
                     style="background: #06b6d4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    📧 Jetzt antworten
                  </a>
                  <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Equity-Partnership+Call+mit+${encodeURIComponent(body.email.split('@')[0])}&details=Besprechung+der+Equity-Partnership+Anfrage" 
                     style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    📅 Meeting buchen
                  </a>
                </div>
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px;">
                <h4 style="color: #475569; margin-bottom: 10px;">💡 Next Steps:</h4>
                <ul style="color: #64748b; font-size: 14px; margin: 0; padding-left: 20px;">
                  <li>30-minütiges Kennenlerngespräch vereinbaren</li>
                  <li>Ideen-Validation und Marktanalyse</li>
                  <li>Equity-Struktur besprechen (20-40%)</li>
                  <li>Nächste Schritte definieren</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Email an dich senden
    await transporter.sendMail({
      from: `DevDanny Equity <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `🎯 EQUITY: ${body.ideaStage} - ${body.market || 'No Market'} (${body.email})`,
      html: emailHtml,
    })

    // Bestätigungs-Email an den Gründer
    await transporter.sendMail({
      from: `DevDanny <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: '✅ Deine Equity-Partnership Bewerbung bei DevDanny',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">🚀 Danke für deine Bewerbung!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Equity-Partnership Program</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              Hi <strong>${body.email.split('@')[0]}</strong>,
            </p>
            
            <p style="color: #475569; line-height: 1.6;">
              Ich habe deine Equity-Partnership Bewerbung erhalten und bin sehr gespannt auf deine Idee! 
              Ich werde mir deine Unterlagen in den nächsten <strong>12 Stunden</strong> ansehen und mich dann bei dir melden.
            </p>

            <div style="background: #ecfeff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin: 25px 0;">
              <h3 style="color: #0e7490; margin-top: 0;">📋 Was du erwarten kannst:</h3>
              <ul style="color: #0e7490; line-height: 1.6;">
                <li><strong>Kostenloses Kennenlerngespräch</strong> (30 Minuten)</li>
                <li><strong>Erste Einschätzung</strong> deiner Idee und Machbarkeit</li>
                <li><strong>Diskussion möglicher Equity-Strukturen</strong> (20-40%)</li>
                <li><strong>Klare nächste Schritte</strong> für dein Projekt</li>
              </ul>
            </div>

            <p style="color: #475569; line-height: 1.6;">
              Bis dahin kannst du dir gerne schon meine <a href="https://devdanny.de/portfolio" style="color: #06b6d4;">Erfolgsgeschichten</a> ansehen 
              oder mehr über <a href="https://devdanny.de/partnerships" style="color: #06b6d4;">andere Partnerschafts-Modelle</a> erfahren.
            </p>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">
                Ich freue mich darauf, von dir zu hören!
              </p>
              <p style="color: #06b6d4; font-weight: bold; margin: 0;">
                Danny von DevDanny<br>
                <span style="font-size: 12px; color: #64748b;">Tech-Co-Founder & Investor</span>
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Equity partnership application submitted successfully',
    })
  } catch (error) {
    console.error('Equity API error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

// Optional: GET Method für Testing
export async function GET() {
  return NextResponse.json({
    message: 'Equity API is working',
    timestamp: new Date().toISOString(),
  })
}
