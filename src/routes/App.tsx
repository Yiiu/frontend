import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'

import { GuestRoute, PrivateRoute } from 'components/Router'

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

const Upload = asyncComponent({
  resolve: () => System.import('./Upload')
});

@inject(STORT_ACCOUNT)
@observer
export default class App extends React.Component {
  state = {
    ok: false
  }
  async componentDidMount () {
    const { getAccountState } = this.props[STORT_ACCOUNT] as AccountStore
    await getAccountState()
    this.setState({
      ok: true
    })
  }

  render () {
    if (!this.state.ok) {
      return <div>loading</div>
    }
    return (
      <Layout>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact/>
          <PrivateRoute component={Upload} path="/upload" exact/>
          <GuestRoute component={SignIn} path="/SignIn" exact />
          <GuestRoute component={SignIn} path="/SignUp" exact />
        </Switch>
      </Layout>
    )
  }
}