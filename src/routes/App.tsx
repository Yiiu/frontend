import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'

import { GuestRoute } from 'components/Router'

import { Layout } from 'components/Layout'
import Header from 'components/Header'

import { AccountStore } from 'stores'
import { STORT_ACCOUNT } from 'constants/stores'

// router

const Home = asyncComponent({
  resolve: () => System.import('./Home')
});

const SignIn = asyncComponent({
  resolve: () => System.import('./Sign/SignIn')
});

@inject(STORT_ACCOUNT)
@observer
export default class App extends React.Component {
  componentDidMount () {
    const { getAccountState } = this.props[STORT_ACCOUNT] as AccountStore
    getAccountState()
  }

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