import * as React from 'react'
import * as Redux from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import styles from './style.less'
import {
  SignInRemote
} from 'actions'

interface IState {
  userOrEmail: string,
  password: string
}

interface IProps {
  SignInRemote: Redux.ActionCreator<any>
}

class SignIn extends React.Component<IProps & Dispatch<any> & RouteComponentProps<any>, IState> {
  public state = {
    userOrEmail: '',
    password: ''
  }
  constructor (props: IProps & Dispatch<any> & RouteComponentProps<any>) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange (e: any, value: any) {
    this.setState({
      [value]: e.target.value
    })
  }
  handleClick () {
    const { SignInRemote } = this.props
    SignInRemote(this.state)
      .then(() => {
        console.log('登录成功 OvO')
        this.props.history.push('/')
      })
  }
  render () {
    return (
      <div className={ styles.box }>
        <h2 className={ styles.h2 }>登录</h2>
        <input
          value={ this.state.userOrEmail }
          className={ styles.input }
          placeholder="请输入邮箱或用户名"
          onChange={ e => this.handleChange(e, 'userOrEmail') }
        />
        <input
          value={ this.state.password }
          type="password"
          className={ styles.input }
          placeholder="请输入账号密码"
          onChange={ e => this.handleChange(e, 'password') }
        />
        <button className={ styles.btn } onClick={ this.handleClick }>登录</button>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch: Dispatch<any>) => bindActionCreators({
    SignInRemote
  }, dispatch)
)(SignIn as React.ComponentClass<any>)