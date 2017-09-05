import {
  SET_PHOTO_DETAIL,
  SET_PHOTO_LIST
} from '../constants'
import { IPhotoState, IActions } from '../models'

const initialState = {
  photoDetail: null,
  photoList: null
}

export default function (state: IPhotoState = initialState, action: IActions) {
  switch (action.type) {
    case SET_PHOTO_DETAIL:
      return {
        ...state,
        photoDetail: action.payload.detail
      }
    case SET_PHOTO_LIST:
      return {
        ...state,
        photoList: action.payload.list
      }
    default:
      return state
  }
}