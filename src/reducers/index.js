import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import HasErroredReducer from './reducer_has_errored';
import SelectedUserReducer from './reducer_selected_user';

const rootReducer = combineReducers({
  users: UsersReducer,
  error: HasErroredReducer,
  selectedUser: SelectedUserReducer
});

export default rootReducer;
