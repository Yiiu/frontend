import * as React from 'react'
import { RouteComponentProps } from 'react-router'

type IUserHomeProps = RouteComponentProps<any>

export default class UserHome extends React.Component<IUserHomeProps, any> {

  componentWillMount () {
    const { match } = this.props
    if (!/@\w+/.test(match.params.username)) {
      console.log(1)
    }
  }
  render () {
    return (
      <div>13123</div>
    )
  }
}