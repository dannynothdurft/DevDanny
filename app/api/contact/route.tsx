import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validiere required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, Email und Nachricht sind erforderlich' },
        { status: 400 }
      )
    }

     // Create transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Topic mapping für bessere Lesbarkeit
    const topicMap: { [key: string]: string } = {
      'partnership': '🚀 Partnerships (Equity/Revenue Share)',
      'project': '💼 Projekt-Anfrage', 
      'consulting': '🎯 Consulting & Strategy',
      'other': '💬 Sonstiges'
    }

    // Email HTML Template für Contact Requests
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #06b6d4, #8b5cf6); color: white; padding: 25px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f8fafc; padding: 25px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 16px; padding: 12px; background: white; border-radius: 8px; border-left: 4px solid #06b6d4; }
            .label { font-weight: bold; color: #1e293b; margin-bottom: 4px; }
            .value { color: #475569; }
            .urgent { background: #cffafe; padding: 15px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 20px; }
            .topic-badge { display: inline-block; padding: 6px 12px; background: #06b6d4; color: white; border-radius: 20px; font-size: 12px; font-weight: bold; }
            .metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0; }
            .metric { background: white; padding: 10px; border-radius: 6px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📨 Neue Kontakt-Anfrage</h1>
              <p>DevDanny - General Contact</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <strong>⚡ Neue Lead - Bitte innerhalb von 12h antworten!</strong>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">${topicMap[body.topic] || 'Allgemeine Anfrage'}</p>
              </div>

              <div style="text-align: center; margin: 20px 0;">
                <span class="topic-badge">
                  ${topicMap[body.topic] || 'Allgemeine Anfrage'}
                </span>
              </div>
              
              <div class="metrics">
                <div class="metric">
                  <div style="font-size: 12px; color: #64748b;">Budget</div>
                  <div style="font-weight: bold; color: #06b6d4;">${body.budget || 'Nicht angegeben'}</div>
                </div>
                <div class="metric">
                  <div style="font-size: 12px; color: #64748b;">Zeitrahmen</div>
                  <div style="font-weight: bold; color: #8b5cf6;">${body.timeline || 'Nicht angegeben'}</div>
                </div>
              </div>
              
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${body.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value">
                  <a href="mailto:${body.email}" style="color: #06b6d4; text-decoration: none; font-weight: bold;">
                    ${body.email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Unternehmen</div>
                <div class="value">${body.company || 'Nicht angegeben'}</div>
              </div>
              
              <div class="field" style="background: #f0f9ff;">
                <div class="label">💬 Nachricht</div>
                <div class="value" style="white-space: pre-wrap; line-height: 1.5;">${body.message}</div>
              </div>
              
              <div class="field">
                <div class="label">📅 Eingereicht am</div>
                <div class="value">${new Date(body.submittedAt).toLocaleString('de-DE')}</div>
              </div>
              
              <hr style="margin: 25px 0; border: none; border-top: 2px solid #e2e8f0;">
              
              <div style="text-align: center;">
                <h3 style="color: #1e293b; margin-bottom: 15px;">🚀 Schnelle Antwort empfohlen</h3>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                  <a href="mailto:${body.email}?subject=Rückmeldung%20zu%20deiner%20Anfrage%20bei%20DevDanny&body=Hallo%20${encodeURIComponent(body.name.split(' ')[0])},%0A%0Avielen%20Dank%20für%20deine%20Anfrage!%20Ich%20habe%20sie%20erhalten%20und%20würde%20gerne%20mehr%20erfahren.%20Lass%20uns%20ein%20kostenloses%2030-minütiges%20Gespräch%20vereinbaren!" 
                     style="background: #06b6d4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    📧 Jetzt antworten
                  </a>
                  <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kennenlerngespräch+mit+${encodeURIComponent(body.name.split(' ')[0])}&details=30-minütiges+kostenloses+Beratungsgespräch+zu+${encodeURIComponent(topicMap[body.topic] || 'Allgemeine Anfrage')}" 
                     style="background: #8b5cf6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    📅 Meeting buchen
                  </a>
                </div>
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px;">
                <h4 style="color: #475569; margin-bottom: 10px;">💡 Next Steps:</h4>
                <ul style="color: #64748b; font-size: 14px; margin: 0; padding-left: 20px;">
                  <li>Persönliche Antwort innerhalb von 12 Stunden</li>
                  <li>Kostenloses 30-minütiges Kennenlerngespräch</li>
                  <li>Maßgeschneidertes Angebot basierend auf den Bedürfnissen</li>
                  <li>Start der Zusammenarbeit</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Email an dich senden
    await transporter.sendMail({
      from: `DevDanny Contact <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `📨 CONTACT: ${body.name} - ${topicMap[body.topic] || 'General'} (${body.budget || 'No Budget'})`,
      html: emailHtml,
    })

    // Bestätigungs-Email an den Kunden
    await transporter.sendMail({
      from: `DevDanny <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: '✅ Deine Nachricht bei DevDanny ist eingegangen',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #06b6d4, #8b5cf6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">✅ Nachricht erhalten!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">DevDanny - Wir melden uns innerhalb von 24h</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              Hallo <strong>${body.name}</strong>,
            </p>
            
            <p style="color: #475569; line-height: 1.6;">
              Vielen Dank für deine Nachricht! Ich habe sie erhalten und werde mich 
              innerhalb der nächsten <strong>24 Stunden</strong> persönlich bei dir melden.
            </p>

            <div style="background: #ecfeff; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin: 25px 0;">
              <h3 style="color: #0e7490; margin-top: 0;">📋 Deine Anfrage-Zusammenfassung:</h3>
              <ul style="color: #0e7490; line-height: 1.6;">
                <li><strong>Thema:</strong> ${topicMap[body.topic] || 'Allgemeine Anfrage'}</li>
                ${body.budget ? `<li><strong>Budget:</strong> ${body.budget}</li>` : ''}
                ${body.timeline ? `<li><strong>Zeitrahmen:</strong> ${body.timeline}</li>` : ''}
                ${body.company ? `<li><strong>Unternehmen:</strong> ${body.company}</li>` : ''}
              </ul>
            </div>

            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0369a1; margin-top: 0;">🎯 Was du erwarten kannst:</h3>
              <ul style="color: #0369a1; line-height: 1.6;">
                <li><strong>Persönliche Antwort</strong> innerhalb von 24 Stunden</li>
                <li><strong>Kostenloses 30-minütiges Gespräch</strong> zur Besprechung deiner Needs</li>
                <li><strong>Maßgeschneidertes Angebot</strong> basierend auf deinen Anforderungen</li>
                <li><strong>Transparente Kommunikation</strong> während des gesamten Prozesses</li>
              </ul>
            </div>

            <p style="color: #475569; line-height: 1.6;">
              Bis dahin kannst du dir gerne mein <a href="https://devdanny.de/portfolio" style="color: #06b6d4;">Portfolio</a> ansehen 
              oder mehr über meine <a href="https://devdanny.de/partnerships" style="color: #06b6d4;">Partnerschafts-Modelle</a> erfahren.
            </p>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">
                Ich freue mich darauf, von dir zu hören!
              </p>
              <p style="color: #06b6d4; font-weight: bold; margin: 0;">
                Danny von DevDanny<br>
                <span style="font-size: 12px; color: #64748b;">Tech-Partner & Investor</span>
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Contact form submitted successfully'
    })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Contact API is working',
    timestamp: new Date().toISOString()
  })
}