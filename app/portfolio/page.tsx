import React from 'react'
import { Metadata } from 'next'
import PortfolioPage from '@/components/PortfolioPage'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Entdecke DevDannys Portfolio: Eigene Projekte, Kundenaufträge und strategische Partnerschaften. Innovative Lösungen, nachhaltiges Wachstum und messbare Erfolge.',
  alternates: {
    canonical: 'https://devdanny.de/portfolio',
    languages: {
      de: 'https://devdanny.de/portfolio',
    },
  },
}

const Portfolio = () => {
  return <PortfolioPage />
}

export default Portfolio