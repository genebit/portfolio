import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"

interface ProjectFooterButtonsProps extends HTMLAttributes<HTMLElement> {
  srcCodeUrl: string
  demoUrl: string
  disableSrcCodeBtn: boolean
  disableDemoBtn: boolean
}

const ProjectFooterButtons = ({
  srcCodeUrl,
  demoUrl,
  disableSrcCodeBtn,
  disableDemoBtn,
  className,
  ...props
}: ProjectFooterButtonsProps) => {
  const compCn = cn("flex gap-2 ms-auto", className)

  return (
    <div className={compCn} {...props}>
      <Button
        variant="outline"
        className="text-primary dark:text-white uppercase font-artegra tracking-widest font-bold"
        disabled={disableSrcCodeBtn}
      >
        <Link to={srcCodeUrl}>View Source Code</Link>
      </Button>
      <Button variant="default" className="font-artegra" disabled={disableDemoBtn}>
        <Link to={demoUrl}>View Demo</Link>
      </Button>
    </div>
  )
}

export default ProjectFooterButtons
