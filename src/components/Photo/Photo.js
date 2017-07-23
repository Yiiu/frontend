import React from 'react'
import styles from './style.less'

export default class PhotoList extends React.Component {
  static defaultProps = {
    list: []
  }
  constructor (props) {
    super(props)
    this.state = {
      list: null
    }
  }
  componentDidMount () {
    const { list } = this.props
    this.setState({
      list: this.waterfallData(list)
    })
  }
  componentWillReceiveProps (newProps) {
    this.setState({
      list: this.waterfallData(newProps.list)
    })
  }
  waterfallData (data, num = 3) {
    const newData = []
    let i = 0
    data.forEach(e => {
      if (!newData[i]) {
        newData[i] = []
      }
      newData[i].push(e)
      i === num - 1 ? i = 0 : i++
    })
    return newData
  }
  render () {
    const { list } = this.state
    return list && (
      <section className="photo-list">
        {
          list.map((l, index) =>
            <section key={ index } className={ styles.list }>
              {
                l.map(e =>
                  <Photo key={ e._id } data={ e }/>
                )
              }
            </section>
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
