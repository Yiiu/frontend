import axios from 'util/axios'

export const SET_USER_INFO = 'users/SET_USER_INFO'
export const EMPTY_USER_INFO = 'users/EMPTY_USER_INFO'

export function setUserMyInfoRemote () {
  return (dispatch) => axios.get('/api/user/me')
  .then(info => {
    dispatch(setUserInfo(info))
    return info
  })
}

export function setUserInfo (info) {
  return {
    type: SET_USER_INFO,
    info
  }
}

export function emptyUserInfo () {
  return {
    type: EMPTY_USER_INFO
  }
}
