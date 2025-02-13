import { Route, Routes } from "react-router-dom"

import HomePage from "@/pages/Home"

import { routes } from "@/routes/routes"

import { ThemeProvider } from "@/context/ThemeProvider"
import { Button } from "./components/ui/button"
import { ArrowUpToLine } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { scrollToTop, shouldShowScrollButton } from "./lib/utils"

function App() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)
  const scrollTopButtonRef = useRef<HTMLButtonElement>(null)

  if (import.meta.env.DEV) document.title = "Portfolio • Development"

  window.onload = function () {
    scrollToTop()

    // Temporary: Add font-segoeui class to text nodes that contain #, (), /, or \
    // This is due to the font artegra not supporting these characters
    document.querySelectorAll("body *:not(script):not(style):not(noscript)").forEach((node) => {
      node.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== "") {
          // Check if the text contains #, (), /, or \
          if (/[#()\/\\]/.test(child.textContent)) {
            const newHTML = child.textContent.replace(/([#()\/\\])/g, '<span class="font-segoeui">$1</span>')
            const wrapper = document.createElement("span")
            wrapper.innerHTML = newHTML
            child.replaceWith(wrapper)
          }
        }
      })
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(shouldShowScrollButton())
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path={routes.home}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
      <Button
        ref={scrollTopButtonRef}
        className={`fixed z-20 p-2 rounded-full bottom-8 right-8 fill-mode-forwards ${
          shouldShowScrollButton() ? "animate__fadeInDown" : "animate__fadeOutDown"
        }`}
        size={"icon"}
        onClick={() => scrollToTop()}
      >
        <ArrowUpToLine size={20} />
      </Button>
    </>
  )
}

export default App
