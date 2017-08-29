import * as React from 'react'
import classNames from 'classnames'
import styles from './style.less'

export interface IButtonProps {
  onClick?: React.FormEventHandler<any>
  disabled?: boolean
  prefixCls: string
  className?: string
  size?: string
  type: string
}

export default class Button extends React.Component<IButtonProps, {}> {
  static defaultProps = {
    prefixCls: 'btn',
    type: 'default'
  }

  constructor (props: IButtonProps) {
    super(props)
  }

  render () {
    const {
      children,
      prefixCls,
      className,
      size = '',
      type,
      onClick
    } = this.props

    let sizeCls = ''
    switch (size) {
      case 'large':
        sizeCls = 'lg'
        break
      case 'small':
        sizeCls = 'sm'
        break
      default:
        break
    }
    const classes = classNames(styles[prefixCls], className, {
      [styles[`${prefixCls}-${sizeCls}`]]: sizeCls,
      [styles[`${prefixCls}-${type}`]]: type
    })

    return (
      <button
        className={ classes }
        onClick={ onClick }
      >
        { children }
      </button> 
    )
  }
}