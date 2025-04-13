import { HTMLAttributes, useEffect, useState } from "react"

import { Tabs, TabsContent, TabsList, TabTrigger } from "@/components/ui/tabs"

import "@/pages/Home/ProjectsSection/ProjectsSection.css"
import ScrollAnimation from "react-animate-on-scroll"
import { RenderProjects, DesignFiles } from "./components/TabContent"
import { highlightedProjects, miscProjects } from "@/lib/content"

const ProjectsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const [activeTab, setActiveTab] = useState<string>(() => localStorage.getItem("active-projects-tab") ?? "highlighted")

  const saveActiveTab = (active: string) => {
    localStorage.setItem("active-projects-tab", active)
    setActiveTab(active)
  }

  useEffect(() => {
    setActiveTab(localStorage.getItem("active-projects-tab") ?? "highlighted")
  }, [])

  return (
    <section className={className} {...props}>
      <ScrollAnimation
        animatePreScroll={true}
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        animateOnce={true}
      >
        <header>
          <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">PROJECTS AND ACHIEVEMENTS</h3>
        </header>
        <Tabs value={activeTab} onValueChange={saveActiveTab} className="w-full md:min-h-[40rem]">
          <TabsList className="justify-start w-full bg-transparent border-b-2">
            <TabTrigger value="highlighted" label="Highlighted" />
            <TabTrigger value="misc" label="Other Projects" />
            <TabTrigger value="designFile" label="Design File" />
          </TabsList>
          <TabsContent value="highlighted" className="duration-1000 animate-in fade-in">
            <RenderProjects type="highlighted" isActive={activeTab === "highlighted"} content={highlightedProjects} />
          </TabsContent>
          <TabsContent value="misc" className="duration-1000 animate-in fade-in">
            <RenderProjects type="misc" isActive={activeTab === "misc"} content={miscProjects} />
          </TabsContent>
          <TabsContent value="designFile" className="duration-1000 animate-in fade-in">
            <DesignFiles />
          </TabsContent>
        </Tabs>
      </ScrollAnimation>
    </section>
  )
}

export default ProjectsSection
