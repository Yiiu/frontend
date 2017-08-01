import {
  SET_PHOTO_LIST
} from 'actions/photos'

import { IPhoto } from 'models/Photo';
const initialState: IPhoto = {
  count: 0,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PHOTO_LIST:
      return {
        ...state,
        photoList: action.list
      }
    default:
      return state
  }
}
