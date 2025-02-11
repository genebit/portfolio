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
} from "../../components/ProjectCard"
import { useEffect, useState } from "react"

interface Project {
  date_from: string
  date_to: string
  title: string
  subtitle: string
  screenshots: string[]
  tags: string[]
  description: string
  description_full: string
  video_link: []
  proponents: string[]
  features: string[]
  source_code_link: string
  source_code_locked: boolean
  live_demo_link: string
  live_demo_locked: boolean
}

const OtherProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/content/misc-projects.json")
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        setError("Error fetching the highlighted projects")
        console.error("Error fetching the highlighted projects:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (isLoading) return <div className="py-8 text-center">Loading projects...</div>
  if (error) return <div className="py-8 text-center text-red-500">{error}</div>

  if (projects.length === 0) {
    return <p>No projects were loaded...</p>
  } else {
    return (
      <ol className="relative border-slate-950 dark:border-primary border-s-2">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`}>
            <ProjectWrapper id={`highlightProject${index + 1}`} thumbnails={project.screenshots}>
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

export default OtherProjects
