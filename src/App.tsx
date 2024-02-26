import { Fragment, useEffect, useState } from "react"

import { Navigate } from "react-router-dom"
import { Outlet, Route, Routes } from "react-router-dom"

import HomePage from "@/pages/Home"
import { auth } from "@/lib/config"
import SignInPage from "@/pages/Auth"
import * as routes from "@/lib/routes"
import LoadingPage from "@/pages/Loading"
import * as constants from "@/lib/constants"
import { ThemeProvider } from "@/components/ThemeProvider"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip"

/**
 * The main component of the application.
 * Renders the routes and their corresponding components.
 *
 * @returns The rendered component.
 */
const App = () => {
  if (import.meta.env.DEV) document.title = "Portfolio • Development"

  const DevTag = () => {
    return import.meta.env.DEV ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="fixed px-5 text-white rounded-full bottom-5 left-5 font-meltow bg-primary">
              DEVELOPMENT
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <a href={constants.productionLink} target="_blank">
              View Live Production 🟢
            </a>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : null
  }

  return (
    <Fragment>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path={routes.home} element={<PrivateRoute />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path={routes.auth.signin} element={<SignInPage />} />
        </Routes>
      </ThemeProvider>
      <DevTag />
    </Fragment>
  )
}

/**
 * PrivateRoute component.
 *
 * Renders the Outlet component if the user is authenticated, otherwise redirects to the verification page.
 *
 * @returns JSX.Element
 */
const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user)
      setIsLoading(false)
    })

    // Cleanup function
    return () => unsubscribe()
  }, [])

  if (isLoading) return <LoadingPage />

  // Once loading is complete, render based on authentication status
  return isAuthenticated ? <Outlet /> : <Navigate to={routes.auth.signin} replace />
}

export default App
