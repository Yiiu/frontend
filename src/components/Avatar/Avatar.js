import React from 'react'
import styles from './style.less'
export default class Avatar extends React.Component {
  static defaultProps = {
    url: ''
  }
  constructor (props) {
    super(props)
  }
  render () {
    const { url } = this.props
    return (
      <img className={ styles.avatar } src={ `${url}?imageView2/1/w/200/h/200/q/75|imageslim` } />
    )
  }
}
