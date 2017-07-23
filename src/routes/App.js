import React from 'react'
import {
  Router,
  Route
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import { setUserMyInfoRemote } from 'actions/users'

import {
  PrivateRoute,
  GuestRoute
} from 'components/Account'
import { Header } from 'components'
import Home from './routes/Home'
import Account from './routes/Account'
import Upload from './routes/Upload'
import User from './routes/User'

import styles from 'styles/main.less'


class AppComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ok: false
    }
  }
  componentDidMount () {
    const { setUserMyInfoRemote } = this.props
    setUserMyInfoRemote()
      .then(() => this.setState({ ok: true }))
  }

  render() {
    const { isSignIn, userInfo } = this.props
    const { ok } = this.state
    if (!ok) return null
    return (
      <Router history={history}>
        <section className={ styles.main }>
          <Header isSignIn={ isSignIn } userInfo={ userInfo } />
          <Route exact path="/" component={ Home } />
          <PrivateRoute path="/upload" component={ Upload } isSignIn={ isSignIn } />
          <PrivateRoute path="/:username(@\w+)" component={ User } isSignIn={ isSignIn } />
          <GuestRoute path="/account" component={ Account } isSignIn={ isSignIn } />
        </section>
      </Router>
    )
  }
}


export default connect(
  state => ({
    isSignIn: state.Users.isSignIn,
    userInfo: state.Users.userInfo
  }),
  dispatch => bindActionCreators({
    setUserMyInfoRemote
  }, dispatch)
)(AppComponent)
