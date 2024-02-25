import { Card, CardContent, CardFooter } from "@/components/ui/card"
import ViewResumeButton from "@/layouts/Home/ViewResumeButton/ViewResumeButton"
import { HTMLAttributes } from "react"

/**
 * Renders the About section of the home page.
 * @returns JSX.Element
 */
const AboutSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <Card className="border-s-8 border-s-primary bg-slate-950 dark:bg-stone-900">
        <CardContent className="p-10 pb-5 text-white">
          <h3 className="text-xl font-meltow-bold">About Me 💭</h3>
          <p>
            Hi! I am a Filipino-based Software Engineer passionate about learning software technologies in general;
            immersed in the world of coding, designing, and software development. <br />
            <br /> Currently finishing my degree as a 3rd Year Bachelors of Science in Information Technology in Ateneo
            De Naga University. Seeking opportunities, equipped with 3+ years of experience on various software
            technology tools to create a beautiful system design.
          </p>
        </CardContent>
        <CardFooter className="px-10">
          <ViewResumeButton className="px-6 w-max ms-auto" />
        </CardFooter>
      </Card>
    </section>
  )
}

export default AboutSection
