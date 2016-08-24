import { combineReducers } from 'redux';
import collectData from './reducer_collect_data';

const rootReducer = combineReducers({
  collectData: collectData
});

export default rootReducer;
