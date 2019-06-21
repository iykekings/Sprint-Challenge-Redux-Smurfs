import * as types from "../actions";


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SUCCESS:
      return {
        error: null,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
      }
    case types.FETCHING:
      return { ...state, fetchingSmurfs: true}
    case types.ADDING:
      return { ...state, addingSmurf: true}
    case types.UPDATING:
      return { ...state, updatingSmurf: true}
    case types.DELETING:
      return { ...state, deletingSmurf: true}
    case types.ERROR:
      return { ...state, error: action.payload}
    default:
      return state
  }
}

export default smurfsReducer;