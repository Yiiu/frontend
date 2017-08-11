import * as React from 'react'
import * as Redux from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import {
  loadPhotoListRemote
} from 'actions'

export interface IPhotoProps {
  loadPhotoListRemote: Redux.ActionCreator<any>
}

class Photo extends React.Component<IPhotoProps & Dispatch<any> & RouteComponentProps<any>, any> {
  constructor (props: IPhotoProps & Dispatch<any> & RouteComponentProps<any>) {
    super(props)
  }

  render () {
    return (
      <div className="container">
        asdf
      </div>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch: Dispatch<any>) => bindActionCreators({
    loadPhotoListRemote
  }, dispatch)
)(Photo as React.ComponentClass<any>)