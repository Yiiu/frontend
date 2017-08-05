import * as React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

export interface IStatelessPrivateRouteProps {
  component: React.ComponentClass<any>,
  isSignIn: boolean
}

export interface IStatelesGuestRouteProps {
  component: React.ComponentClass<any>,
  isSignIn: boolean,
  redirect: string
}

export const PrivateRoute: React.StatelessComponent<IStatelessPrivateRouteProps> = ({
  component: Component,
  isSignIn,
  ...rest
}) => {
  return (
    <Route
      { ...rest }
      render={
        props => (
          isSignIn ? <Component {...props} /> :
          <Redirect to={{ pathname: '/account/SignIn', state: { from: props.location } } } />
      ) }
    />
  )
}

export const GuestRoute: React.StatelessComponent<IStatelesGuestRouteProps> = ({
  component: Component,
  isSignIn,
  redirect = '/',
  ...rest
}) => {
  return (
    <Route
      { ...rest }
      render={
        props =>
          (
            isSignIn ?
              <Redirect
                to={{
                  pathname: redirect,
                  state: { from: props.location }
                }}
              /> :
              <Component {...props} />
          )
      }
    />
  )
}