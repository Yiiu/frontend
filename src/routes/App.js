import React from 'react'
import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import { setUserMyInfoRemote } from 'actions/users'

import { Header } from 'components'
import HomePage from './components/HomePage'
import Account from './routes/Account/index.js'

import styles from 'styles/main.less'


class AppComponent extends React.Component {
  componentDidMount () {
    const { setUserMyInfoRemote } = this.props
    setUserMyInfoRemote()
      .then(e => console.log(e))
      .then(err => console.log(err))
  }

  render() {
    return (
      <Router history={history}>
        <section className={ styles.main }>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/account" component={Account} />
          </Switch>
        </section>
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
