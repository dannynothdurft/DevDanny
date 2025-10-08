import './globals.css'
import type { Metadata, Viewport } from 'next'
import type React from 'react'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieConsentWrapper from '@/module/cookie-consent-wrapper'
import ConditionalAnalytics from '@/module/conditional-analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devdanny.de'),
  title: {
    default: 'DevDanny – Dein Tech-Co-Founder & Webentwickler',
    template: '%s | DevDanny',
  },
  description:
    'Ich helfe Gründern, Unternehmern und Startups, ihre Ideen in skalierbare digitale Produkte zu verwandeln. Dein Tech-Co-Founder für moderne Webentwicklung, Automatisierung und digitale Assets.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  authors: [{ name: 'Danny Nothdurft', url: 'https://devdanny.de' }],
  creator: 'Danny Nothdurft',
  publisher: 'Danny Nothdurft',
    formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'Next.js',
  applicationName: 'DevDanny',
  keywords: [
    // --- Hauptthemen ---
    'Tech Co-Founder',
    'Webentwicklung',
    'Startup Entwicklungspartner',
    'Digitale Produktentwicklung',
    'Web App Entwicklung',
    'MVP Entwicklung',
    'Software Entwicklung für Startups',
    'Automatisierung mit Code',
    'Full Stack Developer',
    'Next.js Entwickler',
    'React Entwickler',
    'Node.js Entwicklung',

    // --- Zielgruppen & Nutzen ---
    'Technischer Partner für Gründer',
    'Startup ohne Entwickler gründen',
    'Tech Partner finden',
    'Digitalisierung kleiner Unternehmen',
    'Idee in Software umsetzen',
    'Website Entwicklung für Unternehmen',
    'Skalierbare Webanwendungen',
    'Prozessautomatisierung',
    'KI Integration in Projekte',
    'Business Automatisierung',

    // --- Branding & Persönlich ---
    'DevDanny',
    'Danny Nothdurft',
    'devdanny.de',
    'Tech Co-Founder Danny',
    'Webentwickler aus Deutschland',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://devdanny.de',
    siteName: 'DevDanny',
    title: 'DevDanny – Dein Tech-Co-Founder & Webentwickler',
    description:
      'Ich begleite Gründer und Unternehmer bei der technischen Umsetzung ihrer digitalen Projekte. Entwickle mit mir skalierbare Web-Apps, MVPs und digitale Produkte.',
    images: [
      {
        url: 'https://devdanny.de/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevDanny – Dein Tech-Co-Founder & Webentwickler',
      },
    ],
  },
   twitter: {
    card: 'summary_large_image',
    title: 'DevDanny – Dein Tech-Co-Founder & Webentwickle',
    description: 'Ich begleite Gründer und Unternehmer bei der technischen Umsetzung ihrer digitalen Projekte. Entwickle mit mir skalierbare Web-Apps, MVPs und digitale Produkte.',
    creator: '@devdanny',
    images: ['https://devdanny.de/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://devdanny.de',
    languages: {
      de: 'https://devdanny.de',
    },
  },
  icons: {
    // ✅ FAVICON (ICO + PNG)
    icon: [
      {
        url: '/icons/favicon.ico',
        sizes: '16x16 32x32 48x48 256x256',
        type: 'image/x-icon',
      },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icons/logo.svg', type: 'image/svg+xml' }, // Optional SVG
    ],
    // ✅ APPLE TOUCH ICON
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    // ✅ ANDROID/CHROME
    other: [
      {
        rel: 'icon',
        url: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      // Windows Metro
      {
        rel: 'icon',
        url: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'DevDanny',
    statusBarStyle: 'black-translucent',
  },
};


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#9525f7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsentWrapper />
        </Suspense>
        <ConditionalAnalytics />
      </body>
    </html>
  )
}
