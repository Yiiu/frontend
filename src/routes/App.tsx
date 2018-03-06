import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { GuestRoute } from 'components/Router'

import { Layout } from 'components/Layout'
import Header from 'components/Header'

// router
import Home from './Home'
import SignIn from './SignIn'

export default class App extends React.Component {
  render () {
    return (
      <Layout>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact/>
          <GuestRoute component={SignIn} path="/SignIn" exact />
        </Switch>
      </Layout>
    )
  }
}