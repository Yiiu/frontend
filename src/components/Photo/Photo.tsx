import * as React from 'react'
import { Heart } from 'feather'
import { Link } from 'react-router-dom'

import { IPhotoInfo } from '../../models'

export interface IPhotoProps {
  data: IPhotoInfo,
  styles: any
}

export default (props: IPhotoProps) => {
  const { data, styles } = props
  return (
    <section className={ styles.photo }>
      <Link to={ `/photo/${ data._id }` }>
        <img
          src={ `${data.links}?imageMogr2/auto-orient/thumbnail/600x600>/blur/1x0/quality/100|imageslim` }
        />
      </Link>
      <div className={ styles.photoInfo }>
        <div className={ styles.photoUser }>
          <img src={ data.user.avatar } alt=""/>
          <span className={ styles.userName }>{ data.user.username }</span>
        </div>
        <div className={ styles.action }>
          <Heart color="#fff" size={ 18 }/>
        </div>
      </div>
    </section>
  )
}
