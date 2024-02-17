import { Fragment } from "react"
import * as constants from "@/lib/constants"
import pfp from "@/assets/imgs/PfpWFrame.png"
import { Github, Inbox, Linkedin, LocateFixed, MoonStar, Voicemail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollSpy from "react-ui-scrollspy"
import RightSidebarWrapper from "./components/RightSidebar/RightSidebarWrapper"
import RightSidebarHeading from "./components/RightSidebar/RightSidebarHeading"
import RightSidebarLink from "./components/RightSidebar/RightSidebarLink"

const HomePage = () => {
  return (
    <Fragment>
      <nav className="w-full p-5 bg-transparent">
        <MoonStar className="text-primary" />
      </nav>
      <div className="relative z-20 animate-in fade-in">
        <div className="flex justify-evenly">
          <aside className="p-3 w-max">
            <section>
              <img src={pfp} alt="Profile Picture" width={250} />
            </section>
            <section className="flex flex-col my-5">
              <h2 className="text-xl font-meltow-bold">Johcel Gene T. Bitara</h2>
              <p>Software Developer</p>
            </section>
            <section>
              <Button className="w-full font-meltow-bold">View Resume</Button>
            </section>
            <section className="flex flex-col my-5">
              <h3 className="text-lg font-meltow-bold">Contacts</h3>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex gap-2">
                  <Voicemail size={18} />
                  <p>09703224661</p>
                </div>
                <div className="flex gap-2">
                  <LocateFixed size={18} />
                  <p>Philippines</p>
                </div>
                <div className="flex gap-2">
                  <Inbox size={18} />
                  <p>genebitara@gmail.com</p>
                </div>
                <div className="flex gap-2">
                  <Github size={18} />
                  <p>github.com/genebit</p>
                </div>
                <div className="flex gap-2">
                  <Linkedin size={18} />
                  <p>in/johcel-gene-bitara-a413b9283</p>
                </div>
              </div>
            </section>
          </aside>
          <div className="w-[80rem] max-[80rem]">
            <article>
              <ScrollSpy>
                <section data-section="ABOUT" id="about">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores
                    voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis
                    facilis obcaecati?
                  </p>
                </section>
              </ScrollSpy>
            </article>
          </div>
          <RightSidebarWrapper>
            <RightSidebarHeading>ON THIS PAGE</RightSidebarHeading>
            <RightSidebarLink jumpTo="about" label="ABOUT" />
          </RightSidebarWrapper>
        </div>
      </div>
      <iframe
        className="absolute bottom-0 z-0 w-full h-screen animate-in fade-in"
        src={constants.splineURLTop}
      ></iframe>
    </Fragment>
  )
}

export default HomePage
