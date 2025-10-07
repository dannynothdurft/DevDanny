"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Rocket, TrendingUp, Users, Gem, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isPartnershipsOpen, setIsPartnershipsOpen] = useState(false)

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { 
      href: "/", 
      label: "Home",
      icon: <Sparkles className="w-4 h-4" />
    },
    { 
      href: "/portfolio", 
      label: "Case Studies",
      icon: <Gem className="w-4 h-4" />
    },
    { 
      href: "/about", 
      label: "Über mich",
      icon: <Rocket className="w-4 h-4" />
    },
  ]

  const partnershipLinks = [
    { 
      href: "/partnerships",  // ← DIESE SEITE FEHLTE!
      label: "Partnerschaften Übersicht",
      description: "Alle Modelle im Vergleich",
      icon: <Users className="w-4 h-4" />,
      color: "cyan"
    },
    { 
      href: "/equity", 
      label: "Equity Partnership",
      description: "Tech-Co-Founder werden",
      icon: <Users className="w-4 h-4" />,
      color: "cyan"
    },
    { 
      href: "/revenue", 
      label: "Revenue Share",
      description: "Umsatzbeteiligung",
      icon: <TrendingUp className="w-4 h-4" />,
      color: "purple"
    },
    { 
      href: "/acquisition", 
      label: "Project Acquisition", 
      description: "Projekt verkaufen",
      icon: <Gem className="w-4 h-4" />,
      color: "amber"
    }
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const isPartnershipsActive = partnershipLinks.some(link => isActive(link.href))

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl' 
        : 'bg-transparent backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-lg">DD</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                DevDanny
              </span>
              <span className="text-xs text-gray-400 font-medium -mt-1">Tech Partner & Investor</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(link.href) 
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <div className={`transition-transform duration-300 ${
                  isActive(link.href) ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  {link.icon}
                </div>
                <span>{link.label}</span>
                
                {/* Active indicator */}
                {isActive(link.href) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
            
            {/* Partnerships Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPartnershipsOpen(!isPartnershipsOpen)}
                className={`group flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isPartnershipsActive
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Partnerschaften</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  isPartnershipsOpen ? 'rotate-180' : ''
                }`} />
                
                {/* Active indicator */}
                {isPartnershipsActive && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
              </button>

              {/* Dropdown Menu */}
              {isPartnershipsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-2 z-50">
                  <div className="space-y-1">
                    {partnershipLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsPartnershipsOpen(false)}
                        className={`group flex items-start space-x-3 p-4 rounded-xl transition-all duration-300 ${
                          isActive(link.href)
                            ? 'bg-cyan-500/10 border border-cyan-500/20'
                            : 'hover:bg-slate-700/50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mt-1 ${
                          link.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                          link.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-amber-500/20 text-amber-400'
                        } group-hover:scale-110 transition-transform duration-300`}>
                          {link.icon}
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold ${
                            isActive(link.href) 
                              ? 'text-cyan-400' 
                              : 'text-white group-hover:text-gray-200'
                          }`}>
                            {link.label}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {link.description}
                          </div>
                        </div>
                        {isActive(link.href) && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mt-3"></div>
                        )}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Dropdown CTA */}
                  <div className="mt-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700">
                    <p className="text-sm text-gray-400 mb-2">Unsicher welches Modell?</p>
                    <Button 
                      asChild 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white"
                    >
                      <Link href="/contact" onClick={() => setIsPartnershipsOpen(false)}>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Kostenlose Beratung
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* CTA Button */}
            <Button 
              asChild 
              size="sm"
              className="ml-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white hover-glow-cyan group"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Rocket className="w-4 h-4 group-hover:animate-bounce" />
                <span>Kontakt</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isOpen 
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl rounded-b-2xl shadow-2xl">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <div className={`transition-transform duration-300 ${
                    isActive(link.href) ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    {link.icon}
                  </div>
                  <span>{link.label}</span>
                  
                  {isActive(link.href) && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}

              {/* Mobile Partnerships Section */}
              <div className="px-4 py-2">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-3">
                  Partnerschaften
                </div>
                <div className="space-y-2">
                  {partnershipLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? 'bg-cyan-500/10 border border-cyan-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        link.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                        link.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-amber-500/20 text-amber-400'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <div className={isActive(link.href) ? 'text-cyan-400' : 'text-white'}>
                          {link.label}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {link.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile CTA Button */}
              <Button 
                asChild 
                size="sm"
                className="mt-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white hover-glow-cyan group mx-4"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2 py-3">
                  <Rocket className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Kontakt aufnehmen</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Background Blur Overlay when mobile menu or dropdown is open */}
      {(isOpen || isPartnershipsOpen) && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] lg:hidden"
          onClick={() => {
            setIsOpen(false)
            setIsPartnershipsOpen(false)
          }}
        />
      )}
    </nav>
  )
}