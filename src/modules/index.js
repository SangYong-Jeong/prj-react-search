import { combineReducers } from 'redux';
import pager from './pager';
import ajax from './ajax';
import modal from './modal';

const rootReducer = combineReducers({
  pager,
  ajax,
  modal,
});

export default rootReducer;
