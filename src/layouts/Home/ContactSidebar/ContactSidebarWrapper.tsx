import { HTMLAttributes } from "react"

import { Github, Inbox, Linkedin, LocateFixed, Voicemail } from "lucide-react"

import { cn } from "@/lib/utils"

import ContactSidebarLink from "@/layouts/Home/ContactSidebar/ContactSidebarLink"
import { githubProfileLink, linkedInProfileLink } from "@/lib/constants"
import ViewResumeButton from "../ViewResumeButton/ViewResumeButton"
import { TypeAnimation } from "react-type-animation"
import PFPWFRAME from "/imgs/pfp-w-frame.png"
import PFPWFRAMEBLACK from "/imgs/pfp-w-frame-black.png"
import { useTheme } from "@/hooks/useTheme"

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
  const { theme } = useTheme()
  const compCn = cn("hidden xl:block sticky h-full top-8 left-[2rem] p-3 px-5 w-max animate-in fade-in", className)

  return (
    <aside className={compCn} {...props}>
      <img
        src={theme === "dark" ? PFPWFRAME : PFPWFRAMEBLACK}
        alt="Profile Picture"
        width={250}
        className="mx-auto select-none"
      />
      <section className="flex flex-col my-5">
        <TypeAnimation
          sequence={[1000, "Johcel Gene Bitara", 1000]}
          wrapper="h3"
          speed={50}
          repeat={Infinity}
          cursor={false}
          className="inline-block uppercase font-artegra tracking-widest font-bold min-w-[19ch]"
        />
        <div className="flex flex-wrap">Software Engineer • Developer</div>
      </section>
      <ViewResumeButton />
      <section className="flex flex-col my-5">
        <h3 className="font-bold tracking-widest uppercase font-artegra">Contacts</h3>
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
            label="linkedin.com/in/gene-bitara"
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
