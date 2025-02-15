import { Github, Inbox, Linkedin } from "lucide-react"
import * as constants from "@/assets/svgs/"
import { Link } from "react-router-dom"
import {
  figmaLink,
  mailTo,
  firebaseLink,
  githubProfileLink,
  linkedInProfileLink,
  reactLink,
  skillsIconsLink,
  splineLink,
} from "@/lib/constants"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative flex justify-center p-20 bg-stone-950 md:mt-40 dark:bg-stone-900">
      <div className="flex flex-col gap-20">
        <section className="flex flex-col gap-3">
          <h3 className="font-bold tracking-widest text-center text-white uppercase font-artegra">
            Interested in my Works?
          </h3>
          <p className="text-center text-slate-400">Contact me! Let's have a coffee.</p>
          <div className="flex gap-3 mx-auto text-slate-400">
            <Link target="_blank" to={githubProfileLink}>
              <Button variant={"ghost"} size={"icon"} className="bg-white rounded-full text-neutral-800">
                <Github size={18} />
              </Button>
            </Link>
            <Link target="_blank" to={linkedInProfileLink}>
              <Button variant={"ghost"} size={"icon"} className="bg-white rounded-full text-neutral-800">
                <Linkedin size={18} />
              </Button>
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = mailTo
                e.preventDefault()
              }}
            >
              <Button variant={"ghost"} size={"icon"} className="bg-white rounded-full text-neutral-800">
                <Inbox size={18} />
              </Button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-sm tracking-widest text-center text-white uppercase font-artegra">Project Resources</p>
          <div className="flex gap-3 mx-auto text-slate-400 hover:*:underline">
            <Link target="_blank" to={figmaLink}>
              Figma
            </Link>
            <Link target="_blank" to={splineLink}>
              Spline
            </Link>
            <Link target="_blank" to={skillsIconsLink}>
              Skill Icons
            </Link>
            <Link target="_blank" to={reactLink}>
              React
            </Link>
            <Link target="_blank" to={firebaseLink}>
              Firebase
            </Link>
          </div>
        </section>
        <section>
          <p className="text-center text-white">@GeneBit © {currentYear}. Portfolio</p>
        </section>
      </div>
      <img className="absolute bottom-0 left-0" src={constants.DOTPATTERN} alt="" />
    </footer>
  )
}

export default Footer
