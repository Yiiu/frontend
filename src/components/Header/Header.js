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
            <img src="//cdn.wanan.me/logo.png" />
          </section>
        </Link>
        <Nav />
        <section>
          {
            isSignIn ?
            <Link to={ `/@${userInfo.username}` }>
              <span>{ userInfo.username }</span>
            </Link> :
            <Link to="/account/SignIn">
              登录
            </Link>
          }
        </section>
      </section>
    </header>
  )
}
