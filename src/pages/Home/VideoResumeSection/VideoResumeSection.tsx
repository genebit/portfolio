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
        <div className="mt-5">
          <iframe width="100%" height="500" src={constants.videoResumeYTLink}></iframe>
        </div>
      </header>
    </section>
  )
}

export default VideoResumeSection
