import {RECENT_DATA} from '../actions/index';
import {ALLTIME_DATA} from '../actions/index';

const initialState = {data: [], dataType: false}
export default function(state = initialState, action) {
  switch (action.type){
    case RECENT_DATA:
      return Object.assign({}, state, {data: action.payload.data, dataType: "Recent" })
    case ALLTIME_DATA:
      return Object.assign({}, state, {data: action.payload.data, dataType: "Alltime" })
  }
  return state
}
