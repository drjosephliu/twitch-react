import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import HasErroredReducer from './reducer_has_errored';

const rootReducer = combineReducers({
  users: UsersReducer,
  error: HasErroredReducer
});

export default rootReducer;
