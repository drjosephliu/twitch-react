import { FETCH_USER } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USER:
    console.log('Request received', action.payload);
  }

  return state;
}
