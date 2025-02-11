import { cn } from "@/lib/utils"
import { Book } from "lucide-react"
import { HTMLAttributes } from "react"

const ProjectCard = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("mt-5 mb-10 ms-4", className)
  return (
    <li className={compCn} {...props}>
      <div className="absolute p-2 border-4 rounded-full bg-slate-950 dark:bg-primary -start-[1.3rem] text-white border-white dark:border-slate-950">
        <Book size={16} />
      </div>
      <div className="ms-5">{children}</div>
    </li>
  )
}

export default ProjectCard
