import React from 'react'
import { Heart } from 'react-feather'
import { Link } from 'react-router-dom'

export default class Photo extends React.Component {
  static defaultProps = {
    data: null
  }
  render () {
    const { data, styles } = this.props
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
}
