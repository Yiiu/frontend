import { IUserInfo } from './user'
export interface IPhotoInfo {
  _id: string
  links: string
  username: string
  user: IUserInfo
  created_at: string
  tags: Array<any>
  like: number
  height: number,
  width: number,
  __v: number,
  is_like: boolean
}

export interface IPhotoState {
  photoDetail: IPhotoInfo | null
}