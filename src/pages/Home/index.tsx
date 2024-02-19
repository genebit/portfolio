import ScrollSpy from "react-ui-scrollspy"

import HomeLayout from "@/layouts/Home/HomeLayout"
import AboutSection from "@/pages/Home/components/AboutSection/AboutSection"
import ToolsSection from "@/pages/Home/components/ToolsSection/ToolsSection"
import RightSidebarLink from "@/layouts/Home/RightSidebar/RightSidebarLink"
import ProjectsSection from "@/pages/Home/components/ProjectsSection/ProjectsSection"
import RightSidebarHeading from "@/layouts/Home/RightSidebar/RightSidebarHeading"
import RightSidebarWrapper from "@/layouts/Home/RightSidebar/RightSidebarWrapper"

import "@/pages/Home/index.css"
/**
 * Renders the home page.
 *
 * @returns The rendered home page component.
 */
const HomePage = () => {
  return (
    <HomeLayout>
      <article className="article-container">
        <ScrollSpy scrollThrottle={10}>
          <AboutSection className="mb-20" id="about" />
          <ToolsSection className="mb-20" id="toolsIUse" />
          <ProjectsSection className="mb-20" id="projects" />
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
