import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import HasErroredReducer from './reducer_has_errored';

const rootReducer = combineReducers({
  user: UserReducer,
  error: HasErroredReducer
});

export default rootReducer;
