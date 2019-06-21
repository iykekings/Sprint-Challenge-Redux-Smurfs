import { SUCCESS, FETCHING, ADDING, UPDATING, DELETING, ERROR } from "../actions";


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
    case SUCCESS:
      return {
        error: null,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
      }
    case FETCHING:
      return { ...state, fetchingSmurfs: true}
    case ADDING:
      return { ...state, addingSmurf: true}
    case UPDATING:
      return { ...state, updatingSmurf: true}
    case DELETING:
      return { ...state, deletingSmurf: true}
    case ERROR:
      return { ...state, error: action.payload}
    default:
      return state
  }
}

export default smurfsReducer;