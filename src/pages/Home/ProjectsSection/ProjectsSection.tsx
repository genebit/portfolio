import { HTMLAttributes } from "react"

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import TabTrigger from "@/pages/Home/ProjectsSection/components/TabTrigger"

import RenderFigma from "./TabContent/DesignFiles/DesignFiles"

import "@/pages/Home/ProjectsSection/ProjectsSection.css"

const ProjectsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <header>
        <h3 className="text-xl font-meltow-bold">PROJECTS 💼</h3>
      </header>
      <Tabs defaultValue="highlighted" className="w-full">
        <TabsList className="justify-start w-full bg-transparent border-b-2">
          <TabTrigger value="highlighted" label="Highlighted" />
          <TabTrigger value="projects" label="Other Projects" />
          <TabTrigger value="designFile" label="Design File" />
        </TabsList>
        <TabsContent value="highlighted" className="duration-1000 animate-in fade-in"></TabsContent>
        <TabsContent value="projects" className="duration-1000 animate-in fade-in"></TabsContent>
        <TabsContent value="designFile" className="duration-1000 animate-in fade-in">
          <RenderFigma />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default ProjectsSection
