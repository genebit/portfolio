import { HTMLAttributes } from "react"

import Marquee from "react-fast-marquee"

import { useTheme } from "@/hooks/useTheme"
import { achievements } from "@/lib/content"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const AchievementSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const { theme } = useTheme()

  return (
    <section className={className} {...props}>
      <div className="flex flex-col gap-5">
        <header>
          <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">ACHIEVEMENTS</h3>
          <p>
            Throughout years of self-growth, learning, and pursuit of software development, I've achieved a number of
            achievements and certificates in institutions, competitions, and training.
          </p>
        </header>
        <Marquee pauseOnHover={true} gradient={true} gradientColor={`${theme === "light" ? "white" : "#0C0A09"}`}>
          {achievements.map((ach, index) => (
            <Card key={`${ach.name.replace(" ", "")}-${index}`} className="mx-2 h-max">
              <CardContent className="relative py-3 w-60 h-80 md:w-96">
                <time className="flex items-center gap-2 mb-2 text-sm text-slate-400">
                  <Calendar size={14} />
                  Issued on {ach.issuedDate ?? "--"}
                </time>
                <Carousel className="w-full overflow-hidden rounded-md hover:cursor-grab active:cursor-grabbing">
                  <CarouselContent>
                    {ach.images.map((img, i) => (
                      <CarouselItem key={i}>
                        <img src={img} alt={ach.name} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="border-none" />
                  <CarouselNext className="border-none" />
                </Carousel>
                <header className="mt-2">
                  <small className="font-semibold tracking-widest uppercase font-artegra text-slate-700 dark:text-slate-200">
                    {ach.name}
                  </small>
                  <p className="font-normal text-slate-700 dark:text-slate-200">{ach.description}</p>
                </header>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default AchievementSection
