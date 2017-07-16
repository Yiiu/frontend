import React from 'react'

import Nav from './components/Nav'
import styles from './style.less'

export default () => {
  return (
    <header className={ styles.root }>
      <main className={ styles.main }>
        <Nav />
      </main>
    </header>
  )
}
