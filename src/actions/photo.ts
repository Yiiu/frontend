import axios from 'util/axios'
import { IPhotoInfo } from 'models'

import {
  SET_PHOTO_DETAIL,
  SET_PHOTO_LIST
} from '../constants'
import {
  starsRequest,
  starsSuccess,
  starsFailure
} from './request'

export function setPhotoDetail (detail: IPhotoInfo) {
  return {
    type: SET_PHOTO_DETAIL,
    payload: {
      detail
    }
  }
}
export function setPhotoList (list: [IPhotoInfo]) {
  return {
    type: SET_PHOTO_LIST,
    payload: {
      list
    }
  }
}

export function uploadPhotoRemote (file: any, data: any) {
  const photo = new FormData();
  photo.append('photo', file)
  if (data) {
    photo.append('info', JSON.stringify(data))
  }
  return () => 
    axios.post('/api/photos', photo)
      .then(() => {
        console.log(1)
      })
}

export function loadPhotoListRemote () {
  return (dispatch: any) => {
    dispatch(starsRequest());
    return axios.get('/api/photos')
      .then((list: any) => {
        dispatch(starsSuccess())
        dispatch(setPhotoList(list))
        return list
      })
      .catch(err => {
        dispatch(starsFailure(err))
      })
  }
}
export function loadPhotoDetailRemote (photoId: string) {
  return (dispatch: any) => {
    dispatch(starsRequest());
    return axios.get(`/api/photos/${photoId}`)
      .then((detail: any) => {
        dispatch(starsSuccess())
        dispatch(setPhotoDetail(detail))
        return detail
      })
      .catch(err => {
        dispatch(starsFailure(err))
      })
  }
}

export function loadUserPhotosRemote (userId: string) {
  return (dispatch: any) => {
    dispatch(starsRequest());
    return axios.get(`/api/users/${userId}/photos`)
      .then((list: any) => {
        dispatch(starsSuccess())
        dispatch(setPhotoList(list))
        return list
      })
      .catch(err => {
        dispatch(starsFailure(err))
      })
  }
}