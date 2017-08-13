import {
  SET_PHOTO_DETAIL
} from '../constants'
import { IPhotoState, IActions } from '../models'

const initialState = {
  photoDetail: null
}

export default function (state: IPhotoState = initialState, action: IActions) {
  switch (action.type) {
    case SET_PHOTO_DETAIL:
      return {
        ...state,
        photoDetail: action.payload.detail
      }
    default:
      return state
  }
}