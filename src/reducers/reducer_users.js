import { FETCH_USER, REMOVE_USER } from '../actions/index';

export default function(state = [], action) {

  switch(action.type) {
    case FETCH_USER:
    return [action.payload, ...state];

    case REMOVE_USER:
    return state.filter(user => {
      return user != action.user;
    });
  }
  return state;
}
