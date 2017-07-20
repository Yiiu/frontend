import axios from 'axios'

import {
  setUserInfo,
  emptyUserInfo
} from './users'

export function SignInRemote (data) {
  return (dispatch) => axios.post('/api/signin', data)
  .then(res => {
    dispatch(setUserInfo(res.data.data))
    return res.data
  })
}

export function LogOutRemote (data) {
  return (dispatch) => axios.post('/api/logout', data)
  .then(res => {
    dispatch(emptyUserInfo())
    return res.data
  })
}