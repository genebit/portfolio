import { HTMLAttributes } from "react"

import { Book } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"

import TabTrigger from "@/pages/Home/components/ProjectsSection/components/TabTrigger"
import {
  ProjectDateSpan,
  ProjectDescription,
  ProjectTitle,
  ProjectWrapper,
  Tag,
  TagWrapper,
} from "@/pages/Home/components/ProjectsSection/components/ProjectCard"

import "./ProjectsSection.css"

const ProjectsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <header>
        <h3 className="text-xl font-meltow-bold">PROJECTS</h3>
      </header>
      <Tabs defaultValue="highlighted" className="w-full">
        <TabsList className="justify-start w-full bg-transparent border-b-2 rounded-none">
          <TabTrigger value="highlighted" label="Highlighted" />
          <TabTrigger value="misc" label="Miscellaneous" />
          <TabTrigger value="designFile" label="Design File" />
        </TabsList>
        <TabsContent value="highlighted">
          <ol className="relative border-primary border-s-2">
            <li className="mt-5 mb-10 ms-4">
              <div className="absolute p-2 border-4 rounded-full bg-primary -start-[1.3rem] text-white border-white dark:border-slate-950">
                <Book size={16} />
              </div>
              <div className="ms-5">
                <ProjectWrapper>
                  <ProjectDateSpan>2023 - Present</ProjectDateSpan>
                  <header>
                    <ProjectTitle>Ateneo De Naga University - MIS</ProjectTitle>
                    <TagWrapper>
                      <Tag>Linux</Tag>
                      <Tag>Software Security</Tag>
                      <Tag>Bash</Tag>
                    </TagWrapper>
                  </header>
                  <ProjectDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus nostrum porro a, in
                    illum adipisci necessitatibus asperiores earum placeat numquam repellendus ut cum excepturi eligendi
                    deleniti est voluptatum? Sit!
                  </ProjectDescription>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-primary dark:text-white font-meltow-bold">
                      View Source Code
                    </Button>
                    <Button variant="default" className="font-meltow-bold">
                      View Demo
                    </Button>
                  </div>
                </ProjectWrapper>
              </div>
            </li>
            <li className="mt-5 mb-10 ms-4">
              <div className="absolute p-2 border-4 rounded-full bg-primary -start-[1.3rem] text-white border-white dark:border-slate-950">
                <Book size={16} />
              </div>
              <div className="ms-5">
                <ProjectWrapper>
                  <ProjectDateSpan>2023 - Present</ProjectDateSpan>
                  <header>
                    <ProjectTitle>Ateneo De Naga University - MIS</ProjectTitle>
                    <TagWrapper>
                      <Tag>Linux</Tag>
                      <Tag>Software Security</Tag>
                      <Tag>Bash</Tag>
                    </TagWrapper>
                  </header>
                  <ProjectDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus nostrum porro a, in
                    illum adipisci necessitatibus asperiores earum placeat numquam repellendus ut cum excepturi eligendi
                    deleniti est voluptatum? Sit!
                  </ProjectDescription>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-primary dark:text-white font-meltow-bold">
                      View Source Code
                    </Button>
                    <Button variant="default" className="font-meltow-bold">
                      View Demo
                    </Button>
                  </div>
                </ProjectWrapper>
              </div>
            </li>
            <li className="mt-5 mb-10 ms-4">
              <div className="absolute p-2 border-4 rounded-full bg-primary -start-[1.3rem] text-white border-white dark:border-slate-950">
                <Book size={16} />
              </div>
              <div className="ms-5">
                <ProjectWrapper>
                  <ProjectDateSpan>2023 - Present</ProjectDateSpan>
                  <header>
                    <ProjectTitle>Ateneo De Naga University - MIS</ProjectTitle>
                    <TagWrapper>
                      <Tag>Linux</Tag>
                      <Tag>Software Security</Tag>
                      <Tag>Bash</Tag>
                    </TagWrapper>
                  </header>
                  <ProjectDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus nostrum porro a, in
                    illum adipisci necessitatibus asperiores earum placeat numquam repellendus ut cum excepturi eligendi
                    deleniti est voluptatum? Sit!
                  </ProjectDescription>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-primary dark:text-white font-meltow-bold">
                      View Source Code
                    </Button>
                    <Button variant="default" className="font-meltow-bold">
                      View Demo
                    </Button>
                  </div>
                </ProjectWrapper>
              </div>
            </li>
          </ol>
        </TabsContent>
        <TabsContent value="misc"></TabsContent>
        <TabsContent value="designFile"></TabsContent>
      </Tabs>
    </section>
  )
}

export default ProjectsSection
