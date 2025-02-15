import ScrollSpy from "react-ui-scrollspy"

import HomeLayout from "@/layouts/Home/HomeLayout"
import { RightSidebarHeading, RightSidebarLink, RightSidebarWrapper } from "@/layouts/Home/RightSidebar"
import { AboutSection, GitTimelineSection, ProjectsSection, ToolsSection, BlogPostsSection } from "@/pages/Home"

import "animate.css"

import "@/pages/Home/HomePage.css"

const HomePage = () => {
  return (
    <HomeLayout>
      <article className="article-container">
        <ScrollSpy scrollThrottle={10}>
          <AboutSection className="mb-20" id="about" />
          <GitTimelineSection className="mb-20" id="git-timeline" />
          <ToolsSection className="mb-20" id="tools" />
          <ProjectsSection className="mb-20" id="projects" />
        </ScrollSpy>
      </article>
      <RightSidebarWrapper>
        <RightSidebarHeading>On This Page</RightSidebarHeading>
        <RightSidebarLink jumpTo="about" label="About" />
        <RightSidebarLink jumpTo="git-timeline" label="Git Contribution" />
        <RightSidebarLink jumpTo="tools" label="Tools I Use" />
        <RightSidebarLink jumpTo="projects" label="Projects" />
        <RightSidebarHeading>Blog Post</RightSidebarHeading>
        <BlogPostsSection />
      </RightSidebarWrapper>
    </HomeLayout>
  )
}

export default HomePage
