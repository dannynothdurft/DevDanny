import React from 'react'
import { Metadata } from 'next'
import EquityPage from '@/components/EquityPage'

export const metadata: Metadata = {
  title: 'Equity Partnership',
  description:
    'Werde Tech-Co-Founder mit DevDanny: Equity-Partnerschaften für ambitionierte Gründer. Profitiere von technischer Expertise, Produktstrategie, Growth & Scaling und Technical Leadership.',
  alternates: {
    canonical: 'https://devdanny.de/equity',
    languages: {
      de: 'https://devdanny.de/equity',
    },
  },
}


const Equity = () => {
  return <EquityPage />
}

export default Equity