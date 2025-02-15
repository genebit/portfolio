import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HTMLAttributes } from "react"
import { Project } from "../../types/Project"

interface ProjectContributorsProps extends HTMLAttributes<HTMLElement> {
  project: Project
}

const ProjectContributors = ({ project }: ProjectContributorsProps) => {
  return (
    <section>
      <h3 className="text-sm font-bold tracking-widest uppercase font-artegra">Project Contributors</h3>
      <div className="flex -space-x-2 rtl:space-x-reverse">
        <TooltipProvider>
          {project.proponents.map((contributor, contributorIndex) => (
            <Tooltip key={`${contributor}-${contributorIndex}`} delayDuration={100}>
              <TooltipTrigger>
                <img
                  className="transition-transform rounded-full dark:ring-2 dark:ring-stone-950 w-7 h-7 hover:scale-125"
                  src={`https://ui-avatars.com/api/?name=${contributor}&background=FFF&color=0C0A09&bold=true`}
                  alt={contributor}
                />
              </TooltipTrigger>
              <TooltipContent>{contributor}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </section>
  )
}

export default ProjectContributors
