import { figmaEmbedLink } from "@/lib/constants"
import LoadingPage from "@/pages/Loading/LoadingPage"
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
    <section className="mt-5 border rounded-md">
      {isLoading && <LoadingPage className="h-[20rem]" />}
      <div className="overflow-hidden rounded-md">
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
