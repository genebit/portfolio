import ScrollSpy from "react-ui-scrollspy"

import HomeLayout from "@/layouts/HomeLayout"
import RightSidebarHeading from "@/pages/Home/components/RightSidebar/RightSidebarHeading"
import RightSidebarLink from "@/pages/Home/components/RightSidebar/RightSidebarLink"
import RightSidebarWrapper from "@/pages/Home/components/RightSidebar/RightSidebarWrapper"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <HomeLayout>
      <article className="article-container">
        <ScrollSpy>
          <section data-section="ABOUT" id="about">
            <Card className="border-s-8 border-s-primary bg-slate-950 dark:bg-[#1C1917]">
              <CardContent className="p-10 text-white">
                <h1 className="text-xl font-meltow-bold">About Me 💭</h1>
                <p>
                  Hi! I am a Filipino-based Software Developer passionate about learning software technologies in
                  general; immersed in the world of coding, designing, and software development. <br />
                  <br /> Currently finishing my degree as a 3rd Year Bachelors of Science in Information Technology in
                  Ateneo De Naga University. Seeking opportunities, equipped with 3+ years of experience on various
                  software technology tools to create a beautiful system design.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="px-6 font-meltow-bold ms-auto">
                  View Resume
                </Button>
              </CardFooter>
            </Card>
          </section>
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
