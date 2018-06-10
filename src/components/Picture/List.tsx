import * as React from 'react'
import { Row, Col } from 'antd'
import styles from './styles.less'
import { IPictureInfo } from 'models/picture'

import { PictureItem } from './index'

export interface IPictureList {
  list: IPictureInfo[]
}

export class PictureList extends React.PureComponent<IPictureList, {}> {
  render () {
    return (
      <div className={styles['picture-list-box']}>
        <Row
          gutter={{
            md: 48,
            sm: 24
          }}
        >
          {
            this.props.list.map(picture => 
              <Col
                xl={6}
                key={picture._id}
                sm={8}
              >
                <PictureItem info={picture} />
              </Col>
            )
          }
        </Row>
      </div>
    )
  }
}