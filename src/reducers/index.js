import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import HasErroredReducer from './reducer_has_errored';
import SelectedUserReducer from './reducer_selected_user';
import InitialUsersReducer from './reducer_initial_users';
import SuggestionsReducer from './reducer_suggestions';

const rootReducer = combineReducers({
  users: UsersReducer,
  error: HasErroredReducer,
  selectedUser: SelectedUserReducer,
  initialUsers: InitialUsersReducer,
  suggestions: SuggestionsReducer
});

export default rootReducer;
