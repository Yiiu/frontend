import * as React from 'react'
import { Button } from 'antd'

import LabelInput from './components/LabelInput'

import styles from './styles.less'

export default class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }
  render () {
    const { username, password } = this.state;
    const onChange = (value: string) => {
      return (e: any) => {
        this.setState({
          [value]: e.target.value
        })
      }
    }
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
          <Button type="primary">登陆</Button>
        </section>
      </section>
    )
  }
}