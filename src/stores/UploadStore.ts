// import { action, observable } from 'mobx'
import axios from 'util/axios'

export class UploadStore {
  fetchUploadPhoto = async (photo: any) => {
    let param = new FormData()
    param.append('photo', photo)
    let config = {
      headers: {'Content-Type': 'multipart/form-data'}
    }
    let { data } = await axios.post('/api/upload', param, config)
    console.log(data)
    return data
  }
}