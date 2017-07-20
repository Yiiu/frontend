import {
  SET_USER_INFO,
  EMPTY_USER_INFO
} from 'actions/users'

const initialState = {
  isSignin: false,
  signinTime: null,
  userInfo: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        isSignin: true,
        signinTime: new Date(),
        userInfo: action.data
      }
    case EMPTY_USER_INFO:
      return initialState
  }
  return state
}