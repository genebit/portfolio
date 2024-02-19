import { HTMLAttributes } from "react"

import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"

import TabTrigger from "@/pages/Home/components/ProjectsSection/components/TabTrigger"

import "./ProjectsSection.css"
import RenderFigma from "./TabContent/DesignFiles"
import HighlightProjects from "./TabContent/HighlightProjects"

const ProjectsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <header>
        <h3 className="text-xl font-meltow-bold">PROJECTS 💼</h3>
      </header>
      <Tabs defaultValue="highlighted" className="w-full">
        <TabsList className="justify-start w-full bg-transparent border-b-2 rounded-none">
          <TabTrigger value="highlighted" label="Highlighted" />
          <TabTrigger value="misc" label="Miscellaneous" />
          <TabTrigger value="designFile" label="Design File" />
        </TabsList>
        <TabsContent value="highlighted" className="duration-1000 animate-in fade-in">
          <HighlightProjects />
        </TabsContent>
        <TabsContent value="misc" className="duration-1000 animate-in fade-in"></TabsContent>
        <TabsContent value="designFile" className="duration-1000 animate-in fade-in">
          <RenderFigma />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default ProjectsSection
