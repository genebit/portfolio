import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const Tag = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("px-5 py-[3px] rounded-full bg-slate-950 text-white dark:bg-stone-900 font-meltow", className)

  return (
    <small className={compCn} {...props}>
      {children}
    </small>
  )
}

export default Tag
