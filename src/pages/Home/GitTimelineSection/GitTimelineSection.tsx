import { HTMLAttributes } from "react"
import GitHubCalendar from "react-github-calendar"

import "@/pages/Home/GitTimelineSection/GitTimelineSection.css"
import ScrollAnimation from "react-animate-on-scroll"

const GitTimelineSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <ScrollAnimation
        animatePreScroll={true}
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        animateOnce={true}
      >
        <header>
          <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">GIT CONTRIBUTION TIMELINE</h3>
        </header>
        <GitHubCalendar username="genebit" />
      </ScrollAnimation>
    </section>
  )
}

export default GitTimelineSection
