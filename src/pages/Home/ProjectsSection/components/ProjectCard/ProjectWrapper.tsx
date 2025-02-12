import { HTMLAttributes } from "react"

import { MoreHorizontal } from "lucide-react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import CardIndicator from "./Card/CardIndicator"
import CardCloseButton from "./Card/CardCloseButton"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ProjectWrapperProps extends HTMLAttributes<HTMLElement> {
  thumbnails: string[]
}

const ProjectWrapper = ({ thumbnails, children, className, ...props }: ProjectWrapperProps) => {
  const compCn = cn("flex flex-col relative gap-5 md:flex-row", className)

  const ToggleProjectDetails = () => {
    return (
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="absolute top-0 right-0 z-20">
            <Button variant="ghost" size="icon" className="rounded-full">
              <TooltipProvider key="tp-view-project">
                <Tooltip>
                  <TooltipTrigger>
                    <MoreHorizontal className="dark:text-white" size={20} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem>View Project Details</DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent className="max-w-2xl gap-0">
          <CardCloseButton />
          <CardIndicator />
          <article className="flex flex-col gap-3">...</article>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  return (
    <div className={compCn} {...props}>
      <div className="w-full md:max-w-72">
        <ImageGallery slideDuration={1} autoPlay={true} showPlayButton={false} showNav={false} items={thumbnails} />
      </div>
      <div className="flex flex-col gap-3">{children}</div>
      <ToggleProjectDetails />
    </div>
  )
}

export default ProjectWrapper
