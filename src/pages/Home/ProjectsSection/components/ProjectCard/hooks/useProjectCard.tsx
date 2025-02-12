import { useContext } from "react"
import { ProjectCardContext } from "../context/ProjectCardContext"

export const useProjectCard = () => {
  const context = useContext(ProjectCardContext)

  if (!context) {
    throw new Error("useProjectCard must be used within a ProjectCardProvider")
  }
  return context
}
