import React from 'react'
import styles from 'styles/main.less'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  LogOutRemote
} from 'actions/account'

class Home extends React.Component {
  render () {
    const { userInfo, isSignin, LogOutRemote } = this.props
    return (
      <div className={ styles.container }>
        {
          isSignin ? (
            <h2>
              Hello, { userInfo.username } <br />
              <button onClick={ () => LogOutRemote() }>退出登录</button>
            </h2>
          ) : (
            <h2>球球你登录一下吧</h2>
          )
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    isSignin: state.Users.isSignin,
    userInfo: state.Users.userInfo
  }),
  dispatch => bindActionCreators({
    LogOutRemote
  }, dispatch)
)(Home)