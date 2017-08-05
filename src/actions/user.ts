import axios from '../util/axios'
import { IUserInfo } from '../models'

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
  return (dispatch: any) => axios.get('/api/user/me')
    .then((info: any) => {
      dispatch(setUserInfo(info))
      return info
    })
}