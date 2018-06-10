import { IUserInfo } from './user'

export interface IPictureInfo {
  _id: string;
  created_at: Date
  updated_at: Date
  location: any
  description: string
  info: string
  exif: any
  key: string
  user: IUserInfo
  views: number
  likes: number
  size: number
  mimetype: string
  width: number
  height: number
}