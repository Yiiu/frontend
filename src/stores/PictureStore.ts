import axios from 'util/axios'
import { IPictureInfo } from 'models/picture'

export class PictureStore {
  getPictureList = async () => {
    let { data } = await axios.get('/api/picture')
    return data as IPictureInfo[]
  }
}