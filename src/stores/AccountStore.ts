import { observable, computed, action } from 'mobx'
import * as store from 'store';
import * as qs from 'qs'
import * as moment from 'moment'
import { notification } from 'antd'

import { verifyAccountStore } from 'util/verify'
import axios from 'util/axios'
import { error } from 'util/info'

export interface ISignInRes {
  user: any
  accessToken: string
  accessTokenExpiresAt: Date
  refreshToken: string
  refreshTokenExpiresAt: Date
}

export class AccountStore {
  @observable
  info = null

  @computed
  get isSignIn () {
    console.log(111123123)
    return !!this.info
  }

  getAccountState = async () => {
    let data = store.get('account')
    let isLegal = verifyAccountStore(data)
    if (isLegal) {
      const { accessToken, accessTokenExpiresAt, refreshToken, refreshTokenExpiresAt } = data
      if (moment(accessTokenExpiresAt).isAfter(moment())) {
        console.log(123123, accessToken)
      } else if (moment(refreshTokenExpiresAt).isAfter(moment())) {
        console.log(321321, refreshToken)
      } else {
        console.log(3123123)
      }
    } else {
      console.log(1)
    }
    console.log(123123123, data)
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
      store.set('account', {
        accessToken: data.accessToken,
        accessTokenExpiresAt: data.accessTokenExpiresAt,
        refreshToken: data.refreshToken,
        refreshTokenExpiresAt: data.refreshTokenExpiresAt
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
