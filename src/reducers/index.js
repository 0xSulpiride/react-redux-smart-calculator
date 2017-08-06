import { combineReducers } from 'redux';
import newton from './newton';
import spinner from './spinner';

export default combineReducers({
  newton,
  spinner
})