import LOG_IN_SUCCESS  from './actionTypes';
import sessionApi from '../api/SessionApi';

export function loginSuccess() {
  return { type: LOG_IN_SUCCESS }
}
