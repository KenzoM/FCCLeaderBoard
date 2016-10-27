import axios from 'axios'

export const RECENT_DATA = 'RECENT_DATA';
export const ALLTIME_DATA = 'ALLTIME_DATA';

export function recentData(){

  const request = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  return {
    type: RECENT_DATA,
    payload: request
  };
}
export function allTimeData(){
  const request = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  return {
    type: ALLTIME_DATA,
    payload: request
  };
}
