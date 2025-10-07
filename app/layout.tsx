import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Suspense } from "react"
import CookieConsentWrapper from "@/module/cookie-consent-wrapper"
import ConditionalAnalytics from "@/module/conditional-analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DevDanny - Modern Web Development",
  description: "Portfolio von Danny Nothdurft - DevDanny. Moderne Webentwicklung mit Next.js, React und mehr.",
  generator: "v0.app",
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
