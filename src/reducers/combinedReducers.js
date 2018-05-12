import { combineReducers } from 'redux';
import firstReducer from './firstReducer.js'


// combine reducers
const reducers = combineReducers({
	// we only have a single reducer, but if we had others we could combine them here,
  //by mapping them to a key.
  firstReducer: firstReducer
});


export default reducers;