import {RECENT_DATA} from '../actions/index';
import {ALLTIME_DATA} from '../actions/index';
export default function(state = [], action) {
  switch (action.type){
    case RECENT_DATA:
      console.log(action.payload.data, 'this is recent data')
      return action.payload.data
    case ALLTIME_DATA:
      console.log(action.payload.data, 'this is alltime data baby')
      return action.payload.data
  }
  return state
}
