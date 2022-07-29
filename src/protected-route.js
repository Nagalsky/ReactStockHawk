import { withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'

export const ProtectedRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <div>Im a page loading... olololo</div>
      </div>
    ),
  })

  return <Component />
}
