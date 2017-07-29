import React from 'react'
import PropTypes from 'prop-types'

export default class LoadingComponent extends React.Component {
  static defaultProps = {
    loading: true
  }

  static propTypes = {
    loading: PropTypes.bool
  }

  constructor (props) {
    super(props)
  }

  render () {
    const { loading, loadingRender, render, ...rest } = this.props
    let Renders
    if (loading) {
      Renders = loadingRender
    } else {
      Renders = render
    }
    return (
      <Renders { ...rest } />
    )
  }
}
