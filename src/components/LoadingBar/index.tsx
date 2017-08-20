import * as React from 'react'
import RenderInBody from '../RenderInBody'
import classnames from 'classnames'
import styles from './style.less'

export interface ILoadingBar {
  isFetching?: boolean
}

export default class LoadingBar extends React.Component<ILoadingBar, {}> {
  constructor (props: ILoadingBar) {
    super(props)
  }
  render () {
    const { isFetching } = this.props;
    return (
      <RenderInBody>
        <div className={ classnames(styles['loading-bar'], {[styles.open]: isFetching}) } />
      </RenderInBody>
    )
  }
}