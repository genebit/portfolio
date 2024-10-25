import { HTMLAttributes } from "react"

import * as constants from "@/assets/svgs/"
import TopNavbar from "@/layouts/Home/TopNavbar/TopNavbar"
import ContactSidebarWrapper from "@/layouts/Home/ContactSidebar/ContactSidebarWrapper"

import "@/pages/Home/index.css"
import Footer from "@/layouts/Home/Footer/Footer"

const HomeLayout = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <>
      <TopNavbar />
      <main className="max-w-[100rem] mx-auto relative z-20 flex flex-row h-full justify-evenly animate-in fade-in duration-1000">
        <ContactSidebarWrapper />
        {children}
      </main>
      <div className="flex justify-center">
        <img
          className="absolute top-0 z-0 duration-1000 animate-in fade-in dark:hidden"
          src={constants.SPLINECANVASSNAPSHOT}
          alt="Spline canvas"
        />
      </div>
      <Footer />
    </>
  )
}

export default HomeLayout
