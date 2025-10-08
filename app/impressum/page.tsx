import React from 'react'
import { Metadata } from 'next'
import ImpressumPage from '@/components/ImpressumPage'

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Rechtliche Informationen und Kontaktdaten von DevDanny gemäß § 5 TMG. Betreiber, Kontakt, Umsatzsteuer-ID und Haftungshinweise auf einen Blick.',
  alternates: {
    canonical: 'https://devdanny.de/impressum',
    languages: {
      de: 'https://devdanny.de/impressum',
    },
  },
}

const Impressum = () => {
  return <ImpressumPage />
}

export default Impressum