import * as React from 'react'
import * as Redux from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import Masonry from 'react-masonry-component'

import Photo from './Photo'
import styles from './style.less'

import {
  likePhotoRemote,
  setLikePhoto
} from 'actions/photo'

import { IPhotoInfo } from '../../models'

export interface IPhotoListProps {
  likePhotoRemote: Redux.ActionCreator<any>
  setLikePhoto: Redux.ActionCreator<any>
  list: Array<IPhotoInfo>
}
export interface IPhotoListState {
  list: Array<any>
}

class PhotoList extends React.Component<IPhotoListProps, IPhotoListState> {
  state = {
    list: []
  }

  constructor (props: IPhotoListProps) {
    super(props)
  }

  likePhoto = (photoId: string, isLike: boolean) => {
    const { likePhotoRemote, setLikePhoto } = this.props;
    likePhotoRemote(photoId, isLike)
      .then((detail: any) => {
        setLikePhoto(detail)
      })
  }

  render () {
    const { list } = this.props;
    return (
      <Masonry
        className="photo-list"
      >
        {
          list.map((photo: IPhotoInfo) =>
            <Photo likePhoto={ this.likePhoto } styles={ styles } key={ photo._id } data={ photo }/>
          )
        }
      </Masonry>
    )
  }
}
export default connect(
  (state: any) => ({
  }),
  (dispatch: Dispatch<any>) => bindActionCreators({
    likePhotoRemote,
    setLikePhoto
  }, dispatch)
)(PhotoList as React.ComponentClass<any>)