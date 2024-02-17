import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const RightSidebarWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn(
    "hidden 2xl:flex fixed top-[4rem] right-0 flex-col w-[20rem] max-w-[20rem] min-h-screen max-h-screen px-5",
    className
  )
  return (
    <aside className={compCn} {...props}>
      {children}
    </aside>
  )
}

export default RightSidebarWrapper
