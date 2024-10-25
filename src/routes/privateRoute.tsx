import { useEffect, useState } from "react"

import { Navigate, Outlet } from "react-router-dom"

import { auth } from "@/lib/config"
import { routes } from "@/routes/routes"
import LoadingPage from "@/pages/Loading"

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

export default PrivateRoute
