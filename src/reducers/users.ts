import {
  SET_USER_INFO,
  EMPTY_USER_INFO
} from 'actions/users'

const initialState = {
  isSignIn: false,
  signInTime: null,
  userInfo: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        isSignIn: true,
        signInTime: new Date(),
        userInfo: action.info
      }
    case EMPTY_USER_INFO:
      return state
  }
  return state
}
