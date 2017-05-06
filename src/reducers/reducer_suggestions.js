import { FETCH_SUGGESTIONS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_SUGGESTIONS:
    return action.channels;
  }
  return state;
}
