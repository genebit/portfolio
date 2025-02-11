import { STUBUAI1, STUBUAI2, STUBUAI3 } from "@/assets/imgs"

import ProjectSubtitle from "../../components/ProjectCard/ProjectSubtitle"
import ProjectFooterButtons from "../../components/ProjectCard/ProjectFooterButtons"
import {
  ProjectCard,
  ProjectDateSpan,
  ProjectDescription,
  ProjectTag,
  ProjectTitle,
  ProjectWrapper,
  TagWrapper,
} from "../../components/ProjectCard"

const HighlightProjects = () => {
  return (
    <ol className="relative border-slate-950 dark:border-primary border-s-2">
      <ProjectCard>
        <ProjectWrapper id="highlightProject1" thumbnails={[STUBUAI1, STUBUAI2, STUBUAI3]}>
          <ProjectDateSpan>2023 - Present</ProjectDateSpan>
          <header>
            <ProjectTitle>STUBU.AI: Your Personalized Study Buddy</ProjectTitle>
            <ProjectSubtitle>Lead Frontend Developer</ProjectSubtitle>
            <TagWrapper>
              <ProjectTag>Cross Platform</ProjectTag>
              <ProjectTag>Artificial Intelligence</ProjectTag>
              <ProjectTag>UI/UX Design</ProjectTag>
            </TagWrapper>
          </header>
          <ProjectDescription>
            An AI-powered Learning Management System that adapts to learners as an all-in-one study buddy turning
            education into a personalized and interactive experience. Reinventing the traditional education system.
          </ProjectDescription>
          <ProjectFooterButtons srcCodeUrl={"#"} demoUrl={"#"} disableSrcCodeBtn={false} disableDemoBtn={false} />
        </ProjectWrapper>
      </ProjectCard>
    </ol>
  )
}

export default HighlightProjects
