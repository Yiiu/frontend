import axios from '../util/axios'
import { IUserInfo } from '../models'

import {
  starsRequest,
  starsSuccess,
  starsFailure
} from './request'

import {
  SET_USER_INFO
} from '../constants'

export function setUserInfo (info: IUserInfo) {
  return {
    type: SET_USER_INFO,
    payload: {
      info
    }
  }
}

export function loadUserMyInfoRemote () {
  return (dispatch: any) => {
    dispatch(starsRequest());
    return axios.get('/api/users/me')
      .then((info: any) => {
        dispatch(starsSuccess())
        dispatch(setUserInfo(info))
        return info
      })
      .catch(err => {
        dispatch(starsFailure(err))
      })
  }
}

export function loadUserNameInfoRemote (name: string) {
  return (dispatch: any) => {
    dispatch(starsRequest());
    return axios.get(`/api/users/${name}?name=1`)
      .then((info: any) => {
        dispatch(starsSuccess())
        dispatch(setUserInfo(info))
        return info
      })
      .catch(err => {
        dispatch(starsFailure(err))
      })
  }
}