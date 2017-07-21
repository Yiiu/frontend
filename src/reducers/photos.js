import {
  SET_PHOTO_LIST
} from 'actions/photos'

const initialState = {
  photoList: [],
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
