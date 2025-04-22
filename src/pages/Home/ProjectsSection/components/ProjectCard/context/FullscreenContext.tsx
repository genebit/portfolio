import { createContext, useContext } from "react"

type FullscreenContextProps = {
  isFullscreen: boolean
  setIsFullscreen: (fullscreen: boolean) => void
}

export const FullScreenContext = createContext<FullscreenContextProps | null>(null)

export const useFullscreen = () => {
  const context = useContext(FullScreenContext)
  if (!context) {
    throw new Error("useFullscreen must be used within a FullScreenContext.Provider")
  }
  return context
}
