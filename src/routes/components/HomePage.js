import React from 'react'

import { Header } from 'components'

export default class Account extends React.Component {
  render () {
    return (
      <main>
        <Header />
        { this.props.children }
      </main>
    )
  }
}