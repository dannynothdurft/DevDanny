import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validiere required fields
    if (!body.monthlyRevenue || !body.email || !body.projectType) {
      return NextResponse.json(
        { error: 'Monatlicher Umsatz, Email und Projekt-Typ sind erforderlich' },
        { status: 400 }
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

    // Revenue Share spezifische Berechnungen
    const getRevenueShareRange = (revenue: string) => {
      switch(revenue) {
        case '0-500': return '30-40%'
        case '500-2000': return '25-35%'
        case '2000-5000': return '20-30%'
        case '5000-10000': return '15-25%'
        case '10000+': return '10-20%'
        default: return '20-30%'
      }
    }

    const revenueShare = getRevenueShareRange(body.monthlyRevenue)

    // Email HTML Template für Revenue Share Requests
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; padding: 25px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f8fafc; padding: 25px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 16px; padding: 12px; background: white; border-radius: 8px; border-left: 4px solid #8b5cf6; }
            .label { font-weight: bold; color: #1e293b; margin-bottom: 4px; }
            .value { color: #475569; }
            .urgent { background: #f3e8ff; padding: 15px; border-radius: 8px; border-left: 4px solid #8b5cf6; margin-bottom: 20px; }
            .revenue-badge { display: inline-block; padding: 8px 16px; background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; border-radius: 20px; font-size: 14px; font-weight: bold; }
            .metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0; }
            .metric { background: white; padding: 12px; border-radius: 6px; text-align: center; border: 1px solid #e2e8f0; }
            .potential { background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>💰 Neue Revenue-Share Anfrage</h1>
              <p>DevDanny - Revenue Optimization Partnership</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <strong>⚡ Revenue Opportunity - Bitte innerhalb von 12h antworten!</strong>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Revenue-Share mit ${revenueShare} am zusätzlichen Wachstum</p>
              </div>

              <div style="text-align: center; margin: 20px 0;">
                <span class="revenue-badge">
                  📈 ${body.monthlyRevenue} MRR • ${revenueShare} Revenue Share
                </span>
              </div>
              
              <div class="metrics">
                <div class="metric">
                  <div style="font-size: 12px; color: #64748b;">Projekt-Typ</div>
                  <div style="font-weight: bold; color: #8b5cf6;">${body.projectType}</div>
                </div>
                <div class="metric">
                  <div style="font-size: 12px; color: #64748b;">Wachstums-Ziel</div>
                  <div style="font-weight: bold; color: #ec4899;">${body.growthGoals || 'Nicht angegeben'}</div>
                </div>
              </div>
              
              <div class="field">
                <div class="label">📧 Kontakt Email</div>
                <div class="value">
                  <a href="mailto:${body.email}" style="color: #8b5cf6; text-decoration: none; font-weight: bold;">
                    ${body.email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">📅 Projekt-Alter</div>
                <div class="value">${body.projectAge || 'Nicht angegeben'}</div>
              </div>
              
              <div class="field" style="background: #f0f9ff;">
                <div class="label">🎯 Aktuelle Herausforderungen</div>
                <div class="value" style="white-space: pre-wrap; line-height: 1.5;">${body.challenges || 'Keine spezifischen Herausforderungen angegeben'}</div>
              </div>
              
              <div class="field">
                <div class="label">📅 Eingereicht am</div>
                <div class="value">${new Date(body.submittedAt).toLocaleString('de-DE')}</div>
              </div>

              <div class="potential">
                <h3 style="color: #065f46; margin-top: 0;">💎 Revenue Potenzial Analyse</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 14px;">
                  <div>
                    <strong>Aktuell:</strong><br>
                    ${body.monthlyRevenue} MRR
                  </div>
                  <div>
                    <strong>Ziel:</strong><br>
                    ${body.growthGoals === '2x' ? '2x Revenue' : 
                      body.growthGoals === '3x' ? '3x Revenue' : 
                      body.growthGoals === '5x' ? '5x Revenue' : 
                      body.growthGoals === '10x' ? '10x+ Revenue' : 
                      'Signifikantes Wachstum'}
                  </div>
                </div>
              </div>
              
              <hr style="margin: 25px 0; border: none; border-top: 2px solid #e2e8f0;">
              
              <div style="text-align: center;">
                <h3 style="color: #1e293b; margin-bottom: 15px;">🚀 Perfekt für Revenue-Share Partnership</h3>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                  <a href="mailto:${body.email}?subject=Revenue-Share%20Partnership%20bei%20DevDanny&body=Hallo,%20ich%20habe%20deine%20Revenue-Share%20Anfrage%20erhalten%20und%20sehe%20großes%20Potenzial!%20Lass%20uns%20über%20${revenueShare}%20Revenue-Share%20sprechen." 
                     style="background: #8b5cf6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    💰 Revenue-Share besprechen
                  </a>
                  <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Revenue-Share+Call+mit+${encodeURIComponent(body.email.split('@')[0])}&details=Besprechung+der+Revenue-Share+Partnership+mit+${revenueShare}+am+zusätzlichen+Wachstum" 
                     style="background: #ec4899; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    📅 Meeting buchen
                  </a>
                </div>
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <h4 style="color: #475569; margin-bottom: 10px;">📊 Recommended Next Steps:</h4>
                <ul style="color: #64748b; font-size: 14px; margin: 0; padding-left: 20px;">
                  <li><strong>Revenue Analysis Call</strong> (30 Minuten)</li>
                  <li><strong>Detaillierte Potenzial-Analyse</strong> des Projekts</li>
                  <li><strong>Revenue-Share Agreement</strong> mit ${revenueShare}</li>
                  <li><strong>Growth-Plan</strong> für die ersten 90 Tage</li>
                </ul>
              </div>

              <div style="margin-top: 15px; padding: 12px; background: #fffbeb; border-radius: 6px; border-left: 4px solid #f59e0b;">
                <p style="margin: 0; color: #92400e; font-size: 13px;">
                  <strong>💡 Tip:</strong> Dieses Projekt hat ${body.monthlyRevenue} MRR - perfekt für eine ${revenueShare} Revenue-Share Partnership mit Fokus auf ${body.growthGoals || 'signifikantes'} Wachstum.
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Email an dich senden
    await transporter.sendMail({
      from: `DevDanny Revenue <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `💰 REVENUE: ${body.monthlyRevenue} MRR - ${body.projectType} (${revenueShare} Share)`,
      html: emailHtml,
    })

    // Bestätigungs-Email an den Kunden
    await transporter.sendMail({
      from: `DevDanny <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: '✅ Deine Revenue-Share Analyse-Anfrage bei DevDanny',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">💰 Revenue-Share Analyse Bestätigung</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">DevDanny Revenue Optimization</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
              Hi <strong>${body.email.split('@')[0]}</strong>,
            </p>
            
            <p style="color: #475569; line-height: 1.6;">
              Vielen Dank für deine Revenue-Share Analyse-Anfrage! Ich habe deine Daten erhalten und 
              werde eine detaillierte Revenue-Analyse für dich vorbereiten.
            </p>

            <div style="background: #faf5ff; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6; margin: 25px 0;">
              <h3 style="color: #7c3aed; margin-top: 0;">📈 Deine Revenue-Share Opportunity</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 14px;">
                <div>
                  <strong>Aktuell:</strong><br>
                  <span style="color: #8b5cf6; font-weight: bold;">${body.monthlyRevenue} MRR</span>
                </div>
                <div>
                  <strong>Ziel:</strong><br>
                  <span style="color: #ec4899; font-weight: bold;">
                    ${body.growthGoals === '2x' ? '2x Revenue' : 
                      body.growthGoals === '3x' ? '3x Revenue' : 
                      body.growthGoals === '5x' ? '5x Revenue' : 
                      body.growthGoals === '10x' ? '10x+ Revenue' : 
                      'Signifikantes Wachstum'}
                  </span>
                </div>
              </div>
            </div>

            <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #065f46; margin-top: 0;">🎯 Was du erwarten kannst:</h3>
              <ul style="color: #065f46; line-height: 1.6;">
                <li><strong>Kostenlose Revenue-Analyse</strong> deines Projekts</li>
                <li><strong>Personalisiertes Revenue-Share Angebot</strong> basierend auf deinem MRR</li>
                <li><strong>Detaillierter Growth-Plan</strong> für die ersten 90 Tage</li>
                <li><strong>Keine Vorab-Kosten</strong> - ich verdiene nur am zusätzlichen Wachstum</li>
              </ul>
            </div>

            <p style="color: #475569; line-height: 1.6;">
              Ich werde mich innerhalb der nächsten <strong>12 Stunden</strong> mit der Analyse bei dir melden.
              Bis dahin kannst du dir gerne meine <a href="https://devdanny.de/portfolio" style="color: #8b5cf6;">Revenue-Erfolgsgeschichten</a> ansehen.
            </p>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">
                Ich freue mich darauf, dein Revenue zu optimieren!
              </p>
              <p style="color: #8b5cf6; font-weight: bold; margin: 0;">
                Danny von DevDanny<br>
                <span style="font-size: 12px; color: #64748b;">Revenue Optimization Specialist</span>
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ 
      success: true,
      message: 'Revenue share analysis request submitted successfully',
      estimatedShare: revenueShare
    })

  } catch (error) {
    console.error('Revenue API error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Optional: GET Method für Testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Revenue API is working',
    timestamp: new Date().toISOString()
  })
}