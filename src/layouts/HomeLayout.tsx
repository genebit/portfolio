import { Fragment, HTMLAttributes } from "react"

import splineCanvas from "@/assets/svgs/SplineCanvasSnapshot.svg"
import TopNavbar from "@/pages/Home/components/TopNavbar/TopNavbar"
import ContactSidebarWrapper from "@/pages/Home/components/ContactSidebar/ContactSidebarWrapper"

import "@/pages/Home/index.css"
import { useTheme } from "@/components/ThemeProvider"

/**
 * Represents the layout component for the home page.
 *
 * @param children - The child components to be rendered within the layout.
 * @returns The JSX element representing the home layout.
 */
const HomeLayout = ({ children }: HTMLAttributes<HTMLElement>) => {
  const { theme } = useTheme()

  /**
   * Renders the backdrop based on the theme.
   * If the theme is not "dark", it renders a centered image.
   *
   * @returns The JSX element representing the backdrop.
   */
  const renderBackdrop = theme !== "dark" && (
    <div className="flex justify-center">
      <img className="absolute top-0 z-0" src={splineCanvas} alt="" />
    </div>
  )

  return (
    <Fragment>
      <TopNavbar />
      <div className="relative z-20 animate-in fade-in">
        <ContactSidebarWrapper />
        {children}
      </div>
      {renderBackdrop}
    </Fragment>
  )
}

export default HomeLayout
