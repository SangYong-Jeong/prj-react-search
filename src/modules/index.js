import { combineReducers } from 'redux';
import pager from './pager';
import ajax from './ajax';

const rootReducer = combineReducers({
  pager,
  ajax,
});

export default rootReducer;
