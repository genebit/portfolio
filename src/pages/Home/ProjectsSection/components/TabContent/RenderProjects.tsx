import { useEffect, useState } from "react"

import { Project } from "@/types/Project"
import { Screenshot } from "@/types/Screenshot"

import ProjectContributors from "../ProjectCard/ProjectContributors"
import {
  ProjectCard,
  ProjectDateSpan,
  ProjectDescription,
  ProjectFooterButtons,
  ProjectSubtitle,
  ProjectTag,
  ProjectTitle,
  ProjectWrapper,
  TagWrapper,
} from "../ProjectCard"

interface RenderProjectsProps {
  isActive: boolean
  type: string
  content: Project[]
}

const RenderProjects = ({ isActive, type, content }: RenderProjectsProps) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isActive) return

    const fetchProjects = async () => {
      try {
        // Define the base path for images
        const basePath = "/imgs/project-thumbnails/"

        // Update image paths in the data
        const updated = content.map((project: Project) => ({
          ...project,
          screenshots:
            project.screenshots.length > 0
              ? project.screenshots.map((screenshot: Screenshot) => ({
                  original: `${basePath}${screenshot.original}`,
                  thumbnail: `${basePath}${screenshot.thumbnail}`,
                  embedUrl: screenshot.embedUrl,
                  renderItem: screenshot.embedUrl
                    ? () => (
                        <div className="rounded-md video-wrapper overflow-clip">
                          <iframe
                            width="100%"
                            height="162"
                            src={screenshot?.embedUrl ?? undefined}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )
                    : undefined,
                }))
              : [
                  { original: "https://placehold.co/1920x1080", thumbnail: "https://placehold.co/1920x1080" },
                  { original: "https://placehold.co/1920x1080", thumbnail: "https://placehold.co/1920x1080" },
                  { original: "https://placehold.co/1920x1080", thumbnail: "https://placehold.co/1920x1080" },
                ],
        }))

        setProjects(updated)
      } catch (error) {
        setError(`Error fetching the ${type} projects`)
        console.error(`Error fetching the ${type} projects:`, error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [content, isActive, type])

  if (isLoading) return <div className="py-8 text-center">Loading projects...</div>
  if (error) return <div className="py-8 text-center text-red-500">{error}</div>

  if (projects.length === 0) {
    return <p>No projects were loaded...</p>
  } else {
    return (
      <ol className="relative ps-0 sm:ps-4 border-slate-950 dark:border-primary sm:border-s-2">
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
              <ProjectContributors project={project} />
              <ProjectFooterButtons
                srcCodeUrl={project.source_code_link!}
                demoUrl={project.live_demo_link!}
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
