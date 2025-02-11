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
  const compCn = cn("my-3 tracking-widest text-slate-400 uppercase font-artegra font-normal text-sm", className)

  return (
    <small className={compCn} {...props}>
      {children}
    </small>
  )
}

export default RightSidebarHeading
