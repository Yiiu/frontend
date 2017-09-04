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

interface IHome {
  loadPhotoListRemote: Redux.ActionCreator<any>
}

type IHomeProps = IHome & Dispatch<any> & RouteComponentProps<any>

class Home extends React.Component<IHomeProps, any> {
  state = {
    photoList: []
  }
  constructor (props: IHomeProps) {
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