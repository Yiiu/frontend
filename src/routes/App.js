import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Index from './routes/Index'

import { setUserMyInfoRemote } from 'actions/users'

import { Header } from 'components'

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
          <Header />
          <Route exact path="/" component={ Index }/>
          <Route path="/about" component={ About }/>
        </div>
      </Router>
    )
  }
}
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default connect(
  state => ({}),
  dispatch => bindActionCreators({
    setUserMyInfoRemote
  }, dispatch)
)(AppComponent)