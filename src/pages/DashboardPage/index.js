import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import counterStore from '../../store/counter-store'

export const DashboardPage = () => {
  const { user, logout, isAuthenticated } = useAuth0()

  console.log('isAuthenticated', isAuthenticated)
  console.log('user', user)

  const { name, picture, email } = user
  const counter = counterStore((state) => state.counter)

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    })
  }

  return (
    <>
      <h1>Im a dashboard page</h1>

      <button className="button__logout" onClick={handleLogout}>
        Log Out
      </button>

      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>

      <div>
        <p>Selected stocks:</p>
        {counter &&
          counter.map((item, index) => {
            return (
              <div className="item" key={index}>
                id: {item}
              </div>
            )
          })}
      </div>
    </>
  )
}
