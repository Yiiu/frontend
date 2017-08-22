import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { RenderInBody } from 'components'
import { Title } from 'components'

import { IPhotoProps, IPhotoState } from './index'
// import { IPhotoInfo } from 'models'
// import styles from './style.less'
import PhotoRender from './PhotoRender'

import {
  loadPhotoDetailRemote
} from 'actions'

class ModalPhoto extends React.Component<IPhotoProps & Dispatch<any> & RouteComponentProps<any>, IPhotoState> {
  constructor (props: IPhotoProps & Dispatch<any> & RouteComponentProps<any>) {
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
        <div>
          <Title title="photo" />
          <PhotoRender { ...photoDetail } />
        </div>
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