import { HTMLAttributes } from "react"

import { Book } from "lucide-react"

import { cn } from "@/lib/utils"

import { ProjectCardProvider } from "../../context/ProjectCardContext"

const ProjectCard = ({ className, children, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("mt-5 mb-10 ms-4 list-none", className)

  return (
    <ProjectCardProvider>
      <li className={compCn} {...props}>
        <div className="absolute p-2 border-4 rounded-full bg-slate-950 dark:bg-primary -start-[1.3rem] text-white border-white dark:border-slate-950">
          <Book size={16} />
        </div>
        <div>{children}</div>
      </li>
    </ProjectCardProvider>
  )
}

export default ProjectCard
