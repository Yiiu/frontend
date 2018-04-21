import * as React from 'react'
import {
  Button
} from 'antd'
import styles from './styles.less'

import UploadModel from 'components/UploadModel'

export default class Upload extends React.PureComponent {
  uploadInput: HTMLInputElement
  imageRef: HTMLImageElement
  state = {
    isSelectImg: false,
    imageUrl: ''
  }

  image = null

  _upload = () => {
    console.log(this.uploadInput.click())
  }

  _inputChange = (e: any) => {
    if (e.target.files[0]) {
      this.image = e.target.files[0];
      let url = window.URL.createObjectURL(this.image)
      this.setState({
        isSelectImg: true,
        imageUrl: url
      })
    }
  }

  render () {
    const { imageUrl, isSelectImg } = this.state
    return (
      <div className={styles.layout}>
        <section className={styles.box}>
          <h2>上传图片到Soap</h2>
          <Button
            type="primary"
            className={styles.upload_btn}
            onClick={this._upload}
          >
            上传
          </Button>
          <input
            ref={(e: HTMLInputElement) => this.uploadInput = e}
            id={styles.upload_input}
            type="file"
            onChange={this._inputChange}
          />
          {
            isSelectImg &&
            <UploadModel imageUrl={imageUrl} />
          }
        </section>
      </div>
    )
  }
}