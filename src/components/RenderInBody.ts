import * as React from 'react'
import * as ReactDom from 'react-dom'

export interface IRenderInBody {
  children: React.ReactElement<any>
}

export default class RenderInBody extends React.Component<IRenderInBody, {}> {
  public popup: any = null

  constructor (props: IRenderInBody) {
    super(props)
  }

  componentDidMount () {
    this.popup = document.createElement('div')
    document.body.appendChild(this.popup)
    this._renderLayer()
  }
  componentDidUpdate () {
    this._renderLayer()
  }

  componentWillUnmount () {
    ReactDom.unmountComponentAtNode(this.popup)
    document.body.removeChild(this.popup)
  }

  _renderLayer () {
    const { children } = this.props
    ReactDom.render(children, this.popup)
  }

  render () {
    return null
  }
}