import React from 'react'
import styles from './style.less'

import Photo from './Photo'

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
                  <Photo styles={ styles } key={ e._id } data={ e }/>
                )
              }
            </section>
          )
        }
      </section>
    )
  }
}
