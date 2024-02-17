import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const RightSidebarHeading = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("mb-3 tracking-wide text-slate-500 font-meltow", className)

  return (
    <span className={compCn} {...props}>
      {children}
    </span>
  )
}

export default RightSidebarHeading
