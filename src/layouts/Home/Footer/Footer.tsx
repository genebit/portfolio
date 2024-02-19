import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin } from "lucide-react"
import dotPattern from "@/assets/svgs/illustrations/dot-pattern.svg"

const Footer = () => {
  return (
    <footer className="relative flex justify-center p-20 bg-slate-950 mt-60 dark:bg-stone-900">
      <div className="flex flex-col gap-20">
        <section>
          <h3 className="text-xl text-white font-meltow-bold">Interested?</h3>
          <p className="text-slate-400">Contact me! Let's have a coffee.</p>
          <form className="flex flex-col gap-3 mt-5 lg:flex-row">
            <Input placeholder="genebitara@gmail.com" className="w-full lg:w-80" />
            <Button variant="default" className="px-8 text-white font-meltow-bold">
              Submit
            </Button>
          </form>
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-center text-white">@GeneBit © 2023. Portfolio</p>
          <div className="flex gap-3 mx-auto text-slate-400">
            <Github size={18} />
            <Linkedin size={18} />
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <p className="text-center text-white">Project Resources</p>
          <div className="flex gap-3 mx-auto text-slate-400">
            <small>Figma</small>
            <small>Spline</small>
            <small>Skill Icons</small>
            <small>React</small>
            <small>Firebase</small>
          </div>
        </section>
      </div>
      <img className="absolute bottom-0 left-0" src={dotPattern} alt="" />
    </footer>
  )
}

export default Footer
