import { HAS_ERRORED } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case HAS_ERRORED:
    return action.msg;
  }
  return state;
}
