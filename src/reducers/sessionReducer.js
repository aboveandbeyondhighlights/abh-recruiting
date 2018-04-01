import LOG_IN_SUCCESS from '../actions/actionTypes';
import initalState from './initialState';

export default function sessionReducer(state = initalState, action) {
  switch(action.type) {
    case LOG_IN_SUCCESS:
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
