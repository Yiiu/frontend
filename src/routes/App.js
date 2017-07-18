import React from 'react'
import {
  Router,
  Route,
  Link
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()


import { setUserMyInfoRemote } from 'actions/users'

import HomePage from './components/HomePage'
import Account from './routes/Account/index.js'
import SignIn from './routes/Account/components/SignIn'

class AppComponent extends React.Component {
  componentDidMount () {
    const { setUserMyInfoRemote } = this.props;
    setUserMyInfoRemote()
      .then(e => console.log(e))
      .then(err => console.log(err))
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={HomePage} />
          <Route path="/account" component={Account} />
          <Route path="/account/SignIn" component={SignIn} />
        </div>
      </Router>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => bindActionCreators({
    setUserMyInfoRemote
  }, dispatch)
)(AppComponent)