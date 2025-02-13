import {
  ProjectCard,
  ProjectDateSpan,
  ProjectDescription,
  ProjectTag,
  ProjectTitle,
  ProjectWrapper,
  ProjectSubtitle,
  TagWrapper,
  ProjectFooterButtons,
} from "../ProjectCard"
import { useEffect, useState } from "react"
import { Project } from "../../types/Project"

interface RenderProjectsProps {
  isActive: boolean
  type: string
  dataFilePath: string
}

const RenderProjects = ({ isActive, type, dataFilePath }: RenderProjectsProps) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isActive) return

    const fetchProjects = async () => {
      try {
        const response = await fetch(dataFilePath)
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        setError(`Error fetching the ${type} projects`)
        console.error(`Error fetching the ${type} projects:`, error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [dataFilePath, isActive, type])

  if (isLoading) return <div className="py-8 text-center">Loading projects...</div>
  if (error) return <div className="py-8 text-center text-red-500">{error}</div>

  if (projects.length === 0) {
    return <p>No projects were loaded...</p>
  } else {
    return (
      <ol className="relative border-slate-950 dark:border-primary border-s-2">
        {projects.map((project, index) => (
          <ProjectCard key={`${type}-${project.title}-${index}`}>
            <ProjectWrapper id={`${type}-project-${index + 1}`} thumbnails={project.screenshots} data={project}>
              <ProjectDateSpan>{`${project.date_from} - ${project.date_to}`}</ProjectDateSpan>
              <header>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                <TagWrapper>
                  {project.tags.map((tag, tagIndex) => (
                    <ProjectTag key={`${tag}-${tagIndex}`}>{tag}</ProjectTag>
                  ))}
                </TagWrapper>
              </header>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectFooterButtons
                srcCodeUrl={project.source_code_link}
                demoUrl={project.live_demo_link}
                disableSrcCodeBtn={project.source_code_locked}
                disableDemoBtn={project.live_demo_locked}
              />
            </ProjectWrapper>
          </ProjectCard>
        ))}
      </ol>
    )
  }
}

export default RenderProjects
