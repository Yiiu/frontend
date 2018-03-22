import * as React from 'react'
import Animate from 'rc-animate'
import classNames from 'classnames'

export interface IModalPropTypes {
  className: string
  visible: boolean
  prefixCls: string
}

export default class Modal extends React.PureComponent<IModalPropTypes> {
  static defaultProps = {
    className: '',
    visible: false,
    prefixCls: 'rc-dialog',
  }
  render () {
    const { prefixCls, children, visible, className } = this.props
    const classnames = classNames(prefixCls, className)
    return (
      <div>
        123123
      </div>
    )
  }
}