import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import styles from './style.less'
export default ({ isSignIn, userInfo }) => {
  return (
    <header className={ styles.root }>
      <section className={ styles.box }>
        <Link to="/">
          <section className={ styles.logo }>
            <img src="//yu7er.qiniudn.com/logo.png" />
          </section>
        </Link>
        <Nav />
        <section>
          {
            isSignIn ?
            <span>{ userInfo.username }</span> :
            <Link to="/account/SignIn">
              登录
            </Link>
          }
        </section>
      </section>
    </header>
  )
}
