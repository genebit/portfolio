import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const RightSidebarWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn(
    "hidden xl:flex fixed right-0 flex-col w-[15rem] max-w-[15rem] min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] px-3 py-5",
    className
  )
  return (
    <aside className={compCn} {...props}>
      {children}
    </aside>
  )
}

export default RightSidebarWrapper
