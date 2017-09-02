import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Window } from 'components/Layout'
import { Title, Button } from 'components'

import { uploadPhotoRemote } from 'actions'
import ImageModal from './ImageModal'
import styles from './style.less'

export interface IUploadProps {
  uploadPhotoRemote: any
}

class Upload extends React.Component<RouteComponentProps<any> & IUploadProps, {}> {
  public file?: HTMLInputElement | null

  public state = {
    photoFile: null,
    photoViewUrl: null
  }

  constructor (props: RouteComponentProps<any> & IUploadProps) {
    super(props)
  }

  onClick = () => {
    const el = this.file;
    if (!el) {
      return;
    }
    el.click();
  }

  onClose = () => {
    this.setState({
      photoFile: null,
      photoViewUrl: null
    })
  }

  handleFileChange = (e: any) => {
    this.setState({
      photoFile: e.target.files[0]
    });
    let r = new FileReader()
    r.readAsDataURL(e.target.files[0]);
    r.onload = (e: any) => {
      this.setState({
        photoViewUrl: e.target.result
      })
    }
    if (e.target.value) {
      e.target.value = ''
    }
  }

  uploadPhoto = (data: any) => {
    const { uploadPhotoRemote } = this.props
    const { photoFile } = this.state
    uploadPhotoRemote(photoFile, data)
  }

  render () {
    const { photoViewUrl } = this.state
    return (
      <Window
        className={ styles.box }
      >
        <Title title="上传图片" />
        <article
          className={ styles.upload }
        >
          <h2 className={ styles.title }>上传你的皂片</h2>
          <Button
            size="large"
            onClick={ this.onClick }
          >
            上传文件
          </Button>
          <input
            ref={ file => this.file = file }
            className={ styles['file-input'] }
            type="file"
            onChange={ this.handleFileChange }
          />
          <ImageModal
            url={ photoViewUrl }
            uploadPhoto={ this.uploadPhoto }
            onClose={ this.onClose }
          />
        </article>
      </Window>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch: Dispatch<any>) => bindActionCreators({
    uploadPhotoRemote
  }, dispatch)
)(Upload as React.ComponentClass<any>)