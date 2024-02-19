import { Fragment, HTMLAttributes } from "react"

import splineCanvas from "@/assets/svgs/SplineCanvasSnapshot.svg"
import TopNavbar from "@/pages/Home/components/TopNavbar/TopNavbar"
import ContactSidebarWrapper from "@/pages/Home/components/ContactSidebar/ContactSidebarWrapper"

import "@/pages/Home/index.css"

const HomeLayout = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <Fragment>
      <TopNavbar />
      <div className="relative z-20 animate-in fade-in">
        <ContactSidebarWrapper />
        {children}
      </div>
      <div className="flex justify-center">
        <img className="absolute top-0 z-0 duration-1000 animate-in fade-in dark:hidden" src={splineCanvas} alt="" />
      </div>
    </Fragment>
  )
}

export default HomeLayout
