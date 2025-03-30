"use client"
import { motion } from "framer-motion"
import MarqueeTechStack from "@/components/marquee-tech-stack"

// Tech stack data
const frontendTech = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
]

const backendTech = [
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Firebase", icon: "firebase" },
  { name: "GraphQL", icon: "graphql" },
  { name: "REST API", icon: "api" },
]

const toolsTech = [
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "VS Code", icon: "vscode" },
  { name: "Figma", icon: "figma" },
  { name: "Jest", icon: "jest" },
  { name: "Webpack", icon: "webpack" },
]

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Frontend</h3>
            <MarqueeTechStack technologies={frontendTech} direction="left" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Backend</h3>
            <MarqueeTechStack technologies={backendTech} direction="right" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Tools & Others</h3>
            <MarqueeTechStack technologies={toolsTech} direction="left" />
          </div>
        </div>

        <motion.div
          className="mt-16 p-8 bg-muted rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2">Always Learning</h3>
          <p className="text-muted-foreground">
            I'm constantly exploring new technologies and methodologies to stay at the cutting edge of web development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

