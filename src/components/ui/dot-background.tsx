import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const DotBackground = ({ className }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn(
    "absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
    className
  )

  return (
    <>
      <div className={compCn} />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </>
  )
}

export default DotBackground
