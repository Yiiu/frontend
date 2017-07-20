import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from '../styles/main.less'
import {
  SignInRemote
} from 'actions/account'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
      userOrEmail: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange (e, value) {
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
      .catch(err => console.log(err))
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
  dispatch => bindActionCreators({
    SignInRemote
  }, dispatch)
)(SignIn)
