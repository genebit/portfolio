import { HTMLAttributes } from "react"

import { MoreVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import CardIndicator from "./Card/CardIndicator"
import CardCloseButton from "./Card/CardCloseButton"

const ProjectWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("flex flex-col relative gap-5 md:flex-row", className)

  const ToggleProjectDetails = () => {
    return (
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="absolute top-0 right-0 z-20">
            <Button variant="ghost" size="icon">
              <MoreVertical className="dark:text-white" size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem>View Project Details</DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent>
          <CardCloseButton />
          <CardIndicator />
          <article className="flex flex-col gap-5">
            <img src="https://dummyimage.com/1920x1080" alt="" className="w-full h-full transition-all" />
            {children}
          </article>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  return (
    <div className={compCn} {...props}>
      <img src="https://dummyimage.com/1920x1080" alt="" className="h-full transition-all md:max-w-[20rem]" />
      <div className="flex flex-col gap-3">{children}</div>
      <ToggleProjectDetails />
    </div>
  )
}

export default ProjectWrapper
