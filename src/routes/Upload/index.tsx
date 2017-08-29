import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Window } from 'components/Layout'
import { Title, Button } from 'components'

import styles from './style.less'

class Upload extends React.Component<RouteComponentProps<any>, {}> {
  public file?: HTMLInputElement | null

  constructor (props: RouteComponentProps<any>) {
    super(props)
  }

  onClick = () => {
    const el = this.file;
    if (!el) {
      return;
    }
    el.click();
  }

  render () {
    return (
      <Window
        className={ styles.box }
      >
        <Title title="上传图片" />
        <article
          className={ styles.upload }
        >
          <h2 className={ styles.title }>上传你的皂片</h2>
          <Button
            size="large"
            onClick={ this.onClick }
          >
            上传文件
          </Button>
          <input
            ref={ file => this.file = file }
            className={ styles['file-input'] }
            type="file"
          />
        </article>
      </Window>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch: Dispatch<any>) => bindActionCreators({
    
  }, dispatch)
)(Upload as React.ComponentClass<any>)