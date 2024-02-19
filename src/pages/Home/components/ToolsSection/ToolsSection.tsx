import { useRef } from "react"

import Autoplay from "embla-carousel-autoplay"

import { skills } from "@/assets/svgs/skills"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

/**
 * Renders the ToolsSection component.
 *
 * @returns The rendered ToolsSection component.
 */
const ToolsSection = () => {
  const SkillsCarousel = () => {
    const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: false }))

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
    <section data-section="TOOLS I USE" id="toolsIUse">
      <div className="flex flex-col gap-5">
        <header>
          <h3 className="text-xl font-meltow-bold">LANGUAGES • TOOLS • FRAMEWORKS</h3>
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
