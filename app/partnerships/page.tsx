import React from 'react'
import { Metadata } from 'next'
import PartnershipsPage from '@/components/PartnershipsPage'

export const metadata: Metadata = {
  title: 'Partnerships',
  description:
    'Strategische Partnerschaften mit DevDanny: Equity, Revenue Share oder Projektakquisition. Wähle das Modell, das zu deinem Projekt passt und starte dein Wachstum.',
  alternates: {
    canonical: 'https://devdanny.de/partnerships',
    languages: {
      de: 'https://devdanny.de/partnerships',
    },
  },
}

const Partnership = () => {
  return <PartnershipsPage />
}

export default Partnership