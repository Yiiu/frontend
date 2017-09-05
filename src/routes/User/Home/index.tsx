import * as React from 'react'
import * as Redux from 'react-redux'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import styles from './style.less'
import {
  loadUserNameInfoRemote,
  loadUserPhotosRemote
} from 'actions'
import { Avatar, PhotoList } from 'components'
import { IUserInfo, IPhotoInfo } from 'models'

interface IUserHome {
  loadUserNameInfoRemote: Redux.ActionCreator<any>
  loadUserPhotosRemote: Redux.ActionCreator<any>
  photoList: [IPhotoInfo]
  userInfo: IUserInfo
}

type IUserHomeProps = IUserHome & RouteComponentProps<any>

interface IUserHomeState {
  loading: boolean
}

class UserHome extends React.Component<IUserHomeProps, IUserHomeState> {
  public state = {
    loading: true
  }
  async componentWillMount () {
    const { match, loadUserNameInfoRemote, loadUserPhotosRemote } = this.props
    const { userName } = match.params
    const reg = /@(\w+)/
    if (!reg.test(userName)) {
      return
    } else {
      const name = userName.match(reg)[1]
      const userInfo = await loadUserNameInfoRemote(name)
      await loadUserPhotosRemote(userInfo._id)
      this.setState({
        loading: false
      })
    }
  }
  render () {
    const { loading } = this.state
    const { userInfo, photoList } = this.props
    if (loading) {
      return null
    }
    return (
      <div className={ classNames('container', styles.box) }>
        <section className={ styles.info }>
          <section className={ styles.avatar }>
            <Avatar url={ userInfo.avatar }/>
          </section>
          <p className={ styles.name }>{ userInfo.username }</p>
          <p className={ styles.description }>{ userInfo.description }</p>
        </section>
        {
          photoList && <PhotoList loading={ loading } list={ photoList } />
        }
      </div>
    )
  }
}
export default connect(
  (state: any) => ({
    userInfo: state.user.userInfo,
    photoList: state.photo.photoList
  }),
  (dispatch: Dispatch<any>) => bindActionCreators({
    loadUserNameInfoRemote,
    loadUserPhotosRemote
  }, dispatch)
)(UserHome as React.ComponentClass<any>)