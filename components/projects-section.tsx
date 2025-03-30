"use client"

import { useState } from "react"
import ProjectCard from "@/components/project-card"

// Sample project data - in a real app, this could come from an API or CMS
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Stripe, and a headless CMS.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    link: "#",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered application that generates marketing content using OpenAI's GPT-4.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Material UI", "TypeScript"],
    link: "#",
  },
  {
    id: 4,
    title: "Fitness Tracking Dashboard",
    description: "A comprehensive dashboard for tracking fitness progress with data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    link: "#",
  },
]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Next.js", "React", "Node.js", "TypeScript"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my recent work and personal projects that showcase my skills and expertise.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

