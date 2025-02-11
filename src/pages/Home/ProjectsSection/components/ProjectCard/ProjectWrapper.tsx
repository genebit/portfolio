import { HTMLAttributes } from "react"

import { MoreHorizontal, ScanSearch } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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
              <TooltipProvider>
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
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" className="hover:bg-background" asChild>
            <div className="flex items-center justify-center h-max">
              <img
                src={thumbnails[0]}
                alt="thumbnail"
                className="h-max transition-all md:max-w-[20rem] peer hover:cursor-pointer"
              />
              <span className="absolute hidden peer-hover:block animate-in fade-in dark:mix-blend-difference dark:grayscale">
                <ScanSearch />
              </span>
            </div>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-4xl h-max">
          <CardCloseButton />
          <CardIndicator />
          <Carousel orientation="horizontal" className="max-w-4xl p-0 mx-auto">
            <CarouselContent>
              {thumbnails.map((thumbnail, index) => (
                <CarouselItem key={index}>
                  <img
                    src={thumbnail}
                    alt="thumbnail"
                    className="w-full transition-all h-max peer hover:cursor-pointer"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="secondary" className="dark:mix-blend-difference dark:grayscale" />
            <CarouselNext variant="secondary" className="dark:mix-blend-difference dark:grayscale" />
          </Carousel>
        </AlertDialogContent>
      </AlertDialog>
      <div className="flex flex-col gap-3">{children}</div>
      <ToggleProjectDetails />
    </div>
  )
}

export default ProjectWrapper
