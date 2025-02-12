import { HTMLAttributes, useEffect } from "react"
import { BookOpen } from "lucide-react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useProjectCard } from "./hooks/useProjectCard"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Project } from "../../TabContent/HighlightProjects/types/Project"

interface ProjectWrapperProps extends HTMLAttributes<HTMLElement> {
  thumbnails: string[]
  data: Project
}

const ProjectWrapper = ({ data, thumbnails, children, className, ...props }: ProjectWrapperProps) => {
  const { openProjectDetail, setOpenProjectDetail } = useProjectCard()
  const compCn = cn("flex flex-col relative gap-5 md:flex-row", className)

  return (
    <div className={compCn} {...props}>
      <div className="absolute top-2 right-2">
        <Sheet open={openProjectDetail} onOpenChange={setOpenProjectDetail}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full bg-secondary">
              <BookOpen className="dark:text-white" size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mb-3">
                <div className="flex items-center gap-3 my-3">
                  <BookOpen className="dark:text-white" size={20} />
                  <h3 className="font-bold tracking-widest uppercase font-artegra">Project Details</h3>
                </div>
                <hr />
              </SheetTitle>
            </SheetHeader>
            <div className="w-full p-3 rounded-lg bg-stone-900">
              <div className="mx-auto max-w-96">
                <ImageGallery
                  slideDuration={1}
                  autoPlay={true}
                  showPlayButton={false}
                  showNav={false}
                  items={thumbnails}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <hr />
              {children}
              <hr />
              <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>My Roles and Responsibilities in the Project</AccordionTrigger>
                  <AccordionContent>
                    {/* TODO: change this... */}
                    <ul className="*:list-disc *:list-item">
                      {data?.features.length ? (
                        data.features.map((feature, index) => <li key={`feature-${index}`}>{feature}</li>)
                      ) : (
                        <li className="text-slate-400">No features loaded...</li>
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Project Features</AccordionTrigger>
                  <AccordionContent>
                    <ul className="*:list-disc *:list-item">
                      {data?.features.length ? (
                        data.features.map((feature, index) => <li key={`feature-${index}`}>{feature}</li>)
                      ) : (
                        <li className="text-slate-400">No features loaded...</li>
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Project Contributors</AccordionTrigger>
                  <AccordionContent>
                    <ul className="*:list-disc *:list-item">
                      {data?.proponents.length ? (
                        data.proponents.map((proponent, index) => <li key={`feature-${index}`}>{proponent}</li>)
                      ) : (
                        <li className="text-slate-400">No proponents loaded...</li>
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-full md:max-w-72">
        <ImageGallery slideDuration={1} showPlayButton={false} showNav={false} items={thumbnails} />
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

export default ProjectWrapper
