import * as React from 'react'

export interface ITitleProps {
  title: string
}

export default class Title extends React.Component<ITitleProps, {}> {
  constructor (props: ITitleProps) {
    super(props)
  }

  setTitle () {
    const { title } = this.props;
    document.title = title
  }

  componentDidMount () {
    this.setTitle()
  }

  componentDidUpdate () {
    this.setTitle()
  }

  render () {
    return null
  }
}