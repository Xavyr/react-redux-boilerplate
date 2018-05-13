import * as types from '../constants/actionTypes.js'

export const asyncAction = () => {
  return dispatch => {
    console.log('false => true in 3, 2, 1...');
    return setTimeout(function(){
      return dispatch({ type: types.ASYNC_ACTION, payload: true  })
    }, 3000);
  }
};

export const syncAction = () => {
  return {type: types.SYNC_ACTION, payload: true}
}



