import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  uploadPhotoRemote
} from 'actions/photos'

class Upload extends React.Component {
  constructor (props) {
    super(props)
  }
  uploadFile (file) {
    const { uploadPhotoRemote } = this.props
    uploadPhotoRemote(file)
      .then(e => console.log(e))
      .catch(e => console.log(e))
  }
  render () {
    return (
      <div>
        <input
          multiple
          className="uploader"
          id="upload-file"
          type="file"
          onChange={e => Array.prototype.slice.call(e.target.files).forEach(file => this.uploadFile(file))}
        />
      </div>
    )
  }
}
export default connect(
  () => ({}),
  dispatch => bindActionCreators({
    uploadPhotoRemote
  }, dispatch)
)(Upload)
