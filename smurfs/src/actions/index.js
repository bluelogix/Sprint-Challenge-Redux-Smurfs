/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const SMURF_START = 'SMURF_START';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';


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

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURF_START });
  axios.get('http://localhost:3333/smurfs')
  .then(res => dispatch({ type: SMURF_SUCCESS, payload: res.data }))
  .catch(err => dispatch({ type: SMURF_FAILURE, payload: err }))
}


export const addSmurf = smurfAdd => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios.post('http://localhost:3333/smurfs', smurfAdd)
  .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
  .catch(err => dispatch({ type: ADD_FAILURE, payload: err}))
}


export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios.delete(`http://localhost:3333/smurfs/${id}`)
 .then(res => dispatch({ type: DELETE_SUCCESS, payload: res.data }))
 .catch(err => dispatch({ type: DELETE_FAILURE, payload: err }))
};
