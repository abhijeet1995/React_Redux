import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth'
import postReducer from './postReducer'
export default combineReducers({
    alert,
    auth,
    postReducer
});