import { HTMLAttributes } from "react"

import { MoonStar, UserRoundSearch } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import RightSidebarLink from "@/pages/Home/components/RightSidebar/RightSidebarLink"
import ContactSidebarWrapper from "@/pages/Home/components/ContactSidebar/ContactSidebarWrapper"

/**
 * Represents the top navigation bar component.
 * @param children - The child elements.
 * @param className - The CSS class name.
 * @param props - Additional HTML attributes for the component.
 * @returns The rendered top navigation bar.
 */
const TopNavbar = ({ children, className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("fixed z-30 flex w-full px-5 py-2 bg-transparent backdrop-filter backdrop-blur", className)

  return (
    <nav className={compCn} {...props}>
      <div className="flex">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <UserRoundSearch size={20} className="lg:hidden text-primary animate-in fade-in" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-max" side="left">
            <ContactSidebarWrapper className="static block" />
          </SheetContent>
        </Sheet>
        <Button variant="ghost" size="icon">
          <MoonStar size={20} className="text-primary" />
        </Button>
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
