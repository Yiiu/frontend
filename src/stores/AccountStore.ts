import { observable, computed, action } from 'mobx'
import * as qs from 'qs'
import { notification } from 'antd'

import SignIn from 'routes/Sign/SignIn';

import axios from 'util/axios'
import { error } from 'util/info'

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
    try {
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
    } catch (err) {
      if (err.data.message) {
        console.log(error, err.data.message)
        notification.error({
          message: '登录失败',
          description: error[err.data.message],
          duration: null
        })
      }
      throw err.data.message
    }
  }

  @action
  setInfo = (user: any) => {
    this.info = user
  }
}
