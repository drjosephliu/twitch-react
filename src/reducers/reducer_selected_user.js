import { SELECTED_USER } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case SELECTED_USER:
    console.log('Selected user:', action.user);
    return action.user;
  }
  return state;
}
