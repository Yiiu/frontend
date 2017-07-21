import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

export function PrivateRoute ({
  component: Component,
  isSignIn,
  ...rest
}) {
  return (
    <Route
      { ...rest }
      render={props =>
        isSignIn ?
          <Component {...props} /> :
          <Redirect to={{
            pathname: '/account/SignIn',
            state: { from: props.location }
          }}/>
      }
    />
  )
}

export function GuestRoute ({
  component: Component,
  isSigIn,
  redirect = '/',
  ...rest
}) {
  return (
    <Route
      { ...rest }
      render={props =>
        isSigIn ?
          <Redirect to={{
            pathname: redirect,
            state: { from: props.location }
          }}/> :
          <Component {...props} />
      }
    />
  )
}
