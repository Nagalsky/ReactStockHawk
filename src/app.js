import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './protected-route'
import { DashboardPage } from './pages/DashboardPage'
import { LandingPage } from './pages/LandingPage'

export const App = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
      <div className="page-layout">
        <div>Im a page loading...</div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={DashboardPage} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
