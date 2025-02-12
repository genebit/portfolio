import { HTMLAttributes } from "react"

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import TabTrigger from "@/pages/Home/ProjectsSection/components/TabTrigger"

import RenderFigma from "./TabContent/DesignFiles/DesignFiles"
import HighlightProjects from "./TabContent/HighlightProjects/HighlightProjects"

import "@/pages/Home/ProjectsSection/ProjectsSection.css"
import OtherProjects from "./TabContent/OtherProjects/OtherProjects"
import ScrollAnimation from "react-animate-on-scroll"

const ProjectsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <ScrollAnimation
        animatePreScroll={true}
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        animateOnce={true}
      >
        <header>
          <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">PROJECTS</h3>
        </header>
        <Tabs defaultValue="highlighted" className="w-full md:min-h-[40rem]">
          <TabsList className="justify-start w-full bg-transparent border-b-2">
            <TabTrigger value="highlighted" label="Highlighted" />
            <TabTrigger value="projects" label="Other Projects" />
            <TabTrigger value="designFile" label="Design File" />
          </TabsList>
          <TabsContent value="highlighted" className="duration-1000 animate-in fade-in">
            <HighlightProjects />
          </TabsContent>
          <TabsContent value="projects" className="duration-1000 animate-in fade-in">
            <OtherProjects />
          </TabsContent>
          <TabsContent value="designFile" className="duration-1000 animate-in fade-in">
            <RenderFigma />
          </TabsContent>
        </Tabs>
      </ScrollAnimation>
    </section>
  )
}

export default ProjectsSection
