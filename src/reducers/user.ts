import {
  SET_USER_INFO
} from '../constants'
import { IUserState, IActions } from '../models'

const initialState = {
  isSignIn: false,
  signInTime: null,
  userInfo: null
}

export default function (state: IUserState = initialState, action: IActions) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        isSignIn: true,
        signInTime: new Date(),
        userInfo: action.payload.info
      }
    default:
      return state
  }
}