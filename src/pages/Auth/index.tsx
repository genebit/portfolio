import { GraduationCap } from "lucide-react"
import { useNavigate } from "react-router-dom"

import * as constants from "@/lib/constants"
import { auth, provider } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { signInWithPopup, UserCredential } from "firebase/auth"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

/**
 * Renders the sign-in page component.
 * Allows users to sign in with Google.
 */
const SignInPage = () => {
  const navigate = useNavigate()

  /**
   * Handles the sign-in with Google functionality.
   * Navigates to the home page after successful sign-in.
   */
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data: UserCredential) => {
        // Navigate to the home page
        if (data.user) navigate("/")
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <main className="relative z-20 flex items-center justify-center h-screen animate-in fade-in">
        <Card className="px-10 py-5 ">
          <CardHeader className="p-4">
            <h1 className="text-xl text-center font-meltow-bold">WELCOME!</h1>
            <hr />
            <CardDescription>Please verify yourself to view portfolio.</CardDescription>
          </CardHeader>
          <CardContent className="mx-auto w-max">
            <Button onClick={signInWithGoogle} className="gap-2">
              <GraduationCap size={20} />
              Sign in with AdNU Gbox
            </Button>
          </CardContent>
        </Card>
      </main>
      <iframe
        className="absolute bottom-0 z-0 w-full h-screen dark:hidden animate-in fade-in"
        src={constants.splineURLBottom}
      ></iframe>
    </>
  )
}

export default SignInPage
