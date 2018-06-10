import * as React from 'react'
import { inject, observer } from 'mobx-react';
import { STORE_PICTURE } from 'constants/stores'
import { PictureStore } from 'stores'

import { IPictureInfo } from 'models/picture'

import { PictureLayout } from 'components/Layout'
import { PictureList } from 'components/Picture'

export interface IHomeProp {

}

@inject(STORE_PICTURE)
@observer
export default class Home extends React.Component<IHomeProp> {
  state = {
    list: [] as IPictureInfo[],
    initState: false
  }

  _getList = async () => {
    const { getPictureList } = this.props[STORE_PICTURE] as PictureStore
    let list = await getPictureList()
    this.setState({
      list
    })
  }

  componentDidMount () {
    this._getList()
  }

  render () {
    return (
      <PictureLayout>
        <PictureList list={this.state.list} />
      </PictureLayout>
    )
  }
}