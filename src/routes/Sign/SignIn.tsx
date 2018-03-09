import * as React from 'react'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react';

import { AccountStore } from 'stores'

import { STORT_ACCOUNT } from 'constants/stores'

import LabelInput from './components/LabelInput'

import styles from './styles.less'

@inject(STORT_ACCOUNT)
@observer
export default class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
    loading: false
  }

  _signIn = async () => {
    const { username, password } = this.state;
    const { fetchSignIn } = this.props[STORT_ACCOUNT] as AccountStore
    this.setState({
      loading: true
    })
    await fetchSignIn(username, password)
  }

  render () {
    const { username, password, loading } = this.state;
    const onChange = (value: string) => {
      return (e: any) => {
        this.setState({
          [value]: e.target.value
        })
      }
    }
    console.log(this.props[STORT_ACCOUNT])
    return (
      <section className={styles.SignContainer}>
        <h1 className={styles.SignTitle}>登陆</h1>
        <LabelInput
          title="用户名"
          value={username}
          onChange={onChange('username')}
        />
        <LabelInput
          title="密码"
          type="password"
          value={password}
          onChange={onChange('password')}
        />
        <section className={styles.SignButton}>
          <Button
            type="primary"
            onClick={this._signIn}
            loading={loading}
          >
            登陆
          </Button>
        </section>
      </section>
    )
  }
}