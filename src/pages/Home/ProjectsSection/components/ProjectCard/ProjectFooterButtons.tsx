import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip"
import { LockKeyhole } from "lucide-react"
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
      <TooltipProvider key="tp-source-code">
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="outline"
              className="tracking-widest uppercase text-primary font-artegra"
              disabled={disableSrcCodeBtn}
            >
              {disableSrcCodeBtn && <LockKeyhole className="w-4 h-4 me-1" />}
              <Link to={srcCodeUrl}>View Source Code</Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{disableSrcCodeBtn ? <span>No privilege to view</span> : <span>View</span>}</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="default" className="tracking-widest uppercase font-artegra" disabled={disableDemoBtn}>
              {disableDemoBtn && <LockKeyhole className="w-4 h-4 me-1" />}
              <Link to={demoUrl}>View Demo</Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{disableDemoBtn ? <span>No privilege to view</span> : <span>View</span>}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default ProjectFooterButtons
