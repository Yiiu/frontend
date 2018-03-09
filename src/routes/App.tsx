import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'

import { GuestRoute } from 'components/Router'

import { Layout } from 'components/Layout'
import Header from 'components/Header'

// router

const Home = asyncComponent({
  resolve: () => System.import('./Home')
});

const SignIn = asyncComponent({
  resolve: () => System.import('./Sign/SignIn')
});

export default class App extends React.Component {
  render () {
    return (
      <Layout>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact/>
          <GuestRoute component={SignIn} path="/SignIn" exact />
          <GuestRoute component={SignIn} path="/SignUp" exact />
        </Switch>
      </Layout>
    )
  }
}