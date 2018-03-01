import * as React from 'react'
import { Switch } from 'react-router-dom'

import { GuestRoute } from 'components/Router'

// router
import Home from './Home'

export default class App extends React.Component {
  render () {
    return (
      <Switch>
        <GuestRoute component={Home} path="/" />
      </Switch>
    )
  }
}