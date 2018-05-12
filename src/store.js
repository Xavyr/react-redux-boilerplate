import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers  from './reducers/firstReducer.js';


//the store, enhanced with thunk middleware to allow for async action in redux.
const store = createStore(
	reducers,
  applyMiddleware(thunk)
);


export default store;