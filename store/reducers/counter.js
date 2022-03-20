import * as ACTION_TYPES from '../actions/action-types';

const iState = {
  number: 0
}

const counter = (state=iState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.INC_NUM:
      return {
        ...state,
        number: state.number + payload
      }
    case ACTION_TYPES.DEC_NUM:
      return {
        ...state,
        number: state.number - payload
      }
    default: return state;
  }
}

export default counter;