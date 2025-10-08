import React from "react"
import { Metadata } from 'next'
import ContactPage from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Kontakt & Beratung',
  description:
    'Nimm Kontakt mit DevDanny auf – für Partnerschaften, Webentwicklung, Consulting oder Projektanfragen. Erhalte innerhalb von 24 Stunden eine persönliche Antwort und starte dein nächstes Projekt.',
  alternates: {
    canonical: 'https://devdanny.de/contact',
    languages: {
      de: 'https://devdanny.de/contact',
    },
  },
}


const Contact = () => {
  return <ContactPage />
}

export default Contact
