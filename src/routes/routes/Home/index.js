import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  loadPhotoListRemote
} from 'actions/photos'

import PhotoList from 'components/Photo/Photo'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      success: false,
      list: []
    }
    this.isOk = this.isOk.bind(this)
  }
  componentDidMount () {
    const { loadPhotoListRemote } = this.props
    loadPhotoListRemote()
      .then(this.isOk)
  }
  isOk () {
    const { photoList } = this.props
    this.setState({
      success: true,
      list: this.waterfallData(photoList)
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
    const { success, list } = this.state
    return success ? (
      <div className="container">
        <section className="photo-list">
          {
            list.map((l, index) =>
              <PhotoList key={ index } list={ l }/>
            )
          }
        </section>
      </div>
    ) :
    <div className="container">loading....</div>
  }
}

export default connect(
  state => ({
    photoList: state.Photos.photoList
  }),
  dispatch => bindActionCreators({
    loadPhotoListRemote
  }, dispatch)
)(Home)
