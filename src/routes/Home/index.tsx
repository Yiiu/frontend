import * as React from 'react'
import * as Redux from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import {
  PhotoList
} from 'components'

import {
  loadPhotoListRemote
} from 'actions'

export interface IHomeProps {
  loadPhotoListRemote: Redux.ActionCreator<any>
}

class Home extends React.Component<IHomeProps & Dispatch<any> & RouteComponentProps<any>, any> {
  state = {
    photoList: []
  }
  constructor (props: IHomeProps & Dispatch<any> & RouteComponentProps<any>) {
    super(props)
  }

  componentDidMount () {
    const { loadPhotoListRemote } = this.props
    loadPhotoListRemote()
      .then((list: Array<any>) => {
        this.setState({
          photoList: list
        })
      })
  }

  render () {
    const { photoList } = this.state
    return (
      <div className="container">
        <PhotoList list={ photoList } />
      </div>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch: Dispatch<any>) => bindActionCreators({
    loadPhotoListRemote
  }, dispatch)
)(Home as React.ComponentClass<any>)