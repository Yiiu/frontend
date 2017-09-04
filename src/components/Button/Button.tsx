import * as React from 'react'
import classNames from 'classnames'

import { Loading } from 'feather'
import styles from './style.less'

export interface IButtonProps {
  onClick?: React.FormEventHandler<any>
  disabled: boolean
  prefixCls: string
  className?: string
  size?: string
  type: string
  loading: boolean
}

export default class Button extends React.Component<IButtonProps, {}> {
  static defaultProps = {
    prefixCls: 'btn',
    type: 'default',
    loading: false,
    disabled: false
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
      loading,
      onClick,
      disabled
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
      [styles[`${prefixCls}-${type}`]]: type,
      [styles[`${prefixCls}-loading`]]: loading
    })

    return (
      <button
        className={ classes }
        onClick={ onClick }
        disabled={ disabled || loading }
      >
        {
          loading &&
          <span className={ styles[`${prefixCls}-loading-span`] }>
            <Loading size={ 14 } color="#fff" />
          </span>
        }
        { children }
      </button> 
    )
  }
}