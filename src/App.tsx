import { Route, Routes } from "react-router-dom"

import HomePage from "@/pages/Home"

import { routes } from "@/routes/routes"

import { ThemeProvider } from "@/context/ThemeProvider"

function App() {
  if (import.meta.env.DEV) document.title = "Portfolio • Development"

  window.onload = function () {
    window.scrollTo({ top: 0, behavior: "smooth" })

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

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path={routes.home}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
