import { HTMLAttributes } from "react"

import {
  BookOpen,
  Clapperboard,
  FileQuestion,
  FolderArchive,
  Github,
  LibraryBig,
  MoonStar,
  Sun,
  UserRoundSearch,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import RightSidebarLink from "@/layouts/Home/RightSidebar/RightSidebarLink"
import ContactSidebarWrapper from "@/layouts/Home/ContactSidebar/ContactSidebarWrapper"
import { useTheme } from "@/context/ThemeProvider"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { BlogPostsSection } from "@/pages/Home"
import { RightSidebarHeading } from "../RightSidebar"

const TopNavbar = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("fixed z-30 flex w-full px-5 py-2 bg-transparent backdrop-filter backdrop-blur", className)

  const ToggleContactSidebar = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="bg-transparent xl:hidden text-primary hover:text-primary animate-in fade-in"
          >
            <UserRoundSearch size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-max" side="left">
          <ContactSidebarWrapper className="static block" />
        </SheetContent>
      </Sheet>
    )
  }

  const ToggleThemeMode = () => {
    const { setTheme } = useTheme()

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="bg-transparent">
            <Sun className="h-[1.2rem] w-[1.2rem] text-primary rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonStar className="absolute h-[1.2rem] text-primary w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <nav className={compCn} {...props}>
      <div className="flex">
        <ToggleContactSidebar />
        <ToggleThemeMode />
      </div>
      <div className="flex flex-row items-center ms-auto 2xl:hidden top-3 right-10 animate-in fade-in">
        <RightSidebarLink icon={<FileQuestion size={20} />} jumpTo="about" label="About" />
        <RightSidebarLink icon={<Github size={20} />} jumpTo="git-timeline" label="Git Timeline" />
        <RightSidebarLink icon={<LibraryBig size={20} />} jumpTo="tools" label="Tools" />
        <RightSidebarLink icon={<FolderArchive size={20} />} jumpTo="projects" label="Projects" />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"} className="mt-0.5">
              <BookOpen size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <RightSidebarHeading>Markdown Blog Posts</RightSidebarHeading>
            <BlogPostsSection />
          </SheetContent>
        </Sheet>
      </div>
      {children}
    </nav>
  )
}

export default TopNavbar
