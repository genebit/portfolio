import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const ContactSidebarWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("hidden lg:block fixed left-0 p-3 px-5 w-max absolute", className)

  return (
    <aside className={compCn} {...props}>
      {children}
    </aside>
  )
}

export default ContactSidebarWrapper
