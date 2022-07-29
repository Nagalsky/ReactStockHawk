import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { Auth0ProviderWithConfig } from './auth0-provider-with-config'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Auth0ProviderWithConfig>
      <App />
    </Auth0ProviderWithConfig>
  </React.StrictMode>
)
