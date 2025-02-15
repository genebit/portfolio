import { HTMLAttributes } from "react"

import { Clapperboard } from "lucide-react"
import ScrollAnimation from "react-animate-on-scroll"

import ILLUST from "/svgs/about-illust.svg"
import * as constants from "@/lib/constants"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import ViewResumeButton from "@/layouts/Home/ViewResumeButton/ViewResumeButton"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const AboutSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <Card className="relative bg-white border-s-8 border-s-primary dark:bg-stone-900 overflow-clip">
        <CardContent className="p-10 pb-5 dark:text-white">
          <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">About Me</h3>
          <p>
            Hi! I am a Filipino-based Software Engineer passionate about learning software technologies in general;
            immersed in the world of coding, designing, and software development. <br />
            <br /> Currently finishing my degree as a 4th Year Bachelors of Science in Information Technology in Ateneo
            De Naga University. Seeking opportunities, equipped with 4+ years of work experience on various software
            technology tools to create a beautiful system design.
          </p>
          <section>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="video-resume">
                <AccordionTrigger className="font-semibold">
                  <div className="flex items-center gap-3">
                    <Clapperboard size={20} />
                    View my video resume
                  </div>
                </AccordionTrigger>
                <AccordionContent className="rounded-md dark:bg-neutral-950">
                  <div className="p-5 mt-5 overflow-hidden rounded-md select-none">
                    <hr />
                    <br />
                    <iframe
                      width="100%"
                      className="h-[350px] md:h-[500px] rounded-lg"
                      src={constants.videoResumeYTLink}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <ScrollAnimation initiallyVisible={true} animateOnce={true}></ScrollAnimation>
          </section>
          <img
            src={ILLUST}
            alt="Background Illustration"
            className="absolute right-0 z-0 max-w-xs pointer-events-none select-none -bottom-12 -rotate-12 opacity-20"
          />
        </CardContent>
        <CardFooter className="z-10 px-10">
          <ViewResumeButton className="z-10 px-6 w-max ms-auto" />
        </CardFooter>
      </Card>
    </section>
  )
}

export default AboutSection
