'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Rocket,
  Sparkles,
  ArrowRight,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center space-x-3 mb-4"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Image
                    src="/lucy.png"
                    alt="Lucy the Fuchs"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  DevDanny
                </span>
                <span className="text-xs text-gray-400 font-medium -mt-1">
                  Tech Partner & Investor
                </span>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed max-w-md mb-6">
              Ich transformiere Ideen in{' '}
              <span className="text-cyan-400 font-semibold">
                wertvolle digitale Assets
              </span>
              . Durch strategische Partnerschaften, App-Acquisitions und
              technische Expertise erschaffen wir gemeinsam nachhaltigen
              Business-Erfolg.
            </p>

            {/* CTA Section */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-5 h-5 text-amber-400" />
                <h4 className="text-white font-semibold">
                  Bereit für dein nächstes Projekt?
                </h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Lass uns in 30 Minuten dein Potenzial analysieren.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white hover-glow-cyan group"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Rocket className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Kostenloses Gespräch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              Partnerschaften
            </h4>
            <div className="space-y-3">
              {[
                {
                  href: '/partnerships',
                  label: 'Alle Modelle',
                  color: 'text-cyan-400',
                },
                {
                  href: '/equity',
                  label: 'Equity Partnership',
                  color: 'text-cyan-300',
                },
                {
                  href: '/revenue',
                  label: 'Revenue Share',
                  color: 'text-purple-300',
                },
                {
                  href: '/acquisition',
                  label: 'Project Acquisition',
                  color: 'text-amber-300',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-sm transition-all duration-300 hover:translate-x-2 ${link.color} hover:opacity-100 opacity-80`}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Unternehmen
            </h4>
            <div className="space-y-3 mb-6">
              {[
                { href: '/', label: 'Home' },
                { href: '/portfolio', label: 'Case Studies' },
                { href: '/about', label: 'Über mich' },
                { href: '/contact', label: 'Kontakt' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2"
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-white mb-4">
              Rechtliches
            </h4>
            <div className="space-y-3">
              {[
                { href: '/impressum', label: 'Impressum' },
                { href: '/datenschutz', label: 'Datenschutz' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2"
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} DevDanny.{' '}
                <span className="text-cyan-400">
                  Building digital assets with passion.
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {[
                {
                  href: 'https://github.com/dannynothdurft',
                  icon: <Github size={20} />,
                  label: 'GitHub',
                  color: 'hover:text-white',
                },
                {
                  href: 'https://www.linkedin.com/in/danny-nothdurft/',
                  icon: <Linkedin size={20} />,
                  label: 'LinkedIn',
                  color: 'hover:text-blue-400',
                },
                {
                  href: 'mailto:info@devdanny.de',
                  icon: <Mail size={20} />,
                  label: 'Email',
                  color: 'hover:text-amber-400',
                },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Made with love */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-500 flex items-center justify-center lg:justify-end space-x-2">
                <span>Made with</span>
                <span className="w-4 h-4 text-red-400 animate-pulse">❤️</span>
                <span>and</span>
                <span className="w-4 h-4 text-cyan-400">⚡</span>
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <div className="animate-float">
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
