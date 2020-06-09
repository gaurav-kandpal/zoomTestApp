import { combineReducers } from 'redux';

import AuthReducer from './Reducers/Auth';
import UserReducer from './Reducers/User';

const rootReducer = combineReducers({ AuthReducer, UserReducer });

export default rootReducer;