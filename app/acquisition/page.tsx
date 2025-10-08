import React from 'react'
import { Metadata } from 'next'
import AcquirePage from '@/components/AcquirePage'

export const metadata: Metadata = {
  title: 'Projektverkauf & Akquisition',
  description:
    'Verkaufe dein Web-Projekt schnell und sicher an DevDanny. Ich kaufe SaaS, Content-Websites, E-Commerce und Apps – mit fairer Bewertung, transparentem Prozess und schneller Auszahlung.',
  alternates: {
    canonical: 'https://devdanny.de/acquisition',
    languages: {
      de: 'https://devdanny.de/acquisition',
    },
  },
}

const Acquisition = () => {
  return <AcquirePage />
}

export default Acquisition
