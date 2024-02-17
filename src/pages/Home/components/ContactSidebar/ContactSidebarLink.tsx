import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface ContactSidebarLinkProps extends HTMLAttributes<HTMLElement> {
  icon: JSX.Element
  link?: string
  label: string
}

const ContactSidebarLink = ({ icon, link, label, className, ...props }: ContactSidebarLinkProps) => {
  const compCn = cn("flex gap-2", className)

  return (
    <div className={compCn} {...props}>
      {icon}
      <a href={link}>{label}</a>
    </div>
  )
}

export default ContactSidebarLink
