import { HTMLAttributes } from "react"

import TopNavbar from "@/layouts/Home/TopNavbar/TopNavbar"
import ContactSidebarWrapper from "@/layouts/Home/ContactSidebar/ContactSidebarWrapper"
import { ReactLenis } from "lenis/react"

import "@/pages/Home/HomePage.css"
import Footer from "@/layouts/Home/Footer/Footer"
import { BackgroundBeams } from "@/components/ui/background-beams"

const HomeLayout = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <>
      <BackgroundBeams className="absolute z-0 opacity-75 -top-1/2" />
      <TopNavbar />
      <ReactLenis root>
        <main className="max-w-[100rem] mx-auto relative z-20 flex flex-row h-full justify-evenly animate-in fade-in duration-1000">
          <ContactSidebarWrapper />
          {children}
        </main>
      </ReactLenis>
      <Footer />
    </>
  )
}

export default HomeLayout
