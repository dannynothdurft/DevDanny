import React from 'react'
import { Metadata } from 'next'
import DatenschutzPage from '@/components/DatenschutzPage'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description:
    'Transparente Informationen zum Umgang mit Ihren personenbezogenen Daten auf DevDanny gemäß DSGVO. Erfahren Sie, welche Daten wir erheben, wie wir sie verwenden und wie Sie Ihre Rechte wahrnehmen können.',
  alternates: {
    canonical: 'https://devdanny.de/datenschutz',
    languages: {
      de: 'https://devdanny.de/datenschutz',
    },
  },
}


const DSGVO = () => {
  return <DatenschutzPage />
}

export default DSGVO
