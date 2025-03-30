"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            <Image
              src="/me3.jpg"
              alt="About Me"
              fill
              className="object-cover object-top"
            />
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
                I'm a dedicated full-stack developer with a passion for building
                web and mobile applications that solve real-world challenges. My
                journey in technology has been shaped by hands-on experience in
                designing and developing scalable, efficient, and user-friendly
                solutions. I thrive on tackling complex problems and
                transforming ideas into functional, impactful applications that
                enhance user experiences.
              </p>

              <p>
                I specialize in crafting responsive, accessible, and
                high-performance applications using modern technologies such as
                React, React Native, Node.js, and MongoDB. My expertise extends
                to API development, database design, and cloud-based solutions,
                ensuring seamless functionality across different platforms. With
                a strong foundation in{" "}
                <span className="font-bold">software engineering</span>{" "}
                principles, I focus on writing clean, maintainable code that
                aligns with industry best practices.
              </p>

              <p>
                Beyond coding, I am also a{" "}
                <span className="font-bold">
                  professional basketball player
                </span>
                , where I have honed my skills in discipline, teamwork, and
                strategic thinking—qualities that seamlessly translate into my
                approach to software development. The fast-paced and
                high-pressure nature of basketball has strengthened my ability
                to make quick, effective decisions, work collaboratively, and
                stay adaptable in dynamic environments. Just as in basketball,
                where continuous learning and strategic adjustments are key to
                success, I am always eager to explore new technologies, stay
                updated with industry trends, and enhance my problem-solving
                skills. Whether it's contributing to innovative projects,
                collaborating with dynamic teams, or mentoring others, I strive
                to make a meaningful impact in the tech space. In my free time,
                I enjoy engaging in tech discussions, researching emerging
                trends, and continuously expanding my knowledge to keep up with
                the evolving technology landscape.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/Prathikshan Andrew Rajendram CV - SLIIT.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
