import { Screenshot } from "./Screenshot"

interface Project {
  date_from: string
  date_to: string
  title: string
  subtitle: string
  screenshots: Screenshot[]
  screenshot_note: string | null
  tags: Array<string>
  description: string
  description_full: string | null
  video_links: Array<string>
  proponents: Array<string>
  contributions: Array<string>
  features: Array<string>
  source_code_link: string | null
  source_code_locked: boolean
  live_demo_link: string | null
  live_demo_locked: boolean
}

export type { Project }
