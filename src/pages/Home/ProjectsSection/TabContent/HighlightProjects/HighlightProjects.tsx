import { Book } from "lucide-react"
import { HTMLAttributes } from "react"
import { Button } from "@/components/ui/button"
import {
  ProjectWrapper,
  ProjectDateSpan,
  ProjectTitle,
  TagWrapper,
  ProjectDescription,
  ProjectTag,
} from "../../components/ProjectCard"
import ProjectFooterButtons from "./components/ProjectFooterButtons"

const HighlightProjects = () => {
  const ProjectTimelineCard = ({ children }: HTMLAttributes<HTMLElement>) => {
    return (
      <li className="mt-5 mb-10 ms-4">
        <div className="absolute p-2 border-4 rounded-full bg-primary -start-[1.3rem] text-white border-white dark:border-slate-950">
          <Book size={16} />
        </div>
        <div className="ms-5">{children}</div>
      </li>
    )
  }

  return (
    <ol className="relative border-primary border-s-2">
      <ProjectTimelineCard>
        <ProjectWrapper id="highlightProject1">
          <ProjectDateSpan>2023 - Present</ProjectDateSpan>
          <header>
            <ProjectTitle>STUBU.AI: Your Personalized Study Buddy</ProjectTitle>
            <TagWrapper>
              <ProjectTag>Cross Platform</ProjectTag>
              <ProjectTag>Artificial Intelligence</ProjectTag>
              <ProjectTag>UI/UX Design</ProjectTag>
              <ProjectTag>Lead Frontend Developer</ProjectTag>
            </TagWrapper>
          </header>
          <ProjectDescription>
            An AI-powered Learning Management System that adapts to learners as an all-in-one study buddy turning
            education into a personalized and interactive experience. Reinventing the traditional education system.
          </ProjectDescription>
          <ProjectFooterButtons disableSrcCodeBtn={false} srcCodeUrl={""} demoUrl={""} disableDemoBtn={false} />
        </ProjectWrapper>
      </ProjectTimelineCard>
      <ProjectTimelineCard>
        <ProjectWrapper id="highlightProject2">
          <ProjectDateSpan>2023 - 2023</ProjectDateSpan>
          <header>
            <ProjectTitle>eBayan</ProjectTitle>
            <TagWrapper>
              <ProjectTag>Mobile Development</ProjectTag>
              <ProjectTag>Project Management</ProjectTag>
              <ProjectTag>UI/UX Design</ProjectTag>
            </TagWrapper>
          </header>
          <ProjectDescription>
            An intuitive barangay-to-community mobile application for announcement creation management system.
          </ProjectDescription>
          <div className="flex gap-2 ms-auto">
            <Button variant="outline" className="text-primary dark:text-white font-meltow-bold">
              View Source Code
            </Button>
            <Button variant="default" className="font-meltow-bold">
              View Demo
            </Button>
          </div>
        </ProjectWrapper>
      </ProjectTimelineCard>
      <ProjectTimelineCard>
        <ProjectWrapper id="highlightProject3">
          <ProjectDateSpan>2022 - 2023</ProjectDateSpan>
          <header>
            <ProjectTitle>Department of Agriculture - AMIA</ProjectTitle>
            <TagWrapper>
              <ProjectTag>Government Project</ProjectTag>
              <ProjectTag>Full Stack .NET Web Development</ProjectTag>
              <ProjectTag>Data Processing</ProjectTag>
            </TagWrapper>
          </header>
          <ProjectDescription>
            A weather informative website for data analytics to Department of Agriculture stakeholders.
          </ProjectDescription>
          <div className="flex gap-2 ms-auto">
            <Button variant="outline" className="text-primary dark:text-white font-meltow-bold">
              View Source Code
            </Button>
            <Button variant="default" className="font-meltow-bold">
              View Demo
            </Button>
          </div>
        </ProjectWrapper>
      </ProjectTimelineCard>
    </ol>
  )
}

export default HighlightProjects
