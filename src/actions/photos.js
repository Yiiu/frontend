import axios from 'util/axios'

export const SET_PHOTO_LIST = 'photos/SET_PHOTO_LIST'

export function setPhotoList (list) {
  return {
    type: SET_PHOTO_LIST,
    list
  }
}

export function uploadPhotoRemote (file) {
  const formdata = new FormData()
  formdata.append('image', file)
  return () => axios.post('/api/photos', formdata, {
    headers: {
      'Content-Type': 'multiple/form-data'
    }
  })
}

export function loadPhotoListRemote () {
  return dispatch =>
    axios.get('/api/photos')
      .then(list => {
        dispatch(setPhotoList(list))
        return list
      })
}
