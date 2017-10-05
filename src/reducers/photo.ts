import {
  SET_PHOTO_DETAIL,
  SET_PHOTO_LIST,
  SET_PHOTO_LIKE
} from '../constants'
import { IPhotoState, IActions, IPhotoInfo } from '../models'

const initialState = {
  photoDetail: null,
  photoList: undefined
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
    case SET_PHOTO_LIKE:
    const { photoList } = state;
      const { detail } = action.payload;
      if (!photoList) {
        return;
      }
      let newList = photoList.map((photo: IPhotoInfo) => {
        if (photo._id === detail._id) {
          return detail;
        } else {
          return photo
        }
      })
      return {
        ...state,
        photoList: newList
      }
    default:
      return state
  }
}