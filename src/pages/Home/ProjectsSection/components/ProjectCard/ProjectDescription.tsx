import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
import { useProjectCard } from "./hooks/useProjectCard"

const ProjectDescription = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const { openProjectDetail, setOpenProjectDetail } = useProjectCard()
  const compCn = cn("text-base font-normal text-slate-700 dark:text-gray-300", className)

  const viewProject = () => {
    setOpenProjectDetail(true)
  }

  return (
    <div className={compCn} {...props}>
      {openProjectDetail ? (
        <>{children}</>
      ) : (
        <>
          {children}
          <span>...</span>
          <a role="button" className="font-semibold underline text-primary" onClick={viewProject}>
            Read More
          </a>
        </>
      )}
    </div>
  )
}

export default ProjectDescription
