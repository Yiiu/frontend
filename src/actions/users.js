import axios from 'axios'

export const SET_USER_INFO = 'users/SET_USER_INFO'
export const EMPTY_USER_INFO = 'users/EMPTY_USER_INFO'

export function setUserMyInfoRemote () {
  return (dispatch) => axios.get('/api/user/me')
  .then(res => {
    dispatch(setUserInfo(res.data))
    return res.data
  })
}

export function setUserInfo (data) {
  return {
    type: SET_USER_INFO,
    data
  }
}

export function emptyUserInfo () {
  return {
    type: EMPTY_USER_INFO
  }
}
