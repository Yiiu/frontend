import React from 'react'
import { Route } from 'react-router-dom'

import SignIn from './routes/SignIn'

export default class Account extends React.Component {
  render () {
    const { match: { url } } = this.props
    return (
      <section>
        <Route path={ `${url}/SignIn` } component={ SignIn } />
      </section>
    )
  }
}