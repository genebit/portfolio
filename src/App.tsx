import { Route, Routes } from "react-router-dom"

import HomePage from "@/pages/Home"

import SignInPage from "@/pages/Auth"
import { routes } from "@/routes/routes"

import { ThemeProvider } from "@/context/ThemeProvider"

import PrivateRoute from "@/routes/privateRoute"

function App() {
  if (import.meta.env.DEV) document.title = "Portfolio • Development"

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path={routes.home} element={<PrivateRoute />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path={routes.auth.signin} element={<SignInPage />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
