import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const ProjectShortDescription = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("text-base font-normal text-slate-700 dark:text-gray-300", className)
  return (
    <div className={compCn} {...props}>
      {children}
    </div>
  )
}

export default ProjectShortDescription
