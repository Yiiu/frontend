import axios from 'util/axios'
import { IPhotoInfo } from 'models'

import {
  SET_PHOTO_DETAIL
} from '../constants'

export function setPhotoDetail (detail: IPhotoInfo) {
  return {
    type: SET_PHOTO_DETAIL,
    payload: {
      detail
    }
  }
}

export function loadPhotoListRemote () {
  return () =>
    axios.get('/api/photos')
      .then((list: any) => {
        return list
      })
}
export function loadPhotoDetailRemote (photoId: string) {
  return (dispatch: any) =>
    axios.get(`/api/photos/${photoId}`)
      .then((detail: any) => {
        dispatch(setPhotoDetail(detail))
        return detail
      })
}