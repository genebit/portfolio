import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const ProjectDescription = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("mb-4 text-base font-normal text-slate-700 dark:text-gray-500", className)
  return (
    <p className={compCn} {...props}>
      {children}
    </p>
  )
}

export default ProjectDescription
