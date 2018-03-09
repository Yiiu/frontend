import { observable, computed, action } from 'mobx'
import * as qs from 'qs'
import SignIn from 'routes/Sign/SignIn';

import axios from 'util/axios'

export interface ISignInRes {
  user: any
}

export class AccountStore {
  @observable
  info = null

  @computed
  get isSignIn () {
    return !!this.info
  }

  fetchSignIn = async (username: string, password: string) => {
    let { data } = await axios.request<ISignInRes>({
      url: '/oauth/token',
      method: 'post',
      headers: {
        'Authorization': 'Basic OTcxMDUxNzYwOTA3YzMyNzo5NzA1ZWI3YWMyYzk4NDAz',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({username, password, grant_type: 'password'}),
    })
    this.setInfo(data.user)
  }

  @action
  setInfo = (user: any) => {
    this.info = user
  }
}
