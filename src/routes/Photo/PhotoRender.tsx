import * as React from 'react'
import { IPhotoInfo } from 'models'
import classNames from 'classnames'

import styles from './style.less';

interface IPhotoRenderProps {
  modal?: boolean
}
type IPhoto = IPhotoRenderProps & IPhotoInfo

const Photo: React.StatelessComponent<IPhoto> = ({
  links,
  modal = false
}) => {
  return (
    <section
      className={ classNames(styles['photo-box'], {
        [styles['is-modal']]: modal
      }) }
    >
      <div className={ styles.image }>
        <img src={ links } alt=""/>
      </div>
    </section>
  )
}
export default Photo