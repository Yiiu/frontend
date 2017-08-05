import axios from '../util/axios'

import {
  setUserInfo
} from 'actions'

interface ISignInData {
  userOrEmail: string,
  password: string
}

export function SignInRemote (user: ISignInData) {
  return (dispatch: any) => axios.post('/api/SignIn', user)
    .then((info: any) => {
      dispatch(setUserInfo(info))
      return info
    })
}