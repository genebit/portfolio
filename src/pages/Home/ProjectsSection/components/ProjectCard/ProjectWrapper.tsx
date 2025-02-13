import { HTMLAttributes } from "react"

import ImageGallery from "react-image-gallery"

import { cn } from "@/lib/utils"

import { Project } from "../../types/Project"

import "react-image-gallery/styles/css/image-gallery.css"
import ProjectViewDetail from "./ProjectViewDetail"
import { Gallery } from "../../types/Gallery"

interface ProjectWrapperProps extends HTMLAttributes<HTMLElement> {
  thumbnails: Gallery[]
  data: Project
}

const ProjectWrapper = ({ data, thumbnails, children, className, ...props }: ProjectWrapperProps) => {
  const compCn = cn("flex flex-col relative gap-5 md:flex-row", className)

  return (
    <div className={compCn} {...props}>
      <div className="absolute top-2 right-2">
        <ProjectViewDetail thumbnails={thumbnails} data={data}>
          {children}
        </ProjectViewDetail>
      </div>
      <div className="w-full md:max-w-72">
        <ImageGallery slideDuration={1} showPlayButton={false} showNav={false} items={thumbnails} autoPlay={true} />
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

export default ProjectWrapper
