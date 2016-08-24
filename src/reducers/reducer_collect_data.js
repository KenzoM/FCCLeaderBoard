import {RECENT_DATA} from '../actions/index';
import {ALLTIME_DATA} from '../actions/index';
export default function(state = [], action) {
  switch (action.type){
    case RECENT_DATA:
      return action.payload.data
    case ALLTIME_DATA:
      return action.payload.data
  }
  return state
}
