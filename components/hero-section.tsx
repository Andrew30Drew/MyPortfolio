"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-primary">Hello, I'm</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Prathikshan Andrew Rajendram
              </span>
            </h1>

            <p className="text-xl text-muted-foreground">
              A passionate full-stack developer specializing in creating
              beautiful, functional, and user-centered digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative h-[400px] w-[400px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-600 blur-3xl opacity-30 animate-pulse" />
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <Image
                  src="/me2 (2).jpg?height=400&width=400"
                  alt="John Doe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
