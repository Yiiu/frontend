export interface IUserAction {
  type: string
  payload?: {
    info?: object
  }
}

export interface IUserInfo {
  _id: string
  username: string
  photos: number
  location?: any
  website?: any
  following: number
  followers: number
  like: number
  avatar: string
  description: string
  nickname: string
}

export interface IUserState {
  isSignIn: boolean
  signInTime: string | null
  userInfo: IUserInfo | null
}