import axios from 'util/axios'

export function loadPhotoListRemote () {
  return () =>
    axios.get('/api/photos')
      .then((list: any) => {
        return list
      })
}