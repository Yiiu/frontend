import { observable, computed, action } from 'mobx'
import * as qs from 'qs'
import SignIn from 'routes/Sign/SignIn';

import axios from 'util/axios'

export interface ISignInRes {
  user: any
}

export class AccountStore {
  @observable
  info: any = {}

  @computed
  get isSignIn () {
    return !!this.info.user
  }

  @action
  async signInRemote (username: string, password: string) {
    try {
      const { data } = await axios.request<ISignInRes>({
        url: '/oauth/token',
        method: 'post',
        headers: {
          'Authorization': 'Basic OTcwNWViN2FjMmM5ODQwMzo5NzEwNTE3NjA5MDdjMzI3',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify({username, password, grant_type: 'password'}),
      })
    } catch (err) {
      console.log(123123)
    }
  }
}
