import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  loadPhotoListRemote
} from 'actions/photos'

class Home extends React.Component {
  componentDidMount () {
    const { loadPhotoListRemote } = this.props
    loadPhotoListRemote()
  }
  render () {
    const { photoList } = this.props
    console.log(photoList)
    return (
      <div className="container">
        {
          photoList.map(photo =>
            <img src={ photo.links }/>
          )
        }
      </div>
    )
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
