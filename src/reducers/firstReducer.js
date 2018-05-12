const initialState = {


}

//The action passed into our reducer comes from the dispatch.
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      //we don't every want to mutate the state directly, so we use the spread operator to make a copy
      //and update the properties that matter.
      return { ...state, }
    default:
      return state;
  }
};




export default firstReducer;



