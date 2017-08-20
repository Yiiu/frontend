import * as React from 'react'
import * as Redux from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import { Window } from 'components/Layout'
import { Title } from 'components'

import { IPhotoInfo } from 'models'
import styles from './style.less'

import {
  loadPhotoDetailRemote
} from 'actions'

export interface IPhotoProps {
  loadPhotoDetailRemote: Redux.ActionCreator<any>
  photoDetail?: IPhotoInfo | null
}

export interface IPhotoState {
  loading: boolean
}

class Photo extends React.Component<IPhotoProps & Dispatch<any> & RouteComponentProps<any>, IPhotoProps> {
  constructor (props: IPhotoProps & Dispatch<any> & RouteComponentProps<any>) {
    super(props)
  }

  componentDidMount () {
    const { loadPhotoDetailRemote, match: { params } } = this.props;
    console.log(1)
    loadPhotoDetailRemote(params.photoId)
  }

  render () {
    const { photoDetail } = this.props
    if (!photoDetail) {
      return <div />
    }
    return (
      <Window className={ styles.container }>
        <Title title="photo" />
        <img src={ photoDetail.links } alt=""/>
      </Window>
    )
  }
}

export const Modal = (Component: React.ComponentClass) => {
  return class extends React.Component {
    render() {
      return (
        <section className={ styles['photo-modal'] }>
          <Component {...this.props} />
        </section>
      )
    }
  }
}

export default connect(
  (state) => ({
    ...state.photo
  }),
  (dispatch: Dispatch<any>) => bindActionCreators({
    loadPhotoDetailRemote
  }, dispatch)
)(Photo as React.ComponentClass<any>)