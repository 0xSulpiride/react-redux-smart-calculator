import * as spinner from './spinner';
import curry from 'lodash/fp/curry';
import * as actionTypes from '../actions';

const createUrl = (operation, expression) => `https://newton.now.sh/${operation.toLowerCase()}/${expression}`;

export const calculate = (operation, exp) => {
  return dispatch => {
    dispatch(spinner.showSpinner());
    fetch(createUrl(operation, exp))
      .then(data => data.json())
      .then(json => {
        if (json.result.split(' ')[1]) {
          dispatch({
            type: operation.toUpperCase(),
            payload: json.result.split(' ').join('*')
          });
        } else {
          dispatch({
            type: operation.toUpperCase(),
            payload: json.result
          })
        }
        dispatch(spinner.hideSpinner());
      })
  }
}

const _ = curry.placeholder;

export const simplify = (exp) => curry(calculate)(_, exp)(actionTypes.SIMPLIFY)
export const factor = (exp) => curry(calculate)(_, exp)(actionTypes.FACTOR)
export const derive = (exp) => curry(calculate)(_, exp)(actionTypes.DERIVE)
export const integram = (exp) => curry(calculate)(_, exp)(actionTypes.INTEGRATE)
export const cos = (exp) => curry(calculate)(_, exp)(actionTypes.COS)
export const sin = (exp) => curry(calculate)(_, exp)(actionTypes.SIN)
export const tangent = (exp) => curry(calculate)(_, exp)(actionTypes.TANGENT)
export const arccos = (exp) => curry(calculate)(_, exp)(actionTypes.ARCCOS)
export const arcsin = (exp) => curry(calculate)(_, exp)(actionTypes.ARCSIN)
export const arctan = (exp) => curry(calculate)(_, exp)(actionTypes.ARCTAN)
export const abs = (exp) => curry(calculate)(_, exp)(actionTypes.ABS)
export const logarithm = (exp) => curry(calculate)(_, exp)(actionTypes.LOGARITHM)