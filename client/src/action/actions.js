import * as types from '../constants/actionTypes.js'

export const asyncAction = (currValue) => {
  return dispatch => {
    console.log(String(currValue) + ' => ' + String(!currValue) + ' in 3, 2, 1...');
    return setTimeout(function () {
      return dispatch({ type: types.ASYNC_ACTION, payload: !currValue })
    }, 3000);
  }
};

export const syncAction = (currValue) => {
  return { type: types.SYNC_ACTION, payload: !currValue }
}



