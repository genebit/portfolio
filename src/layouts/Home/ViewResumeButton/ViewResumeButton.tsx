import { HTMLAttributes } from "react"

import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import * as constants from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList } from "@radix-ui/react-tabs"
import { AlertDialogHeader } from "@/components/ui/alert-dialog"
import { ProjectCardCloseButton, ProjectCardIndicator } from "@/pages/Home/ProjectsSection/components/ProjectCard"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { TabTrigger } from "@/components/ui/tabs"

/**
 * Renders a button component that triggers an alert dialog to view a resume.
 * @param className - The CSS class name for the button component.
 * @param props - Additional HTML attributes for the button component.
 * @returns The rendered ViewResumeButton component.
 */
const ViewResumeButton = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("w-full uppercase font-artegra tracking-widest", className)

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={compCn} {...props}>
          View Resume / CV
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl gap-0 h-[50rem]">
        <ProjectCardCloseButton />
        <ProjectCardIndicator />
        <AlertDialogHeader>
          <AlertDialogDescription>
            <Tabs defaultValue="resume" className="w-full">
              <TabsList className="justify-start w-full mb-3 bg-transparent border-b-2">
                <TabTrigger value="resume" label="Resume" />
                <TabTrigger value="cv" label="Curriculum Vitae" />
              </TabsList>
              <TabsContent value="resume" className="duration-1000 select-none animate-in fade-in">
                <object data={constants.resumeLink} type="application/pdf" width="100%" height="600px">
                  <p>
                    It appears you don't have a PDF plugin for this browser.
                    <br />
                    <a href={constants.resumeLink} className="underline">
                      Download the PDF file.
                    </a>
                  </p>
                </object>
                <div className="w-max ms-auto">
                  <Button variant="default" className="mt-3 tracking-widest uppercase font-artegra" asChild>
                    <Link to={constants.resumeLink} target="_blank">
                      View Full Screen
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="cv" className="duration-1000 select-none animate-in fade-in">
                <object data={constants.cvLink} type="application/pdf" width="100%" height="600px">
                  <p>
                    It appears you don't have a PDF plugin for this browser.
                    <br />
                    <a href={constants.cvLink} className="underline">
                      Download the PDF file.
                    </a>
                  </p>
                </object>
                <div className="w-max ms-auto">
                  <Button variant="default" className="mt-3 tracking-widest uppercase font-artegra" asChild>
                    <Link to={constants.cvLink} target="_blank">
                      View Full Screen
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ViewResumeButton
