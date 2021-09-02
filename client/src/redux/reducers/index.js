import { combineReducers } from 'redux';

import authReducer from './authReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import requestReducer from './requestReducer';

export default combineReducers({
  auth: authReducer,
  alerts: alertReducer,
  user: userReducer,
  request : requestReducer
});
