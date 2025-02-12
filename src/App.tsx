import { Route, Routes } from "react-router-dom"

import HomePage from "@/pages/Home"

import { routes } from "@/routes/routes"

import { ThemeProvider } from "@/context/ThemeProvider"

function App() {
  if (import.meta.env.DEV) document.title = "Portfolio • Development"

  window.onload = function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
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
