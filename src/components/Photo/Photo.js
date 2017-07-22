import React from 'react'
import styles from './style.less'

export default class PhotoList extends React.Component {
  static defaultProps = {
    list: []
  }
  constructor (props) {
    super(props)
  }
  render () {
    const { list } = this.props
    return (
      <section className={ styles.list }>
        {
          list.map(e =>
            <Photo key={ e._id } data={ e }/>
          )
        }
      </section>
    )
  }
}
class Photo extends React.Component {
  static defaultProps = {
    data: null
  }
  render () {
    const { data } = this.props
    return (
      <section className={ styles.photo }>
        <img src={ `${data.links}?imageMogr2/auto-orient/thumbnail/600x600>/blur/1x0/quality/100|imageslim` }/>
      </section>
    )
  }
}
