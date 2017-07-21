import axios from 'util/axios'

import {
  setUserInfo,
  emptyUserInfo
} from './users'

export function SignInRemote (data) {
  return (dispatch) => axios.post('/api/signin', data)
  .then(info => {
    dispatch(setUserInfo(info))
    return info
  })
}

export function LogOutRemote (data) {
  return (dispatch) => axios.post('/api/logout', data)
  .then(res => {
    dispatch(emptyUserInfo())
    return res
  })
}
