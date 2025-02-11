import { TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface TabTriggerProps extends HTMLAttributes<HTMLElement> {
  value: string
  label: string
}

const TabTrigger = ({ value, label, className, ...props }: TabTriggerProps) => {
  const compCn = cn("relative text-base uppercase font-artegra tracking-widest font-bold", className)

  return (
    <TabsTrigger value={value} className={compCn} {...props}>
      {label}
      <span className="tab-indicator hidden absolute w-full h-[4px] rounded-full -bottom-[3px] bg-primary"></span>
    </TabsTrigger>
  )
}
export default TabTrigger
