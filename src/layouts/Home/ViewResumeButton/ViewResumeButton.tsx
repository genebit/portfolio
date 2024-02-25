import { AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"
import CardCloseButton from "@/pages/Home/components/ProjectsSection/components/ProjectCard/Card/CardCloseButton"
import CardIndicator from "@/pages/Home/components/ProjectsSection/components/ProjectCard/Card/CardIndicator"
import * as constants from "@/lib/constants"

/**
 * Renders a button component that triggers an alert dialog to view a resume.
 * @param className - The CSS class name for the button component.
 * @param props - Additional HTML attributes for the button component.
 * @returns The rendered ViewResumeButton component.
 */
const ViewResumeButton = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("w-full font-meltow-bold", className)

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={compCn} {...props}>
          View Resume
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl gap-0 h-[50rem]">
        <CardCloseButton />
        <CardIndicator />
        <AlertDialogHeader>
          <AlertDialogDescription>
            <object data={constants.resumeLink} type="application/pdf" width="100%" height="600px">
              <p>
                It appears you don't have a PDF plugin for this browser.
                <a href={constants.resumeLink}>click here to download the PDF file.</a>
              </p>
            </object>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="default" className="font-meltow" asChild>
            <Link to={constants.resumeLink} target="_blank">
              View on a New Tab
            </Link>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ViewResumeButton