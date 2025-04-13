import { HTMLAttributes } from "react"
import GitHubCalendar from "react-github-calendar"

import "@/pages/Home/GitTimelineSection/GitTimelineSection.css"
import { useTheme } from "@/hooks/useTheme"

const GitTimelineSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const { theme } = useTheme()

  return (
    <section className={className} {...props}>
      <header>
        <h3 className="mb-3 font-bold tracking-widest uppercase font-artegra">GIT CONTRIBUTION TIMELINE</h3>
      </header>
      <GitHubCalendar
        username="genebit"
        colorScheme={theme}
        theme={{
          light: ["#fff", "black"],
          dark: ["#161B22", "#39D353"],
        }}
      />
    </section>
  )
}

export default GitTimelineSection
