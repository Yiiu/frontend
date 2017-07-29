import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'

import PhotoList from 'components/Photo/PhotoList'
import styles from './style.less'
import {
  loadUserNameInfoRemote,
  loadUserPhotoListRemote
} from 'actions/users'
import { setPhotoList } from 'actions/photos'
import Avatar from 'components/Avatar/index.js'

class Upload extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: this.props.match.params.username.match(/^@(\w+)/)[1],
      loading: true,
      info: null
    }
    this.isOk = this.isOk.bind(this)
  }
  componentDidMount () {
    const { loadUserNameInfoRemote } = this.props
    const { username } = this.state
    loadUserNameInfoRemote(username)
      .then(this.isOk)
  }
  componentWillUnmount () {
    const { setPhotoList } = this.props
    setPhotoList([])
  }
  isOk (info) {
    const { loadUserPhotoListRemote } = this.props
    this.setState({
      loading: false,
      info
    })
    loadUserPhotoListRemote(info._id)
  }
  render () {
    const { loading, info } = this.state
    const { photoList } = this.props
    return !loading ? (
      <div className={ classnames('container', styles.box) }>
        <section className={ styles.info }>
          <section className={ styles.avatar }>
            <Avatar url={ info.avatar }/>
          </section>
          <p className={ styles.name }>{ info.username }</p>
          <p className={ styles.description }>{ info.description }</p>
        </section>
        {
          photoList && <PhotoList loading={ loading } list={ photoList } />
        }
      </div>
    ) : (
      <div className="container">loading</div>
    )
  }
}

export default connect(
  state => ({
    photoList: state.Photos.photoList
  }),
  dispatch => bindActionCreators({
    loadUserNameInfoRemote,
    loadUserPhotoListRemote,
    setPhotoList
  }, dispatch)
)(Upload)
