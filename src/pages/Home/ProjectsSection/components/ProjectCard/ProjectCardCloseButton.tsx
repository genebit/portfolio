import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AlertDialogCancel } from "@/components/ui/alert-dialog"

const CardCloseButton = () => {
  return (
    <AlertDialogCancel asChild className="border-0 hover:bg-transparent hover:text-primary">
      <Button variant="ghost" className="px-3 w-max ms-auto">
        <X size={20} />
      </Button>
    </AlertDialogCancel>
  )
}

export default CardCloseButton
