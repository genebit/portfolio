import { Fragment, HTMLAttributes } from "react"

import { MoreVertical, ScanSearch } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import CardIndicator from "./Card/CardIndicator"
import CardCloseButton from "./Card/CardCloseButton"
import { ProjectDateSpan, ProjectDescription, ProjectTag, ProjectTitle, TagWrapper } from "."

interface ProjectWrapperProps extends HTMLAttributes<HTMLElement> {
  thumbnails: string[]
}

const ProjectWrapper = ({ thumbnails, children, className, ...props }: ProjectWrapperProps) => {
  const compCn = cn("flex flex-col relative gap-5 md:flex-row", className)

  const ToggleProjectDetails = () => {
    const RenderProjectInfoBasedOnId = () => {
      switch (props.id) {
        case "highlightProject1":
          return (
            <Fragment>
              <ProjectDateSpan>2023 - Present</ProjectDateSpan>
              <header>
                <ProjectTitle>STUBU.AI: Your Personalized Study Buddy</ProjectTitle>
                <TagWrapper>
                  <ProjectTag>Cross Platform</ProjectTag>
                  <ProjectTag>Artificial Intelligence</ProjectTag>
                  <ProjectTag>UI/UX Design</ProjectTag>
                  <ProjectTag>Lead Frontend Developer</ProjectTag>
                </TagWrapper>
              </header>
              <ProjectDescription>
                <p>
                  An AI-powered Learning Management System that adapts to learners as an all-in-one study buddy turning
                  education into a personalized and interactive experience. Reinventing the traditional education
                  system.
                </p>
                <br />
                <span className="font-meltow-bold dark:text-white">Developed By</span>
                <p>Team STUBU</p>
                <br />
                <h5 className="dark:text-white font-meltow-bold">Features:</h5>
                <table>
                  <tr>
                    <td valign="top">
                      <ul className="list-disc ms-10">
                        <li>Account creation</li>
                        <li>Authentication module</li>
                        <li>Notification system</li>
                        <li>Lesson Creation</li>
                        <li>Gamification</li>
                        <li>Progress Tracking</li>
                      </ul>
                    </td>
                    <td valign="top">
                      <ul className="list-disc ms-10">
                        <li>AI Study Buddy</li>
                        <li>Video Lecture Materials</li>
                        <li>Personalization</li>
                        <li>Accessibility Features</li>
                        <li>Skin Cosmetics</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </ProjectDescription>
              <div className="flex gap-2 ms-auto">
                <Button variant="outline" className="text-primary dark:text-white font-meltow-bold">
                  View Source Code
                </Button>
                <Button variant="default" className="font-meltow-bold">
                  View Demo
                </Button>
              </div>
            </Fragment>
          )

        case "highlightProject2":
          return (
            <Fragment>
              <ProjectDateSpan>2023 - 2023</ProjectDateSpan>
              <header>
                <ProjectTitle>eBayan</ProjectTitle>
                <TagWrapper>
                  <ProjectTag>Mobile Development</ProjectTag>
                  <ProjectTag>Project Management</ProjectTag>
                  <ProjectTag>UI/UX Design</ProjectTag>
                </TagWrapper>
              </header>
              <ProjectDescription>
                <p>
                  An intuitive barangay-to-community mobile application for announcement creation management system.
                  Built using Flutter and Firebase.
                </p>
                <br />
                <span className="font-meltow-bold dark:text-white">Commercial Advertistment</span>
                <p>
                  <a className="underline" target="_blank" href="https://www.youtube.com/watch?v=Oesh_VkuEy0">
                    View on YouTube
                  </a>
                </p>
                <br />
                <span className="font-meltow-bold dark:text-white">Project Contributor</span>
                <p>Miguel Damien Garcera</p>
                <br />
                <h5 className="dark:text-white font-meltow-bold">Features:</h5>
                <table>
                  <tr>
                    <td valign="top">
                      <ul className="list-disc ms-10">
                        <li>Admin module</li>
                        <li>Account creation</li>
                        <li>Authentication module</li>
                        <li>User module</li>
                        <li>Notification system</li>
                      </ul>
                    </td>
                    <td valign="top">
                      <ul className="list-disc ms-10">
                        <li>Announcement creation (Create, Edit, Delete)</li>
                        <li>Account management</li>
                        <li>Onboarding</li>
                        <li>Cloud database</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </ProjectDescription>
              <div className="flex gap-2 ms-auto">
                <Button variant="outline" className="text-primary dark:text-white font-meltow-bold-bold">
                  View Source Code
                </Button>
                <Button variant="default" className="font-meltow-bold">
                  View Demo
                </Button>
              </div>
            </Fragment>
          )

        case "highlightProject3":
          return (
            <Fragment>
              <ProjectDateSpan>2022 - 2023</ProjectDateSpan>
              <header>
                <ProjectTitle>Department of Agriculture - AMIA</ProjectTitle>
                <TagWrapper>
                  <ProjectTag>Government Project</ProjectTag>
                  <ProjectTag>Full Stack .NET Web Development</ProjectTag>
                  <ProjectTag>Data Processing</ProjectTag>
                </TagWrapper>
              </header>
              <ProjectDescription>
                <p>A weather informative website for data analytics to Department of Agriculture stakeholders.</p>
                <br />
                <h5 className="dark:text-white font-meltow-bold">Features:</h5>
                <ul className="list-disc ms-10">
                  <li>5-day Weather outlook</li>
                  <li>Real Time data fetching</li>
                  <li>Data filtering/processing</li>
                  <li>Data File Exporting</li>
                  <li>Real-time Database</li>
                  <li>Windows Desktop Background Services</li>
                </ul>
              </ProjectDescription>
              <div className="flex gap-2 ms-auto">
                <Button variant="outline" className="text-primary dark:text-white font-meltow-bold-bold">
                  View Source Code
                </Button>
                <Button variant="default" className="font-meltow-bold">
                  View Demo
                </Button>
              </div>
            </Fragment>
          )
      }
    }

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
              <DropdownMenuItem>View Projet Details</DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialogContent className="max-w-2xl gap-0">
          <CardCloseButton />
          <CardIndicator />
          <article className="flex flex-col gap-3">
            <RenderProjectInfoBasedOnId />
          </article>
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
                className="h-max transition-all md:max-w-[20rem] rounded-lg peer hover:cursor-pointer"
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
                    className="w-full transition-all rounded-lg h-max peer hover:cursor-pointer"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="ghost" className="mix-blend-difference grayscale" />
            <CarouselNext variant="ghost" className="mix-blend-difference grayscale" />
          </Carousel>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex flex-col gap-3">{children}</div>
      <ToggleProjectDetails />
    </div>
  )
}

export default ProjectWrapper
