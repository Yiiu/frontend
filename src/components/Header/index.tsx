import * as React from 'react'

import styles from './styles.less'

export default class Header extends React.PureComponent<any, any> {
  render () {
    return (
      <header className={styles.header}>
        <span>123123</span>
      </header>
    )
  }
}