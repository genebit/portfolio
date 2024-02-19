import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

/**
 * Renders the About section of the home page.
 * @returns JSX.Element
 */
const AboutSection = () => {
  return (
    <section data-section="ABOUT" id="about">
      <Card className="border-s-8 border-s-primary bg-slate-950 dark:bg-[#1C1917]">
        <CardContent className="p-10 text-white">
          <h3 className="text-xl font-meltow-bold">About Me 💭</h3>
          <p>
            Hi! I am a Filipino-based Software Developer passionate about learning software technologies in general;
            immersed in the world of coding, designing, and software development. <br />
            <br /> Currently finishing my degree as a 3rd Year Bachelors of Science in Information Technology in Ateneo
            De Naga University. Seeking opportunities, equipped with 3+ years of experience on various software
            technology tools to create a beautiful system design.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="default" className="px-6 font-meltow-bold ms-auto">
            View Resume
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}

export default AboutSection
