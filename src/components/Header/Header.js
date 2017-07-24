import React from 'react'
import { User, Aperture, Bell, Compass } from 'react-feather'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import styles from './style.less'
export default ({ isSignIn, userInfo }) => {
  const ok = () =>
    <Link className={ styles.nav } to={ `/@${userInfo.username}` } title={ userInfo.username }>
      <Compass className={ styles.icon }/>
      <Bell className={ styles.icon }/>
      <User className={ styles.icon }/>
    </Link>
  const signin = () =>
    <Link to="/account/SignIn">
      登录
    </Link>
  return (
    <header className={ styles.root }>
      <section className={ styles.box }>
        <Link to="/">
          <section className={ styles.logo }>
            <Aperture />
            {/*<img src="//cdn.wanan.me/logo.png" />*/}
          </section>
        </Link>
        <section>
          {
            isSignIn ?
            ok() :
            signin()
          }
        </section>
      </section>
    </header>
  )
}
