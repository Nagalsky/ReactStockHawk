import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'

export const Auth0ProviderWithConfig = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE
  const scope = process.env.REACT_APP_AUTH0_SCOPE

  if (!(domain && clientId && audience)) {
    return null
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={audience}
      scope={scope}
    >
      {children}
    </Auth0Provider>
  )
}
