import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const ProjectDateSpan = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("text-sm font-normal leading-none text-gray-400 dark:text-gray-500", className)
  return (
    <time className={compCn} {...props}>
      {children}
    </time>
  )
}

export default ProjectDateSpan
