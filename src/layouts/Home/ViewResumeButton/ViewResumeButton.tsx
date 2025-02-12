import { HTMLAttributes } from "react"

import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import * as constants from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog"
import CardIndicator from "@/pages/Home/ProjectsSection/components/ProjectCard/Card/CardIndicator"
import CardCloseButton from "@/pages/Home/ProjectsSection/components/ProjectCard/Card/CardCloseButton"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import TabTrigger from "@/pages/Home/ProjectsSection/components/TabTrigger"
import { Tabs, TabsList, TabsContent } from "@radix-ui/react-tabs"

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
          View Resume <span className="font-segoeui">/</span> CV
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl gap-0 h-[50rem]">
        <CardCloseButton />
        <CardIndicator />
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
              </TabsContent>
            </Tabs>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="default" className="mt-3 tracking-widest uppercase font-artegra" asChild>
            <Link to={constants.resumeLink} target="_blank">
              View Full Screen
            </Link>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ViewResumeButton
