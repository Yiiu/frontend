import * as React from 'react'
import {
  Button
} from 'antd'
import styles from './styles.less'

export default class Upload extends React.PureComponent {
  render () {
    return (
      <div className={styles.layout}>
        <section className={styles.box}>
          <h2>上传图片到Soap</h2>
          <Button type="primary" className={styles.upload_btn}>上传</Button>
        </section>
      </div>
    )
  }
}