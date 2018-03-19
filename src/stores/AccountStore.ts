import { observable, computed, action } from 'mobx'
import * as store from 'store';
import * as moment from 'moment'
import { notification } from 'antd'

import { verifyAccountStore } from 'util/verify'
import axios, { token } from 'util/axios'
import { error } from 'util/info'

export interface ISignInRes {
  user: any
  accessToken: string
  accessTokenExpiresAt: Date
  refreshToken: string
  refreshTokenExpiresAt: Date
}
export interface IUserInfo {
  username: string
  [key: string]: any
}

export class AccountStore {
  @observable
  info: IUserInfo | null = null

  @computed
  get isSignIn () {
    return !!this.info
  }

  getAccountState = async () => {
    let data = store.get('account')
    let isLegal = verifyAccountStore(data)
    if (isLegal) {
      const { accessToken, accessTokenExpiresAt, refreshToken, refreshTokenExpiresAt } = data
      if (moment(accessTokenExpiresAt).isAfter(moment())) {
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        this.fetchInfo()
      } else if (moment(refreshTokenExpiresAt).isAfter(moment())) {
        await this.fetchRefreshToken(refreshToken)
      } else {
        console.log(3123123)
      }
    } else {
      notification.error({
        message: '验证失败',
        description: '请重新登陆',
        duration: null
      })
    }
  }

  fetchInfo = async () => {
    const { data } = await axios.get('/api/user/me')
    this.setInfo(data)
  }

  fetchRefreshToken = async (refreshToken: string) => {
    try {
      let { data } = await token<ISignInRes>({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      })
      return data
    } catch (err) {
      notification.error({
        message: '验证失败',
        description: '请重新登陆',
        duration: null
      })
      return err
    }
  }

  fetchSignIn = async (username: string, password: string) => {
    try {
      let { data } = await token<ISignInRes>({username, password, grant_type: 'password'})
      store.set('account', {
        accessToken: data.accessToken,
        accessTokenExpiresAt: data.accessTokenExpiresAt,
        refreshToken: data.refreshToken,
        refreshTokenExpiresAt: data.refreshTokenExpiresAt
      })
      this.setInfo(data.user)
    } catch (err) {
      if (err.data.message) {
        notification.error({
          message: '登录失败',
          description: error[err.data.message],
          duration: null
        })
      }
    }
  }

  @action
  setInfo = (user: any) => {
    this.info = user
  }
}
