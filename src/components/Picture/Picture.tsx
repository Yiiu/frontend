import * as React from 'react'
import { Col } from 'antd'
import styles from './styles.less'
import { IPictureInfo } from 'models/picture'

import { pictureUrl } from 'util/picture'

export interface IPicture {
  info: IPictureInfo
}

export class PictureItem extends React.PureComponent<IPicture> {
  componentDidMount() {
    console.log(this.props.info)
  }
  render () {
    const { info } = this.props
    return (
      <section className={styles['picture-item-image-box']}>
        <section className={styles['picture-item-image']}>
          <img
            src={pictureUrl(info.key, 'shrink')}
          />
        </section>
      </section>
    )
  }
}