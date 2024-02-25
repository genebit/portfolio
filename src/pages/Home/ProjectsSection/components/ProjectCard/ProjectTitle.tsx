import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const ProjectTitle = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("text-xl text-gray-900 font-meltow-bold dark:text-white", className)
  return (
    <h3 className={compCn} {...props}>
      {children}
    </h3>
  )
}

export default ProjectTitle
