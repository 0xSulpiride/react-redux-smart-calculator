import * as actionTypes from '../actions';

export function showSpinner() {
  return {
    type: actionTypes.SHOW_SPINNER
  }
}

export function hideSpinner() {
  return {
    type: actionTypes.HIDE_SPINNER
  }
}