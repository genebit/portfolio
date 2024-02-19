import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const ProjectWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("flex flex-col gap-5 md:flex-row", className)

  return (
    <div className={compCn} {...props}>
      <img src="https://dummyimage.com/1920x1080" alt="" className="h-full transition-all md:max-w-[20rem]" />
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

export default ProjectWrapper
