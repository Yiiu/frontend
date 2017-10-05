import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { RenderInBody } from 'components'
import { Title } from 'components'

import { IPhotoProps, IPhotoState } from './index'
// import { IPhotoInfo } from 'models'
import styles from './style.less'
import PhotoRender from './PhotoRender'

import {
  loadPhotoDetailRemote
} from 'actions'

type IPhoto = IPhotoProps & Dispatch<any> & RouteComponentProps<any>

class ModalPhoto extends React.Component<IPhoto, IPhotoState> {
  constructor (props: IPhoto) {
    super(props)
  }

  componentDidMount () {
    const { loadPhotoDetailRemote, match: { params } } = this.props;
    loadPhotoDetailRemote(params.photoId)
  }

  render () {
    const { photoDetail } = this.props
    if (!photoDetail) {
      return <div />
    }
    return (
      <RenderInBody>
        <section className={ styles['photo-modal'] }>
          <Title title="photo" />
          <PhotoRender modal { ...photoDetail } />
        </section>
      </RenderInBody>
    )
  }
}

export default connect(
  (state) => ({
    ...state.photo
  }),
  (dispatch: Dispatch<any>) => bindActionCreators({
    loadPhotoDetailRemote
  }, dispatch)
)(ModalPhoto as React.ComponentClass<any>)