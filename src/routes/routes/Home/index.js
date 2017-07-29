import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  loadPhotoListRemote,
  setPhotoList
} from 'actions/photos'

import PhotoList from 'components/Photo/PhotoList'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      list: []
    }
    this.isOk = this.isOk.bind(this)
  }
  componentDidMount () {
    const { loadPhotoListRemote } = this.props
    loadPhotoListRemote()
      .then(this.isOk)
  }
  componentWillUnmount () {
    const { setPhotoList } = this.props
    setPhotoList([])
  }
  isOk () {
    this.setState({
      loading: false
    })
  }
  render () {
    const { loading } = this.state
    const { photoList } = this.props
    return (
      <div className="container">
        <PhotoList loading={ true } list={ photoList } />
      </div>
    )
  }
}

export default connect(
  state => ({
    photoList: state.Photos.photoList
  }),
  dispatch => bindActionCreators({
    loadPhotoListRemote,
    setPhotoList
  }, dispatch)
)(Home)
