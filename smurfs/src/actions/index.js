import Axios from 'axios';

export const ADDING = 'ADDING';
export const UPDATING = 'UPDATING';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const DELETING = 'DELETING';
export const ERROR = 'ERROR';

const baseUrl = 'http://localhost:3333/smurfs';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCHING})
  Axios.get(baseUrl)
    .then( res => {
      debugger
    })
    .catch( err => {
      debugger
    })
}