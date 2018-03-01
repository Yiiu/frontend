import * as React from 'react'
// import { inject, observer } from 'mobx-react';

import { Layout } from '../../components/Layout'
import Header from '../../components/Header'

// @observer
export default class Home extends React.Component {
  render () {
    return (
      <Layout>
        <Header />
      </Layout>
    )
  }
}