"use client"
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, TrendingUp, Users, Sparkles, Rocket, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  
  const words = ["LAUNCH", "SCALE", "MONETIZE", "EXIT"]
  const typingSpeed = 100
  const deletingSpeed = 50
    const pauseBetweenWords = 1500
    
    const stats = [
    { value: "200%", label: "Value Increase", color: "text-cyan-400", icon: "📈" },
    { value: "30+", label: "Partnerships", color: "text-purple-400", icon: "🤝" },
    { value: "15+", label: "Acquisitions", color: "text-amber-400", icon: "💎" },
    { value: "5.8x", label: "Avg. ROI", color: "text-green-400", icon: "🚀" }
  ]

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseBetweenWords)
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, currentWordIndex, isDeleting, words])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01
      
      const floatingElements = document.querySelectorAll('.floating-element')
      floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2)
        ;(element as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
    
    return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 cursor-default">
      {/* Enhanced Interactive Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(56,189,248,0.1)_100%)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_95%,rgba(168,85,247,0.1)_100%)] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Enhanced Floating Tech Elements with Hover */}
      <div className="floating-element absolute top-30 left-10 animate-float">
        <div className="group relative">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
            <Code className="w-6 h-6 text-cyan-400 transition-transform group-hover:scale-110" />
          </div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded border border-cyan-500/30 whitespace-nowrap">
              Clean Code
            </div>
          </div>
        </div>
      </div>

      <div className="floating-element absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="group relative">
          <div className="w-16 h-16 bg-purple-500/20 rounded-lg border border-purple-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-purple-500/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/25">
            <TrendingUp className="w-8 h-8 text-purple-400 transition-transform group-hover:scale-110" />
          </div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-slate-800 text-purple-400 text-xs px-2 py-1 rounded border border-purple-500/30 whitespace-nowrap">
              Growth
            </div>
          </div>
        </div>
      </div>

      <div className="floating-element absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="group relative">
          <div className="w-14 h-14 bg-amber-500/20 rounded-lg border border-amber-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/25">
            <DollarSign className="w-7 h-7 text-amber-400 transition-transform group-hover:scale-110" />
          </div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-slate-800 text-amber-400 text-xs px-2 py-1 rounded border border-amber-500/30 whitespace-nowrap">
              Revenue
            </div>
          </div>
        </div>
      </div>

      {/* New Floating Element */}
      <div className="floating-element absolute bottom-20 right-32 animate-float" style={{ animationDelay: '3s' }}>
        <div className="group relative">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg border border-green-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-green-500/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/25">
            <Users className="w-6 h-6 text-green-400 transition-transform group-hover:scale-110" />
          </div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-slate-800 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30 whitespace-nowrap">
              Partnership
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Animated Code Preview */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="group relative">
          <div className="w-80 bg-slate-900/80 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full group-hover:animate-pulse"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <pre className="text-sm text-slate-300 font-mono">
              <code>
                {`// Partnership Contract
interface Partnership {
  equity: "10-30%";
  contribution: "tech + strategy";
  focus: "growth & exit";
}

const deal: Partnership = {
  equity: "25%",
  contribution: "fullStack()", 
  focus: "scaleToExit()"
};`}
              </code>
            </pre>
          </div>
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-cyan-500 text-white text-xs px-2 py-1 rounded border border-cyan-500 whitespace-nowrap">
              Real Code Example
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Enhanced Animated Badge */}
        <div className="group inline-flex items-center mb-8 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
          <Sparkles className="w-5 h-5 mr-3 text-cyan-400 animate-pulse group-hover:animate-spin" />
          <span className="text-lg font-semibold text-cyan-400">🚀 Dein Tech-Co-Founder</span>
        </div>

        {/* Enhanced Main Headline with Typewriter Effect */}
        <div className="mb-8 group">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent transition-all duration-500 hover:from-amber-400 hover:via-purple-400 hover:to-cyan-400">
              BUILD
            </span>
            <br />
            <span className="text-white relative">
              {displayText}
              <span className="ml-1 animate-pulse">|</span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500 hover:from-cyan-400 hover:via-purple-400 hover:to-amber-400">
              EXIT
            </span>
          </h1>
        </div>

        {/* Enhanced Dynamic Subheadline */}
        <div className="mb-12">
          <p className="text-2xl text-gray-300 mb-4 transition-all duration-300 hover:scale-105">
            Deine Idee + Mein Code = 
            <span className="text-cyan-400 font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">
              {" "}Digital Gold
            </span>
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-300 hover:text-gray-300">
            Ich baue nicht nur Webseiten - ich transformiere Ideen in 
            <span className="text-amber-400 font-semibold"> profitabile Assets</span> mit Exit-Strategie.
          </p>
        </div>

        {/* Enhanced Interactive CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button asChild size="lg" className="relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border-0 text-white text-lg py-6 px-8 rounded-2xl group transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <Link href="/partnerships">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Rocket className="mr-3 w-6 h-6 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">🚀 Partner werden</span>
              <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="relative border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white text-lg py-6 px-8 rounded-2xl group transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <Link href="/acquire">
              <div className="absolute inset-0 bg-amber-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <TrendingUp className="mr-3 w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">💰 Projekt verkaufen</span>
            </Link>
          </Button>
        </div>

        {/* Enhanced Animated Stats with Hover Effects */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
            >
              <div className="relative">
                <div className={`text-3xl font-black ${stat.color} mb-2 transition-all duration-300 group-hover:animate-bounce`}>
                  {stat.value}
                </div>
                <div className="text-4xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-2 left-1/2 transform -translate-x-1/2">
                  {stat.icon}
                </div>
              </div>
              <div className="text-sm text-gray-400 font-medium transition-colors duration-300 group-hover:text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center transition-all duration-300 group-hover:border-cyan-300 group-hover:scale-110">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce group-hover:bg-cyan-300" />
          </div>
          <div className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
    )
}

export default HeroSection