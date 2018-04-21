import * as React from 'react'
import styles from './styles.less'

export interface IUploadModel {
  imageUrl: string
}

export default class UploadModel extends React.PureComponent<IUploadModel, {}> {
  state = {
    transform: '100'
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        transform: '0'
      })
    }, 10);
  }

  render () {
    const { imageUrl } = this.props
    const { transform } = this.state
    return (
      <section
        className={styles.box}
        style={{
          transform: `translateY(${transform}%)`
        }}
      >
        <section
          className={styles.img}
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <section
          className={styles.bg}
        />
      </section>
    )
  }
}