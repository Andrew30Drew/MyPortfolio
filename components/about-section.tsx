"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image src="/placeholder.svg?height=500&width=500" alt="About Me" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience building web applications that
                solve real-world problems. My journey in tech began when I built my first website at 15, and I've been
                hooked ever since.
              </p>

              <p>
                I specialize in creating responsive, accessible, and performant web applications using modern
                technologies like React, Next.js, and Node.js. I'm also experienced in database design, API development,
                and cloud deployment.
              </p>

              <p>
                When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting
                with new recipes in the kitchen.
              </p>
            </div>

            <div className="pt-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

