import * as React from 'react'
import styles from './styles.less'
import classnames from 'classnames'

export interface IStatelesPictureLayoutProps {
  className?: string
}

export const PictureLayout: React.StatelessComponent<IStatelesPictureLayoutProps> = ({
  children,
  className
}) => {
  const classNames = classnames(styles['picture-layout'], className)
  return (
    <section className={classNames}>
      {children}
    </section>
  )
}