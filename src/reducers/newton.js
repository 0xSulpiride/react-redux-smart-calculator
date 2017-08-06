import * as actionTypes from '../actions';
const initialState = {
  type: actionTypes.SIMPLIFY,
  payload: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIMPLIFY:
    case actionTypes.FACTOR:
    case actionTypes.DERIVE:
    case actionTypes.INTEGRATE:
    case actionTypes.COS:
    case actionTypes.SIN:
    case actionTypes.TANGENT:
    case actionTypes.ARCCOS:
    case actionTypes.ARCSIN:
    case actionTypes.ARCTAN:
    case actionTypes.ABS:
    case actionTypes.LOGARITHM:
      return {
        type: action.type,
        payload: action.payload
      }
    default: return state;
  }
}