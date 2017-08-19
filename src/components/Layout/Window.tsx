import * as React from 'react'
import classnames from 'classnames'

export interface IWindowProps {
  className?: string | object
}
const Window: React.StatelessComponent<IWindowProps> = ({
  children,
  className
}) => {
  return (
    <section className={ classnames('container', className) }>
      { children }
    </section>
  )
}
export default Window