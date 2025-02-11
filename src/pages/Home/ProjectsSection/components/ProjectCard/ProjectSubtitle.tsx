import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const ProjectSubtitle = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("mb-3", className)
  return (
    <span className={compCn} {...props}>
      {children}
    </span>
  )
}

export default ProjectSubtitle
