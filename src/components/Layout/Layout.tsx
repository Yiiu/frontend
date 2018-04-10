import * as React from 'react'
import styles from './styles.less'

export interface IStatelesLayoutProps {

}

export const Layout: React.StatelessComponent<IStatelesLayoutProps> = ({
  children
}) => (
  <section className={styles.layout}>
    {children}
  </section>
)