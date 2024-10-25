import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const LoadingPage = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("flex flex-col items-center justify-center h-screen animate-in fade-in", className)

  return (
    <div className={compCn} {...props}>
      <div className="relative inline-flex">
        <div className="w-8 h-8 rounded-full bg-rose-500"></div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-rose-500 animate-ping"></div>
        <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-rose-500 animate-pulse"></div>
      </div>
      <small className="mt-3 font-meltow text-slate-400">Loading...</small>
    </div>
  )
}

export default LoadingPage
