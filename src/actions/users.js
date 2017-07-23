import axios from 'util/axios'
import { setPhotoList } from 'actions/photos'

export const SET_USER_INFO = 'users/SET_USER_INFO'
export const EMPTY_USER_INFO = 'users/EMPTY_USER_INFO'

export function setUserMyInfoRemote () {
  return dispatch => axios.get('/api/user/me')
  .then(info => {
    dispatch(setUserInfo(info))
    return info
  })
}

export function loadUserNameInfoRemote (username) {
  return () =>
    axios.get(`/api/user/@${username}`)
}

export function loadUserPhotoListRemote (userId) {
  return dispatch =>
    axios.get(`/api/user/${userId}/photos`)
      .then(list => dispatch(setPhotoList(list)))
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
