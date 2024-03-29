import ScrollSpy from "react-ui-scrollspy"

import HomeLayout from "@/layouts/Home/HomeLayout"
import RightSidebarLink from "@/layouts/Home/RightSidebar/RightSidebarLink"
import RightSidebarHeading from "@/layouts/Home/RightSidebar/RightSidebarHeading"
import RightSidebarWrapper from "@/layouts/Home/RightSidebar/RightSidebarWrapper"

import AboutSection from "./AboutSection/AboutSection"
import ToolsSection from "./ToolsSection/ToolsSection"
import ProjectsSection from "./ProjectsSection/ProjectsSection"
import VideoResumeSection from "./VideoResumeSection/VideoResumeSection"

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
          <VideoResumeSection className="mb-20" id="video-resume" />
          <ToolsSection className="mb-20" id="tools" />
          <ProjectsSection className="mb-20" id="projects" />
        </ScrollSpy>
      </article>
      <RightSidebarWrapper>
        <RightSidebarHeading>ON THIS PAGE</RightSidebarHeading>
        <RightSidebarLink jumpTo="about" label="About" />
        <RightSidebarLink jumpTo="video-resume" label="Video Resume" />
        <RightSidebarLink jumpTo="tools" label="Tools I Use" />
        <RightSidebarLink jumpTo="projects" label="Projects" />
      </RightSidebarWrapper>
    </HomeLayout>
  )
}

export default HomePage
