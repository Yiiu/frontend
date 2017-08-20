import { combineReducers } from 'redux'
import user from './user'
import photo from './photo'
import request from './request'

export default combineReducers({
  user,
  photo,
  request
})