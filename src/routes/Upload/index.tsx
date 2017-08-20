import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Window } from 'components/Layout'
import { Title } from 'components'

class Upload extends React.Component<RouteComponentProps<any>, {}> {
  constructor (props: RouteComponentProps<any>) {
    super(props)
  }
  render () {
    return (
      <Window>
        <Title title="上传图片" />
        <div>123</div>
      </Window>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch: Dispatch<any>) => bindActionCreators({
    
  }, dispatch)
)(Upload as React.ComponentClass<any>)