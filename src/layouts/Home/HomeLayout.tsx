import { HTMLAttributes } from "react"

import { ReactLenis } from "lenis/react"
import { useTheme } from "@/hooks/useTheme"
import Footer from "@/layouts/Home/Footer/Footer"
import TopNavbar from "@/layouts/Home/TopNavbar/TopNavbar"
import DotBackground from "@/components/ui/dot-background"
import ContactSidebarWrapper from "@/layouts/Home/ContactSidebar/ContactSidebarWrapper"

import "@/pages/Home/HomePage.css"

const HomeContent = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <main className="max-w-[100rem] mx-auto relative z-20 flex flex-row h-full justify-evenly animate-in fade-in duration-1000">
      <ContactSidebarWrapper />
      {children}
    </main>
  )
}

const HomeLayout = ({ children }: HTMLAttributes<HTMLElement>) => {
  const { theme } = useTheme()

  return (
    <>
      <DotBackground className={`z-0 ${theme === "light" ? "opacity-full" : "opacity-40"}`} />
      <TopNavbar />
      {window.matchMedia("(max-width: 576px)").matches ? (
        <HomeContent>{children}</HomeContent>
      ) : (
        <ReactLenis root>
          <HomeContent>{children}</HomeContent>
        </ReactLenis>
      )}
      <Footer />
    </>
  )
}

export default HomeLayout
