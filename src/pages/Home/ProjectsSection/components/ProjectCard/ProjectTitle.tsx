import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const ProjectTitle = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("text-gray-900 uppercase font-artegra tracking-widest font-bold dark:text-white", className)
  return (
    <h3 className={compCn} {...props}>
      {children}
    </h3>
  )
}

export default ProjectTitle
