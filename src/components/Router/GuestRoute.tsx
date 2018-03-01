import * as React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { inject, observer } from 'mobx-react';

import { AccountStore } from '../../stores'

import { STORT_ACCOUNT } from '../../constants/stores'

export interface IStatelesGuestRouteProps {
  component: React.ComponentClass<any>
  redirect?: string
  [key: string]: any
}

export const GuestRoute: React.StatelessComponent<IStatelesGuestRouteProps> = inject(STORT_ACCOUNT)(
  observer(
    ({
      component: Component,
      redirect = '/',
      ...rest
    }) => {
      const { isSignIn } = rest[STORT_ACCOUNT] as AccountStore
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
  )
)