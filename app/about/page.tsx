import React from 'react'
import { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Ich bin Danny Nothdurft, Gründer von IconFY. Mit Leidenschaft für Webentwicklung, Automatisierung und digitales Marketing helfe ich Unternehmen, ihre Ideen in erfolgreiche Online-Projekte zu verwandeln.',
  alternates: {
    canonical: 'https://iconfy.de/about',
    languages: {
      de: 'https://iconfy.de/about',
    },
  },
}

const About = () => {
  return <AboutPage />
}

export default About
