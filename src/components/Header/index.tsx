import * as React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { inject, observer } from 'mobx-react';
import { Popover } from 'antd';

import { AccountStore } from 'stores'

import styles from './styles.less'

import { STORT_ACCOUNT } from 'constants/stores'

import {
  User as UserIcon,
  Upload as UploadIcon
} from 'feather'

@inject(STORT_ACCOUNT)
@observer
export default class Header extends React.Component<any, any> {
  state = {
    visible: false
  }
  _signRender = () => {
    const { isSignIn, info } = this.props[STORT_ACCOUNT] as AccountStore
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    )    
    if (isSignIn && info) {
      return (
        <div className={styles.tool}>
          <Link to="/upload">
            <UploadIcon
              size={24}
            />
          </Link>
          <Popover placement="bottomRight" content={content}>
            <UserIcon size={24}/>
          </Popover>
        </div>
      )
    } else {
      return (
        <div className={styles.tool}>
          <Link className={styles.href} to="/SignUp">注册</Link>
          <Link className={classnames(styles.href, styles.blue)} to="/SignIn">登陆</Link>
        </div>
      )
    }
  }

  render () {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="/" replace>
              <span>Soap</span>
            </Link>
          </div>
          { this._signRender() }
        </div>
      </header>
    )
  }
}