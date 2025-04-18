import { Route, Routes } from "react-router-dom"

import HomePage from "@/pages/Home/HomePage"

import { routes } from "@/routes/routes"

import { ThemeProvider } from "@/context/ThemeProvider"
import { AutoScrollButton } from "@/components/ui/button"

function App() {
  if (import.meta.env.DEV) document.title = "Portfolio • Development"

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
