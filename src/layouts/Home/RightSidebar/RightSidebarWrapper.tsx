import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

/**
 * Wrapper component for the right sidebar.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the wrapper.
 * @param {string} props.className - Additional CSS class names for the wrapper.
 * @returns {JSX.Element} The rendered JSX element.
 */
const RightSidebarWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn(
    "hidden 2xl:flex sticky h-max top-16 right-[2rem] flex-col w-[20rem] max-w-[20rem] max-h-screen px-5 animate-in fade-in",
    className
  )
  return (
    <aside className={compCn} {...props}>
      {children}
    </aside>
  )
}

export default RightSidebarWrapper
