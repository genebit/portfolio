import { HTMLAttributes, useRef } from "react"

import Autoplay from "embla-carousel-autoplay"

import { skills } from "@/assets/svgs"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

/**
 * Renders the ToolsSection component.
 *
 * @returns The rendered ToolsSection component.
 */
const ToolsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const SkillsCarousel = () => {
    const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: false }))

    return (
      <Carousel plugins={[plugin.current]} className="w-full hover:cursor-grab active:cursor-grabbing">
        <CarouselContent>
          {skills.map((skill, index) => (
            <CarouselItem key={index} className="basis-1/12 min-w-[4.5rem] max-w-[4.5rem]">
              <img src={skill} alt="" />
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
