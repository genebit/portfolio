import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

/**
 * Renders the heading component for the right sidebar.
 *
 * @component
 * @param {React.HTMLAttributes<HTMLElement>} props - The HTML attributes for the component.
 * @returns {JSX.Element} The rendered component.
 */
const RightSidebarHeading = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("my-3 tracking-wide text-slate-400 font-meltow", className)

  return (
    <span className={compCn} {...props}>
      {children}
    </span>
  )
}

export default RightSidebarHeading
