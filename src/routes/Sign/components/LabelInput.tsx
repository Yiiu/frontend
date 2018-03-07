import * as React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

import styles from '../styles.less'

export interface ILabelInput extends InputProps {
  title: string
}

export default class LabelInput extends React.PureComponent<ILabelInput, {}> {
  render () {
    const { title, ...orderProps } = this.props
    return (
      <label className={styles.label}>
        <span className={styles.title}>{title}</span>
        <Input {...orderProps} className={styles.input}/>
      </label>
    )
  }
}