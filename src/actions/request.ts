import {
  SET_REQUEST,
  SET_SUCCESS,
  SET_FAILURE
} from '../constants'

export interface IRequest {
  type: any
}
export interface IFailure {
  type: any,
  message: any
}

export function starsRequest(): IRequest {
  return {
    type: SET_REQUEST
  };
}

export function starsSuccess(): IRequest {
  return {
    type: SET_SUCCESS
  };
}

export function starsFailure(message: any): IFailure {
  return {
    type: SET_FAILURE,
    message
  };
}