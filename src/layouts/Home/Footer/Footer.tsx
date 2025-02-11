import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin } from "lucide-react"
import * as constants from "@/assets/svgs/"
import { Link } from "react-router-dom"
import {
  figmaLink,
  firebaseLink,
  githubProfileLink,
  linkedInProfileLink,
  reactLink,
  skillsIconsLink,
  splineLink,
} from "@/lib/constants"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative flex justify-center p-20 bg-slate-950 md:mt-40 dark:bg-stone-900">
      <div className="flex flex-col gap-20">
        <section>
          <h3 className="font-bold tracking-widest text-white uppercase font-artegra">Interested?</h3>
          <p className="text-slate-400">Contact me! Let's have a coffee.</p>
          <form className="flex flex-col gap-3 mt-5 lg:flex-row">
            <Input placeholder="genebitara@gmail.com" className="w-full lg:w-80" />
            <Button variant="default" className="px-8 font-bold tracking-widest text-white uppercase font-artegra">
              Submit
            </Button>
          </form>
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-center text-white">@GeneBit © {currentYear}. Portfolio</p>
          <div className="flex gap-3 mx-auto text-slate-400">
            <Link target="_blank" to={githubProfileLink}>
              <Github size={18} />
            </Link>
            <Link target="_blank" to={linkedInProfileLink}>
              <Linkedin size={18} />
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-center text-white">Project Resources</p>
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
      </div>
      <img className="absolute bottom-0 left-0" src={constants.DOTPATTERN} alt="" />
    </footer>
  )
}

export default Footer
