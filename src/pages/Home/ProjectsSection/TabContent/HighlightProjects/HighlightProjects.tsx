import { HTMLAttributes } from "react"

import { Book } from "lucide-react"

import ProjectFooterButtons from "./components/ProjectFooterButtons"
import {
  ProjectDateSpan,
  ProjectDescription,
  ProjectTag,
  ProjectTitle,
  ProjectWrapper,
  TagWrapper,
} from "../../components/ProjectCard"
import { DAAMIA1, STUBUAI1, STUBUAI2, STUBUAI3, eBayan1, eBayan2, eBayan3 } from "@/assets/imgs"

const HighlightProjects = () => {
  const ProjectTimelineCard = ({ children }: HTMLAttributes<HTMLElement>) => {
    return (
      <li className="mt-5 mb-10 ms-4">
        <div className="absolute p-2 border-4 rounded-full bg-slate-950 dark:bg-primary -start-[1.3rem] text-white border-white dark:border-slate-950">
          <Book size={16} />
        </div>
        <div className="ms-5">{children}</div>
      </li>
    )
  }

  return (
    <ol className="relative border-slate-950 dark:border-primary border-s-2">
      <ProjectTimelineCard>
        <ProjectWrapper id="highlightProject1" thumbnails={[STUBUAI1, STUBUAI2, STUBUAI3]}>
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
          <ProjectFooterButtons srcCodeUrl={"#"} demoUrl={"#"} disableSrcCodeBtn={true} disableDemoBtn={true} />
        </ProjectWrapper>
      </ProjectTimelineCard>
      <ProjectTimelineCard>
        <ProjectWrapper id="highlightProject2" thumbnails={[eBayan1, eBayan2, eBayan3]}>
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
          <ProjectFooterButtons
            srcCodeUrl={"https://github.com/NexusphereCo/ebayan"}
            demoUrl={"https://drive.google.com/file/d/16k1WxBIgYTN-EqmP1p498GIA05nDlMTa/view?usp=drive_link"}
            disableSrcCodeBtn={false}
            disableDemoBtn={false}
          />
        </ProjectWrapper>
      </ProjectTimelineCard>
      <ProjectTimelineCard>
        <ProjectWrapper id="highlightProject3" thumbnails={[DAAMIA1]}>
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
          <ProjectFooterButtons srcCodeUrl={"#"} demoUrl={"#"} disableSrcCodeBtn={true} disableDemoBtn={true} />
        </ProjectWrapper>
      </ProjectTimelineCard>
    </ol>
  )
}

export default HighlightProjects
