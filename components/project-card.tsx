"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group h-full flex flex-col">
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <CardContent className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className={`text-muted-foreground mb-4 ${!isExpanded && "line-clamp-2"}`}>{project.description}</p>

          <div className="mt-auto flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" /> Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" /> More
                </>
              )}
            </Button>

            <Button variant="outline" size="sm" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

