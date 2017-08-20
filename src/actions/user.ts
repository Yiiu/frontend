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

export function setUserMyInfoRemote () {
  return (dispatch: any) => {
    dispatch(starsRequest());
    return axios.get('/api/user/me')
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