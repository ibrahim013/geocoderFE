import { combineReducers } from "redux";
import { errorReducer } from './errorReducer';
import { locationReducer } from './locationReducer';

export default combineReducers({
 errors: errorReducer,
 location: locationReducer
});