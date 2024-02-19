import { HTMLAttributes } from "react"

import { MoonStar, Sun, UserRoundSearch } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import RightSidebarLink from "@/pages/Home/components/RightSidebar/RightSidebarLink"
import ContactSidebarWrapper from "@/pages/Home/components/ContactSidebar/ContactSidebarWrapper"
import { useTheme } from "@/components/ThemeProvider"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

/**
 * Represents the top navigation bar component.
 * @param children - The child elements.
 * @param className - The CSS class name.
 * @param props - Additional HTML attributes for the component.
 * @returns The rendered top navigation bar.
 */
const TopNavbar = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("fixed z-30 flex w-full px-5 py-2 bg-transparent backdrop-filter backdrop-blur", className)

  const ToggleContactSidebar = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="bg-transparent lg:hidden text-primary animate-in fade-in">
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
      <div className="2xl:hidden fixed top-3 right-5 lg:left-[21rem] animate-in fade-in">
        <RightSidebarLink jumpTo="about" label="ABOUT" />
        <RightSidebarLink jumpTo="toolsIUse" label="TOOLS I USE" />
        <RightSidebarLink jumpTo="projects" label="PROJECTS" />
      </div>
      {children}
    </nav>
  )
}

export default TopNavbar
