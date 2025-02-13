import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowUpRightFromSquare, LockKeyhole } from "lucide-react"
import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"
import { useProjectCard } from "../../hooks/useProjectCard"

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
  const compCn = cn("flex gap-2 ms-auto", className)

  return (
    <div className={compCn} {...props}>
      {!openProjectDetail && (
        <>
          <Button
            variant="outline"
            className="tracking-widest uppercase text-primary font-artegra"
            disabled={disableSrcCodeBtn}
          >
            {disableSrcCodeBtn && <LockKeyhole size={20} className="me-1" />}
            <Link to={srcCodeUrl}>View Source Code</Link>
            {!disableSrcCodeBtn && <ArrowUpRightFromSquare size={20} className="ms-1" />}
          </Button>
          <Button variant="default" className="tracking-widest uppercase font-artegra" disabled={disableDemoBtn}>
            {disableDemoBtn && <LockKeyhole size={20} className="me-1" />}
            <Link to={demoUrl}>View Demo</Link>
            {!disableDemoBtn && <ArrowUpRightFromSquare size={20} className="ms-1" />}
          </Button>
        </>
      )}
    </div>
  )
}

export default ProjectFooterButtons
