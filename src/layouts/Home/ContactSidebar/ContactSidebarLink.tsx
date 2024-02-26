import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface ContactSidebarLinkProps extends HTMLAttributes<HTMLElement> {
  icon: JSX.Element
  link?: string
  label: string
}

/**
 * Renders a link in the contact sidebar with an icon, label, and optional custom class.
 *
 * @param icon - The icon component to display before the link.
 * @param link - The URL of the link.
 * @param label - The label text of the link.
 * @param className - Optional additional class name(s) for the link container.
 * @param props - Additional props to pass to the link container.
 * @returns The rendered ContactSidebarLink component.
 */
const ContactSidebarLink = ({ icon, link, label, className, ...props }: ContactSidebarLinkProps) => {
  const compCn = cn("flex gap-2", className)

  return (
    <div className={compCn} {...props}>
      {icon}
      <a href={link} target="_blank">
        {label}
      </a>
    </div>
  )
}

export default ContactSidebarLink
