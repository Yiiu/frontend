import * as React from 'react'
import { inject, observer } from 'mobx-react';
import { STORT_UPLOAD } from 'constants/stores'
import {
  Button,
  message
} from 'antd'
import styles from './styles.less'

// import UploadModel from 'components/UploadModel'
@inject(STORT_UPLOAD)
@observer
export default class Upload extends React.Component {
  uploadInput: HTMLInputElement
  imageRef: HTMLImageElement
  state = {
    isSelectImg: false,
    imageUrl: '',
    btnLoading: false    
  }

  image = null

  _upload = () => {
    this.uploadInput.click()
  }

  _inputChange = async (e: any) => {
    if (e.target.files[0]) {
      this.image = e.target.files[0];
      this.setState({
        btnLoading: true
      })
      try {
        let photo = await this.props[STORT_UPLOAD].fetchUploadPhoto(this.image)
        message.success('上传成功！')
        this.setState({
          btnLoading: false
        })
      } catch (err) {
        message.success('上传失败！')
        this.setState({
          btnLoading: false
        })
      }
      // let url = window.URL.createObjectURL(this.image)
      // this.setState({
      //   isSelectImg: true,
      //   imageUrl: url
      // })
    }
  }

  render () {
    const { btnLoading } = this.state
    return (
      <div className={styles.layout}>
        <section className={styles.box}>
          <h2>上传图片到Soap</h2>
          <Button
            type="primary"
            className={styles.upload_btn}
            onClick={this._upload}
            loading={btnLoading}
          >
            上传
          </Button>
          <input
            ref={(e: HTMLInputElement) => this.uploadInput = e}
            id={styles.upload_input}
            type="file"
            onChange={this._inputChange}
          />
          {/* {
            isSelectImg &&
            <UploadModel imageUrl={imageUrl} />
          } */}
        </section>
      </div>
    )
  }
}