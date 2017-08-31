import * as React from 'react'
import Animate from 'rc-animate';
// import velocity from 'velocity-animate';

import { RenderInBody } from 'components'
import styles from './style.less'
export interface IImageModal {
  url?: string | null
}

class ImageContent extends React.Component <any, any> {
  constructor (props: any) {
    super(props)
  }
  render () {
    const { url } = this.props
    return (
      <section  className={ styles['image-modal'] }>
        <article
          className={ styles.background }
          style={{ backgroundImage: `url(${url})` }}
        >
          <section className={ styles.mask } />
        </article>
      </section> 
    )
  }
}

export default class ImageModal extends React.Component<IImageModal, any> {
  state = {
    vis: false
  }
  constructor (props: IImageModal) {
    super(props)
  }
  render () {
    const { url } = this.props
    return (
      <RenderInBody>
          <Animate
            transitionName="fade"
          >
            {
              url &&
              <ImageContent url={ url } />
            }
          </Animate>
      </RenderInBody>
    )
  }
}

{/* <section key="1">
 */}