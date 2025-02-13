import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ArrowUpToLine } from "lucide-react"

const buttonVariants = cva(
  "transition-all duration-100 active:scale-95 inline-flex items-center justify-center whitespace-nowrap text-xs font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary bg-background hover:bg-primary hover:text-white",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

interface AutoScrollButtonProps extends ButtonProps {
  scrollableElement?: HTMLElement | null
  icon?: React.ReactNode
  threshold?: number
}

/**
 * A button component that appears when the user scrolls down a certain threshold and scrolls the page or a specified element back to the top when clicked.
 *
 * @param {Object} props - The properties object.
 * @param {HTMLElement | Window} props.scrollableElement - The element to attach the scroll event listener to. Defaults to the window object.
 * @param {React.ReactNode} props.icon - The icon to display inside the button. Defaults to an upward arrow icon.
 * @param {number} [props.threshold=100] - The scroll threshold in pixels to show the button. Defaults to 100 pixels. higher value means the button will appear later.
 * @param {React.ReactNode} props.children - The children elements to display inside the button.
 * @param {Object} props.props - Additional properties to pass to the button component.
 *
 * @returns {JSX.Element} The AutoScrollButton component.
 */
const AutoScrollButton = ({
  scrollableElement,
  icon,
  threshold = 100,
  children,
  className,
  ...props
}: AutoScrollButtonProps): JSX.Element => {
  const [show, setShow] = React.useState(false)
  const compCn = cn(
    `${
      scrollableElement instanceof HTMLElement ? "absolute" : "fixed"
    } z-20 p-2 rounded-full bottom-8 right-8 fill-mode-forwards overscroll-contain ${
      show ? "animate__fadeIn" : "animate__fadeOut pointer-events-none"
    }`,
    className
  )

  React.useEffect(() => {
    const target = scrollableElement || window

    const handleScroll = () => {
      setShow(target instanceof HTMLElement ? target.scrollTop > threshold : window.scrollY > threshold)
    }

    target.addEventListener("scroll", handleScroll)
    return () => target.removeEventListener("scroll", handleScroll)
  }, [scrollableElement, threshold])

  const scrollToTop = () => {
    if (scrollableElement) {
      scrollableElement.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <Button className={compCn} size={"icon"} onClick={scrollToTop} {...props}>
      {icon ?? <ArrowUpToLine size={20} />}
      {children}
    </Button>
  )
}

export { Button, buttonVariants, AutoScrollButton }
