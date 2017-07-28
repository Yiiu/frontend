import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  loadPhotoListRemote
} from 'actions/photos'

import PhotoList from 'components/Photo/PhotoList'

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
    this.setState({
      success: true
    })
  }
  render () {
    const { success } = this.state
    const { photoList } = this.props
    return success ? (
      <div className="container">
        {
          photoList && <PhotoList list={ photoList } />
        }
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
