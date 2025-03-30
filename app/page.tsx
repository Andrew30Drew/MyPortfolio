import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import TechStackSection from "@/components/tech-stack-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection>
        <TechStackSection />
      </AnimatedSection>

      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </main>
  )
}

