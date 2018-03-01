import * as React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { inject, observer } from 'mobx-react';

import { AccountStore } from '../../stores'

import { STORT_ACCOUNT } from '../../constants/stores'

export interface IStatelessPrivateRouteProps {
  component: React.ComponentClass<any>
}
export const PrivateRoute: React.StatelessComponent<IStatelessPrivateRouteProps> = 
  inject(STORT_ACCOUNT)(
    observer(
      ({
        component: Component,
        ...rest
      }) => {
        const { isSignIn } = rest[STORT_ACCOUNT] as AccountStore
        return (
          <Route
            { ...rest }
            render={
              props => (
                isSignIn ? <Component {...props} /> :
                <Redirect to={{ pathname: '/account/SignIn', state: { from: props.location } } } />
              )
            }
          />
        )
      }
    )
  )
