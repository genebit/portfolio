import { HTMLAttributes } from "react"

import TopNavbar from "@/layouts/Home/TopNavbar/TopNavbar"
import ContactSidebarWrapper from "@/layouts/Home/ContactSidebar/ContactSidebarWrapper"

import "@/pages/Home/HomePage.css"
import Footer from "@/layouts/Home/Footer/Footer"

const HomeLayout = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <>
      <TopNavbar />
      <main className="max-w-[100rem] mx-auto relative z-20 flex flex-row h-full justify-evenly animate-in fade-in duration-1000">
        <ContactSidebarWrapper />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default HomeLayout
