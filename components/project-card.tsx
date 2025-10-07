import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { ExternalLink, Rocket, Users, TrendingUp, Sparkles } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image?: string
  href?: string
  status?: "live" | "development" | "partnership"
  metrics?: string
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  href, 
  status = "live",
  metrics 
}: ProjectCardProps) => {
  
  const statusConfig = {
    live: { 
      color: "text-green-400", 
      bgColor: "bg-green-500/20", 
      borderColor: "border-green-500/30",
      icon: <Sparkles className="w-3 h-3" />,
      label: "Live"
    },
    development: { 
      color: "text-amber-400", 
      bgColor: "bg-amber-500/20", 
      borderColor: "border-amber-500/30",
      icon: <Rocket className="w-3 h-3" />,
      label: "In Entwicklung"
    },
    partnership: { 
      color: "text-purple-400", 
      bgColor: "bg-purple-500/20", 
      borderColor: "border-purple-500/30",
      icon: <Users className="w-3 h-3" />,
      label: "Partnerschaft"
    }
  }

  const statusInfo = statusConfig[status]

  return (
    <Card className="overflow-hidden border border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 group relative">
      
      {/* Enhanced Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusInfo.bgColor} ${statusInfo.borderColor} border backdrop-blur-sm`}>
          {statusInfo.icon}
          <span className={statusInfo.color}>{statusInfo.label}</span>
        </div>
      </div>

      {/* Metrics Badge */}
      {metrics && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 backdrop-blur-sm">
            <TrendingUp className="w-3 h-3" />
            {metrics}
          </div>
        </div>
      )}

      {/* Image/Preview Section */}
      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        {image ? (
          <img 
            src={image || "/placeholder.svg"} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
            <div className="text-6xl font-bold text-cyan-400/20">{title.charAt(0)}</div>
          </div>
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <CardHeader className="relative z-5 pb-4">
        <CardTitle className="group-hover:text-cyan-400 transition-colors duration-300 text-white text-xl font-bold">
          {title}
        </CardTitle>
        <CardDescription className="leading-relaxed text-gray-300 text-base">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-5 pb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs bg-slate-800/80 border border-slate-700 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="relative z-5 pt-0">
        <Link 
          href={href || "#"} 
          className="w-full flex justify-center items-center py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-500/50 hover:text-white transition-all duration-300 group/btn backdrop-blur-sm"
          target='_blank'
        >
          <span className="font-semibold">Mehr Infos</span>
          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        </Link>
      </CardFooter>

      {/* Enhanced Hover Effects */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-500/20 transition-all duration-500 pointer-events-none" />
    </Card>
  )
}

export default ProjectCard