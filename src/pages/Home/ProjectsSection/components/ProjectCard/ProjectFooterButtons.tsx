import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowUpRightFromSquare, LockKeyhole } from "lucide-react"
import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"
import { useProjectCard } from "../../hooks/useProjectCard"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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
  const { openProjectDetail } = useProjectCard()
  const compCn = cn("flex flex-col sm:flex-row gap-2 sm:ms-auto", className)

  const SourceCodeButton = () => {
    return (
      <Button
        variant="outline"
        className="w-full tracking-widest uppercase text-primary font-artegra"
        disabled={disableSrcCodeBtn}
      >
        {disableSrcCodeBtn && <LockKeyhole size={14} className="me-1" />}
        <Link to={srcCodeUrl}>View Source Code</Link>
        {!disableSrcCodeBtn && <ArrowUpRightFromSquare size={14} className="ms-1" />}
      </Button>
    )
  }

  const DemoButton = () => {
    return (
      <Button variant="default" className="w-full tracking-widest uppercase font-artegra" disabled={disableDemoBtn}>
        {disableDemoBtn && <LockKeyhole size={14} className="me-1" />}
        <Link to={demoUrl}>View Demo</Link>
        {!disableDemoBtn && <ArrowUpRightFromSquare size={14} className="ms-1" />}
      </Button>
    )
  }

  return (
    <div className={compCn} {...props}>
      {!openProjectDetail && (
        <TooltipProvider delayDuration={100}>
          {disableSrcCodeBtn ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="w-full">
                  <SourceCodeButton />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>The project source code is not publicly available</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <SourceCodeButton />
          )}
          {disableDemoBtn ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="w-full">
                  <DemoButton />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>The live demo. is not publicly available</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <DemoButton />
          )}
        </TooltipProvider>
      )}
    </div>
  )
}

export default ProjectFooterButtons
