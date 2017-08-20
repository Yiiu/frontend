export interface IRequestState {
  isFetching: boolean
  error: boolean
  message?: any
}

export interface IRequestActions {
  type: string
  message?: any
}