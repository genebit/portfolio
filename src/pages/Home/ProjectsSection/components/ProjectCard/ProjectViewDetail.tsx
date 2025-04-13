import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react"

import { BookOpen } from "lucide-react"

import { cn } from "@/lib/utils"
import { Project } from "@/types/Project"
import { Screenshot } from "@/types/Screenshot"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { AutoScrollButton, Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import ProjectGallery from "./ProjectGallery"
import { useProjectCard } from "../../hooks/useProjectCard"

import "react-image-gallery/styles/css/image-gallery.css"

interface ProjectViewDetailProps extends HTMLAttributes<HTMLElement> {
  thumbnails: Screenshot[]
  data: Project
}

const ProjectViewDetail = ({ data, thumbnails, className, children, ...props }: ProjectViewDetailProps) => {
  const { openProjectDetail, setOpenProjectDetail } = useProjectCard()
  const scrollableElementRef = useRef<HTMLDivElement>(null)
  const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null)

  const compCn = cn("p-0", className)

  useEffect(() => {
    if (openProjectDetail) {
      // Use requestAnimationFrame to wait for next frame after Sheet mount
      const timeoutId = setTimeout(() => {
        setScrollElement(scrollableElementRef.current)
      }, 0)

      return () => clearTimeout(timeoutId)
    } else {
      // Reset when sheet closes
      setScrollElement(null)
    }
  }, [openProjectDetail])

  return (
    <Sheet open={openProjectDetail} onOpenChange={setOpenProjectDetail}>
      <SheetTrigger asChild>
        <div>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full bg-secondary">
                  <BookOpen className="dark:text-white" size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Project Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </SheetTrigger>
      <SheetContent className={compCn} {...props}>
        <div data-lenis-prevent className="relative">
          <div className="max-h-screen p-5 overflow-y-scroll" ref={scrollableElementRef}>
            <SheetHeader>
              <SheetTitle className="mb-3">
                <div className="flex items-center gap-3 my-3">
                  <BookOpen className="dark:text-white" size={20} />
                  <h3 className="font-bold tracking-widest uppercase font-artegra">Project Details</h3>
                </div>
                <hr />
              </SheetTitle>
            </SheetHeader>
            <section className="w-full p-3 rounded-lg bg-stone-100 dark:bg-stone-900">
              <div className="mx-auto max-w-96">
                <ProjectGallery thumbnails={thumbnails} />
              </div>
            </section>
            <section className="flex flex-col gap-3 p-3">
              <hr />
              {children}
              <hr />
              <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold">
                    My Roles and Responsibilities in the Project
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="*:list-disc *:list-item">
                      {data?.contributions.length ? (
                        data.contributions.map((feature: ReactNode, index: number) => (
                          <li key={`feature-${index}`}>{feature}</li>
                        ))
                      ) : (
                        <li className="text-slate-400">No contributions loaded...</li>
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-semibold">Project Features</AccordionTrigger>
                  <AccordionContent>
                    <ul className="*:list-disc *:list-item">
                      {data?.features.length ? (
                        data.features.map((feature: ReactNode, index: number) => (
                          <li key={`feature-${index}`}>{feature}</li>
                        ))
                      ) : (
                        <li className="text-slate-400">No features loaded...</li>
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-semibold">Project Contributors</AccordionTrigger>
                  <AccordionContent>
                    <ul className="*:list-disc *:list-item">
                      {data?.proponents.length ? (
                        data.proponents.map((proponent: ReactNode, index: number) => (
                          <li key={`feature-${index}`}>{proponent}</li>
                        ))
                      ) : (
                        <li className="text-slate-400">No proponents loaded...</li>
                      )}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
          <AutoScrollButton scrollableElement={scrollElement} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ProjectViewDetail
