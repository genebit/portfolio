import { HTMLAttributes } from "react"
import GitHubCalendar from "react-github-calendar"

import "@/pages/Home/GitTimelineSection/GitTimelineSection.css"

const GitTimelineSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className={className} {...props}>
      <header>
        <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">GIT CONTRIBUTION TIMELINE</h3>
      </header>
      <GitHubCalendar username="genebit" />
    </section>
  )
}

export default GitTimelineSection
