import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { auth, provider } from "@/lib/config"
import { UserCredential, signInWithPopup } from "firebase/auth"
import { GraduationCap } from "lucide-react"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom" // Add this import

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
    <Fragment>
      <main className="flex items-center justify-center h-screen animate-in fade-in">
        <Card className="px-10 py-5 border-0 shadow-2xl shadow-rose-50">
          <CardHeader className="p-4">
            <CardTitle className="mx-auto text-2xl font-meltow-bold w-max">Welcome</CardTitle>
            <CardDescription>Please verify yourself to view portfolio.</CardDescription>
          </CardHeader>
          <CardContent className="mx-auto w-max">
            <Button onClick={signInWithGoogle} className="gap-2">
              <GraduationCap size={20} />
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </main>
    </Fragment>
  )
}

export default SignInPage
