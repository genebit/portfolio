import ScrollSpy from "react-ui-scrollspy"

import HomeLayout from "@/layouts/Home/HomeLayout"
import { RightSidebarHeading, RightSidebarLink, RightSidebarWrapper } from "@/layouts/Home/RightSidebar"
import {
  AboutSection,
  GitTimelineSection,
  ProjectsSection,
  ToolsSection,
  BlogPostsSection,
  AchievementSection,
} from "@/pages/Home"

import "animate.css"

import "@/pages/Home/HomePage.css"
import { useEffect, useState } from "react"

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-3">
          <div id="preloader">
            <div className="loader"></div>
          </div>
          <h5 className="font-semibold">Loading Resources...</h5>
        </div>
      ) : (
        <HomeLayout>
          <article className="article-container">
            <ScrollSpy scrollThrottle={10}>
              <AboutSection className="mb-20" id="about" />
              <GitTimelineSection className="mb-20" id="git-timeline" />
              <ToolsSection className="mb-20" id="tools" />
              <ProjectsSection className="mb-20" id="projects" />
              <AchievementSection className="mb-20" id="achievements" />
            </ScrollSpy>
          </article>
          <RightSidebarWrapper>
            <RightSidebarHeading>On This Page</RightSidebarHeading>
            <RightSidebarLink jumpTo="about" label="About" />
            <RightSidebarLink jumpTo="git-timeline" label="Git Contribution" />
            <RightSidebarLink jumpTo="tools" label="Tools I Use" />
            <RightSidebarLink jumpTo="projects" label="Projects" />
            <RightSidebarLink jumpTo="achievements" label="Achievements" />
            <RightSidebarHeading>Markdown Blog Posts</RightSidebarHeading>
            <BlogPostsSection />
          </RightSidebarWrapper>
        </HomeLayout>
      )}
    </>
  )
}

export default HomePage
