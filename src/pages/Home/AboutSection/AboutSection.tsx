import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import ViewResumeButton from "@/layouts/Home/ViewResumeButton/ViewResumeButton"
import * as constants from "@/lib/constants"
import { HTMLAttributes } from "react"
import ScrollAnimation from "react-animate-on-scroll"

/**
 * Renders the About section of the home page.
 * @returns JSX.Element
 */
const AboutSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <Card className="border-s-8 border-s-primary bg-slate-950 dark:bg-stone-900">
        <CardContent className="p-10 pb-5 text-white">
          <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">About Me</h3>
          <p>
            Hi! I am a Filipino-based Software Engineer passionate about learning software technologies in general;
            immersed in the world of coding, designing, and software development. <br />
            <br /> Currently finishing my degree as a 4th Year Bachelors of Science in Information Technology in Ateneo
            De Naga University. Seeking opportunities, equipped with 3+ years of work experience on various software
            technology tools to create a beautiful system design.
          </p>
          <section>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="video-resume">
                <AccordionTrigger className="font-semibold">View Video Resume</AccordionTrigger>
                <AccordionContent className="rounded-md bg-neutral-950">
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
        </CardContent>
        <CardFooter className="px-10">
          <ViewResumeButton className="px-6 w-max ms-auto" />
        </CardFooter>
      </Card>
    </section>
  )
}

export default AboutSection
