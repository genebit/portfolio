import { Gallery } from "./Gallery"

interface Project {
  date_from: string
  date_to: string
  title: string
  subtitle: string
  screenshots: Gallery[]
  tags: string[]
  description: string
  description_full: string
  video_link: []
  proponents: string[]
  contributions: string[]
  features: string[]
  source_code_link: string
  source_code_locked: boolean
  live_demo_link: string
  live_demo_locked: boolean
}

export type { Project }
