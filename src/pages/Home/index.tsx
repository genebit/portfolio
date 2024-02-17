import { Fragment } from "react"
import * as constants from "@/lib/constants"
import { MoonStar } from "lucide-react"
import ScrollSpy from "react-ui-scrollspy"
import RightSidebarWrapper from "./components/RightSidebar/RightSidebarWrapper"
import RightSidebarHeading from "./components/RightSidebar/RightSidebarHeading"
import RightSidebarLink from "./components/RightSidebar/RightSidebarLink"
import ContactSidebarWrapper from "./components/ContactSidebar/ContactSidebarWrapper"

import pfp from "@/assets/imgs/PfpWFrame.png"
import { Button } from "@/components/ui/button"
import { Voicemail, LocateFixed, Inbox, Github, Linkedin } from "lucide-react"
import ContactSidebarLink from "./components/ContactSidebar/ContactSidebarLink"

const HomePage = () => {
  return (
    <Fragment>
      <nav className="z-20 w-full p-5 bg-transparent">
        <MoonStar className="text-primary" />
      </nav>
      <div className="relative z-20 animate-in fade-in">
        <ContactSidebarWrapper>
          <img src={pfp} alt="Profile Picture" width={250} />
          <section className="flex flex-col my-5">
            <h2 className="text-xl font-meltow-bold">Johcel Gene T. Bitara</h2>
            <p>Software Developer</p>
          </section>
          <Button className="w-full font-meltow-bold">View Resume</Button>
          <section className="flex flex-col my-5">
            <h3 className="text-lg font-meltow-bold">Contacts</h3>
            <div className="flex flex-col gap-2 mt-3">
              <ContactSidebarLink icon={<Voicemail size={18} />} label="09703224661" />
              <ContactSidebarLink icon={<LocateFixed size={18} />} label="Philippines" />
              <ContactSidebarLink icon={<Inbox size={18} />} label="genebitara@gmail.com" />
              <ContactSidebarLink icon={<Github size={18} />} label="github.com/genebit" />
              <ContactSidebarLink icon={<Linkedin size={18} />} label="in/johcel-gene-bitara-a413b9283" />
            </div>
          </section>
        </ContactSidebarWrapper>
        <article className="2xl:mx-auto lg:ms-[20rem] 2xl:min-w-[55rem] 2xl:max-w-[55rem] relative px-5">
          <ScrollSpy>
            <section data-section="ABOUT" id="about">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores
                voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis
                facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus
                ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum
                perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat
                odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum,
                atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque
                qui illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi
                voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa
                repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in
                enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcaecati?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores
                voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis
                facilis obcae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus ea,
                asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum
                perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat
                odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum,
                atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque
                qui illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi
                voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcae Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa
                repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in
                enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcaecati?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores
                voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis
                facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus
                ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum
                perspiciatis facilis obcae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit
                ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque
                dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui
                illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum
                cumque qui illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi
                voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcae Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa
                repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in
                enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcaecati?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus ea, asperiores
                voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum perspiciatis
                facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit ducimus
                ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque dolorum
                perspiciatis facilis obcae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat odit
                ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui illum, atque
                dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum cumque qui
                illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi voluptatum
                cumque qui illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Error fugiat odit ducimus ea, asperiores voluptas id in enim, culpa repudiandae modi
                voluptatum cumque qui illum, atque dolorum perspiciatis facilis obcaecati? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Error fugiat odit ducimus
              </p>
            </section>
          </ScrollSpy>
        </article>
        <RightSidebarWrapper>
          <RightSidebarHeading>ON THIS PAGE</RightSidebarHeading>
          <RightSidebarLink jumpTo="about" label="ABOUT" />
          <RightSidebarLink jumpTo="toolsIUse" label="TOOLS I USE" />
          <RightSidebarLink jumpTo="projects" label="PROJECTS" />
        </RightSidebarWrapper>
      </div>
      <iframe className="absolute top-0 z-0 w-full h-screen animate-in fade-in" src={constants.splineURLTop}></iframe>
    </Fragment>
  )
}

export default HomePage
