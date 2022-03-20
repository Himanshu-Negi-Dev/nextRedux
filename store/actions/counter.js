import * as ACTION_TYPES from '../actions/action-types';

export const incNumber = () =>{
  return {
    type: ACTION_TYPES.INC_NUM,
    payload: 1
  }
}

export const decNumber = () =>{
  return {
    type: ACTION_TYPES.DEC_NUM,
    payload: 1
  }
}