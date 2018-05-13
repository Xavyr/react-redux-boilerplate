import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers  from './reducers/combinedReducers.js';


//the store, enhanced with thunk middleware to allow for async action in redux.
const store = createStore(
	reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);


export default store;