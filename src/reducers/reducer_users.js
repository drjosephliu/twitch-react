import { FETCH_USER, SHOW_ONLINE, SHOW_OFFLINE, SHOW_ALL } from '../actions/index';

const INITIAL_STATE = { show: [], hide: [] };

export default function(state = [], action) {
  // const online =  state.filter(user => {
  //   return user.streamData.stream;
  // });
  //
  // const offline =  state.filter(user => {
  //   return !user.streamData.stream;
  // });

  switch(action.type) {


    case FETCH_USER:
    return [action.payload, ...state];

    // case SHOW_ONLINE:
    //
    // return {show: online, ...state };
    //
    // case SHOW_OFFLINE:
    //
    // return { show: offline, ...state };
    //
    // case SHOW_ALL:
    // return state;

  }
  return state;
}
