import { Alert, AlertDescription } from "@/components/ui/alert"
import { figmaEmbedLink } from "@/lib/constants"
import LoadingPage from "@/pages/Loading/LoadingPage"
import { Lightbulb } from "lucide-react"
import { useState, useEffect } from "react"

const DesignFiles = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const iframeLoadHandler = () => {
      setIsLoading(false)
    }

    const iframeElement = document.getElementById("iframeElement")
    iframeElement?.addEventListener("load", iframeLoadHandler)

    return () => {
      iframeElement?.removeEventListener("load", iframeLoadHandler)
    }
  }, [])

  return (
    <section>
      <p></p>
      <Alert>
        <Lightbulb className="w-4 h-4" />
        <AlertDescription>
          Contains some of my public figma designs that I've created throughout the years of self-learning and creating
          mini projects.
        </AlertDescription>
      </Alert>
      {isLoading && <LoadingPage className="h-[20rem]" />}
      <div className="mt-5 overflow-hidden border rounded-md">
        <iframe
          id="iframeElement"
          className={`w-full ${isLoading ? "hidden" : ""}`}
          height={700}
          src={figmaEmbedLink}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default DesignFiles
