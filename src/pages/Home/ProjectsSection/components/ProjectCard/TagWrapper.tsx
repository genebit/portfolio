import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const TagWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("mt-3 flex flex-wrap gap-1 tag-container", className)

  return (
    <div className={compCn} {...props}>
      {children}
    </div>
  )
}

export default TagWrapper
