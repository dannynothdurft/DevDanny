import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validiere required fields
    if (!body.projectType || !body.monthlyRevenue) {
      return NextResponse.json(
        { error: 'Projekt-Typ und Umsatz sind erforderlich' },
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

    // Email HTML Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b, #ea580c); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e293b; }
            .value { color: #475569; }
            .urgent { background: #fef3c7; padding: 10px; border-radius: 5px; border-left: 4px solid #f59e0b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Neue Acquisition-Anfrage</h1>
              <p>DevDanny - Project Acquisition</p>
            </div>
            <div class="content">
              <div class="urgent">
                <strong>⚡ Bitte innerhalb von 24h antworten!</strong>
              </div>
              
              <div class="field">
                <div class="label">Projekt-Typ:</div>
                <div class="value">${body.projectType}</div>
              </div>
              
              <div class="field">
                <div class="label">Monatlicher Umsatz:</div>
                <div class="value">${body.monthlyRevenue}</div>
              </div>
              
              <div class="field">
                <div class="label">Projekt-Alter:</div>
                <div class="value">${body.projectAge}</div>
              </div>
              
              <div class="field">
                <div class="label">Tech Stack:</div>
                <div class="value">${body.techStack || 'Nicht angegeben'}</div>
              </div>
              
              <div class="field">
                <div class="label">Verkaufsgrund:</div>
                <div class="value">${body.reasonForSelling || 'Nicht angegeben'}</div>
              </div>
              
              <div class="field">
                <div class="label">Eingereicht am:</div>
                <div class="value">${new Date(body.submittedAt).toLocaleString('de-DE')}</div>
              </div>

              <div class="field">
                <div class="label">E-Mail:</div>
                <div class="value">${body.email}</div>
              </div>
              
              <hr style="margin: 20px 0; border: 1px solid #e2e8f0;">
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="mailto:${body.email}" 
                   style="background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  📧 Jetzt antworten
                </a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Email an dich senden
    await transporter.sendMail({
      from: `DevDanny Acquisition <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `🎯 Neue Acquisition: ${body.projectType} (${body.monthlyRevenue})`,
      html: emailHtml,
    })

    // Bestätigungs-Email an Kunden (optional)
    if (body.email) {
      await transporter.sendMail({
        from: `DevDanny <${process.env.SMTP_USER}>`,
        to: body.email,
        subject: '✅ Deine Acquisition-Anfrage bei DevDanny',
        html: `
          <h2>Danke für deine Anfrage!</h2>
          <p>Hi there,</p>
          <p>Ich habe deine Acquisition-Anfrage erhalten und werde mich innerhalb der nächsten 24 Stunden mit einer ersten Bewertung bei dir melden.</p>
          <p><strong>Zusammenfassung deiner Anfrage:</strong></p>
          <ul>
            <li>Projekt-Typ: ${body.projectType}</li>
            <li>Umsatz-Bereich: ${body.monthlyRevenue}</li>
            <li>Projekt-Alter: ${body.projectAge}</li>
          </ul>
          <p>Bis bald!<br>Danny von DevDanny</p>
        `,
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Acquisition request submitted successfully',
    })
  } catch (error) {
    console.error('Acquisition API error:', error)
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
    message: 'Acquisition API is working',
    timestamp: new Date().toISOString(),
  })
}
