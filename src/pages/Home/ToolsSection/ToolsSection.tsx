import { HTMLAttributes, useRef } from "react"

import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useTheme } from "@/hooks/useTheme"

const ToolsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const skills: Array<string> = [
    // Database
    "mongodb",
    "plsql",
    "oracle",
    // Backend
    "livewire",
    "dotnet",
    "express",
    "firebase",
    "gcp",
    "java",
    "laravel",
    "nodejs",
    "php",
    "python",
    // Frontend
    "alpinejs",
    "cs",
    "css",
    "dart",
    "html",
    "js",
    "typescript",
    "react",
    "sass",
    "unity",
    // Tools
    "bash",
    "powershell",
    "docker",
    "githubactions",
    "figma",
    "git",
    "github",
    "gitlab",
    "vscode",
    "lucidchart",
    "windows",
    "linux",
  ]

  const SkillsCarousel = () => {
    const { theme } = useTheme()
    const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: false }))

    return (
      <Carousel plugins={[plugin.current]} className="w-full hover:cursor-grab active:cursor-grabbing">
        <CarouselContent>
          {skills.map((skill, index) => (
            <CarouselItem key={index} className="basis-1/12 min-w-[4.5rem] max-w-[4.5rem] select-none *:min-w-14">
              <img src={`https://go-skill-icons.vercel.app/api/icons?i=${skill.toString()}&theme=${theme}`} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    )
  }

  return (
    <section className={className} {...props}>
      <div className="flex flex-col gap-5">
        <header>
          <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">LANGUAGES • TOOLS • FRAMEWORKS</h3>
          <p>
            Throughout years of experience learning software application technologies, I have used various software
            tools to create applications such as:
          </p>
        </header>
        <SkillsCarousel />
      </div>
    </section>
  )
}

export default ToolsSection
