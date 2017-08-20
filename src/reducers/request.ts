import {
  SET_REQUEST,
  SET_SUCCESS,
  SET_FAILURE
} from '../constants'
import { IRequestState, IRequestActions } from '../models'

const initialState = {
  isFetching: false,
  error: false
}

export default function (state: IRequestState = initialState, action: IRequestActions) {
  switch (action.type) {
    case SET_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case SET_SUCCESS:
    return {
      ...state,
      isFetching: false
    }
    case SET_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: true,
      message: action.message
    }
    default:
      return state
  }
}