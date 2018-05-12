import * as types from '../constants/actionTypes.js'

//this is where things get a little gnarly.
//every action needs to return an object to the reducer, (the action is accessible to the reducer through the dispatch())
//the action's return object comes with an ActionType case statement (for the sake of the reducer's case statement), and
//a payload- the data that will update the store.

//Async Action
//With Async redux activity, your action returns a function that resolves to a dispatched object
//that has the async data. Here, getNasaDataAction is a function that returns the result of the promise that fetches
//the nasa data. This fulfilled promise result is dispatched to the reducer after being passed to the payLoadForReducerFunction to be
//organized into the standard object with type and payload (newNasaData).
export const asyncAction = () => {
  return dispatch => {
    const fetchedPromise = fetch(URL)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonResponse) {
        return jsonResponse;
      });

    function payloadForReducer(jsonResponse) {
      return { type: types.FIRST_REDUCER, payload: jsonResponse  }
    }

    return fetchedPromise.then(
      response => dispatch(payloadForReducer(response)),
    );
  }
};

//Sync Action
//Sync Action is much simpler- return the standard object that comes with the type property
// (for the reducer's case statement),
//and the payload that will be used to update the store.
export const syncAction = () => {
  return {type: types.FIRST_REDUCER, payload: 'something'}
}



