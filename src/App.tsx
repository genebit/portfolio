import { Route, Routes } from "react-router-dom"

import HomePage from "@/pages/Home/HomePage"

import { routes } from "@/routes/routes"

import { ThemeProvider } from "@/context/ThemeProvider"
import { replaceSymbols, scrollToTop } from "@/lib/utils"
import { AutoScrollButton } from "@/components/ui/button"

function App() {
  if (import.meta.env.DEV) document.title = "Portfolio • Development"

  window.onload = function () {
    setTimeout(() => {
      document.body.style.position = "relative"
      document.body.style.width = "100%"
    }, 300)

    scrollToTop()
    replaceSymbols()
  }

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route index path={routes.home} element={<HomePage />} />
        </Routes>
      </ThemeProvider>
      <AutoScrollButton />
    </>
  )
}

export default App
