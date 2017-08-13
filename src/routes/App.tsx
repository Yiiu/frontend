import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { setUserMyInfoRemote } from 'actions'
import { RouteComponentProps } from 'react-router'
import { Switch } from 'react-router-dom'

import { Header, PrivateRoute, GuestRoute } from 'components'
import autobind from 'autobind-decorator'
import Home from './Home'
import SignIn from './SignIn'
import Photo, { Modal } from './Photo'
import { IUserInfo } from '../models'

interface IProps {
  setUserMyInfoRemote: any
  isSignIn: boolean,
  userInfo?: IUserInfo
}

interface IState {
  loading: boolean
}

@autobind
class AppComponent extends React.Component<IProps & Dispatch<any> & RouteComponentProps<any>, IState> {

  state = {
    loading: true
  }

  previousLocation = this.props.location

  constructor(props: IProps & Dispatch<any> & RouteComponentProps<any>) {
    super(props)
  }

  componentWillReceiveProps (newProps: IProps & Dispatch<any> & RouteComponentProps<any>) {
    const { location } = this.props
    // 判断是否是
    if (
      newProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
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
    const { isSignIn, userInfo, location } = this.props
    const { loading } = this.state
    if (loading) {
      return null
    }
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )
    return (
      <section>
        <Header isSignIn={ isSignIn } userInfo={ userInfo }/>
        <Switch location={ isModal ? this.previousLocation : location }>
          <PrivateRoute exact path="/" component={ Home } isSignIn={ isSignIn }/>
          <GuestRoute path="/account/SignIn" component={ SignIn } isSignIn={ isSignIn } />
          <PrivateRoute path="/photo/:photoId" component={ Photo } isSignIn={ isSignIn } />
        </Switch>
        {
          isModal &&
          <PrivateRoute path="/photo/:photoId" component={ Modal(Photo) } isSignIn={ isSignIn } />
        }
      </section>
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