const initialState = {
  syncData: false,
  asyncData: false,

}

//The action passed into our reducer comes from the dispatch.
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SYNC_ACTION':
      return {
        ...state,
        syncData: action.payload
      }
    case 'ASYNC_ACTION':
      return {
        ...state,
        asyncData: action.payload
      }
    default:
      return state;
  }
};




export default firstReducer;



