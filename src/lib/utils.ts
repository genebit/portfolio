import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const replaceSymbols = () => {
  // Temporary: Add font-segoeui class to text nodes that contain #, (), /, or \
  // This is due to the font artegra not supporting these characters
  document.querySelectorAll("body *:not(script):not(style):not(noscript)").forEach((node) => {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim() !== "") {
        // Check if the text contains #, (), /, or \
        if (/[#()/\\]/.test(child.textContent ?? "")) {
          const newHTML = child.textContent?.replace(/([#()/\\])/g, '<span class="font-segoeui">$1</span>')
          const wrapper = document.createElement("span")
          if (newHTML) {
            wrapper.innerHTML = newHTML
          }
          child.replaceWith(wrapper)
        }
      }
    })
  })
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
export { cn, replaceSymbols, scrollToTop, shouldShowScrollButton }
