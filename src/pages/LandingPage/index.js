import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const LandingPage = () => {
  const { loginWithRedirect } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/dashboard',
        customLogin: 'agent',
      },
    })
  }

  return (
    <>
      <h1 className="py-5 text-red500">Im a linding page</h1>

      <button className="button__login" onClick={handleLogin}>
        Log In
      </button>
    </>
  )
}
