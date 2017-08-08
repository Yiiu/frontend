import * as React from 'react'
import {
  Router
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { setUserMyInfoRemote } from 'actions'

import { Header, PrivateRoute, GuestRoute } from 'components'
import Home from './Home'
import SignIn from './SignIn'
import { IUserInfo } from '../models'

const history = createBrowserHistory()

interface IProps {
  setUserMyInfoRemote: any
  isSignIn: boolean,
  userInfo?: IUserInfo
}

interface IState {
  loading: boolean
}

class AppComponent extends React.Component<IProps & Dispatch<any>, IState> {
  state = {
    loading: true
  }
  constructor(props: IProps & Dispatch<any>) {
    super(props)
  }
  
  componentDidMount () {
    const { setUserMyInfoRemote } = this.props
    setUserMyInfoRemote()
      .then(() => {
        this.setState({
          loading: false
        })
      })
      .catch(() => {
        this.setState({
          loading: false
        })
      })
  }

  render () {
    const { isSignIn, userInfo } = this.props
    const { loading } = this.state
    if (loading) {
      return null
    }
    return (
      <Router history={history}>
        <section>
          <Header isSignIn={ isSignIn } userInfo={ userInfo }/>
          <PrivateRoute exact path="/" component={ Home } isSignIn={ isSignIn }/>
          <GuestRoute path="/account/SignIn" component={ SignIn } isSignIn={ isSignIn } />
        </section>
      </Router>
    )
  }
}

export default connect(
  state => ({
    ...state.reducers.user
  }),
  (dispatch: Dispatch<any>) =>
    bindActionCreators({
      setUserMyInfoRemote
    }, dispatch)
)(AppComponent as React.ComponentClass<any>)