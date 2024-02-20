import { HTMLAttributes } from "react"

import { Github, Inbox, Linkedin, LocateFixed, Voicemail } from "lucide-react"

import { cn } from "@/lib/utils"
import pfp from "@/assets/imgs/PfpWFrame.png"
import { Button } from "@/components/ui/button"

import ContactSidebarLink from "@/layouts/Home/ContactSidebar/ContactSidebarLink"
import { githubProfileLink, linkedInProfileLink } from "@/lib/constants"

/**
 * Wrapper component for the contact sidebar.
 *
 * @component
 * @param {HTMLAttributes<HTMLElement>} props - The HTML attributes for the wrapper element.
 * @param {ReactNode} props.children - The content to be rendered inside the wrapper.
 * @param {string} props.className - The additional CSS class name for the wrapper.
 * @returns {JSX.Element} The rendered component.
 */
const ContactSidebarWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("hidden xl:block sticky h-full top-8 left-[2rem] p-3 px-5 w-max animate-in fade-in", className)

  return (
    <aside className={compCn} {...props}>
      <img src={pfp} alt="Profile Picture" width={250} />
      <section className="flex flex-col my-5">
        <h2 className="text-xl font-meltow-bold">Johcel Gene T. Bitara</h2>
        <p>Software Developer</p>
      </section>
      <Button className="w-full font-meltow-bold">View Resume</Button>
      <section className="flex flex-col my-5">
        <h3 className="text-lg font-meltow-bold">Contacts</h3>
        <div className="flex flex-col gap-2 mt-3">
          <ContactSidebarLink icon={<Voicemail size={18} />} label="0970 322 4661" />
          <ContactSidebarLink icon={<LocateFixed size={18} />} label="Philippines" />
          <ContactSidebarLink icon={<Inbox size={18} />} label="genebitara@gmail.com" />
          <ContactSidebarLink
            icon={<Github size={18} />}
            label="github.com/genebit"
            className="hover:underline underline-offset-4"
            link={githubProfileLink}
          />
          <ContactSidebarLink
            icon={<Linkedin size={18} />}
            label="in/johcel-gene-bitara-a413b9283"
            className="hover:underline underline-offset-4"
            link={linkedInProfileLink}
          />
        </div>
      </section>
      {children}
    </aside>
  )
}

export default ContactSidebarWrapper
