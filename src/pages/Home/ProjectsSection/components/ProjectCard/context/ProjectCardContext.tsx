import { createContext, useState, HTMLAttributes } from "react"
import { Project } from "../../../TabContent/HighlightProjects/types/Project"

interface ProjectCardContextProps extends HTMLAttributes<HTMLElement> {
  openProjectDetail: boolean
  setOpenProjectDetail: (open: boolean) => void
  project: Project | null
  setProject: (project: Project) => void
}

const ProjectCardContext = createContext<ProjectCardContextProps | null>(null)

const ProjectCardProvider = ({ children }: HTMLAttributes<HTMLElement>) => {
  const [openProjectDetail, setOpenProjectDetail] = useState(false)
  const [project, setProject] = useState<Project | null>(null)

  return (
    <ProjectCardContext.Provider value={{ openProjectDetail, setOpenProjectDetail, project, setProject }}>
      {children}
    </ProjectCardContext.Provider>
  )
}

export { ProjectCardContext, ProjectCardProvider }
