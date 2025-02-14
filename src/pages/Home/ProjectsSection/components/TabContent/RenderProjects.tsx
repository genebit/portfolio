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
import { Gallery } from "../../types/Gallery"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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

        // Define the base path for images
        const basePath = "/imgs/project-thumbnails/"

        // Update image paths in the data
        const updated = data.map((project: Project) => ({
          ...project,
          screenshots:
            project.screenshots.length > 0
              ? project.screenshots.map((screenshot: Gallery) => ({
                  original: `${basePath}${screenshot.original}`,
                  thumbnail: `${basePath}${screenshot.thumbnail}`,
                  embedUrl: screenshot.embedUrl,
                  renderItem: screenshot.embedUrl
                    ? () => (
                        <div className="rounded-md video-wrapper overflow-clip">
                          <iframe
                            width="100%"
                            height="162"
                            src={screenshot.embedUrl}
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
              <section>
                <h3 className="text-sm font-bold tracking-widest uppercase font-artegra">Project Contributors</h3>
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  <TooltipProvider>
                    {project.proponents.map((contributor, contributorIndex) => (
                      <Tooltip key={`${contributor}-${contributorIndex}`} delayDuration={100}>
                        <TooltipTrigger>
                          <img
                            className="transition-transform bg-white rounded-full ring-2 ring-stone-950 w-7 h-7 hover:scale-125"
                            src={`https://ui-avatars.com/api/?name=${contributor}&background=FFF&color=0C0A09&bold=true`}
                            alt={contributor}
                          />
                        </TooltipTrigger>
                        <TooltipContent>{contributor}</TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </section>
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
