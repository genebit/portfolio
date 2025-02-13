import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const scrollToTop = (scrollableEl?: HTMLElement | null) => {
  if (scrollableEl) {
    scrollableEl.scrollTo({ top: 0, behavior: "smooth" })
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

const shouldShowScrollButton = (scrollableEl?: HTMLElement | null): boolean => {
  if (scrollableEl) {
    return scrollableEl.scrollTop > 100
  } else {
    return window.scrollY > 50
  }
}
export { cn, scrollToTop, shouldShowScrollButton }
