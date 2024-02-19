import ScrollSpy from "react-ui-scrollspy"

import HomeLayout from "@/layouts/HomeLayout"
import RightSidebarLink from "@/pages/Home/components/RightSidebar/RightSidebarLink"
import RightSidebarHeading from "@/pages/Home/components/RightSidebar/RightSidebarHeading"
import RightSidebarWrapper from "@/pages/Home/components/RightSidebar/RightSidebarWrapper"

import AboutSection from "./components/AboutSection/AboutSection"
import ToolsSection from "./components/ToolsSection/ToolsSection"

/**
 * Renders the home page.
 *
 * @returns The rendered home page component.
 */
const HomePage = () => {
  return (
    <HomeLayout>
      <article className="article-container">
        <ScrollSpy>
          <div className="flex flex-col gap-20">
            <AboutSection />
            <ToolsSection />
          </div>
        </ScrollSpy>
      </article>
      <RightSidebarWrapper>
        <RightSidebarHeading>ON THIS PAGE</RightSidebarHeading>
        <RightSidebarLink jumpTo="about" label="ABOUT" />
        <RightSidebarLink jumpTo="toolsIUse" label="TOOLS I USE" />
        <RightSidebarLink jumpTo="projects" label="PROJECTS" />
      </RightSidebarWrapper>
    </HomeLayout>
  )
}

export default HomePage
