import { HAS_ERRORED } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case HAS_ERRORED:
    console.log('Error received:', action.msg);
    return action.msg;
  }
  return state;
}
