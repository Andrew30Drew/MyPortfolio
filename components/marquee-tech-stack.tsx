"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface Technology {
  name: string;
  icon: string | StaticImageData; // Updated to accept both string paths and imported images
}

interface MarqueeTechStackProps {
  technologies: Technology[];
  direction: "left" | "right";
}

export default function MarqueeTechStack({
  technologies,
  direction,
}: MarqueeTechStackProps) {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex items-center gap-8">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{
            x: direction === "left" ? [0, -1920] : [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {[...technologies, ...technologies, ...technologies].map(
            (tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center gap-2"
              >
                <div className="h-16 w-16 relative bg-background rounded-lg p-2 shadow-sm border flex items-center justify-center bg-white">
                  {typeof tech.icon === "string" ? (
                    <img
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      className="h-10 w-10 object-contain"
                      width={40}
                      height={40}
                    />
                  )}
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
