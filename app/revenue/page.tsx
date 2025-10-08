import React from 'react'
import { Metadata } from 'next'
import RevenuePage from '@/components/RevenuePage'

export const metadata: Metadata = {
  title: 'Revenue-Share',
  description:
    'Steigere dein Revenue mit Revenue-Share Partnerships: Optimierung, Wachstum und Skalierung für SaaS, E-Commerce und Content-Projekte. Kostenlose Analyse in 24 Stunden.',
  alternates: {
    canonical: 'https://devdanny.de/revenue',
    languages: {
      de: 'https://devdanny.de/revenue',
    },
  },
}

const Revenue = () => {
  return <RevenuePage />
}

export default Revenue
