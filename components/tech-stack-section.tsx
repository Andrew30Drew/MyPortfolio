"use client";
import reactIcon from "../public/icons8-react-64.png";
import expressIcon from "../public/icons8-express-js.svg";
import nodeIcon from "../public/icons8-node-js.svg";
import mongoIcon from "../public/icons8-mongodb-96.png";
import figma from "../public/icons8-figma.svg";
import tailwind from "../public/icons8-tailwind-css.svg";
import git from "../public/icons8-git.svg";
import vscode from "../public/icons8-visual-studio.svg";
import typescript from "../public/icons8-typescript.svg";
import html from "../public/icons8-html5.svg";
import css from "../public/icons8-css3.svg";
import js from "../public/icons8-javascript.svg";
import next from "../public/icons8-nextjs.svg";
import post from "../public/icons8-postgresql.svg";
import fire from "../public/icons8-firebase.svg";
import api from "../public/icons8-rest-api-100.png";
import github from "../public/icons8-github-logo-1500.png";

import { motion } from "framer-motion";
import MarqueeTechStack from "@/components/marquee-tech-stack";

// Tech stack data
const frontendTech = [
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: next },
  { name: "TypeScript", icon: typescript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "JavaScript", icon: js },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
];

const backendTech = [
  { name: "Node.js", icon: nodeIcon },
  { name: "Express", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "PostgreSQL", icon: post },
  { name: "Firebase", icon: fire },
  { name: "REST API", icon: api },
];

const toolsTech = [
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "VS Code", icon: vscode },
  { name: "Figma", icon: figma },
];

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
            <h3 className="text-xl font-semibold mb-4 text-center">
              Tools & Others
            </h3>
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
            I'm constantly exploring new technologies and methodologies to stay
            at the cutting edge of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
