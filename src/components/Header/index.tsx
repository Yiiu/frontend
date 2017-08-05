import * as React from 'react'
import { Aperture, Compass, Bell, User } from 'react-feather'
import { Link } from 'react-router-dom'
// import Nav from './components/Nav'
import styles from './style.less'
import { IUserInfo } from '../../models'

export interface IHeaderProps {
  isSignIn: boolean
  userInfo: IUserInfo
}
export default class Header extends React.Component<IHeaderProps, any> {
  constructor (props: IHeaderProps) {
    super(props)
  }
  userRender () {
    const { userInfo } = this.props;
    return (
      <Link className={ styles.nav } to={ `/@${ userInfo.username }` } title={ userInfo.username }>
        <Compass className={ styles.icon }/>
        <Bell className={ styles.icon }/>
        <User className={ styles.icon }/>
      </Link>
    )
  }
  guestRender () {
    return (
      <Link to="/account/SignIn">
        登录
      </Link>
    )
  }
  render () {
    const { isSignIn } = this.props;
    return (
      <header className={ styles.root }>
        <section className={ styles.box }>
          <Link to="/">
            <section className={ styles.logo }>
               <Aperture />
            </section>
          </Link>
          <section>
            {
              isSignIn ?
              this.userRender() :
              this.guestRender()
            }
          </section>
        </section>
      </header>
    )
  }
}