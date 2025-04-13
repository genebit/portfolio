import { HTMLAttributes, useRef } from "react"

import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useTheme } from "@/hooks/useTheme"
import { Star } from "lucide-react"
import { skills } from "@/lib/content"

const ToolsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const SkillsCarousel = () => {
    const { theme } = useTheme()
    const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: false }))

    return (
      <Carousel plugins={[plugin.current]} className="w-full hover:cursor-grab active:cursor-grabbing">
        <CarouselContent>
          {skills.map((skill, index) => (
            <CarouselItem
              key={index}
              className="basis-1/12 min-w-[4.5rem] max-w-[4.5rem] select-none *:min-w-14 relative"
            >
              <img
                src={`https://go-skill-icons.vercel.app/api/icons?i=${skill.name.toString()}&theme=${theme}`}
                alt={skill.name.toString()}
              />
              <div className="w-full">
                {skill.primary === true ? (
                  <span className="absolute top-0 right-0 w-3 h-3">
                    <Star fill={theme === "light" ? "#000" : "#FFDF20"} stroke="#000" strokeWidth={1} size={18} />
                  </span>
                ) : null}
                <small className="block mx-auto mt-2 tracking-widest uppercase font-artegra w-max text-slate-400 truncate max-w-[7ch]">
                  {skill.label}
                </small>
              </div>
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
