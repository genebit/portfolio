import ScrollSpy from "react-ui-scrollspy"

import HomeLayout from "@/layouts/Home/HomeLayout"
import RightSidebarLink from "@/layouts/Home/RightSidebar/RightSidebarLink"
import RightSidebarHeading from "@/layouts/Home/RightSidebar/RightSidebarHeading"
import RightSidebarWrapper from "@/layouts/Home/RightSidebar/RightSidebarWrapper"

import "@/pages/Home/index.css"
import AboutSection from "./AboutSection/AboutSection"
import ProjectsSection from "./ProjectsSection/ProjectsSection"
import ToolsSection from "./ToolsSection/ToolsSection"
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
          <AboutSection className="mb-20" id="video-resume" />
          <ToolsSection className="mb-20" id="tools" />
          <ProjectsSection className="mb-20" id="projects" />
        </ScrollSpy>
      </article>
      <RightSidebarWrapper>
        <RightSidebarHeading>ON THIS PAGE</RightSidebarHeading>
        <RightSidebarLink jumpTo="about" label="ABOUT" />
        <RightSidebarLink jumpTo="video-resume" label="VIDEO RESUME" />
        <RightSidebarLink jumpTo="tools" label="TOOLS I USE" />
        <RightSidebarLink jumpTo="projects" label="PROJECTS" />
      </RightSidebarWrapper>
    </HomeLayout>
  )
}

export default HomePage
