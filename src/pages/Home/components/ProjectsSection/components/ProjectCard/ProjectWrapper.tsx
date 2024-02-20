import { Fragment, HTMLAttributes } from "react"

import { MoreVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import CardIndicator from "./Card/CardIndicator"
import CardCloseButton from "./Card/CardCloseButton"
import { ProjectDateSpan, Tag, ProjectTitle, TagWrapper, ProjectDescription } from "."

const ProjectWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
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
                  <Tag>Cross Platform</Tag>
                  <Tag>Artificial Intelligence</Tag>
                  <Tag>UI/UX Design</Tag>
                  <Tag>Lead Frontend Developer</Tag>
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
                  <Tag>Mobile Development</Tag>
                  <Tag>Project Management</Tag>
                  <Tag>UI/UX Design</Tag>
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
                  <Tag>Government Project</Tag>
                  <Tag>Full Stack .NET Web Development</Tag>
                  <Tag>Data Processing</Tag>
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
        <AlertDialogContent className="max-w-2xl">
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
      <img src="https://dummyimage.com/1920x1080" alt="" className="h-full transition-all md:max-w-[20rem]" />
      <div className="flex flex-col gap-3">{children}</div>
      <ToggleProjectDetails />
    </div>
  )
}

export default ProjectWrapper
