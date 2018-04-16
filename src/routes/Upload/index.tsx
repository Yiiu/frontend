import * as React from 'react'
import {
  Button
} from 'antd'
import styles from './styles.less'

export default class Upload extends React.PureComponent {
  uploadInput: HTMLInputElement
  state = {
    image: null
  }

  imgUrl = null

  _upload = () => {
    console.log(this.uploadInput.click())
  }

  _inputChange = (e: any) => {
    console.log(e.target.files[0])
    var reader = new FileReader();  
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e: any) {
      console.log(this.result)
    }
  }

  render () {
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
        </section>
      </div>
    )
  }
}