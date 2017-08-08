import * as React from 'react'
import Photo from './Photo'
import styles from './style.less'

import { IPhotoInfo } from '../../models'

export interface IPhotoListProps {
  list: Array<IPhotoInfo>
}
export interface IPhotoListState {
  list: Array<any>
}

export default class PhotoList extends React.Component<IPhotoListProps, IPhotoListState> {
  state = {
    list: []
  }
  constructor (props: IPhotoListProps) {
    super(props)
  }
  componentDidMount () {
    const { list } = this.props
    this.setState({
      list: this.waterfallData(list)
    })
  }
  componentWillReceiveProps (newProps: IPhotoListProps) {
    this.setState({
      list: this.waterfallData(newProps.list)
    })
  }
  waterfallData (data: any, num: number = 3) {
    const newData: Array<any> = []
    let i = 0
    data.forEach((e: any) => {
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
    return (
      <section className="photo-list">
        {
          list.map((l: Array<any>, index) =>
            <section key={ index } className={ styles.list }>
              {
                l.map((photo: IPhotoInfo) =>
                  <Photo styles={ styles } key={ photo._id } data={ photo }/>
                )
              }
            </section>
          )
        }
      </section>
    )
  }
}