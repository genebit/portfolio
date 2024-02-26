import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
import * as constants from "@/lib/constants"

const VideoResumeSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("", className)
  return (
    <section className={compCn} {...props}>
      <header>
        <h3 className="text-xl font-meltow-bold">VIDEO RESUME 🎥</h3>
        <hr />
        <div className="mt-5 overflow-hidden rounded-lg">
          <iframe
            width="100%"
            height="500"
            className="h-[350px] md:h-[500px]"
            src={constants.videoResumeYTLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </header>
    </section>
  )
}

export default VideoResumeSection
