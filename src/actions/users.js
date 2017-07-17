import axios from 'axios'

export const SET_USER_MY_INFO = 'users/SET_USER_MY_INFO'

export function setUserMyInfoRemote () {
  return () => {
    return axios.get('/api/me')
  }
}