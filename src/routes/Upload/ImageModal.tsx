import * as React from 'react'
import Animate from 'rc-animate';
// import velocity from 'velocity-animate';

import { X } from 'feather'
import { RenderInBody, Button } from 'components'
import styles from './style.less'
export interface IImageModal {
  url?: string | null
  uploadPhoto: any
  onClose: any
}

class ImageContent extends React.Component <any, any> {
  constructor (props: any) {
    super(props)
  }

  escOnClose = (e: any) => {
    if (e.keyCode === 27) {
      this.props.onClose()
    } else {
      return
    }
  }

  componentDidMount () {
    window.addEventListener('keyup', this.escOnClose)
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.escOnClose)
  }

  uploadBtn = () => {
    this.props.uploadPhoto({
      title: 'asdfasdf'
    })
  }

  render () {
    const { url, onClose } = this.props
    return (
      <section  className={ styles['image-modal'] }>
        <article
          className={ styles.background }
          style={{ backgroundImage: `url(${url})` }}
        >
          <section className={ styles.mask } />
          <section className={ styles.content }>
            <h2 className={ styles.title }>
              图片信息
            </h2>
            <section className={ styles.form }>
              <label>
                <span className={ styles.title }>
                  请输入图片标题
                </span>
                <input type="text" />
              </label>
            </section>
            <section className={ styles.btn }>
              <Button onClick={ this.uploadBtn }>上传图片</Button>
            </section>
          </section>
          <section
            className={ styles.close }
            onClick={ onClose }
          >
            <X />
          </section>
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
    const { url, uploadPhoto, onClose } = this.props
    return (
      <RenderInBody>
          <Animate
            transitionName="fade"
          >
            {
              url &&
              <ImageContent url={ url } onClose={ onClose } uploadPhoto={ uploadPhoto } />
            }
          </Animate>
      </RenderInBody>
    )
  }
}

{/* <section key="1">
 */}